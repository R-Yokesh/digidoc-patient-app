import LangView from "../Views/LangView";
// import SignView from "../Views/SignView";
import Signinview from "../Views/SigninView";
import FirstWelcomeView from "../Views/FirstWelcomeView";
import OtpView from "../Views/OtpView"
import UploadView from "../Views/UploadView";

const RoutesData = [
  { path: "/", element: LangView, name: "Language Page" },    
  { path: "/signin", element: Signinview, name: "Sign In Page" },
  { path: "/otp", element: OtpView, name: "Sign In Page" },
  { path: "/welcome", element: FirstWelcomeView, name: "Welcome Page" },
  { path: "/upload", element: UploadView, name: "Upload Page" }

];

export default RoutesData;
