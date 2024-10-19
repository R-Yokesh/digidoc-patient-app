import LangView from "../Views/LangView";
// import SignView from "../Views/SignView";
import Signinview from "../Views/SigninView";
import FirstWelcomeView from "../Views/FirstWelcomeView";

const RoutesData = [
  { path: "/", element: LangView, name: "Language Page" },    
  { path: "/signin", element: Signinview, name: "Sign In Page" },
  { path: "/welcome", element: FirstWelcomeView, name: "Welcome Page" }
];

export default RoutesData;
