import React, { useEffect, useState }from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from 'react-toastify';

import { Container, Box, TextContainer, IconContainer } from './styles';
import Loading from '../../components/loading';
import Navinfo from '../../components/navinfo';
import Layout from '../../components/layout';
import cartAction from '../../actions/cart';
import userAction from '../../actions/user';
import categoryAction from '../../actions/category';
import CartEditor from './editor';

const Cart = () => {
  const [category, setCategory] = useState(null);
  const [editor, setEditor] = useState(null);
  const [cart, setCart] = useState(null);
  const [user, setUser] = useState(null);

  const getData = async () => {
    const [cartResponse, categoryResponse, userResponse] = await Promise.all([
      cartAction.get(),
      categoryAction.get(),
      userAction.get()
    ]);
    if (cartResponse.error || categoryResponse.error || userResponse.error) return toast.error("erro ao carregar informações")
    setCategory(categoryResponse);
    setCart(cartResponse);
    setUser(userResponse);
  }

  const deleteCart = async (id) => {
    const send = async () => {
      const response =  await cartAction.remove({id});
      if (response.error) throw error;
      return getData();
    }
    toast.promise(send(), {
      pending: `apagando item`,
      success: `item apagado com sucesso`,
      error: `erro ao apagar item`
    })
  }

  useEffect(() => {
    getData()
  }, [])

  if (!cart) return <Loading layout/>
  if (editor != null) return <CartEditor data={cart} id={editor != true ? editor : null} onBack={() => setEditor(null) & getData()} category={category} user={user}/> 

  return (
    <Layout>
      <Navinfo name={"Carrinho"} subname={"items"} buttonName={"adicionar"} size={cart.length || 0} onButton={() => setEditor(true)}/>
      <Container>
          {
            cart.map((item, index) => {
              return (
                <Box key={index}>
                  <TextContainer  onClick={() => setEditor(item._id)}>
                    <h3>{item.name}</h3>
                    <p>{item.description ? item.description : "sem descrição."}</p>
                  </TextContainer>
                  <IconContainer> 
                    <AiOutlineDelete class="icon" size={30} onClick={() => deleteCart(item._id)}/>
                  </IconContainer>
                </Box>
              )
            })
          }
      </Container>
    </Layout>
  );
}

export default Cart;