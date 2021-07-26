import React from 'react';
import { FavsWithQuery } from '../container/GetFavorites';
import { Layout } from '../components/Layout';

export default () => (
	<Layout title='Favorites' subtitle='You can find here your favorites'>
		<FavsWithQuery />
	</Layout>
);