import axios from "axios";
import React, { useEffect } from "react";
import User from "../../domain/entity/user";
import { apiUrlPost, apiUrlUser } from "../../utils/constant";
import { GetUserProfile } from "../../domain/api/user";
import UserCard from "../components/UserCard/UserCard";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import Post from "../../domain/entity/post";
import PostItem from "../components/PostItem/PostItem";
const Profile: React.FC = () => {
  const [currentUser, setCurrentUser] = React.useState<User>();
  const [allPosts, setAllPosts] = React.useState<Post[]>([]);

  useEffect(() => {
    GetUserProfile()
      .then((res: any) => {
        setCurrentUser({
          id: res.data.id,
          name: res.data.name,
          email: res.data.email,
        });
        setAllPosts(res.data.posts as Post[]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(currentUser);
  });

  return (
    <>
      {currentUser !== undefined && <ProfileCard user={currentUser} />}
      <div className="grid grid-cols-3 gap-3 mt-5">
        {allPosts.map((allPosts: Post) => {
          return <PostItem post={allPosts} />;
        })}
      </div>
    </>
  );
};

function useGetUser(): User {
  const [currentUser, setUser] = React.useState<User>();
  axios
    .get(apiUrlUser + "profile", {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
    .then((res: any) => {
      console.log(res.data.data);
      setUser(res.data.data as User);
    });
  if (currentUser === undefined) {
    throw new Error("User is undefined");
  }
  return currentUser;
}

export default Profile;
