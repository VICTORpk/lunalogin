import styles from "@/styles/Home.module.css";
import { Card } from "@/components/Card/section-do-card";
import universo from '@/assets/universe2.jpg'
import astronaut from '@/assets/astronaut-animate.svg'
import fireball from '@/assets/fire-ball-animate.svg'
import Image from "next/image";


export default function Home() {
  return (
    <main className={styles.main}>
      
      <Image
        src={fireball}
        alt="fireball"
        className={styles.fireball}
      />

      <Image
        src={astronaut}
        alt="astronaut"
        className={styles.astronaut}
      />

      <Card />
    </main>
  );
}
