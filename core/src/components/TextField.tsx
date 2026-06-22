import React, { useState } from "react";
import styled from "styled-components";
import { typography } from "../assets/css/typography";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helpMessage?: string;
  isError?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  ref?: React.Ref<HTMLInputElement>;
}

function SharedTextField({
  label,
  helpMessage,
  isError = false,
  disabled = false,
  leftIcon,
  rightIcon,
  style,
  onFocus,
  onBlur,
  id,
  ref,
  ...props
}: TextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  let borderColor = "var(--color-gray-200)";
  let helpMessageColor = "var(--color-gray-500)";

  if (isFocused) {
    borderColor = "var(--color-Brand-500)";
  } else if (isError) {
    borderColor = "var(--color-red-500)";
    helpMessageColor = "var(--color-red-500)";
  } else if (disabled) {
    borderColor = "var(--color-gray-100)";
  }

  return (
    <TextContainer style={style}>
      {label && <Label htmlFor={id}>{label}</Label>}

      <InputWrapper borderColor={borderColor} style={{}}>
        {leftIcon && <LeftIconContainer>{leftIcon}</LeftIconContainer>}

        <Input
          id={id}
          disabled={disabled}
          onFocus={(e) => {
            setIsFocused(true);
            if (onFocus) onFocus(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            if (onBlur) onBlur(e);
          }}
          ref={ref}
          {...props}
        />

        {rightIcon && <RightIconContainer>{rightIcon}</RightIconContainer>}
      </InputWrapper>

      {helpMessage && <Message color={helpMessageColor}>{helpMessage}</Message>}
    </TextContainer>
  );
}

// const SharedTextField = forwardRef<HTMLInputElement, TextFieldProps>(TextField);
export default SharedTextField;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
  width: 100%;
`;

const InputWrapper = styled.div<{ borderColor: string }>`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 4px;
  background-color: var(--color-white);
  transition: border-color 0.2s ease;
  box-sizing: border-box;
  &:disabled {
    background-color: var(--color-gray-50);
  }
`;

const Label = styled.label`
  ${typography.body.m_regular}
`;

const LeftIconContainer = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
  min-height: 24px;
  min-width: 24px;
`;

const RightIconContainer = styled.div`
  margin-left: 8px;
  display: flex;
  align-items: center;
  min-height: 24px;
  min-width: 24px;
`;

const Input = styled.input`
  ${typography.body.m_regular}
  border: none;
  outline: none;
  height: 100%;
  background-color: transparent;
  padding: 0;
  flex: 1;
  caret-color: var(--color-Brand-500);
`;

const Message = styled.span<{ color: string }>`
  ${typography.body.m_regular};
  color: ${(props) => props.color};
`;
