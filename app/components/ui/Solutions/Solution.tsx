import React, { useContext } from 'react';
import Link from 'next/link';
import { TileContext } from './Tile';
import cn from 'clsx';

export const SolutionContainer: React.FC = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
      {children}
    </div>
  );
};

export const SolutionBackground: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky">
    <div className="bg-black h-[30vh] lg:h-auto"></div>
    <div className="h-[70vh] lg:min-h-screen"></div>
  </div>
);

export const SolutionLeft: React.FC<{ progress: number }> = ({
  children,
  progress
}) => {
  let translateY = Math.max(0, 50 - progress * 3 * 50);
  if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);
  return (
    <div
      className="flex flex-col items-center justify-center text-3xl lg:text-4xl h-[30vh] lg:h-auto"
      style={{
        transform: `translateY(${translateY}px)`
      }}
    >
      <div className="leading-10">{children}</div>
    </div>
  );
};

export const SolutionRight: React.FC<{ progress: number }> = ({
  children,
  progress
}) => {
  const { currentTile } = useContext(TileContext);
  let translateY = Math.max(-50, -(progress - 0.5) * 50);
  return (
    <div
      className={cn(
        'flex flex-1 lg:items-center justify-center h-screen transition-colors',
        {
          'lg:bg-gradient-to-r bg-gradient-to-b from-black via-[#A9FFF1]/5 to-[#A9FFF1]/20':
            currentTile >= 0 && currentTile <= 0.85,
          'lg:bg-gradient-to-r bg-gradient-to-b from-black via-purple-500/5 to-purple-500/20':
            currentTile >= 1 && currentTile <= 1.85,
          'lg:bg-gradient-to-r bg-gradient-to-b from-black via-orange-500/5 to-orange-500/20':
            currentTile >= 2
        }
      )}
      style={{
        transform: `translateY(${translateY}px)`
      }}
    >
      <div className="w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0">
        {children}
      </div>
    </div>
  );
};

interface LinkProps {
  href: string;
}

export const SolutionLink: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-8 decoration-1"
      >
        {children}
      </a>
    </Link>
  );
};
