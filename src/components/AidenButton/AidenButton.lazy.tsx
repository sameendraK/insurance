import React, { lazy, Suspense } from 'react';

const LazyAidenButton = lazy(() => import('./AidenButton'));

const AidenButton = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAidenButton data={{
      title: ''
    }} {...props} />
  </Suspense>
);

export default AidenButton;
