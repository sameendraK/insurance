import React, { lazy, Suspense } from 'react';

const LazyNavigationPanel = lazy(() => import('./NavigationPanel'));

const NavigationPanel = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNavigationPanel {...props} />
  </Suspense>
);

export default NavigationPanel;
