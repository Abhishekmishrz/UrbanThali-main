import { ISidebarMenus } from "./../types/menu-types";
import {
  Dashboard,
  Categories,
  Coupons,
  Orders,
  Pages,
  Products,
  Profile,
  Reviews,
  Setting,
  Leaf,
  StuffUser,
} from "@/svg";

const sidebar_menu: Array<ISidebarMenus> = [
  {
    id: 1,
    icon: Dashboard,
    link: "/dashboard",
    title: "Dashboard",
  },
  {
    id: 2,
    icon: Products,
    link: "/product-list",
    title: "Menu Items",
    subMenus: [
      { title: "Menu List", link: "/product-list" },
      { title: "Menu Grid", link: "/product-grid" },
      { title: "Add Menu Item", link: "/add-product" }
    ],
  },
  {
    id: 3,
    icon: Categories,
    link: "/category",
    title: "Food Categories",
  },
  {
    id: 4,
    icon: Orders,
    link: "/orders",
    title: "Orders",
  },
  {
    id: 5,
    icon: Leaf,
    link: "/brands",
    title: "Restaurants",
  },
  {
    id: 6,
    icon: Reviews,
    link: "/reviews",
    title: "Reviews",
  },
  {
    id: 7,
    icon: Coupons,
    link: "/coupon",
    title: "Promotions",
  },
  {
    id: 8,
    icon: Profile,
    link: "/profile",
    title: "Profile",
  },
  {
    id: 9,
    icon: Setting,
    link: "#",
    title: "Restaurant Settings",
  },
  {
    id: 10,
    icon: StuffUser,
    link: "/our-staff",
    title: "Staff Management",
  },
  {
    id: 11,
    icon: Pages,
    link: "/dashboard",
    title: "Pages",
    subMenus: [
      { title: "Register", link: "/register" },
      { title: "Login", link: "/login" },
      { title: "Forgot Password", link: "/forgot-password" }
    ],
  },
];

export default sidebar_menu;
