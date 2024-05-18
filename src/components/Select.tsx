interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
}

const Select = (props: SelectProps) => {
  return (
    <select
      value={props.value}
      name="HeadlineAct"
      id="HeadlineAct"
      className="w-full border-gray-300 text-gray-700 sm:text-sm"
      onChange={props.onChange}
    >
      {props?.options?.map((option) => (
        <option value={option?.value}>{option?.label}</option>
      ))}
    </select>
  );
};

export default Select;
