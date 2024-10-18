"use client";

import { useCallback, useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";

import Header from "@/components/core/header/Header";
import Post from "@/components/core/post/Post";

import { getApi } from "@/services/api";

import { PostT } from "@/components/core/post/Post";
import styles from "./PostPage.module.css";

export default function PostPage(): JSX.Element {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const api = getApi();

  const [post, setPost] = useState<PostT[]>([]);

  const readPost = useCallback(() => {
    api
      .get(`/posts?id=${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    readPost();
  }, [readPost]);

  return (
    <div className={styles.page}>
      <Header />
      {post && post.length === 1 && <Post post={post[0]} />}
    </div>
  );
}
