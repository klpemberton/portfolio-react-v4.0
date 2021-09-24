import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import PageContent from '../src/components/PageContent';
import { mobile } from '../src/styles/theme';

const Heading = styled.h1`
	margin: 10px 0;
	font-size: 34px;
	border-bottom: 3px solid black;

	span {
		border-bottom: 10px solid ${(props) => props.theme.colors.contact};
	}
`;

const Content = styled.div``;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 20px;
`;

const InputRow = styled.div``;

const TextAreaRow = styled.div``;

const Row = styled.div`
	display: flex;
	${mobile`display: block;`}
	flex-direction: row;
	justify-content: space-between;
	margin: 20px 0;

	${InputRow} {
		display: flex;
		flex-direction: column;
		width: 48%;
		${mobile`
      display: block;
      width: 100%;

      &:nth-child(2) {
        margin-top: 40px;
      }
    `}
	}

	${TextAreaRow} {
		display: flex;
		${mobile`display: block;`}
		flex-direction: column;
		width: 100%;
	}
`;

const Paragraph = styled.p`
	margin-top: 40px;
	padding: 20px;
	color: ${(props) =>
		props.fail ? props.theme.colors.error : props.theme.colors.success};
	background: black;
`;

const ErrorMessage = styled.div`
	color: ${(props) => props.theme.colors.error};
`;

const Button = styled.button`
	${mobile`width: 100%;`}
`;

export default function ContactPage() {
	const [nameValue, setNameValue] = useState('');
	const [isNameTouched, setIsNameTouched] = useState(false);
	const [emailValue, setEmailValue] = useState('');
	const [isEmailTouched, setIsEmailTouched] = useState(false);
	const [messageValue, setMessageValue] = useState('');
	const [isMessageTouched, setIsMessageTouched] = useState(false);
	const [isValidForm, setIsValidForm] = useState(false);
	const [errors, setErrors] = useState({});
	const [submitSuccessful, setSubmitSuccessful] = useState(false);
	const [submitFailed, setSubmitFailed] = useState(false);

	useEffect(() => {
		if (
			errors.name === '' &&
			errors.email === '' &&
			errors.message === ''
		) {
			setIsValidForm(true);
		} else {
			setIsValidForm(false);
		}
	}, [errors.name, errors.email, errors.message]);

	const resetState = useCallback(() => {
		setNameValue('');
		setIsNameTouched(false);
		setEmailValue('');
		setIsEmailTouched(false);
		setMessageValue('');
		setIsMessageTouched(false);
		setIsValidForm(false);
		setErrors({});
	}, []);

	const formHandler = (event) => {
		event.preventDefault();

		if (!isValidForm) {
			return null;
		} else {
			setIsValidForm(false);
			const message = encodeURIComponent(messageValue.trim());
			const dataString =
				'name=' +
				nameValue +
				'&email=' +
				emailValue +
				'&message=' +
				message;

			fetch('https://kristinepemberton.com/processForm.php', {
				method: 'POST',
				headers: {
					'Content-type': 'application/x-www-form-urlencoded'
				},
				body: dataString
			})
				.then((response) => {
					return response.text();
				})
				.then((response) => {
					setSubmitSuccessful(true);
					resetState();
				})
				.catch((error) => {
					setSubmitFailed(true);
					resetState();
				});
		}
	};

	const handleChange = useCallback(
		(event) => {
			const name = event.target.name;
			const value = event.target.value;

			if (submitSuccessful) {
				setSubmitSuccessful(false);
			}

			if (submitFailed) {
				setSubmitFailed(false);
			}

			if (name === 'name') {
				setIsNameTouched(true);
				setNameValue(value);

				if (!value || value.length < 2) {
					setErrors({ ...errors, name: 'Need a longer name, yo' });
					setIsValidForm(false);
				} else {
					setErrors({ ...errors, name: '' });
				}
			} else if (name === 'email') {
				setIsEmailTouched(true);
				setEmailValue(value);

				if (
					!value ||
					!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
				) {
					setErrors({
						...errors,
						email:
							"I can't get back to you if you don't give me a valid email ;)"
					});
					setIsValidForm(false);
				} else {
					setErrors({ ...errors, email: '' });
				}
			} else {
				setIsMessageTouched(true);
				setMessageValue(value);
				if (value.length <= 4) {
					setErrors({
						...errors,
						message: 'Gimme a few more deets plz'
					});
					setIsValidForm(false);
				} else {
					setErrors({ ...errors, message: '' });
				}
			}
		},
		[errors, submitFailed, submitSuccessful]
	);

	return (
		<PageContent pageTheme="contact">
			<Heading>
				<span>Contact</span>
			</Heading>

			<Content>
				{submitSuccessful && (
					<Paragraph>
						Thanks for reaching out! I'll be in touch.
					</Paragraph>
				)}

				{submitFailed && (
					<Paragraph fail>
						/ded -- something broke. You can reach out to me on
						Linkedin or Github instead
					</Paragraph>
				)}

				<Form onSubmit={formHandler}>
					<Row>
						<InputRow>
							<input
								id="name"
								name="name"
								placeholder="Your Name"
								value={nameValue}
								onChange={handleChange}
							/>
							{errors.name && isNameTouched && (
								<ErrorMessage>{errors.name}</ErrorMessage>
							)}
						</InputRow>

						<InputRow>
							<input
								id="email"
								type="email"
								name="email"
								placeholder="Your Email"
								value={emailValue}
								onChange={handleChange}
							/>
							{errors.email && isEmailTouched && (
								<ErrorMessage>{errors.email}</ErrorMessage>
							)}
						</InputRow>
					</Row>

					<Row>
						<TextAreaRow>
							<textarea
								id="message"
								name="message"
								placeholder="Your Message"
								value={messageValue}
								onChange={handleChange}
							/>
							{errors.message && isMessageTouched && (
								<ErrorMessage>{errors.message}</ErrorMessage>
							)}
						</TextAreaRow>
					</Row>

					<Row>
						<Button type="submit" disabled={!isValidForm}>
							Send
						</Button>
					</Row>
				</Form>
			</Content>
		</PageContent>
	);
}
