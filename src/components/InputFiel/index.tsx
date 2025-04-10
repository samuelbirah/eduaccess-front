interface InputFieldProps {
    label: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const InputField: React.FC<InputFieldProps> = ({
    label,
    type = "text",
    placeholder = "",
    value,
    onChange,
  }) => (
    <div>
      <label className="block text-sm font-bold py-2 text-blue-900">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-1 bg-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-800"
        required
      />
    </div>
  );
  
  export default InputField;
  