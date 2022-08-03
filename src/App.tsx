import React from "react";
import "./App.css";
import { Nav } from "./presentation/components/Nav/Nav";
import Register from "./presentation/pages/Register";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Home from "./presentation/pages/Home";
import Login from "./presentation/pages/Login";
import Upload from "./presentation/pages/Upload";
import Notfound from "./presentation/pages/notfound";
import Profile from "./presentation/pages/Profile";
import Footer from "./presentation/components/Footer/Footer";
import Topic from "./presentation/pages/Topic";
import PostDetails from "./presentation/pages/PostDetails";
import UserPage from "./presentation/pages/UserPage";
import PrivateRoute from "./route/PrivateRoute";
import { LogOut } from "./domain/api/user";
function App() {
  return (
    <div className="App">
      <div className="container mx-auto">
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<PrivateRoute outlet={<Upload />} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<HandleLogout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/topic/:id" element={<TopicChild />} />
            <Route path="/user/profile" element={<PrivateRoute outlet={<Profile />} />} />
            <Route path="/user/:id" element={<PrivateRoute outlet={<UserChild />} />} />
            <Route path="/posts/:id" element={<PostDetailsChild />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
        <br />
        <Footer />
      </div>
    </div>
  );

  function HandleLogout() {
    LogOut();
    return <Navigate to="/login" />;
  }

  function UserChild() {
    let { id } = useParams();
    return <div>{id !== undefined && <UserPage userID={id} />}</div>;
  }

  function PostDetailsChild() {
    let { id } = useParams();
    return <div>{id !== undefined && <PostDetails postId={id} />}</div>;
  }
  function TopicChild() {
    let { id } = useParams();
    return <div>{id !== undefined && <Topic topicId={id} />}</div>;
  }
}

export default App;
