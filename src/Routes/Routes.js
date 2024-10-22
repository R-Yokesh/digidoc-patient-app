import LangView from "../Views/LangView";
// import SignView from "../Views/SignView";
import Signinview from "../Views/SigninView";
import FirstWelcomeView from "../Views/FirstWelcomeView";
import OtpView from "../Views/OtpView"
import UploadView from "../Views/UploadView";
import MappingScreen from "../Views/MappingScreenView";
import AutoMapSuccess from "../Views/AutoMapSuccessView"

const RoutesData = [
  { path: "/", element: LangView, name: "Language Page" },    
  { path: "/signin", element: Signinview, name: "Sign In Page" },
  { path: "/otp", element: OtpView, name: "Sign In Page" },
  { path: "/welcome", element: FirstWelcomeView, name: "Welcome Page" },
  { path: "/upload", element: UploadView, name: "Upload Page" },
  { path: "/mapping", element: MappingScreen, name: "Mapping Page" },
  { path: "/success", element: AutoMapSuccess, name: "Mapping Page" },

];

export default RoutesData;
