import DropdownComponent from 'react-dropdown';
import 'react-dropdown/style.css';
import React from 'react';

import { Container } from './styles';

const Dropdown = ({options=[], value, setValue}) => {	  
	  
	  return (
		<Container>
			<DropdownComponent placeholderClassName="placeholder" controlClassName={'control'} className='root' menuClassName='menu' options={options} onChange={(x) => setValue(x.value)} value={value} placeholder="Selecione uma opção"/>
		</Container>
	)

}

export default Dropdown

