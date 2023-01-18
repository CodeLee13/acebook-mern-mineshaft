import React, { useState } from "react";
import NavBar from "./NavBar";

const LogInForm = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch("/tokens", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    if (response.status !== 201) {
      console.log("oop");
      navigate("/login");
    } else {
      console.log("yay");
      let data = await response.json();
      window.localStorage.setItem("token", data.token);
      navigate("/posts");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <NavBar />

      <div class="bg-grey-lighter h-screen font-sans">
        <div class="container mx-auto h-full flex justify-center items-center">
          <form
            class="bg-white shadow-md rounded px-32 pt-15 pb-32 mb-1"
            onSubmit={handleSubmit}
          >
            <h2 className="font-lobster text-blue-500 text-center text-3xl mb-12">
              Login
            </h2>
            <div class="mb-4">
              <input
                class="w-60 px-2 py-2"
                placeholder="Email"
                id="email"
                type="text"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div class="mb-6">
              <input
                class="w-60 px-2 py-2"
                placeholder="Password"
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div class="flex items-center justify-between mb-1">
              <input
                class="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                role="submit-button"
                id="submit"
                type="submit"
                value="Submit"
              />
              <a
                class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/signup"
                id="signup-link"
                data-cy="signup-link"
              >
                Signup here
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogInForm;
