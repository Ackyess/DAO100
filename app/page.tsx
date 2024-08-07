"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    const shuffleArray = (array: any[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };
    const cardData = [
    {
        title: "走向天空的人",
        url: "https://neu11.learnwithgpt.space/",
        description: "Access to GPT-4o mini",
      },
      {
        title: "轨道反射器",
        url: "https://neu12.learnwithgpt.space/",
        description: " Access to GPT-4o mini",
      },
            {
        title: "洞穴之喻",
        url: "https://neu13.learnwithgpt.space/",
        description: " Access to GPT-4o mini",
      },
      {
        title: "时钟总是错的",
        url: "https://neu14.learnwithgpt.space/",
        description: " Access to GPT-4o mini",
      },
      {
        title: "二分之一个月亮",
        url: "https://neu15.learnwithgpt.space/",
        description: " Access to GPT-4o mini",
      },
      {
        title: "关于无的无所有",
        url: "https://neu16.learnwithgpt.space/",
        description: " Access to GPT-4o mini",
      },

    ];

    shuffleArray(cardData);
    setCards(cardData);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started with&nbsp;
          <code className={styles.code}>ChatGPT</code>
        </p>
        <div></div>
        <a style={{ color: "#808080" }}>Supported by DAO  </a>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={140}
          height={140}
          priority
        />
      </div>
       <div className={styles.center}>
<p className={styles.tip}>

  </p>
  </div>
      <div className={styles.grid}>
        {cards.map((card, index) => (
          <a key={index} href={card.url} className={styles.card}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </a>
        ))}
      </div>

      <div>
        <p className={styles.tip}>
             
          tips：每次页面刷新会打乱排序，请记住之前使用的账号名称。如果某个账号无法使用，可以换一个用。显示未找到share_token，需更换国内网络。对话内容可能会受到审查，请不要问不文明的问题
           <p className={styles.spacer}></p>
        </p>
      </div>
      
    </main>
  );
}
