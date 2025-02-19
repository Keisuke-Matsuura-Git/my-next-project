import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link"
import Category from "@/app/_components/Category";
import Date from "@/app/_components/Date";
import { News } from "@/app/_libs/microcms";


type Props = {
  news: News[];
};


export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <div>記事がありません</div>;
  }
  return (
    <ul>
      {news.map((article) => (
        <li key={article.id} className={styles.list}>
          <Link href={'/news/${article.id}'} className={styles.link}>
            <Image
              className={styles.image}
              src="/no-image.png"
              alt=""
              width={1200}
              height={630}
            />
            <dl className={styles.content}>
              <dt className={styles.title}>{article.title}</dt>
              <dd className={styles.meta}>
                <Category category ={article.category}/>
                <Date date ={article.publishedAt ?? article.createdAt} />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}