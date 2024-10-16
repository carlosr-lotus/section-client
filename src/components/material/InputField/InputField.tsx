import { CSSProperties, ChangeEvent, LegacyRef, FormEvent } from "react";
import styles from "./InputField.module.css";

type InputFieldProps = {
  name: string;
  type: "text" | "password" | "number";
  // required?: boolean;
  placeholder: string;
  className?: string;
  ref?: LegacyRef<HTMLInputElement> | undefined;
  // register: any;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onInput?: (e: FormEvent<HTMLInputElement>) => void;
  style?: CSSProperties;
};

export default function InputField({
  name,
  type,
  placeholder,
  // required,
  className,
  ref,
  // register,
  onChange,
  onInput,
  style,
}: InputFieldProps): JSX.Element {
  return (
    <div className={styles.container}>
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#000000"
      >
        <path
          d="M17 17L21 21"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M3 11C3 15.4183 6.58172 19 11 19C13.213 19 15.2161 18.1015 16.6644 16.6493C18.1077 15.2022 19 13.2053 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11Z"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={className ? className : styles.inputFieldBorderAround}
        onChange={onChange}
        style={style}
        ref={ref}
        onInput={(e) => (onInput ? onInput(e) : null)}
        // {...register(name, { required })}
      />
    </div>
  );
}
