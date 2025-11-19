import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  PRODUCTS_ROUTE,
  BLOGS_ROUTE,
  CONTACT_ROUTE,
  ORDERS_ROUTE,
} from "./routes";

const navLinks = [
  {
    route: HOME_ROUTE,
    label: "Home",
  },
  {
    route: ABOUT_ROUTE,
    label: "About us",
  },
  {
    route: PRODUCTS_ROUTE,
    label: "Products",
  },
   {
    route: ORDERS_ROUTE,
    label: "Orders",
  },
  {
    route: BLOGS_ROUTE,
    label: "Blogs",
  },
  {
    route: CONTACT_ROUTE,
    label: "Contact",
  },
];

export default navLinks;