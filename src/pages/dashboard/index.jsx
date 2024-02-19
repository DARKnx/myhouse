import React, { useEffect, useState } from 'react';
import { Container, Box, FiltersContainer} from './styles';

import formatCurrency from '../../services/formatCurrency';
import addHttpsLink from '../../services/addHttpsLink';
import categoryAction from '../../actions/category';
import Dropdown from '../../components/dropdown';
import Loading from '../../components/loading';
import Layout from '../../components/layout';
import cartAction from '../../actions/cart';
import userAction from '../../actions/user';

const Dashboard = () => {
  const [filterData, setFilterData] = useState({data: null, filters: {category:"", author:"", priority:"", status:""}});
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
    setFilterData({...filterData, data: cartResponse})
    setCategory(categoryResponse);
    setCart(cartResponse);
    setUser(userResponse);
  }

  const updatFilters = () => {
    if (filterData.filters.priority) setFilterData({...filterData, data: cart.filter(x => x.priority == filterData.filters.priority)});
    if (filterData.filters.category) setFilterData({...filterData, data: cart.filter(x => x.category == filterData.filters.category)});
    if (filterData.filters.author) setFilterData({...filterData, data: cart.filter(x => x.author == filterData.filters.author)});
    if (filterData.filters.status) setFilterData({...filterData, data: cart.filter(x => x.status == filterData.filters.status)});
  }

  useEffect(() => {

    const params = new URLSearchParams(window.location.search);
    const reloadParam = params.get('reload');

    if (reloadParam) {
      params.delete('reload');
      const newUrl = `${window.location.pathname}`;
      window.history.replaceState({}, document.title, newUrl);
      window.location.reload();
    }
    getData()
  }, []);

  useEffect(() => {
    updatFilters();
  }, [filterData.filters.author, filterData.filters.category, filterData.filters.status, filterData.filters.priority]);

  if (!cart) return <Loading layout/>

  return (
    <Layout>
      <FiltersContainer>
          <Dropdown options={user.map(x => x.name)} placeholder='responsavel' value={filterData.filters.author} setValue={(x) => setFilterData({...filterData, filters: { ...filterData.filters, author: x}})}/>
          <Dropdown options={category.map(x => x.name)} placeholder='categoria' value={filterData.filters.category} setValue={(x) => setFilterData({...filterData, filters: { ...filterData.filters, category: x}})}/>
          <Dropdown options={['não comprado', 'comprado', 'em analise', 'já temos']} placeholder='status' value={filterData.filters.status} setValue={(x) => setFilterData({...filterData, filters: { ...filterData.filters, status: x}})}/>
          <Dropdown options={['1', '2', '3']} placeholder='prioridade' value={filterData.filters.priority} setValue={(x) => setFilterData({...filterData, filters: { ...filterData.filters, priority: x}})}/>
      </FiltersContainer>
    </Layout>
  );
}

export default Dashboard;
