import React from 'react';
import { gql } from '@apollo/client';
import { ListOfFavs } from '../components/ListOfFavs';
import { Query } from '@apollo/client/react/components/Query';

const GET_FAVS = gql`
    query getFavs {
        favs {
            id
            categoryId
            src
            likes
            userId
        }
    }
`;

const renderProp = ({ loading, error, data }) => {
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;

	const { favs } = data;

	return <ListOfFavs favs={favs} />;
};

export const FavsWithQuery = () => {
	return (
		<Query query={GET_FAVS} fetchPolicy="network-only">
			{renderProp}
		</Query>
	);
};