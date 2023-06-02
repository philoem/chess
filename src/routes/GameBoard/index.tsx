import { component$ } from '@builder.io/qwik';
import styles from './index.module.css'

export default component$(() => {  
  return (
    <div class={styles.container}>
      <div class={styles.board}></div>
      <div class={styles.info}></div>
    </div>

  );
});