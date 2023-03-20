import {
    Button,
    Card,
    Filters,
    ResourceItem,
    ResourceList,
    TextField,
    Thumbnail,
} from "@shopify/polaris";
import { useCallback, useState } from "react";
import { useAppQuery } from "../../hooks";

function ProductsList() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [sortValue, setSortValue] = useState("DATE_MODIFIED_DESC");
    const [taggedWith, setTaggedWith] = useState("VIP");
    const [queryValue, setQueryValue] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    const handleTaggedWithChange = useCallback(
        (value) => setTaggedWith(value),
        []
    );
    const handleQueryValueChange = useCallback(
        (value) => setQueryValue(value),
        []
    );
    const handleTaggedWithRemove = useCallback(() => setTaggedWith(null), []);
    const handleQueryValueRemove = useCallback(() => setQueryValue(null), []);
    const handleClearAll = useCallback(() => {
        handleTaggedWithRemove();
        handleQueryValueRemove();
    }, [handleQueryValueRemove, handleTaggedWithRemove]);

    const resourceName = {
        singular: "customer",
        plural: "customers",
    };

    const promotedBulkActions = [
        {
            content: "Edit customers",
            onAction: () => console.log("Todo: implement bulk edit"),
        },
    ];

    const bulkActions = [
        {
            content: "Add tags",
            onAction: () => console.log("Todo: implement bulk add tags"),
        },
        {
            content: "Remove tags",
            onAction: () => console.log("Todo: implement bulk remove tags"),
        },
        {
            content: "Delete customers",
            onAction: () => console.log("Todo: implement bulk delete"),
        },
    ];

    const filters = [
        {
            key: "taggedWith3",
            label: "Tagged with",
            filter: (
                <TextField
                    label="Tagged with"
                    value={taggedWith}
                    onChange={handleTaggedWithChange}
                    autoComplete="off"
                    labelHidden
                />
            ),
            shortcut: true,
        },
    ];

    const appliedFilters = !isEmpty(taggedWith)
        ? [
              {
                  key: "taggedWith3",
                  label: disambiguateLabel("taggedWith3", taggedWith),
                  onRemove: handleTaggedWithRemove,
              },
          ]
        : [];

    const filterControl = (
        <Filters
            queryValue={queryValue}
            filters={filters}
            appliedFilters={appliedFilters}
            onQueryChange={handleQueryValueChange}
            onQueryClear={handleQueryValueRemove}
            onClearAll={handleClearAll}
        >
            <div style={{ paddingLeft: "8px" }}>
                <Button onClick={() => console.log("New filter saved")}>
                    Save
                </Button>
            </div>
        </Filters>
    );

    const { data, isError } = useAppQuery({
        url: "/api/products",
        reactQueryOptions: {
            onSuccess: (response) => {
                setIsLoading(false);
            },
        },
    });
    console.log(data, "data");
    function renderItem(item) {
        // console.log(item, "item");
        const {
            id,
            url,
            title,
            location,
            created_at,
            image: { src },
        } = item;
        const media = <Thumbnail source={src} alt={title} />;

        return (
            <ResourceItem
                id={id}
                url={`/pdDetailsPage?id=${id}`}
                media={media}
                accessibilityLabel={`View details for ${name}`}
                verticalAlignment={"center"}
            >
                <p variant="bodyMd" fontWeight="bold" as="h3">
                    {title}
                </p>
            </ResourceItem>
        );
    }

    return (
        <Card>
            <ResourceList
                resourceName={resourceName}
                items={data?.products || []}
                renderItem={renderItem}
                //renderItem={(f) => f}
                loading={isLoading}
                selectedItems={selectedItems}
                onSelectionChange={setSelectedItems}
                promotedBulkActions={promotedBulkActions}
                bulkActions={bulkActions}
                sortValue={sortValue}
                headings={[
                    { title: "Name" },
                    { title: "Location" },
                    { title: "Order count" },
                    { title: "Amount spent" },
                ]}
                showHeader={true}
            />
        </Card>
    );

    function disambiguateLabel(key, value) {
        switch (key) {
            case "taggedWith3":
                return `Tagged with ${value}`;
            default:
                return value;
        }
    }
    // test comment
    function isEmpty(value) {
        if (Array.isArray(value)) {
            return value.length === 0;
        } else {
            return value === "" || value == null;
        }
    }
}

export default ProductsList;
