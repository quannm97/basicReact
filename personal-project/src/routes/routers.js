import React from "react";
import {
  Xuatban,
  Sach,
  Xahoi,
  Thegioi,
  Kinhdoanh,
  Congnghe,
  Suckhoe,
  Thethao,
  Trangchu,
  Content,
} from "./common";
const routes = [
  {
    path: "/",
    component: () => <Trangchu />,
  },
  {
    path: "/xuat-ban",
    component: () => <Xuatban />,
  },
  {
    path: "/sach",
    component: () => <Sach />,
  },
  {
    path: "/xa-hoi",
    component: () => <Xahoi />,
  },
  {
    path: "/the-gioi",
    component: () => <Thegioi />,
  },
  {
    path: "/kinh-doanh",
    component: () => <Kinhdoanh />,
  },
  {
    path: "/cong-nghe",
    component: () => <Congnghe />,
  },
  {
    path: "/suc-khoe",
    component: () => <Suckhoe />,
  },
  {
    path: "/the-thao",
    component: () => <Thethao />,
  },
  {
    path: "/*",
    component: () => <Content />,
  },
];

export default routes;
