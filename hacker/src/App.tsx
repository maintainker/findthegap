import React from "react";
import { LoginTemplate } from "./remote";

function App() {
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <LoginTemplate />
      </React.Suspense>
    </>
  );
}

export default App;
