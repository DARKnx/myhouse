import React from 'react';
import { Container } from './styles';

import Navinfo from '../../components/navinfo';
import Layout from '../../components/layout';

const Cart = () => {

  return (
    <Layout>
      <Navinfo name={"carrinho"} subname={"items"} buttonName={"adicionar item"} size={1}/>

    </Layout>
  );
}

export default Cart;
