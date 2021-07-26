import { gql } from '@apollo/client';
import { Mutation } from '@apollo/client/react/components/Mutation';

import React from 'react';

const LIKE_PHOTO = gql`
    mutation likePhoto($input: LikePhoto!) {
        likePhoto(input: $input) {
            id,
            liked,
            likes
        }
    }
`;

export const ToggleLikeMutation = ({ children }) => {
	return <Mutation mutation={LIKE_PHOTO}>{children}</Mutation>;
};