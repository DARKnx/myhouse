import React from 'react';
import { Container } from './styles';

import Navinfo from '../../components/navinfo';
import Layout from '../../components/layout';

const Categorys = () => {

  return (
    <Layout>
      <Navinfo name={"Categorias"} subname={"categorias"} buttonName={"adicionar"} size={1}/>

    </Layout>
  );
}

export default Categorys;
