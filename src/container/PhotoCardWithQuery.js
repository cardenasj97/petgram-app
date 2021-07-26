import { gql } from '@apollo/client';
import { Query } from '@apollo/client/react/components/Query';
import React from 'react';
import { PhotoCard } from '../components/PhotoCard';

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id: ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`;

const renderProp = ({ loading, error, data }) => { 
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error</p>;

	const { photo = {} } = data;
	return <PhotoCard {...photo} />;
};

export const PhotoCardWithQuery = ({ id }) => (
	<Query query={GET_SINGLE_PHOTO} variables={{ id }}>
		{renderProp}
	</Query>
);