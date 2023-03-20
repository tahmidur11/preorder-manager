import { Card, Page } from "@shopify/polaris";
import React from "react";
import ProductsList from "../components/ProductsList/ProductsList";

export default function Products() {
    return (
        <Page>
            <ProductsList />
            <Card title="Credit card" sectioned></Card>
        </Page>
    );
}
