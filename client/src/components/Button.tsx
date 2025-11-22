interface props {
  text: string;
}

export const Button = ({ text }: props) => {
  return (
    <div className="p-5 flex justify-center">
      <button className="py-2  px-11 bg-green-700 rounded-lg text-white text-bold ">
        {text}
      </button>
    </div>
  );
};
export default Button;
