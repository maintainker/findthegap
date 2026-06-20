import React from "react";

const RemoteButton = React.lazy(() => import("remoteApp/Button"));

function App() {
  return (
    <>
      <h2>Hacker App</h2>
      <React.Suspense fallback={<div>Loading...</div>}>
        <RemoteButton />
      </React.Suspense>
    </>
  );
}

export default App;
