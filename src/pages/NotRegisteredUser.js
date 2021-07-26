import React, { Fragment, useContext, useState } from 'react';
import { Context } from '../Context';
import { UserForm } from '../components/UserForm';
import { RegisterMutation } from '../container/RegisterMutation';
import { LoginMutation } from '../container/LoginMutation';

export const NotRegisteredUser = () => {
	const { activateAuth } = useContext(Context);
	const [showSignup, setShowSignup] = useState(false);

	const handleShowSignupFormClick = () => {
		setShowSignup(!showSignup);
	};

	return (
		<Fragment>
			{
				showSignup  && 
				<RegisterMutation>
					{
						(register, { loading, error }) => {
							const onSubmit = ({ email, password }) => {
								const input = { email, password };
								const variables = { input };
								register({ variables }).then(({ data })  => {
									const { signup } = data;
									activateAuth(signup);
								});
								
							};

							const errorMsg = error && 'User already exists or there is a problem.';

							return <UserForm disabled={loading} error={errorMsg} title='Sign up' onSubmit={onSubmit} onClick={handleShowSignupFormClick} />;
						}
					}
				</RegisterMutation>
			}

			{
				!showSignup &&
				<LoginMutation>
					{
						(login, { loading, error}) => {
							const onSubmit = ({ email, password }) => {
								const input = { email, password };
								const variables = { input };
								login({ variables }).then(({ data }) => {
									const { login } = data;
									activateAuth(login);
								});
							};

							const errorMsg = error && 'Password is incorrect or user does not exist.';

							return <UserForm disabled={loading} error={errorMsg} title='Sign in' onSubmit={onSubmit} formType={true} onClick={handleShowSignupFormClick} />;
						}
					}
				</LoginMutation>
			}

		</Fragment>
	);
};