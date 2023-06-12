import { $ } from '@builder.io/qwik';

// rome-ignore lint/suspicious/noExplicitAny: <explanation>
export function useDraggable({ draggedPiece }: any) {
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	const dragStart = $((e: { target: any }) => {
		draggedPiece.value = e.target;
	});
	const dragOver = $((e: { preventDefault: () => void }) => {
		e.preventDefault();
	});
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	const dragDrop = $((e: any) => {
		e.preventDefault();
		if (draggedPiece.value !== null) {
			e.target.appendChild(draggedPiece.value);
		}
	});

	return { dragStart, dragOver, dragDrop };
}
