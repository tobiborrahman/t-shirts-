import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Tshirts = () => {
	const tshirts = useLoaderData();
	return (
		<div>
			<h2>T-shirt : {tshirts.length}</h2>
		</div>
	);
};

export default Tshirts;
