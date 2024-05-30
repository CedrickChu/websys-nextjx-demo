import React from "react";
import { useFormContext } from "react-hook-form";
import useSWR from "swr";

type FormInputProps = {
  label: string;
  name: string;
  type?: string;
  url?: string; // Make 'url' property optional
};

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = "text",
  url,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { data, error } = useSWR(url);

  return (
    <div className="">
      <label htmlFor={name} className="block text-block">
        {label}
      </label>
      <input
        type={type}
        placeholder=" "
        className="block text-black	w-full rounded-2xl appearance-none focus:outline-none py-2 px-4"
        {...register(name)}
      />
      {errors[name] && (
        <span className="text-red-500 text-xs pt-1 block">
          {errors[name]?.message as string}
        </span>
      )}
      {/* Display fetched data */}
      {data && (
        <div>
          <p>Data: {JSON.stringify(data)}</p> {/* Convert data to string */}
        </div>
      )}
      {/* Display error if any */}
      {error && <div>Error: {JSON.stringify(error)}</div>} {/* Convert error to string */}
    </div>
  );
};

export default FormInput;
