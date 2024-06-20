import React, { lazy, Suspense } from 'react';

const LazyDetailsFormLeftPanel = lazy(() => import('./DetailsFormLeftPanel'));

const DetailsFormLeftPanel = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDetailsFormLeftPanel {...props} />
  </Suspense>
);

export default DetailsFormLeftPanel;
