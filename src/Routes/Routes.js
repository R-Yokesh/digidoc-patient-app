import LangView from "../Views/LangView";
// import SignView from "../Views/SignView";
import Signinview from "../Views/SigninView"

const RoutesData = [
  { path: "/lang", element: LangView, name: "Language Page" },
  { path: "/signin", element: Signinview, name: "Sign In Page" }
];

export default RoutesData;
