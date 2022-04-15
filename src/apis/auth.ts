import { authInstance } from "./api";

export interface Login {
  email: string;
  password: string;
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const auth = {
  signIn: (data: Login) =>
    authInstance
      .post("/signin", data)
      .then((res) => {
        document.cookie = `user_token=${res.data.token}; max-age=86400; path=/;`;
        return res;
      })
      .catch(() => Promise.reject()),
  signUp: (data) => authInstance.post("/signup", data),
  signOut: () => "user_token=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;",
  getUser: () => getCookie("user_token"),
};

export const authHeader = () => {
  const token = getCookie("user_token");
  if (token) {
    return {
      "x-access-token": token,
    };
  } else {
    return {};
  }
};

export default auth;
