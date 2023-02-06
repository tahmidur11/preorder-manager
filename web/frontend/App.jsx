import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

import { Page } from "@shopify/polaris";
import {
  AppBridgeProvider, PolarisProvider, QueryProvider
} from "./components";

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");

  const menu = [
    {content: 'Dashboard', url: '/dashboard'},
    {content: 'Settings', url: '/settings'}, 
    {content: 'Products', url: '/products'}, 
    {content: 'Badge', url: '/badge'}, 
    {content: 'Foo', url: '/foo'}, 
    {content: 'Bar', url: '/bar'}, 
    {content: 'Foo', url: '/foo'}, 
    {content: 'sdj', url: '/foo'}
  ];
console.log(menu,'secondary')
  return (
    <PolarisProvider>
      <BrowserRouter>
        <AppBridgeProvider>
          <QueryProvider>
            {/* <NavigationMenu
              navigationLinks={[
                {
                  label: "Dashboard",
                  destination: "/dashboard",
                },
                {
                  label: "Settings",
                  destination: "/settings",
                },
                {
                  label: "Products",
                  destination: "/products",
                }
              ]}
            /> */}
            {/* <Navbar/> */}
            {/* <Button
  accessibilityLabel="Terms and conditions (opens a new window)"
  url="/dashboard"
>
  Dashbord
</Button> */}
            <Page secondaryActions={menu}>
              <Routes secondaryActions={menu} pages={pages} menu={menu}/>
            </Page>
          </QueryProvider>
        </AppBridgeProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
}
