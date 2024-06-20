import React, { lazy, Suspense } from 'react';

const LazyCompleteForm = lazy(() => import('./CompleteForm'));

const CompleteForm = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCompleteForm {...props} />
  </Suspense>
);

export default CompleteForm;
