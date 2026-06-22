import LoginTemplate from "./templates/Login";
import { useState } from "react";

const idErrorMessage = {
  wrongId: "아이디를 확인해주세요",
  emptyId: "아이디를 입력해주세요",
};
const passwordErrorMessage = {
  wrongPassword: "비밀번호를 확인해주세요",
  emptyPassword: "비밀번호를 입력해주세요",
};

function App() {
  const [idError, setIdError] = useState<keyof typeof idErrorMessage | null>(
    null,
  );
  const [passwordError, setPasswordError] = useState<
    keyof typeof passwordErrorMessage | null
  >(null);

  // test위해 임시 submit 함수
  const handleLoginSubmit = async (
    e: React.SubmitEvent,
    { email, password }: { email: string; password: string },
  ) => {
    console.log("???", { email, password });
    e.preventDefault();
    setTimeout(() => {
      let count = 0;
      if (email === "test@test.com") {
        setIdError(null);
        count++;
      } else if (email === "") {
        setIdError("emptyId");
      } else {
        setIdError("wrongId");
      }
      if (password === "password") {
        setPasswordError(null);
        count++;
      } else if (password === "") {
        setPasswordError("emptyPassword");
      } else {
        setPasswordError("wrongPassword");
      }
      if (count === 2) {
        alert("로그인 완료");
      }
    }, 5);
  };

  const handleChange = (type: "email" | "password") => {
    if (type === "email") {
      setIdError(null);
    } else {
      setPasswordError(null);
    }
  };

  return (
    <>
      <LoginTemplate
        idErrorMessage={idErrorMessage[idError] || null}
        passwordErrorMessage={passwordErrorMessage[passwordError] || null}
        onSubmit={handleLoginSubmit}
        onChange={handleChange}
      />
    </>
  );
}

export default App;
