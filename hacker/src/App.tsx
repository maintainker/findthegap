import React, { useState } from "react";
import { LoginTemplate } from "./remote";

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
  const handleLoginSubmit = async (
    e: React.SubmitEvent,
    { email, password }: { email: string; password: string },
  ) => {
    e.preventDefault();

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    setTimeout(() => {
      let count = 0;
      if (email === "hacker@test.com") {
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
      <React.Suspense fallback={<div>Loading...</div>}>
        <LoginTemplate
          type={"윤리적 해커"}
          idErrorMessage={(idError && idErrorMessage[idError]) || null}
          passwordErrorMessage={
            (passwordError && passwordErrorMessage[passwordError]) || null
          }
          onSubmit={handleLoginSubmit}
          onChange={handleChange}
        />
      </React.Suspense>
    </>
  );
}

export default App;
