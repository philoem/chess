import { component$, useSignal } from '@builder.io/qwik';
import {useKickOff} from './hooks/useKickOff';
import styles from './index.module.css';
import { useDraggable } from './hooks/useDraggable';

export default component$(() => {
  const allPieces = useKickOff();
  const draggedPiece = useSignal(null);
  const dragNdrop = useDraggable({ draggedPiece, position: 0 });

  return (
    <div class={styles.container}>
      <div class={styles.board}>
        {allPieces.map((piece: any, index) => {
          const row = Math.floor(index / 8);
          if(row % 2 === 0) {
            return (
              <>  
                {index % 2 === 0 ? <div class={`${styles.square} ${styles.lightSquare}`} key={index}
                  onDragStart$={(e) => dragNdrop.dragStart(e, index)} 
                  onDragOver$={(e) => dragNdrop.dragOver(e)}
                  onDrop$={(e) => dragNdrop.dragDrop(e)}>
                  {piece}
                </div> : 
                <div class={`${styles.square} ${styles.darkSquare}`} key={index}
                  onDragStart$={(e) => dragNdrop.dragStart(e, index)} 
                  onDragOver$={(e) => dragNdrop.dragOver(e)}
                  onDrop$={(e) => dragNdrop.dragDrop(e)}>
                  {piece}
                </div>}
              </>
            )
          } else if(row % 2 !== 0) {
            return (
              <>
                {index % 2 === 0 ? <div class={`${styles.square} ${styles.darkSquare}`} key={index}
                  onDragStart$={(e) => dragNdrop.dragStart(e, index)} 
                  onDragOver$={(e) => dragNdrop.dragOver(e)}
                  onDrop$={(e) => dragNdrop.dragDrop(e)}>
                  {piece}
                </div> : 
                <div class={`${styles.square} ${styles.lightSquare}`} key={index} 
                  onDragStart$={(e) => dragNdrop.dragStart(e, index)} 
                  onDragOver$={(e) => dragNdrop.dragOver(e)}
                  onDrop$={(e) => dragNdrop.dragDrop(e)}>
                  {piece}
                </div>}
              </>
            )
          } 
        })}
      </div>
      <div class={styles.info} id='info'></div>
    </div>

  );
});