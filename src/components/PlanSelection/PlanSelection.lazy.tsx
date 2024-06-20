import React, { lazy, Suspense } from 'react';

const LazyPlanSelection = lazy(() => import('./PlanSelection'));

const PlanSelection = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPlanSelection {...props} />
  </Suspense>
);

export default PlanSelection;
