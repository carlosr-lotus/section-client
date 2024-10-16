import Link from "next/link";
import usePost from "./usePost";
import styles from "./Post.module.css";

type Tag = {
  label: string;
  color: string;
};

export type PostT = {
  id: number;
  sub: string;
  username: string;
  postedDate: string;
  likes: number;
  comments: number;
  title: string;
  content: string;
  tag?: Tag;
};

type Props = {
  post: PostT;
};

export default function Post({ post }: Props): JSX.Element {
  const { formatNumbers } = usePost();

  return (
    <Link
      style={{ width: "fit-content", margin: "0 auto" }}
      href={{ pathname: "/post", query: { id: post.id } }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <strong>{post.sub} &#9679;</strong>
          <span>{post.username} &#9679;</span>
          <span>{post.postedDate}</span>
        </div>
        <h1 className={styles.title}>{post.title}</h1>
        {post.tag && (
          <span
            className={styles.tag}
            style={{ backgroundColor: post.tag.color }}
          >
            {post.tag.label}
          </span>
        )}
        <section className={styles.content}>{post.content}</section>
        <hr />
        <div className={styles.bottom}>
          <div>
            <svg
              width="2rem"
              height="2rem"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M12 21L12 3M12 3L20.5 11.5M12 3L3.5 11.5"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span>{formatNumbers(post.likes)}</span>
          </div>
          <div>
            <svg
              width="2rem"
              height="2rem"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span>{formatNumbers(post.comments)}</span>
          </div>
          <div className={styles.share}>
            {/* <div>menu</div> */}
            <svg
              width="2rem"
              height="2rem"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M15.5 6.5L8.5 10.5"
                stroke="#fff"
                strokeWidth="1.5"
              ></path>
              <path
                d="M8.5 13.5L15.5 17.5"
                stroke="#fff"
                strokeWidth="1.5"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
