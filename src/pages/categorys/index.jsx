import React, { useEffect, useState }from 'react';
import { toast } from 'react-toastify';


import Loading from '../../components/loading';
import Navinfo from '../../components/navinfo';
import category from '../../actions/category';
import Layout from '../../components/layout';
import CategoryEditor from './editor';
import { Container, Box } from './styles';

const Categorys = () => {
  const [categorys, setCategorys] = useState(null);
  const [editor, setEditor] = useState(null);

  const getCategorys = async () => {
    const response = await category.get();
    if (response.error){
        return toast.error("Erro ao carregar categorias.");
    }
    setCategorys(response);
  }

  useEffect(() => {
    getCategorys()
  }, [])

  if (!categorys) return <Loading layout/>
  if (editor != null) return <CategoryEditor data={categorys} id={editor != true ? editor : null} onBack={() => setEditor(null)}/> 

  return (
    <Layout>
      <Navinfo name={"Categorias"} subname={"categorias"} buttonName={"adicionar"} size={categorys.lenght || 0} onButton={() => setEditor(true)}/>
      <Container>
          {
            categorys.map((item, index) => {
              return (
                <Box>
                  <h3>{item.name}</h3>
                  <p>{item.description ? item.description : "sem descrição."}</p>
                </Box>
              )
            })
          }
      </Container>
    </Layout>
  );
}

export default Categorys;
