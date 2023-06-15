import { $ } from '@builder.io/qwik';

export function useDraggable({ draggedPiece }: any) {
	const dragStart = $((e: { target: any }) => {
		draggedPiece.value = e.target;
	});
	const dragOver = $((e: { preventDefault: () => void }) => {
		e.preventDefault();
	});
	const dragDrop = $((e: any) => {
		e.preventDefault();
		if (draggedPiece.value !== null) {
			e.target.appendChild(draggedPiece.value);
		}
	});

	return { dragStart, dragOver, dragDrop };
}
