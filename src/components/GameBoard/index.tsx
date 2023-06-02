import { component$, useStore, useTask$ } from '@builder.io/qwik';
import styles from './index.module.css';
import Rook from '~/assets/pieces/Rook';
import Pawn from '~/assets/pieces/Pawn';
import Knight from '~/assets/pieces/Knight';
import Bishop from '~/assets/pieces/Bishop';
import Queen from '~/assets/pieces/Queen';
import King from '~/assets/pieces/King';

export default component$(() => {
  const rook = <Rook />;
  const pawn = <Pawn />;
  const knight = <Knight />;
  const bishop = <Bishop />;
  const queen = <Queen />;
  const king = <King />;

  const allPieces = useStore([rook, knight, bishop, queen, king, bishop, knight, rook, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    pawn, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 
    ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook
  ]);

  useTask$(() => {
    // eslint-disable-next-line qwik/valid-lexical-scope
    allPieces;
  });

  return (
    <div class={styles.container}>
      <div class={styles.board}>
        {allPieces.map((piece: any, index) => {
          console.log('piece :>> ', piece);
          const row = Math.floor(index / 8);
          if(row % 2 === 0) {
            return (
              <>  
                {index % 2 === 0 ? <div class={`${styles.square} ${styles.lightSquare}`} key={index}>{piece}</div> : 
                <div class={`${styles.square} ${styles.darkSquare}`} key={index}>{piece}</div>}
              </>
            )
          } else {
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