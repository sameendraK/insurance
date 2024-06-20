import React, { lazy, Suspense } from 'react';

const LazyDetailsFormRightPanel = lazy(() => import('./DetailsFormRightPanel'));

const DetailsFormRightPanel = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDetailsFormRightPanel {...props} />
  </Suspense>
);

export default DetailsFormRightPanel;
