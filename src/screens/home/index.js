import React from 'react';
import Layout from '../../components/Layout';

export default function Home({ setPermation, permation }) {
  return (
    <>
      <Layout links={['admin', 'employer', 'talent']} permation={permation}>
        <h2>Home Page</h2>
        <button onClick={() => setPermation('admin')}>Admin</button>
        <button onClick={() => setPermation('employer')}>Employer</button>
        <button onClick={() => setPermation('talent')}>Talent</button>
      </Layout>
    </>
  );
}