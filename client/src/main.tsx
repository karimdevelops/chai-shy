import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./index.css";

const router = createRouter({ routeTree });

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  if (root)
    root.render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    );
}
