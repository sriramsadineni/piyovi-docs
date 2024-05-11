import React from 'react';
import Layout from '@theme/Layout';
import { ApiReferenceReact } from '@scalar/api-reference-react'

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <ApiReferenceReact
      configuration={{
        spec: {
          url: 'https://cdn.jsdelivr.net/npm/@scalar/galaxy/dist/latest.yaml',
        },
      }}
    />
    </Layout>
  );
}