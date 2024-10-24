import LangView from "../Views/LangView";
// import SignView from "../Views/SignView";
import Signinview from "../Views/SigninView";
import FirstWelcomeView from "../Views/FirstWelcomeView";
import OtpView from "../Views/OtpView"
import UploadView from "../Views/UploadView";
import ConfirmUploadView from "../Views/ConfirmUploadView";
import MappingScreen from "../Views/MappingScreenView";
import AutoMapSuccess from "../Views/AutoMapSuccessView"
import Header from "../Views/HeaderView"
import Footer from "../Views/FooterView"
import MapMedicineView from "../Views/MapMedicineView";
import HomePage from "../Views/HomePageView"

const RoutesData = [
  { path: "/", element: LangView, name: "Language Page" },    
  { path: "/signin", element: Signinview, name: "Sign In Page" },
  { path: "/otp", element: OtpView, name: "Sign In Page" },
  { path: "/welcome", element: FirstWelcomeView, name: "Welcome Page" },
  { path: "/upload", element: UploadView, name: "Upload Page" },
  { path: "/confirm-upload", element: ConfirmUploadView, name: "Upload Page" },
  { path: "/mapping", element: MappingScreen, name: "Mapping Page" },
  { path: "/map-medicine", element: MapMedicineView, name: "Map Medicine Page" },
  { path: "/success", element: AutoMapSuccess, name: "Mapping Page" },
  { path: "/header", element: Header, name: "Mapping Page" },
  { path: "/footer", element: Footer, name: "Mapping Page" },
  { path: "/home", element: HomePage, name: "Mapping Page" },

];

export default RoutesData;
