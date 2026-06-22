import React from "react";
import styled, { css } from "styled-components";

// 도면의 명칭을 그대로 타입 규격으로 정의합니다.
type ButtonVariant = "Filled" | "Outline" | "Text";
type ButtonSize = "L" | "M" | "S";
type ButtonType = "Primary" | "Secondary";

interface SharedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
}

export default function SharedButton({
  variant = "Filled",
  size = "M",
  btnType = "Primary",
  disabled = false,
  children,
  ...props
}: SharedButtonProps) {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $btnType={btnType}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
}
const SIZE_STYLES = {
  L: css`
    height: 48px;
    padding: 0 24px;
    font-size: var(--font-body-l-size, 16px);
    font-weight: var(--font-weight-semibold, 600);
  `,
  M: css`
    height: 40px;
    padding: 0 16px;
    font-size: var(--font-body-m-size, 14px);
    font-weight: var(--font-weight-medium, 500);
  `,
  S: css`
    height: 32px;
    padding: 0 12px;
    font-size: var(--font-body-s-size, 12px);
    font-weight: var(--font-weight-regular, 400);
  `,
};

// 🎨 2. 형태(Variant)와 타입(Type)별 인터랙션 스타일 세트
const getVariantStyles = ($variant: ButtonVariant, $btnType: ButtonType) => {
  const brandColor = "var(--color-Brand-500)";
  const brandHover = "var(--color-Brand-600, #22c55e)";
  const brandPress = "var(--color-Brand-700, #15803d)";

  const secondaryColor = "var(--color-gray-100, #f5f5f5)";
  const secondaryText = "var(--color-gray-700, #404040)";

  switch ($variant) {
    case "Filled":
      if ($btnType === "Primary") {
        return css`
          background-color: ${brandColor};
          color: var(--color-white, #ffffff);
          border: none;
          &:hover:not(:disabled) {
            background-color: ${brandHover};
          }
          &:active:not(:disabled) {
            background-color: ${brandPress};
          }
        `;
      } else {
        return css`
          background-color: #e6f7ed; /* Secondary 연한 녹색/민트 톤 배경 */
          color: ${brandColor};
          border: none;
          &:hover:not(:disabled) {
            background-color: #d1fae5;
          }
          &:active:not(:disabled) {
            background-color: #a7f3d0;
          }
        `;
      }

    case "Outline":
      if ($btnType === "Primary") {
        return css`
          background-color: transparent;
          color: ${brandColor};
          border: 1px solid ${brandColor};
          &:hover:not(:disabled) {
            background-color: rgba(0, 0, 0, 0.04);
          }
          &:active:not(:disabled) {
            background-color: rgba(0, 0, 0, 0.08);
          }
        `;
      } else {
        return css`
          background-color: transparent;
          color: ${secondaryText};
          border: 1px solid var(--color-gray-300, #d4d4d4);
          &:hover:not(:disabled) {
            background-color: ${secondaryColor};
          }
          &:active:not(:disabled) {
            background-color: var(--color-gray-200, #e5e5e5);
          }
        `;
      }

    case "Text":
      if ($btnType === "Primary") {
        return css`
          background-color: transparent;
          color: ${brandColor};
          border: none;
          &:hover:not(:disabled) {
            color: ${brandHover};
          }
          &:active:not(:disabled) {
            color: ${brandPress};
          }
        `;
      } else {
        return css`
          background-color: transparent;
          color: ${secondaryText};
          border: none;
          &:hover:not(:disabled) {
            color: var(--color-gray-900, #171717);
          }
          &:active:not(:disabled) {
            color: var(--color-black, #000000);
          }
        `;
      }
  }
};

const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $btnType: ButtonType;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: "Pretendard", sans-serif;
  border-radius: var(--input-border-radius, 4px);
  box-sizing: border-box;
  cursor: pointer;
  transition:
    background-color 0.2s,
    color 0.2s,
    border-color 0.2s;
  outline: none;

  ${({ $size }) => SIZE_STYLES[$size]}

  /* 변형 테마 주입 */
  ${({ $variant, $btnType }) => getVariantStyles($variant, $btnType)}

  /* 🚫 State 4. Disabled (도면 회색조 명세 공통 대응) */
  &:disabled {
    background-color: var(--color-gray-200, #e5e5e5) !important;
    color: var(--color-gray-400, #a3a3a3) !important;
    border: none !important;
    cursor: not-allowed;
  }
`;
