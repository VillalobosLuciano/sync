import cn from 'clsx';

export const GetStartedContainer: React.FC = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 min-h-screen">
      {children}
    </div>
  );
};

export const LeftPanel: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col items-center lg:col-span-3 justify-center text-3xl lg:text-4xl h-[30vh] lg:h-auto bg-cyan-500/10">
      {children}
    </div>
  );
};

export const RightPanel: React.FC = ({ children }) => {
  return (
    <div className="flex flex-1 h-[70vh] lg:h-auto lg:col-span-2 px-6 lg:px-12">
      {children}
    </div>
  );
};

interface Props {
  dotIndex: number;
  currentDot: number;
  onClick: any;
}

export const ActiveDot: React.FC<Props> = ({
  onClick,
  dotIndex,
  currentDot
}) => {
  const isActive = currentDot === dotIndex;

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };

  return (
    <div
      onClick={handleClick}
      className={cn('p-1 rounded-full cursor-pointer', {
        ' bg-[#A9FFF1]': isActive,
        'bg-zinc-500': !isActive
      })}
    ></div>
  );
};

export const BottomSlider: React.FC = ({ children }) => {
  return (
    <div className="flex flex-row items-center justify-between mb-16 px-2 lg:px-6">
      {children}
    </div>
  );
};
