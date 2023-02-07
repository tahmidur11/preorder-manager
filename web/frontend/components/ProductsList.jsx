import {
  Button,
  Card, Filters, List, ResourceItem, ResourceList, TextField, Thumbnail
} from '@shopify/polaris';
import { useCallback, useState } from 'react';
import { useAppQuery } from "../hooks";

  function ProductsList() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [sortValue, setSortValue] = useState('DATE_MODIFIED_DESC');
    const [taggedWith, setTaggedWith] = useState('VIP');
    const [queryValue, setQueryValue] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

  
    const handleTaggedWithChange = useCallback(
      (value) => setTaggedWith(value),
      [],
    );
    const handleQueryValueChange = useCallback(
      (value) => setQueryValue(value),
      [],
    );
    const handleTaggedWithRemove = useCallback(() => setTaggedWith(null), []);
    const handleQueryValueRemove = useCallback(() => setQueryValue(null), []);
    const handleClearAll = useCallback(() => {
      handleTaggedWithRemove();
      handleQueryValueRemove();
    }, [handleQueryValueRemove, handleTaggedWithRemove]);
  
    const resourceName = {
      singular: 'customer',
      plural: 'customers',
    };
  
    const items = [
      {
        id: 112,
        url: 'customers/341',
        name: 'Mae Jemison',
        location: 'Decatur, USA',
        latestOrderUrl: 'orders/1456',
      },
      {
        id: 212,
        url: 'customers/256',
        name: 'Ellen Ochoa',
        location: 'Los Angeles, USA',
        latestOrderUrl: 'orders/1457',
      },
    ];
  
    const promotedBulkActions = [
      {
        content: 'Edit customers',
        onAction: () => console.log('Todo: implement bulk edit'),
      },
    ];
  
    const bulkActions = [
      {
        content: 'Add tags',
        onAction: () => console.log('Todo: implement bulk add tags'),
      },
      {
        content: 'Remove tags',
        onAction: () => console.log('Todo: implement bulk remove tags'),
      },
      {
        content: 'Delete customers',
        onAction: () => console.log('Todo: implement bulk delete'),
      },
    ];
  
    const filters = [
      {
        key: 'taggedWith3',
        label: 'Tagged with',
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
            key: 'taggedWith3',
            label: disambiguateLabel('taggedWith3', taggedWith),
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
        <div style={{paddingLeft: '8px'}}>
          <Button onClick={() => console.log('New filter saved')}>Save</Button>
        </div>
      </Filters>
    );
  
//     const [allProduct, setAllProduct] = useState({})

//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/photos')
//         .then(res=>res.json())
//         .then(data => setAllProduct(data))
//     },[])
// console.log(allProduct,'allproduct')
const { data, isError, error } = useAppQuery({
    url: "/api/products",
    reactQueryOptions: {
      onSuccess: (response) => {
        setIsLoading(false);
      }
    },
  });
  // console.log("data",data)
// const allProduct = data.products;
// console.log(isLoading, 'isLoading', data.products)
// const renderItem3 = isLoading ? <Spinner accessibilityLabel="Spinner example" size="large" /> : data.products.map(({id, title, image: {src}} )=>{
//     console.log(id, 'allproduct', src);
    
//     <ResourceItem
//           id={id}
//           url={src}
//         //   media={media}
//           accessibilityLabel={`View details for ${name}`}
//         //   shortcutActions={shortcutActions}
//           persistActions
//         >
//           <p variant="bodyMd" fontWeight="bold" as="h3">
//             {title}
//           </p>
//           {/* <div>{location}</div> */}
//         </ResourceItem>
//  })


const openPdPage = (id,title,src,body_html) =>{
    console.log(id,title,src,body_html, 'pd id');
    const pdDetails = <Card
                    title="{title}"
                    secondaryFooterActions={[{content: 'Cancel shipment', destructive: true}]}
                    primaryFooterAction={{content: 'Add tracking number'}}
                    >
                    <Card.Section title="Items">
                    <List>
                        <List.Item>1 × Oasis Glass, 4-Pack</List.Item>
                    <List.Item content={body_html}></List.Item>
                    </List>
                    </Card.Section>
                    </Card>

}


function renderItem(item) {
  // console.log(item)
  const {id, url, title, location,created_at, image: {src}} = item;
  const media = <Thumbnail
  source={src}
  alt={title}
/>;
const num = 123
  return (
    <ResourceItem
      id={id}
      url={`/pdDetailsPage?id=${num}`}
      media={media}
      accessibilityLabel={`View details for ${name}`}
      verticalAlignment={'center'}
    >
      <p variant="bodyMd" fontWeight="bold" as="h3">
        {title}
      </p>
      <p variant="bodyMd" fontWeight="bold" as="h3">
        Status
      </p>
    </ResourceItem>
  );  

}



    return (
      <Card>
        <ResourceList
                    resourceName={resourceName}
                    items={data?.products||[]}
                    renderItem={renderItem}
                    //renderItem={(f) => f}
                    loading={isLoading}
                    selectedItems={selectedItems}
                    onSelectionChange={setSelectedItems}
                    promotedBulkActions={promotedBulkActions}
                    bulkActions={bulkActions}
                    sortValue={sortValue}
                    headings={[
                      {title: 'Name'},
                      {title: 'Location'},
                      {title: 'Order count'},
                      {title: 'Amount spent'},
                    ]}
                    showHeader={true}
                    />
                    
      </Card>
    );
    
 
    

    // function renderItem(item) {


    //   const {id, url, name, location, latestOrderUrl} = item;
      
    //   const media = <Avatar customer size="medium" name={name} />;
    //   const shortcutActions = latestOrderUrl
    //     ? [{content: 'View latest order', url: latestOrderUrl}]
    //     : null;
    //   return (
    //     <ResourceItem
    //       id={id}
    //       url={url}
    //       media={media}
    //       accessibilityLabel={`View details for ${name}`}
    //       shortcutActions={shortcutActions}
    //       persistActions
    //     >
    //       <p variant="bodyMd" fontWeight="bold" as="h3">
    //         {name}
    //       </p>
    //       <div>{location}</div>
    //     </ResourceItem>
    //   );
    // }
  
    function disambiguateLabel(key, value) {
      switch (key) {
        case 'taggedWith3':
          return `Tagged with ${value}`;
        default:
          return value;
      }
    }
  
    function isEmpty(value) {
      if (Array.isArray(value)) {
        return value.length === 0;
      } else {
        return value === '' || value == null;
      }
    }
  }

export default ProductsList;