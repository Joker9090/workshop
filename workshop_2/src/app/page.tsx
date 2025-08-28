'use client';
import dynamic from "next/dynamic";
import styles from "./page.module.css";

export default function Home() {

  // dynamic import
  const Game = dynamic(() => import("../game"), { ssr: false });


  return (
    <div className={styles.page}>
      <Game />
    </div>
  );
}
