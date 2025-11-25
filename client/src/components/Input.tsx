interface props {
  placeholder: string;
  type: string;
}
export const Input = ({ placeholder, type }: props) => {
  return (
    <div className="p-1">
      <input
        className="px-10 py-2 rounded border border-green-700 outline-none text-gray-300"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};
export default Input;
