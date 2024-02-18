import React, { useEffect, useState }from 'react';
import { Container, Box } from './styles';

import Layout from '../../../components/layout';
import Button from '../../../components/button';
import Input from '../../../components/input';

const CategoryEditor = ({categorys, id}) => {
    const [data, setData] = useState({name:"", description:""});

    const sendData = () => {

    }

    return (
        <Layout>
            <Container>
              <Box>
                <Input placeholder={"Nome"} value={data.name} setValue={(x) => setData({...data, name: x})}/>
                <Input placeholder={"Descrição"} value={data.description} setValue={(x) => setData({...data, description: x})}/>
                <Button name={id ? "ATUALIZAR" : "CRIAR "} onClick={sendData}/>
              </Box>
            </Container>
        </Layout>
      );
}

export default CategoryEditor;
