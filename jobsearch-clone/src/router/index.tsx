import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ROUTES } from "@/consts";

import { Layout } from "@/components";
import Main from "@/pages/main";
import Preview from "@/pages/preview";

export const router = createBrowserRouter([
  {
    path: ROUTES.BASE,
    element: <Layout />,
    children: [
      {
        path: ROUTES.VACANCIES,
        element: <Main />,
        children: [
          {
            path: ROUTES.PREVIEW,
            element: <Preview />,
          },
        ],
      },
      {
        path: ROUTES.CATEGORIES,
        element: <div>Categories</div>,
      },
    ],
  },
]);
