import { component$ } from '@builder.io/qwik';

export default component$(
	({
		size,
		color,
		draggable,
		outputRef
		// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	}: { size: string; color: string; draggable: boolean; outputRef: any }) => {
		return (
			<div draggable={draggable} ref={outputRef}>
				<svg xmlns='http://www.w3.org/2000/svg' height={size} viewBox='0 0 320 512'>
					<title>Pawn</title>
					<path
						fill={color}
						d='M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88H96c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400H240L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32h-8.5zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H281.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432H64L22.6 473.4z'
					/>
				</svg>
			</div>
		);
	}
);
