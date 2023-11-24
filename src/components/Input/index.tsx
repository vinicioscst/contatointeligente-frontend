'use client'

interface IInputProps {
    handleData: (value: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    id: string;
    name: string;
    label: string;
  }

function Input({type, id, name, label, handleData}: IInputProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        className="w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500 shadow-sm shadow-slate-300"
        onChange={(e) => handleData(e)} required={name === "avatar" ? false : true}
      />
    </div>
  );
}

export default Input;
