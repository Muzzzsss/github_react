import axios from "axios";
const baseUrl = "https://api.github.com/users/";

// fetch user API
export const fetchUserData = async (nameInp) => {
  const url = baseUrl + nameInp;
  try {
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  } catch (error) {
    return null;
  }
};

// fetch user followers api
export const fetchUserFollowers = async (url) => {
  try {
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  } catch (error) {
    return null;
  }
};
// fetch user followings api
export const fetchUserFollowings = async (url) => {
  try {
    const response = await axios.get(url);
    const data = await response.data;
    return data;
  } catch (error) {
    return null;
  }
};
