import React, { useEffect, useState } from "react";
import UserDetail from "../Components/UserDetail";
import { useLocation } from "react-router-dom";
import { fetchUserFollowers, fetchUserFollowings } from "../Api/getUserApi";
import { Circles } from "react-loader-spinner";

const UserDetails = () => {
  const location = useLocation();
  const { user } = location.state;

  const [followers, setFollowers] = useState(null);
  const [followings, setFollowings] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeButton, setActiveButton] = useState("followers");

  const fetchFollowers = async () => {
    setLoading(true);
    await fetchUserFollowers(user.followers_url).then((response) => {
      if (response.length != 0) {
        setFollowers(response);
        sessionStorage.setItem(
          `${user.login}-followers`,
          JSON.stringify(response)
        );
      } else {
        sessionStorage.setItem(`${user.login}-followers`, JSON.stringify(null));
      }

      setLoading(false);
    });
  };
  const fetchFollowings = async () => {
    setLoading(true);
    await fetchUserFollowings(
      `https://api.github.com/users/${user.login}/following`
    ).then((response) => {
      if (response.length != 0) {
        setFollowings(response);
        sessionStorage.setItem(
          `${user.login}-followings`,
          JSON.stringify(response)
        );
      } else {
        sessionStorage.setItem(
          `${user.login}-followings`,
          JSON.stringify(null)
        );
      }

      setLoading(false);
    });
  };

  const getFollowers = () => {
    if (!sessionStorage.getItem(`${user.login}-followers`)) {
      fetchFollowers();
    } else {
      setFollowers(
        JSON.parse(sessionStorage.getItem(`${user.login}-followers`))
      );
    }
  };
  const getFollowings = () => {
    if (!sessionStorage.getItem(`${user.login}-followings`)) {
      fetchFollowings();
    } else {
      setFollowings(
        JSON.parse(sessionStorage.getItem(`${user.login}-followings`))
      );
    }
  };

  useEffect(() => {
    if (activeButton == "followers") {
      getFollowers();
    } else if (activeButton == "followings") {
      getFollowings();
    }
  }, [activeButton]);
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <>
      {loading && (
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}

      {!loading && (
        <UserDetail
          data={user}
          followersData={followers}
          button={activeButton}
          clickHandler={handleClick}
          followingData={followings}
        />
      )}
    </>
  );
};

export default UserDetails;
