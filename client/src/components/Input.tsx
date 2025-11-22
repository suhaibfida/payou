interface props {
  placeholder: string;
}
export const Input = ({ placeholder }: props) => {
  return (
    <div className="p-1">
      <input
        className="px-8 py-2 rounded border border-gray-900 outline-none border-black"
        placeholder={placeholder}
      />
    </div>
  );
};
export default Input;
