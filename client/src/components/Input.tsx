interface props {
  placeholder: string;
  type: string;
  value?: string;
  onChange?: (value: string) => void;
}
export const Input = ({ placeholder, type, value, onChange }: props) => {
  return (
    <div className="p-1">
      <input
        className="px-10 py-2 rounded border border-green-700 outline-none text-gray-300"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
};
export default Input;
