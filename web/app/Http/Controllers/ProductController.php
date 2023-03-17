<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Shopify\Auth\OAuth;
use Shopify\Auth\Session as AuthSession;
use Shopify\Clients\HttpHeaders;
use Shopify\Clients\Rest;
use Shopify\Clients\PageInfo;
use Shopify\Context;
use Shopify\Exception\InvalidWebhookException;
use Shopify\Utils;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('shopify.auth');
    }

    public function productList(Request $request)
    {
        /** @var AuthSession */
        $session = $request->get('shopifySession'); // Provided by the shopify.auth middleware, guaranteed to be active

        $client = new Rest($session->getShop(), $session->getAccessToken());
        $result = $client->get('products');

        return response($result->getDecodedBody());

    }

    public function getSingleProduct(Request $request, $productId)
    {
    /** @var AuthSession */
    $session = $request->get('shopifySession'); // Provided by the shopify.auth middleware, guaranteed to be active

    $client = new Rest($session->getShop(), $session->getAccessToken());
    $result = $client->get(path: "products/{$productId}", query: ['fields' => 'id,title,image,handle,variants']);

    $product = $result->getDecodedBody();
    $allVariants = [];

    foreach ($product['product']['variants'] as $variant) {
        $allVariants[] = [
            'variant_id' => $variant['id'],
            'variant_title' => $variant['title']
        ];
    }

    $data = [
        'id' => $product['product']['id'],
        'title' => $product['product']['title'],
        'handle' => $product['product']['handle'],
        'image' => $product['product']['image']['src'],
        'variants' => $allVariants
    ];


     return response()->json($data);
    //return response($result->getDecodedBody());
    }
    
}
