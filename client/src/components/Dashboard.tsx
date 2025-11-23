import dash from "./images/dash.png";
import Navbar from "./Navbar.js";
import Input from "./Input.js";
const Dashboard = () => {
  return (
    <div>
      <div
        className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${dash})` }}
      >
        <div>
          <Navbar />
        </div>
        <div className="text-right text-2xl font-extrabold text-gray-400 pt-5 pr-7">
          Your balance is $4730.3
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-110 h-130 backdrop-blur-xl bg-white/20 bg-gray-500 border border-xl rounded-xl">
            <div className="text-3xl text-center text-2xl text-green-700 font-extrabold p-6">
              Transfer
            </div>
            <div className="text-gray-400 font-bold text-center text-lg p-2">
              Search users
            </div>
            <div className="flex justify-center">
              <Input placeholder={"Search....."} type={"text"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
