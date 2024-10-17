import styles from "./Post.module.css";

// type Tag = {
//   label: string;
//   color: string;
// };

// type Props = {
//   sub: string;
//   username: string;
//   postedDate: string;
//   title: string;
//   content: string;
//   tag?: Tag;
// };

export default function Post(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <strong>/cooking &#9679;</strong>
        <span>u/beginner &#9679;</span>
        <span>1d</span>
      </div>
      <h1 className={styles.title}>I tried to make a chocolate cake.</h1>
      <span className={styles.tag}>Kitchen Help</span>
      <section className={styles.content}>
        I tried to make a chocolate cake today and then suddenly this
        happened...
      </section>
      <div>line</div>
      <div className={styles.bottom}>
        <div>1k</div>
        <div>1.5k</div>
        <div className={styles.share}>share</div>
      </div>
    </div>
  );
}
