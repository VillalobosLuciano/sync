import { ScrollContext } from 'context/scroll-observer';
import React, { useRef, useContext } from 'react';

interface WrapperProps {
  numberOfTiles: number;
}

interface TileContextvalue {
  numberOfTiles: number;
  currentTile: number;
}

export const TileContext = React.createContext<TileContextvalue>({
  numberOfTiles: 0,
  currentTile: 0
});

export const TileWrapper: React.FC<WrapperProps> = ({
  numberOfTiles,
  children
}) => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);
  let currentTile = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenHeight = window.innerHeight;
    const halfScreenHeight = screenHeight / 2;
    const percentY =
      Math.min(
        clientHeight + halfScreenHeight,
        Math.max(-screenHeight, scrollY - offsetTop) + halfScreenHeight
      ) / clientHeight;
    currentTile = percentY * numberOfTiles;
  }

  return (
    <TileContext.Provider
      value={{
        numberOfTiles,
        currentTile
      }}
    >
      <div
        ref={refContainer}
        className="relative bg-black text-white"
        style={{
          height: numberOfTiles * 100 + 'vh'
        }}
      >
        {children}
      </div>
    </TileContext.Provider>
  );
};

export const TileBackground: React.FC = ({ children }) => {
  return <div className="absolute h-full w-full">{children}</div>;
};

export const TileContent: React.FC = ({ children }) => {
  return (
    <div className="sticky top-0 h-screen overflow-hidden">{children}</div>
  );
};

interface Props {
  tile: number;
  renderContent: (props: { progress: number }) => any;
}

export const Tile: React.FC<Props> = ({ tile, renderContent }) => {
  const { numberOfTiles, currentTile } = useContext(TileContext);
  const progress = Math.max(0, currentTile - tile);
  const refContainer = useRef<HTMLDivElement>(null);

  let opacity = Math.min(1, Math.max(0, progress * 4));
  if (progress > 0.85 && tile < numberOfTiles - 1) {
    opacity = Math.max(0, (1.0 - progress) * 4);
  }

  return (
    <div
      ref={refContainer}
      className="absolute top-0 w-full"
      style={{
        pointerEvents: progress <= 0 || progress >= 1 ? 'none' : undefined,
        opacity
      }}
    >
      {renderContent({ progress })}
    </div>
  );
};
