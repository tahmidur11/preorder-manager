import { Card, Page, PageActions } from "@shopify/polaris";
import React from "react";
import { useSearchParams } from "react-router-dom";
import "../assets/css_file/pdDetailsPage.css";
import PreOrderSettingCard from "../components/PreOrderSettings/PreOrderSettingCard";

export default function PdDetailsPage() {
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("id"), 'searchParams.get("id");');

    return (
        <Page breadcrumbs={[{ content: "Settings", url: "/products" }]}>
            <Card title="Product details page" sectioned>
                <div className="product-banner">
                    <div className="bnr-img">
                        <img
                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt=""
                            srcSet=""
                            width="100%"
                        />
                    </div>
                    <div className="bnr-title">
                        <h1>
                            2-IN-1 Extending Computer Desk Workstation Table
                            with Storage Shelf & Rolling Castors, Natural
                        </h1>
                    </div>
                </div>
            </Card>
            <PreOrderSettingCard />

            <PageActions
                primaryAction={{
                    content: "Save",
                }}
                secondaryActions={[
                    {
                        content: "Cancel",
                    },
                ]}
            />
        </Page>
    );
}
