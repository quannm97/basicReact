import React from "react";
import { DefaultAdmin, HomeTable, BookTable, PublishTable } from "./common";
const adRoutes = [
  {
    path: "/admin",
    component: () => <DefaultAdmin />,
  },
  {
    path: "/homedata",
    component: () => <HomeTable />,
  },
  {
    path: "/xuat-ban-data",
    component: () => <PublishTable />,
  },
  {
    path: "/sach-data",
    component: () => <BookTable />,
  },
];

export default adRoutes;
