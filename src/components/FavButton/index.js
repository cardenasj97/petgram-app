import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Button, Span } from './styles';
import PropTypes from 'prop-types';

export const FavButton = ({ liked, likes, onClick }) => {
	const Icon = liked ? MdFavorite : MdFavoriteBorder;

	return <Button onClick={onClick}>
		<Icon size='32px' /> <Span>{likes} likes</Span>
	</Button>;
};

FavButton.propTypes = {
	liked: PropTypes.bool,
	likes: PropTypes.number,
	onClick: PropTypes.func
};