// gubukin views
import Login from "views/auth/Login.js";
import OTP from "views/auth/OTP.js";
import WaitingList from "views/admin/WaitingList.js";
import Transactions from "views/admin/Transactions";
import Users from "views/admin/Users";
import DetailBook from "views/admin/DetailBook";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: WaitingList,
    layout: "/admin",
  },
  {
    path: "/transactions",
    name: "Transactions",
    icon: "ni ni-cart text-red",
    component: Transactions,
    layout: "/admin",
  },
  {
    path: "/users",
    name: "Users",
    icon: "ni ni-single-02 text-yellow",
    component: Users,
    layout: "/admin",
  },
  {
    path: "/book/:id",
    name: "Book",
    icon: "ni ni-book text-info",
    component: DetailBook,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/otp",
    name: "OTP",
    icon: "ni ni-key-25 text-info",
    component: OTP,
    layout: "/auth",
  },
];
export default routes;
