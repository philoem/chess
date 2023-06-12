import { component$ } from '@builder.io/qwik';
import styles from './index.module.css';
import GameBoard from '~/components/GameBoard';

export default component$(() => {
	const players = ['player1', 'player2'];
	/**
	 * Returns a random player from the given array of players.
	 *
	 * @param {string[]} players - An array of strings containing the names of players.
	 * @return {string} - A string representing the name of the randomly chosen player.
	 */
	function choosePlayer(players: string[]): string {
		return players[Math.floor(Math.random() * players.length)];
	}

	return (
		<>
			<h1 class={styles.text}>Hi 👋</h1>
			<p class={styles.text}>
				You are <strong>{choosePlayer(players)}</strong>,
				<br />
				Go
			</p>
			<GameBoard />
		</>
	);
});
