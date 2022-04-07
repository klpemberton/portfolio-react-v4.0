import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import PageContent from '../src/components/PageContent';

interface Errors {
  name?: string | null;
  email?: string | null;
  message: string | null;
}

const Heading = styled.h1`
  margin: 10px 0;
  font-size: 34px;
  border-bottom: 3px solid black;

  span {
    border-bottom: 10px solid ${(props) => props.theme.colors.contact};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

const InputRow = styled.div``;

const TextAreaRow = styled.div``;

const Row = styled.div`
  display: block;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop.minWidth}px) {
    display: flex;
  }

  ${InputRow} {
    display: block;
    flex-direction: column;
    width: 100%;

    &:nth-child(2) {
      margin-top: 40px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop.minWidth}px) {
      display: flex;
      width: 48%;

      &:nth-child(2) {
        margin-top: 0;
      }
    }
  }

  ${TextAreaRow} {
    display: block;
    flex-direction: column;
    width: 100%;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop.minWidth}px) {
      display: flex;
    }
  }
`;

const Paragraph = styled.p<{ fail?: boolean }>`
  margin-top: 40px;
  padding: 20px;
  color: ${(props) => (props.fail ? props.theme.colors.error : props.theme.colors.success)};
  background: black;
`;

const ErrorMessage = styled.div`
  color: ${(props) => props.theme.colors.error};
`;

const Button = styled.button`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop.minWidth}px) {
    width: 50%;
  }
`;

const ContactPage = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isNameTouched, setIsNameTouched] = useState<boolean>(false);
  const [isEmailTouched, setIsEmailTouched] = useState<boolean>(false);
  const [isMessageTouched, setIsMessageTouched] = useState<boolean>(false);
  const [isValidForm, setIsValidForm] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({
    name: null,
    email: null,
    message: null,
  });
  const [submitSuccessful, setSubmitSuccessful] = useState(false);
  const [submitFailed, setSubmitFailed] = useState(false);

  useEffect(() => {
    if (errors?.name === '' && errors?.email === '' && errors.message === '') {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [errors]);

  const resetState = useCallback(() => {
    setFormValues({
      name: '',
      email: '',
      message: '',
    });
    setIsNameTouched(false);
    setIsEmailTouched(false);
    setIsMessageTouched(false);
    setIsValidForm(false);
    setErrors({ name: null, email: null, message: null });
  }, []);

  const formHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidForm) {
      return;
    }

    setIsValidForm(false);
    const message = encodeURIComponent(formValues.message.trim());
    const dataString =
      'name=' + formValues.name + '&email=' + formValues.email + '&message=' + message;

    try {
      const response = await fetch('https://kristinepemberton.com/processForm.php', {
        method: 'POST',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
        body: dataString,
      });

      if (response) {
        setSubmitSuccessful(true);
        resetState();
      }
    } catch (e) {
      setSubmitFailed(true);
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
        setFormValues({ ...formValues, name: value });

        if (!value || value.length < 2) {
          setErrors({ ...errors, name: 'Need a longer name, yo' });
          setIsValidForm(false);
        } else {
          setErrors({ ...errors, name: '' });
        }
      } else if (name === 'email') {
        setIsEmailTouched(true);
        setFormValues({ ...formValues, email: value });

        if (!value || !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
          setErrors({
            ...errors,
            email: "I can't get back to you if you don't give me a valid email ;)",
          });
          setIsValidForm(false);
        } else {
          setErrors({ ...errors, email: '' });
        }
      } else {
        setIsMessageTouched(true);
        setFormValues({ ...formValues, message: value });
        if (value.length <= 4) {
          setErrors({
            ...errors,
            message: 'Gimme a few more deets plz',
          });
          setIsValidForm(false);
        } else {
          setErrors({ ...errors, message: '' });
        }
      }
    },
    [errors, submitFailed, submitSuccessful],
  );

  return (
    <PageContent pageTheme="contact">
      <Heading>
        <span>Contact</span>
      </Heading>

      <div>
        {submitSuccessful && <Paragraph>Thanks for reaching out! I&apos;ll be in touch.</Paragraph>}

        {submitFailed && (
          <Paragraph fail>
            /ded -- something broke. You can reach out to me on Linkedin or Github instead
          </Paragraph>
        )}

        <Form onSubmit={(event) => formHandler(event)}>
          <Row>
            <InputRow>
              <input
                id="name"
                name="name"
                placeholder="Your Name"
                value={formValues.name}
                onChange={handleChange}
              />
              {errors.name && isNameTouched && <ErrorMessage>{errors.name}</ErrorMessage>}
            </InputRow>

            <InputRow>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formValues.email}
                onChange={handleChange}
              />
              {errors.email && isEmailTouched && <ErrorMessage>{errors.email}</ErrorMessage>}
            </InputRow>
          </Row>

          <Row>
            <TextAreaRow>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formValues.message}
                onChange={handleChange}
              />
              {errors.message && isMessageTouched && <ErrorMessage>{errors.message}</ErrorMessage>}
            </TextAreaRow>
          </Row>

          <Row>
            <Button type="submit" disabled={!isValidForm}>
              Send
            </Button>
          </Row>
        </Form>
      </div>
    </PageContent>
  );
};

export default ContactPage;
