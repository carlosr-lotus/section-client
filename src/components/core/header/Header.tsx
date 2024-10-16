import InputField from "@/components/material/InputField/InputField";

import styles from "./Header.module.css";

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>/s</div>
      <InputField name="Search" placeholder="Search..." type="text" />
    </header>
  );
}
