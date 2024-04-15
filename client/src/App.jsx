import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Lagos from "./Pages/Properties/Lagos";
import Houston from "./Pages/Properties/Houston";
import AbuDhabi from "./Pages/Properties/AbuDhabi";
import ContactUs from "./Pages/Contact/ContactUs";
import Profile from "./Pages/Profile/Profile";
import QualityPolicy from "./Pages/Quality/QualityPolicy";
import SignIn from "./Pages/Login/SignIn";
import SignUp from "./Pages/Login/SignUp";
import Blogs from "./Pages/Blogs/Blog";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { Provider } from 'react-redux';
import { store } from './redux/store.js'; // 
import PrivateRoute from "./Components/utility/PrivateRoute.jsx";
import AdminRoute from "./Components/utility/AdminRoute.jsx";
import CreateProperty from "./Pages/CreatePropertry/CreateProperty.jsx";
import Listing from "./Pages/Properties/Listing.jsx";

export default function App() {
return (
  <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/listing/:listingId" element={<Listing />} />
            <Route path="/about-us" element={ <About />} />
            <Route path="/lagos" element={ <Lagos />} />
            <Route path="/houston" element={ <Houston />} />
            <Route path="/abu-dhabi" element={ <AbuDhabi />} />
            <Route path="/contact-us" element={ <ContactUs />} />
            <Route element={<PrivateRoute/>} >
              <Route path="/profile" element={ <Profile />} />
            </Route>
            <Route path="/qualitypolicy" element={ <QualityPolicy />} />
            <Route path="/sign-in" element={ <SignIn />} />
            <Route path="/sign-up" element={ <SignUp />} />
            <Route path="/blogs" element={ <Blogs />} />
            <Route element={<AdminRoute />}>
              <Route path="/createprop" element={ <CreateProperty />} />
            </Route>
          </Routes>
        <Footer/>
      </BrowserRouter>
  </Provider>
  )
}
