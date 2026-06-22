import styled from "styled-components";
import Header from "../components/Header";
import { typography } from "../assets/css/typography";
import SharedTextField from "../components/TextField";
import { useEffect, useRef } from "react";
import SharedButton from "../components/SharedButton";

const LoginTemplate = ({
  idErrorMessage,
  passwordErrorMessage,
  onSubmit,
  onChange,
}: {
  idErrorMessage: string | null;
  passwordErrorMessage: string | null;
  onSubmit: (
    e: React.SubmitEvent,
    { email, password }: { email: string; password: string },
  ) => void;
  onChange: (type: "email" | "password") => void;
}) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.SubmitEvent) => {
    onSubmit(e, {
      email: emailRef.current?.value || "",
      password: passwordRef.current?.value || "",
    });
  };

  useEffect(() => {
    if (idErrorMessage !== null) {
      emailRef.current?.focus();
    } else if (passwordErrorMessage !== null) {
      passwordRef.current?.focus();
    }
  }, [idErrorMessage, passwordErrorMessage]);

  return (
    <>
      <Header />
      <ContentsContainer>
        <Title>회원 로그인</Title>
        <FormContainer onSubmit={handleSubmit}>
          <FormInputContainer>
            <SharedTextField
              placeholder="아이디(이메일)을 입력해 주세요"
              label="로그인"
              id={"email"}
              onChange={() => onChange("email")}
              isError={idErrorMessage !== null}
              ref={emailRef}
              helpMessage={idErrorMessage !== null ? idErrorMessage : undefined}
            />
            <SharedTextField
              placeholder="비밀번호를 입력해 주세요"
              label="비밀번호"
              id={"password"}
              onChange={() => onChange("password")}
              isError={passwordErrorMessage !== null}
              ref={passwordRef}
              helpMessage={
                passwordErrorMessage !== null ? passwordErrorMessage : undefined
              }
              type="password"
            />
          </FormInputContainer>
          <SharedButton type="submit" variant="Filled" size="L">
            로그인
          </SharedButton>
        </FormContainer>
      </ContentsContainer>
    </>
  );
};

export default LoginTemplate;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  padding: 0 24px;
  max-width: 348px;
`;

const Title = styled.h1`
  ${typography.display.s}
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  gap: 16px;
`;
