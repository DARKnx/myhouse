import React, { useEffect, useState }from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from 'react-toastify';


import { Container, Box, TextContainer, IconContainer } from './styles';
import Loading from '../../components/loading';
import Navinfo from '../../components/navinfo';
import Layout from '../../components/layout';
import cartAction from '../../actions/cart';
import CartEditor from './editor';

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [editor, setEditor] = useState(null);

  const getCart = async () => {
    const response = await cartAction.get();
    if (response.error){
        return toast.error("Erro ao carregar carrinho.");
    }
    setCart(response);
  }

  const deleteCart = async (id) => {
    const send = async () => {
      const response =  await cartAction.remove({id});
      if (response.error) throw error;
      return getCart();
    }
    toast.promise(send(), {
      pending: `apagando item`,
      success: `item apagado com sucesso`,
      error: `erro ao apagar item`
    })
  }

  useEffect(() => {
    getCart()
  }, [])

  if (!cart) return <Loading layout/>
  if (editor != null) return <CartEditor data={cart} id={editor != true ? editor : null} onBack={() => setEditor(null) & getCart()}/> 

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
