import React from 'react';
import { ListOfCategories } from '../components/ListOfCategories/index';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards/index';
import { Layout } from '../components/Layout';

export const HomePage = ({ categoryId }) => {
	return (
		<Layout title='Your photo pet app' subtitle='With Petgram you can find fantastic domestic animal photos'>
			<ListOfCategories />
			<ListOfPhotoCards categoryId={categoryId} />
		</Layout>
	);
};

export default React.memo(HomePage, (prevProps, props) => {
	return prevProps.categoryId === props.categoryId;
});