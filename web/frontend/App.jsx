import { Page } from "@shopify/polaris";
import { BrowserRouter } from "react-router-dom";

import {
    AppBridgeProvider,
    PolarisProvider,
    QueryProvider,
} from "./components";
import Routes from "./Routes";

export default function App() {
    // Any .tsx or .jsx files in /pages will become a route
    // See documentation for <Routes /> for more info
    const pages = import.meta.globEager(
        "./pages/**/!(*.test.[jt]sx)*.([jt]sx)"
    );

    const id = 123;
    const menu = [
        { content: "Dashboard", url: "/dashboard" },
        { content: "Settings", url: "/settings" },
        { content: "Products", url: "/products" },
        { content: "Badge", url: "/badge" },
    ];
    // console.log(menu,'secondary')
    // const [isLoading, setIsLoading] = useState(true);
    // const { data, isError, error } = useAppQuery({
    //   url: "/api/products",
    //   reactQueryOptions: {
    //     onSuccess: (response) => {
    //       setIsLoading(false);
    //     }
    //   },
    // });
    return (
        <PolarisProvider>
            <BrowserRouter>
                <AppBridgeProvider>
                    <QueryProvider>
                        {/* <Navbar/> */}
                        {/* <Button
  accessibilityLabel="Terms and conditions (opens a new window)"
  url="/dashboard"
>
  Dashbord
</Button> */}
                        <Page secondaryActions={menu} divider fullWidth>
                            <Routes
                                secondaryActions={menu}
                                pages={pages}
                                pdData={menu}
                            />
                        </Page>
                    </QueryProvider>
                </AppBridgeProvider>
            </BrowserRouter>
        </PolarisProvider>
    );
}
