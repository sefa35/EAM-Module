import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import axios from "axios";

import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    axios
      .get("http://localhost:4000/auth/" + userRef.current.value)
      .then((response) => {
        console.log("Axios Response", response);
        const userArr =[] = response.data.filter(
          (e) => e.password === passwordRef.current.value
        );
        const currentUser = userArr[0];
        console.log("CURRENT USER", currentUser);
        if (currentUser === undefined) {
          dispatch({ type: "LOGIN_FAILURE" });
        } else {
          console.log("LOGIN SUCCESS");
          dispatch({ type: "LOGIN_SUCCESS", payload: currentUser });
          window.location.replace("/");
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: "LOGIN_FAILURE" });
      });
  };

  console.log(isFetching);

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
