import React, { lazy, Suspense } from 'react';

const LazyDetailsForm = lazy(() => import('./DetailsForm'));

const DetailsForm = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDetailsForm {...props} />
  </Suspense>
);

export default DetailsForm;
