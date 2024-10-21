import LangView from "../Views/LangView";
// import SignView from "../Views/SignView";
import Signinview from "../Views/SigninView"
import OtpView from "../Views/OtpView"

const RoutesData = [
  { path: "/lang", element: LangView, name: "Language Page" },
  { path: "/signin", element: Signinview, name: "Sign In Page" },
  { path: "/otp", element: OtpView, name: "Sign In Page" }
];

export default RoutesData;
