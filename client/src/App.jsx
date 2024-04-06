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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about-us" element={ <About />} />
        <Route path="/lagos" element={ <Lagos />} />
        <Route path="/houston" element={ <Houston />} />
        <Route path="/abu-dhabi" element={ <AbuDhabi />} />
        <Route path="/contact-us" element={ <ContactUs />} />
        <Route path="/profile" element={ <Profile />} />
        <Route path="/qualitypolicy" element={ <QualityPolicy />} />
        <Route path="/sign-in" element={ <SignIn />} />
        <Route path="/sign-up" element={ <SignUp />} />
        <Route path="/blogs" element={ <Blogs />} />
      </Routes>
    </BrowserRouter>
  )
}
