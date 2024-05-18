interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label, ...rest }: InputProps) => {
  return (
    <label
      htmlFor={label}
      className="relative block rounded-md shadow-sm w-full"
    >
      <input
        type="text"
        id={label}
        className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
        placeholder={label}
        {...rest}
      />

      <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2  p-0.5 text-xs bg-slate-950 text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
        {label}
      </span>
    </label>
  );
};

export default Input;
