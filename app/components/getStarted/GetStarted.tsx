import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

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

export const BottomSlider: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between mb-16 px-6">
      <div className="items-center w-12 h-12 rounded-full flex justify-center hover:bg-cyan-500/30 transition-colors cursor-pointer">
        <ChevronLeftIcon
          className="flex-shrink-0 w-5 h-5 text-[#A9FFF1]"
          aria-hidden="true"
        />
      </div>
      <div className="flex space-x-3">
        <div className="p-1 rounded-full cursor-pointer bg-[#A9FFF1]"></div>
        <div className="p-1 rounded-full cursor-pointer bg-zinc-500"></div>
        <div className="p-1 rounded-full cursor-pointer bg-zinc-500"></div>
      </div>
      <div className="items-center w-12 h-12 rounded-full flex justify-center bg-cyan-500/50 hover:bg-cyan-500/30 transition-colors cursor-pointer">
        <ChevronRightIcon
          className="flex-shrink-0 w-5 h-5 text-[#A9FFF1]"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
