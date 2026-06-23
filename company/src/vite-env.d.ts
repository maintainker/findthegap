declare module "remoteApp/Button" {
  const Button: React.ComponentType<{ label?: string }>;
  export default Button;
}

declare module "remoteApp/TextField" {
  const TextField: React.ComponentType<
    {
      label?: string;
      helpMessage?: string;
      isError?: boolean;
      leftIcon?: React.ReactNode;
      rightIcon?: React.ReactNode;
    } & React.InputHTMLAttributes<HTMLInputElement>
  >;
  export default TextField;
}

declare module "remoteApp/templates/Login" {
  const LoginTemplate: React.ComponentType<{
    type: string;
    idErrorMessage: string | null;
    passwordErrorMessage: string | null;
    onSubmit: (
      e: React.SubmitEvent,
      { email, password }: { email: string; password: string },
    ) => void;
    onChange: (type: "email" | "password") => void;
  }>;
  export default LoginTemplate;
}

declare module "remoteApp/styles";
