import { Provider, TitleBar } from '@shopify/app-bridge-react';
import React from 'react';
export function AppNav() {
  const primaryAction = {content: 'Foo', url: '/foo'};
  const secondaryActions = [{content: 'Bar', url: '/bar', loading: true}];
  const actionGroups = [{title: 'Baz', actions: [{content: 'Baz', url: '/baz'}]}];

  return (
    <Provider >
      <TitleBar
        title="Hello world!"
        primaryAction={primaryAction}
        secondaryActions={secondaryActions}
        actionGroups={actionGroups}
      />
    </Provider>
  );
}