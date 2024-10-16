// import Image from "next/image";
"use client";

import Header from "@/components/header/Header";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1>Main Container</h1>
      </main>
    </div>
  );
}
