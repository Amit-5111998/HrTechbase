import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import SignUp from "./Components/Authentication/SignUp/SignUp";
import { Switch, Route } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import LogIn from "./Components/Authentication/Login/Login";
import ForgotPassword from "./Components/Authentication/ChangePassword/ForgotPassword";
import LoggedInNavbar from "./Components/Navbar/LoggedInNavbar";
import FeedPage from "./Components/MyFeed/FeedPage";
import Footer from "./Components/Footer/Footer";
import Alltools from "./Components/AllTools/Alltools";
import SearchPage from "./Components/SearchPage/SearchPage";
function App() {
  return (
    <div>
      {/*      
     
     <Banner/>
     <Populartools/>
     <Explore/>
     <BrowsbyCatogary/>
     <Footer/>  */}

      <Switch>
        <Route exact path="/">
          <Navbar />
          <MainPage />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/ForgotPassword">
          <ForgotPassword />
        </Route>
        <Route path="/Myfeed">
          <LoggedInNavbar />
          <FeedPage />
          <Footer />
        </Route>
        <Route path="/AllTools">
          <Navbar />
          <Alltools />
          <Footer />
        </Route>
        <Route path="/seacrh">
          <LoggedInNavbar/>
          <SearchPage/>
        
        </Route>
      </Switch>
    </div>
  );
}

export default App;
