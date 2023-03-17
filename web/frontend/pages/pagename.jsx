import { Card, Page, Layout, TextContainer, Heading } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { ProductsCard } from "../components/ProductsCard";
import ProductsList from "../components/ProductsList";

export default function PageName() {
  return (
    <Page>
      <TitleBar
        title="Settings"
        primaryAction={{
          content: "Primary action",
          onAction: () => console.log("Primary action"),
        }}
        secondaryActions={[
          {
            content: "Secondary action",
            onAction: () => console.log("Secondary action"),
          },
        ]}
      />
      <Layout>
        <Layout.Section>
          <ProductsCard/>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
