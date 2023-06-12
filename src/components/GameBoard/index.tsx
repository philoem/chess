import { component$, useSignal } from '@builder.io/qwik';
import { useKickOff } from './hooks/useKickOff';
import { useDraggable } from './hooks/useDraggable';
import { useDisplayRefs } from './hooks/useDisplayRefs';
import styles from './index.module.css';

export default component$(() => {
	const draggedPiece = useSignal(null);
	const allPieces = useKickOff();
	const { dragStart, dragOver, dragDrop } = useDraggable({ draggedPiece });
	const { lettersDisplayed, numbersDisplayed } = useDisplayRefs();

	return (
		<div class={styles.container}>
			<div class={styles.board}>
				<div class={styles.numbers}>
					{numbersDisplayed().map((number) => (
						<div key={number}>{number}</div>
					))}
				</div>
				{/* rome-ignore lint/suspicious/noExplicitAny: <explanation> */}
				{allPieces.map((piece: any, index) => {
					const row = Math.floor(index / 8);
					if (row % 2 === 0) {
						return (
							<>
								{index % 2 === 0 ? (
									<div
										class={`${styles.square} ${styles.lightSquare}`}
										// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										key={index}
										onDragStart$={(e) => dragStart(e)}
										onDragOver$={(e) => dragOver(e)}
										onDrop$={(e) => dragDrop(e)}
									>
										{piece}
									</div>
								) : (
									<div
										class={`${styles.square} ${styles.darkSquare}`}
										// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										key={index}
										onDragStart$={(e) => dragStart(e)}
										onDragOver$={(e) => dragOver(e)}
										onDrop$={(e) => dragDrop(e)}
									>
										{piece}
									</div>
								)}
							</>
						);
					} else if (row % 2 !== 0) {
						return (
							<>
								{index % 2 === 0 ? (
									<div
										class={`${styles.square} ${styles.darkSquare}`}
										// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										key={index}
										onDragStart$={(e) => dragStart(e)}
										onDragOver$={(e) => dragOver(e)}
										onDrop$={(e) => dragDrop(e)}
									>
										{piece}
									</div>
								) : (
									<div
										class={`${styles.square} ${styles.lightSquare}`}
										// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										key={index}
										onDragStart$={(e) => dragStart(e)}
										onDragOver$={(e) => dragOver(e)}
										onDrop$={(e) => dragDrop(e)}
									>
										{piece}
									</div>
								)}
							</>
						);
					}
				})}
				<div class={styles.letters}>
					{lettersDisplayed().map((letter, index) => (
						// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<div key={index}>{letter}</div>
					))}
				</div>
			</div>
			<div class={styles.info} id='info' />
		</div>
	);
});
