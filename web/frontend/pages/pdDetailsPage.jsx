import { Card, Page } from '@shopify/polaris';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function PdDetailsPage() {
  
  let [searchParams, setSearchParams] = useSearchParams();

  function handleSubmit(event) {
    event.preventDefault();
    let params = serializeFormQuery(event.target);

    setSearchParams(params);
    searchParams.get("id");
  }
  console.log(searchParams.get("id"), 'searchParams.get("id");')
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
      breadcrumbs={[{content: 'Settings', url: '/products'}]}
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
    {/* <ProductsList/> */}
      <Card title="Product details page" sectioned>
        {/* <ProductsCard/> */}
        
      </Card>
    </Page>
  );
}