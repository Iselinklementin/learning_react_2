import styled from "styled-components";
import * as yup from "yup";
import { Container, Form, Button, FormControl, FormText, FormGroup } from "react-bootstrap";
import { MAX_AGE, MINIMUM_NAME_CHARACTERS, MIN_AGE, URL_REGEX, DEFAULT_VALUES } from "../constant/registration";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";
import Alertbox from "../layout/AlertBox";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";

const StyledForm = styled(Form)`
  max-width: 500px;
  margin: auto;
`;

const StyledFormGroup = styled(FormGroup)`
  margin: 1rem 0;
`;

const StyledInput = styled(FormControl)`
  padding: 0.5rem;
  border-radius: 4px;
  margin: 0.5rem 0;
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 58px;
  border: none;
  transition: background-color 0.2s ease;

  &:hover {
    cursor: pointer;
  }
`;

const StyledText = styled(FormText)`
  font-style: italic;
`;

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name")
    .min(MINIMUM_NAME_CHARACTERS, `Your name must be at least ${MINIMUM_NAME_CHARACTERS} characters`),
  age: yup
    .number()
    .required("Please enter your age")
    .integer()
    .typeError("Must be a number")
    .min(MIN_AGE, `Minimum age is ${MIN_AGE}`)
    .max(MAX_AGE, `Maximum age is ${MAX_AGE}`),
  website: yup.string().required("Please enter a website").matches(URL_REGEX, "Please enter a correct website url"),
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    setSubmitted(true);
    reset(DEFAULT_VALUES);

    const para = document.querySelector("p");
    const button = document.querySelector("button");
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
      input.disabled = true;
    });
    button.disabled = true;
    para.classList.add("d-none");
  }

  // console.log(errors);

  return (
    <Container className="mt-5">
      <Heading content="Contact us" className="text-center" />
      <Paragraph content="Please fill in form" className="text-center" />

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {submitted && (
          <Alertbox type="success" className="text-center my-5" content="Success! We will answer you shortly." />
        )}
        <StyledFormGroup>
          <StyledInput placeholder="Name" {...register("name")} />
          <StyledText className="text-muted">Name must be at least {MINIMUM_NAME_CHARACTERS} characters.</StyledText>
          {errors.name && <Alertbox type="danger" content={errors.name.message} />}
        </StyledFormGroup>

        <StyledFormGroup>
          <StyledInput placeholder="Age" {...register("age")} />
          <StyledText className="text-muted">Age must be between 10 and 20.</StyledText>
          {errors.age && <Alertbox type="danger" content={errors.age.message} />}
        </StyledFormGroup>

        <StyledFormGroup>
          <StyledInput placeholder="Website url" {...register("website")} />
          <StyledText className="text-muted">Please enter a website.</StyledText>
          {errors.website && <Alertbox type="danger" content={errors.website.message} />}
        </StyledFormGroup>

        <StyledButton type="submit" className="mt-4" variant="info">
          Submit
        </StyledButton>
      </StyledForm>
    </Container>
  );
}

export default Contact;
