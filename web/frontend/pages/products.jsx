import { Card, Page } from '@shopify/polaris';
import React from 'react';
import ProductsList from '../components/ProductsList';

export default function Products() {
  return (
    
    <Page
    // secondaryActions={props}
    // primaryAction={
    //     <Stack>
    //     <Button
    //       primary
    //       url="/dashboard"
    //     >
    //       Dashboard
    //     </Button>
    //     <Button
    //       primary
    //       url="/settings"
    //     >
    //       Settings
    //     </Button>
    //     <Button
    //       primary
    //       url="/products"
    //     >
    //       Products
    //     </Button>
    //     <Button
    //       primary
    //       url="/badge"
    //     >
    //       Badge
    //     </Button>
    //     </Stack>
    //   }
      // breadcrumbs={[{content: 'Settings', url: '/settings'}]}
      // title="Products"
      
    >
        {/* <TitleBar
        title="Settings"
        primaryAction={{
          content: "Primary action",
          onAction: () => console.log("Primary action from general page"),
        }}
        
      /> */}
      {/* <Link monochrome url="/pagename">
      fulfilling orders
    </Link> */}
    {/* <ProductsTable/> */}
      <ProductsList/>
      <Card title="Credit card" sectioned>
        {/* <ProductsCard/> */}
        
      </Card>
    </Page>
  );
}