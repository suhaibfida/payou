import SignupBg from "./images/signup.png";
import Input from "./Input.js";
import Button from "./Button.js";
const SignUp = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center ng-no-repeat"
      style={{ backgroundImage: `url(${SignupBg})` }}
    >
      <div className="flex h-screen items-center justify-center">
        <div className="w-80 p-9 backdrop-blur-xl bg-white/10 border border-gray-700 shadow-lg rounded-xl">
          <div className="text-center  text-3xl text-green-400 font-bold p-3">
            SignUp
          </div>
          <div className="text-gray-300 text-bold text-lg">Username</div>
          <div>{<Input placeholder={"Username"} />}</div>
          <div className="text-gray-300 text-bold text-lg">Email</div>
          <div>{<Input placeholder={"Email"} />}</div>
          <div className="text-gray-300 text-bold text-lg">Password</div>
          <div>
            <Input placeholder={"Password"} />
          </div>
          <div>
            <Button text={"SignUp"} />
          </div>
          <div className="text-center text-green-400">
            Already have an account?
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
