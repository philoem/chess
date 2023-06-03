import { component$} from '@builder.io/qwik';
import {useKickOff} from './hooks/useKickOff';
import styles from './index.module.css';

export default component$(() => {
  const allPieces = useKickOff();

  return (
    <div class={styles.container}>
      <div class={styles.board}>
        {allPieces.map((piece: any, index) => {
          const row = Math.floor(index / 8);
          if(row % 2 === 0) {
            return (
              <>  
                {index % 2 === 0 ? <div class={`${styles.square} ${styles.lightSquare}`} key={index}>{piece}</div> : 
                <div class={`${styles.square} ${styles.darkSquare}`} key={index}>
                  {piece}
                </div>}
              </>
            )
          } else if(row % 2 !== 0) {
            return (
              <>
                {index % 2 === 0 ? <div class={`${styles.square} ${styles.darkSquare}`} key={index}>{piece}</div> : 
                <div class={`${styles.square} ${styles.lightSquare}`} key={index}>{piece}</div>}
              </>
            )
          } 
        })}
      </div>
      <div class={styles.info} id='info'></div>
    </div>

  );
});