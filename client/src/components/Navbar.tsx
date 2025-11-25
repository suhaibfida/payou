import PayouLogo from "./icons/Payou.js";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center backdrop-blur-xl bg-white/10 px-6 py-1 border border-green-700">
      <PayouLogo />

      <div className="flex items-center gap-3 text-white">
        <span className="text-gray-300 font-bold">Hi Suhaib !!!</span>
        <div className="w-10 h-10 bg-green-700 rounded-full">------</div>
      </div>
    </div>
  );
};

export default Navbar;
