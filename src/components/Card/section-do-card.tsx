import styles from '@/styles/card.module.scss';
import { useState } from "react";

export const Card = () => {
    const [view, setView] = useState(false)
    const [type, setType] = useState("password")
  
    const verSenha = () => {
      setView(!view)
      if(view) {
        setType("text")
      }
      else{
        setType("password")
      }
    }

    return (
        <section className={styles.section}>
            <div className={styles.cardlog}>
                <h3 className={styles.h3}>login</h3>
                <div className={styles.center}>
                    <input className={styles.input} type='text' placeholder='email' />
                    <div className={styles.senha}>
                        <input className={styles.input} type={ type } placeholder='password' />
                        <button className={styles.buttonsen} onClick={verSenha}>{view ? '🙈' : '🙉'}</button>
                    </div>
                </div>
                <button className={styles.buttonlog}>login</button>
            </div>
        </section>
    )
}