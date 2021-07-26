import React, { Fragment } from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Error, Input, Form, Title, Span, SmallText } from './styles';
import { SubmitButton } from '../SubmitButton';

export const UserForm = ({ error, disabled, onSubmit, title, formType = false, onClick }) => {
	const email = useInputValue('');
	const password = useInputValue('');

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit({ email: email.value, password: password.value });
	};

	return (
		<Fragment>
			<Form disabled={disabled} onSubmit={handleSubmit}>
				<Title>{title}</Title>
				<Input disabled={disabled} placeholder='Email' {...email} />
				<Input disabled={disabled} placeholder='Password' type='password' {...password} />
				<SubmitButton disabled={disabled}>{title}</SubmitButton>
				{formType && <SmallText>Don't have an account? <Span bold={true} onClick={onClick}>Sign up.</Span></SmallText>}
				{!formType && <SmallText><Span onClick={onClick}>Go back</Span></SmallText>}
				{error && <Error>{error}</Error>}
			</Form>
		</Fragment>
	);
};