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
  const LoginTemplate: React.ComponentType;
  export default LoginTemplate;
}

declare module "remoteApp/styles";
