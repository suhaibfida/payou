import Input from "./Input.js";
import Back from "./images/back.png";
import Button from "./Button.js";
import PayouLogo from "./icons/Payou.js";
const Transfer = () => {
  return (
    <div className="min-h-screen" style={{ backgroundImage: `url(${Back})` }}>
      <div className="p-5">
        <PayouLogo />
      </div>
      <div className=" flex flex-col items-center justify-center py-10">
        <div className=" rounded-2xl backdrop-blur-xl bg-white/10 w-100 h-120 border border-green-500">
          <div className="text-green-600 text-center p-5 font-bold text-3xl ">
            Send Money
          </div>
          <div className="text-white font-bold pl-30 pt-10">
            Amount in Dollars $
          </div>
          <div className="pl-15 pt-10">
            <Input placeholder={"Enter Amount"} type={"text"} />
          </div>
          <div className="pt-1">
            <Button text={"Send"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Transfer;
