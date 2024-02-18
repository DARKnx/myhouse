import React, { useEffect } from 'react';
import { Container, Box } from './styles';

import Layout from '../../components/layout';

const Dashboard = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const reloadParam = params.get('reload');

    if (reloadParam) {
      params.delete('reload');
      const newUrl = `${window.location.pathname}`;
      window.history.replaceState({}, document.title, newUrl);
      window.location.reload();
    }
  }, []);

  return (
    <Layout>

    </Layout>
  );
}

export default Dashboard;
