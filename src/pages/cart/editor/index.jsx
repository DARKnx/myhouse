import React, { useEffect, useState }from 'react';
import { toast } from 'react-toastify';

import { Container, Box, ButtonsContainer, LabelContainer, Label } from './styles';
import ColorRadio from '../../../components/colorRadio';
import Layout from '../../../components/layout';
import Button from '../../../components/button';
import Input from '../../../components/input';
import cart from '../../../actions/cart';
import Dropdown from '../../../components/dropdown';

const CartEditor = ({data, id, onBack}) => {
    const [values, setValues] = useState({name:"", description:"", priority: 1});

    const sendData = async () => {  
        const send = async () => {
          const response =  id ? await cart.update({data: values, id}) : await cart.create(values);
          if (response.error) throw error;
          return setTimeout(onBack, 500);
        }
        toast.promise(send(), {
          pending: `${id ? 'atualizando' : 'criando'} item`,
          success: `item ${id ? 'atualizada' : 'criada'} com sucesso`,
          error: `erro ao ${id ? 'atualizar' : 'criar'} item`
        })
    }

  if (id) useEffect(() =>  setValues({...data.find(x => x._id == id)}), []);

    return (
        <Layout>
            <Container>
              <Box>
                <Input placeholder={"Nome"} value={values.name} setValue={(x) => setValues({...values, name: x})}/>
                <Input placeholder={"Descrição"} value={values.description} setValue={(x) => setValues({...values, description: x})}/>
                <LabelContainer>
                  <Label>Nivel de prioridade</Label>
                </LabelContainer>
                  <ColorRadio value={values.priority} setValue={(x) => setValues({...values, priority: x})}/>
                  <Dropdown options={['1', '2']} value={'1'} setValue={(x) => console.log(x)}/>
                <ButtonsContainer>
                  <Button name={"CANCELAR"} color='error'  text='text' width="50%" onClick={onBack}/>
                  <Button name={id ? "ATUALIZAR" : "CRIAR"}  width="50%" onClick={sendData}/>
                </ButtonsContainer>
              </Box>
            </Container>
        </Layout>
      );
}

export default CartEditor;