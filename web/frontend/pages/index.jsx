import { Loading, useNavigate } from "@shopify/app-bridge-react";
import {
  Card,
  EmptyState,
  Layout,
  Page,
  SkeletonBodyText
} from "@shopify/polaris";
import { useState } from "react";

export default function HomePage() {

  const [prod, setProd] = useState({});
  console.log('my shopify apppp',prod)
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then( res => res.json())
  //   .then( data => console.log('data',data));
  // },[])
  
  /*
    Add an App Bridge useNavigate hook to set up the navigate function.
    This function modifies the top-level browser URL so that you can
    navigate within the embedded app and keep the browser in sync on reload.
  */
  const navigate = useNavigate();

  /*
    These are mock values. Setting these values lets you preview the loading markup and the empty state.
  */
  const isLoading = true;
  const isRefetching = false;
  const QRCodes = [];

  /* loadingMarkup uses the loading component from AppBridge and components from Polaris  */
  const loadingMarkup = isLoading ? (
    <Card sectioned>
      <Loading />
      <SkeletonBodyText />
    </Card>
  ) : null;

  /* Use Polaris Card and EmptyState components to define the contents of the empty state */
  const emptyStateMarkup =
    !isLoading && !QRCodes?.length ? (
      <Card sectioned>
        <EmptyState
          heading="Preordr listing of your store"
          /* This button will take the user to a Create a QR code page */
          action={{
            content: "Preorder Products",
            onAction: () => navigate("/products/new"),
          }}
          image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        >
          <p>
            Please select product to make them preorder.
          </p>
        </EmptyState>
      </Card>
    ) : null;

  /*
    Use Polaris Page and TitleBar components to create the page layout,
    and include the empty state contents set above.
  */
  return (
    <Page>
      {/* <TitleBar
        title="All products"
        primaryAction={{
          content: "Create Button",
          onAction: () => navigate("/products/new"),
        }}
      /> */}
      <Layout>
        <Layout.Section>
          {loadingMarkup}
          {emptyStateMarkup}
        </Layout.Section>
      </Layout>
    </Page>
  );
}
