import { Card, Heading, Layout, Page, TextContainer } from "@shopify/polaris";

export default function Dashboard() {
  return (
    <Page
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
    //   title="Dashboard"
      >
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Heading>Dashboard</Heading>
            <TextContainer>
              <p>Body</p>
            </TextContainer>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
