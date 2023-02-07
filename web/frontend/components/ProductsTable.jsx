import {
  Card,
  Filters, Icon, IndexTable, Select, Stack, TextField, Thumbnail, useIndexResourceState
} from '@shopify/polaris';
import { DeleteMajor, EditMajor } from '@shopify/polaris-icons';
import { useCallback, useState } from 'react';
  
export function ProductsTable() {
    const customers = [
      {
        id: '3417',
        url: 'customers/341',
        name: 'Mae Jemison',
        location: 'Decatur, USA',
        orders: 20,
        amountSpent: '$2,400',
      },
      {
        id: '2567',
        url: 'customers/256',
        name: 'Ellen Ochoa',
        location: 'Los Angeles, USA',
        orders: 30,
        amountSpent: '$140',
      },
    ];
    const resourceName = {
      singular: 'customer',
      plural: 'customers',
    };
  
    const {selectedResources, allResourcesSelected, handleSelectionChange} =
      useIndexResourceState(customers);
    const [taggedWith, setTaggedWith] = useState('VIP');
    const [queryValue, setQueryValue] = useState('');
    const [sortValue, setSortValue] = useState('today');
  
    const handleTaggedWithChange = useCallback(
      (value) => setTaggedWith(value),
      [],
    );
    const handleTaggedWithRemove = useCallback(() => setTaggedWith(null), []);
    const handleQueryValueRemove = useCallback(() => setQueryValue(null), []);
    const handleClearAll = useCallback(() => {
      handleTaggedWithRemove();
      handleQueryValueRemove();
    }, [handleQueryValueRemove, handleTaggedWithRemove]);
    const handleSortChange = useCallback((value) => setSortValue(value), []);
  
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
        key: 'taggedWith',
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
            key: 'taggedWith',
            label: disambiguateLabel('taggedWith', taggedWith),
            onRemove: handleTaggedWithRemove,
          },
        ]
      : [];
  
    const sortOptions = [
      {label: 'Today', value: 'today'},
      {label: 'Yesterday', value: 'yesterday'},
      {label: 'Last 7 days', value: 'lastWeek'},
    ];
  
    const handleAction = useCallback((e,id) =>{
      console.log(id);
    },[])
    
    const rowMarkup = customers.map(
      ({id, name, location, orders, amountSpent}, index) => (
        <IndexTable.Row
          id={id}
          key={id}
          selected={selectedResources.includes(id)}
          position={index}
          url={'/dashboard'}
        >
          <IndexTable.Cell>
            <Stack alignment="center">
              <Thumbnail source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
              alt="Black choker necklace"
              />
              <div>Black choker necklace</div>
            </Stack>
          </IndexTable.Cell>
          <IndexTable.Cell>{location}</IndexTable.Cell>
          <IndexTable.Cell><p>20 in stock</p></IndexTable.Cell>
          <IndexTable.Cell>
            <Stack>
              <Icon source={EditMajor} color="base" />
              <Icon source={DeleteMajor} color="base" />
            </Stack>
          </IndexTable.Cell>
        </IndexTable.Row>
      ),
    );
  
    const handleSelectionChangeCustom = (selectionType, isSelecting, selection) => {
      console.log(selectionType, isSelecting, selection)
      console.log(handleSelectionChange)
      return handleSelectionChange(selectionType, isSelecting, selection)
    }
    return (
      <Card>
        <div style={{padding: '16px', display: 'flex'}}>
          <div style={{flex: 1}}>
            <Filters
              queryValue={queryValue}
              filters={filters}
              appliedFilters={appliedFilters}
              onQueryChange={setQueryValue}
              onQueryClear={handleQueryValueRemove}
              onClearAll={handleClearAll}
            />
          </div>
          <div style={{paddingLeft: '0.25rem'}}>
            <Select
              labelInline
              label="Sort by"
              options={sortOptions}
              value={sortValue}
              onChange={handleSortChange}
            />
          </div>
        </div>
        <IndexTable
          resourceName={resourceName}
          itemCount={customers.length}
          selectedItemsCount={
            allResourcesSelected ? 'All' : selectedResources.length
          }
          onSelectionChange={handleSelectionChangeCustom}
          hasMoreItems
          bulkActions={bulkActions}
          // promotedBulkActions={promotedBulkActions}
          lastColumnSticky
          headings={[
            {title: 'Product'},
            {title: 'Status'},
            {title: 'Inventory'},
            {title: 'Action'}
          ]}
        >
          {rowMarkup}
        </IndexTable>
      </Card>
    );
  
    function disambiguateLabel(key, value) {
      switch (key) {
        case 'taggedWith':
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