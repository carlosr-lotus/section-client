// import Image from "next/image";
"use client";

import { useCallback, useEffect, useState } from "react";

// Components
import Header from "@/components/core/header/Header";
import Post from "@/components/core/post/Post";

// Services
import { getApi } from "@/services/api";

// Types
import { PostT } from "@/components/core/post/Post";
import { AxiosResponse } from "axios";

import styles from "./page.module.css";

export default function Home() {
  const api = getApi();
  const [posts, setPosts] = useState<PostT[]>([]);

  const readPosts = useCallback(async () => {
    try {
      const res: AxiosResponse<PostT[]> = await api.get("/posts");
      setPosts(res.data);
    } catch (err) {
      console.log("Error fetching posts: " + err);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    readPosts();
  }, [readPosts]);

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        {posts && posts.length >= 1 ? (
          posts.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
}
