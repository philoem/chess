import { useStore } from '@builder.io/qwik';
import Bishop from '~/assets/pieces/Bishop';
import King from '~/assets/pieces/King';
import Knight from '~/assets/pieces/Knight';
import Pawn from '~/assets/pieces/Pawn';
import Queen from '~/assets/pieces/Queen';
import Rook from '~/assets/pieces/Rook';

export function useKickOff() {

  const rookBlack = <Rook key={'rookBlack'} size={'2.3em'} color={'black'} draggable={true} />;
  const pawnBlack = <Pawn key={'pawnBlack'} size={'2.3em'} color={'black'} draggable={true} />;
  const knightBlack = <Knight key={'knightBlack'} size={'2.3em'} color={'black'} draggable={true} />;
  const bishopBlack = <Bishop key={'bishopBlack'} size={'2.3em'} color={'black'} draggable={true} />;
  const queenBlack = <Queen key={'queenBlack'} size={'2.3em'} color={'black'} draggable={true} />;
  const kingBlack = <King key={'kingBlack'} size={'2.3em'} color={'black'} draggable={true} />;
  const rookWhite = <Rook key={'rookWhite'} size={'2.3em'} color={'white'} draggable={true} />;
  const pawnWhite = <Pawn key={'pawnWhite'}size={'2.3em'} color={'white'} draggable={true} />;
  const knightWhite = <Knight key={'knightWhite'} size={'2.3em'} color={'white'} draggable={true} />;
  const bishopWhite = <Bishop key={'bishopWhite'} size={'2.3em'} color={'white'}  draggable={true} />;
  const queenWhite = <Queen key={'queenWhite'} size={'2.3em'} color={'white'} draggable={true} />;
  const kingWhite = <King key={'kingWhite'} size={'2.3em'} color={'white'} draggable={true} />;

  const allPieces = useStore([rookBlack, knightBlack, bishopBlack, queenBlack, kingBlack, bishopBlack, knightBlack, rookBlack, pawnBlack, pawnBlack, pawnBlack, pawnBlack, pawnBlack, pawnBlack, pawnBlack,
    pawnBlack, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 
    ' ', ' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', pawnWhite, pawnWhite, pawnWhite, pawnWhite, pawnWhite, pawnWhite, pawnWhite, pawnWhite,
    rookWhite, knightWhite, bishopWhite, queenWhite, kingWhite, bishopWhite, knightWhite, rookWhite
  ]);
  
  return allPieces;
}