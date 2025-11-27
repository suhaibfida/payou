import SignupBg from "./images/log.png";
import Input from "./Input.js";
import Button from "./Button.js";
import PayouLogo from "./icons/Payou.js";
import { useState } from "react";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${SignupBg})` }}
    >
      <div className="p-4 pb-15">
        <PayouLogo />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-89 p-9 backdrop-blur-xl bg-white/5 border border-green-800 shadow-lg rounded-xl">
          <div className="text-center text-3xl text-gray-300 font-bold p-3">
            Register
          </div>
          <div className="text-gray-300 text-bold text-lg">Username</div>
          <div>
            {
              <Input
                placeholder={"Username"}
                type={"text"}
                value={username}
                onChange={setUsername}
              />
            }
          </div>
          <div className="text-gray-300 text-bold text-lg">Email</div>
          <div>
            {
              <Input
                placeholder={"Email"}
                type={"email"}
                value={email}
                onChange={setEmail}
              />
            }
          </div>
          <div className="text-gray-300 text-bold text-lg">Password</div>
          <div>
            <Input
              placeholder={"Password"}
              type={"password"}
              value={password}
              onChange={setPassword}
            />
          </div>
          <div>
            <Button text={"SignUp"} onClick={handleSubmit} />
          </div>
          <div className="text-center text-green-300">
            Already have an account?
          </div>
        </div>
      </div>
    </div>
  );

  async function handleSubmit() {
    const data = {
      username,
      email,
      password,
    };
    await fetch("http://localhost:5000/api/v1/register", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
  }
};

export default SignUp;
