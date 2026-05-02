interface FormInputProps {
  name: string;
  type: string;
  id: string;
  placeholder: string;
  autoComplete?: string;
  required: boolean;
}

export default function FormInput({
  name,
  type,
  id,
  placeholder,
  autoComplete,
  required = false,
}: FormInputProps) {
  return (
    <input
      name={name}
      type={type}
      id={id}
      placeholder={placeholder}
      autoComplete={autoComplete}
      required={required}
      className="border-app-secondary focus:border-app-primary border-b-2 px-2 py-1 text-lg transition-[border-color] duration-300 focus:outline-0"
    />
  );
}
