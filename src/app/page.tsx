// import Image from "next/image";
"use client";

import Header from "@/components/core/header/Header";
import Post from "@/components/core/post/Post";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Post />
        <Post />
        <Post />
      </main>
    </div>
  );
}
