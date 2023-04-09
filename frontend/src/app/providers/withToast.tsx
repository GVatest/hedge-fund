import React from "react";
import { Toaster } from "react-hot-toast";
import { ToastOptions } from "react-hot-toast";

const toastTheme = {
  style: {
    background:
      "linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
    borderRadius: "2.5rem",
    border: ".1rem solid",
    borderImageSource:
      "radial-gradient(54.8% 53% at 50% 50%, rgba(21, 21, 21, 0.6) 0%, rgba(21, 21, 21, 0) 100%)",
    color: "#fff",
    fontSize: "2rem",
  },
  duration: 2000,
  position: "bottom-left",
} as ToastOptions;

export const withToast = (component: () => React.ReactElement) => () =>
  (
    <>
      <Toaster toastOptions={toastTheme} />
      {component()}
    </>
  );
