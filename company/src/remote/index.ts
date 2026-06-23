import React from "react";

export const RemoteButton = React.lazy(() => import("remoteApp/Button"));
export const RemoteTextField = React.lazy(() => import("remoteApp/TextField"));

export const LoginTemplate = React.lazy(
  () => import("remoteApp/templates/Login"),
);
