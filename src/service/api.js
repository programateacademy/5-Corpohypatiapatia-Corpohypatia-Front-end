import axios from "axios";

const URL = "http://localhost:4000";

export const signIn = async (user) => {
  try {
    return await axios.post(URL + "/signin", user);
  } catch (e) {
    console.log("Error while calling signIn Api", e);
  }
};

export const getHome = async (token) => {
  try {
    return await axios.get(URL + "/home", {
      headers: {
        "x-access-token": token,
      },
    });
  } catch (e) {
    console.log("Error while calling getMovies API", e);
  }
};

export const resetPassword = async (email) => {
  try {
    return await axios.post(URL + "/send-password-link", email);
  } catch (e) {
    console.log("Error while calling getMovies API", e);
  }
};

export const changePassword = async (password, token) => {
  console.log(password);
  try {
    return await axios.post(URL + "/change-password", password, {
      headers: {
        "x-access-token": token
      },
    });
  } catch (e) {
    console.log("Error while calling getMovies API", e);
  }
};
