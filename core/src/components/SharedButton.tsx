// core/src/components/SharedButton.tsx
import React, { useState } from "react";

interface SharedButtonProps {
  label?: string;
}

export default function SharedButton({
  label = "공통 버튼",
}: SharedButtonProps) {
  const [count, setCount] = useState(0);

  const buttonStyle: React.CSSProperties = {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  };

  return (
    <button style={buttonStyle} onClick={() => setCount((prev) => prev + 1)}>
      {label} (클릭 횟수: {count})
    </button>
  );
}
