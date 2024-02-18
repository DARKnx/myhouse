import React from 'react';

import { Container } from './styles';

const Input = ({placeholder, value, setValue, padding="15px 30px", color="", width="100%"}) => {

return (
			<Container placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} padding={padding} color={color} width={width}/>
	)

}

export default Input

