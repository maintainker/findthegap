import styled from "styled-components";
import Header from "../components/Header";
import { typography } from "../assets/css/typography";
import SharedTextField from "../components/TextField";
import { useEffect, useRef } from "react";
import SharedButton from "../components/SharedButton";
import Footer from "../components/Footer";

const LoginTemplate = ({
  type = "회원",
  idErrorMessage,
  passwordErrorMessage,
  onSubmit,
  onChange,
}: {
  type: string;
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

  return (
    <>
      <Header />
      <ContentsContainer>
        <Contents>
          <Title>{type} 로그인</Title>
          <FormContainer onSubmit={handleSubmit}>
            <FormInputContainer>
              <SharedTextField
                placeholder="아이디(이메일)을 입력해 주세요"
                label="로그인"
                id={"email"}
                onChange={() => onChange("email")}
                isError={idErrorMessage !== null}
                ref={emailRef}
                helpMessage={
                  idErrorMessage !== null ? idErrorMessage : undefined
                }
              />
              <SharedTextField
                placeholder="비밀번호를 입력해 주세요"
                label="비밀번호"
                id={"password"}
                onChange={() => onChange("password")}
                isError={passwordErrorMessage !== null}
                ref={passwordRef}
                helpMessage={
                  passwordErrorMessage !== null
                    ? passwordErrorMessage
                    : undefined
                }
                type="password"
              />
            </FormInputContainer>
            <ButtonContainer>
              <SharedButton
                style={{ width: "100%" }}
                type="submit"
                variant="Filled"
                size="L"
              >
                로그인
              </SharedButton>
              <TextButtonContainer>
                <Register>
                  <span>아직 계정이 없으신가요?</span>
                  <SharedButton variant="Text">회원가입</SharedButton>
                </Register>
                <SharedButton
                  variant="Text"
                  style={{ color: "var(--color-gray-900)" }}
                >
                  비밀번호 찾기
                </SharedButton>
              </TextButtonContainer>
            </ButtonContainer>
          </FormContainer>
        </Contents>
      </ContentsContainer>
      <Footer />
    </>
  );
};

export default LoginTemplate;

const ContentsContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 96px - 271px);
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    height: calc(100vh - 96px - 315px);
  }
  @media (max-width: 600px) {
    height: calc(100vh - 96px - 431px);
  }
`;

const Contents = styled.div`
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
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 16px;
`;
const TextButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Register = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  > span {
    ${typography.body.m_regular}
  }
`;
