import { component$, useStore, useTask$ } from '@builder.io/qwik';
import styles from './index.module.css';
import Rook from '~/assets/pieces/Rook';
import Pawn from '~/assets/pieces/Pawn';
import Knight from '~/assets/pieces/Knight';
import Bishop from '~/assets/pieces/Bishop';
import Queen from '~/assets/pieces/Queen';
import King from '~/assets/pieces/King';

export default component$(() => {
  const rook = <Rook size={'2.3em'} color={'white'} />;
  const pawn = <Pawn size={'2.3em'} color={'white'} />;
  const knight = <Knight size={'2.3em'} color={'white'} />;
  const bishop = <Bishop size={'2.3em'} color={'white'} />;
  const queen = <Queen size={'2.3em'} color={'white'} />;
  const king = <King size={'2.3em'} color={'white'} />;

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