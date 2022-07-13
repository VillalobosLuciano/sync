import { GetStartedLayout } from '../components/GetStartedLayout';
import Link from 'next/link';
import Logo from '@/components/icons/Logo';
import { XIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import {
  ActiveDot,
  BottomSlider,
  GetStartedContainer,
  LeftPanel,
  RightPanel
} from '@/components/getStarted/GetStarted';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import Igniter from 'components/icons/Igniter';

export default function GetStarted() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const movePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((index) => index - 1);
    }
  };

  const moveNext = () => {
    if (currentSlide < 3) {
      setCurrentSlide((index) => index + 1);
    }
  };

  const isDisabled = (direction: string) => {
    if (direction === 'prev') {
      return currentSlide <= 0;
    }
    return false;
  };

  return (
    <>
      <GetStartedLayout>
        <GetStartedContainer>
          <button
            onClick={() => {
              router.push('/');
            }}
            className="absolute top-4 right-4 rounded hover:bg-cyan-500/20 p-1.5 cursor-pointer"
          >
            <XIcon className="block h-5 w-5" />
          </button>
          <LeftPanel>
            {currentSlide === 0 && <Logo />}
            {currentSlide === 1 && <Igniter />}
            {currentSlide === 2 && <Logo />}
            {currentSlide === 3 && <Igniter />}
          </LeftPanel>
          <RightPanel>
            <div className="pt-8 lg:pt-28 flex flex-col">
              <Logo className="w-16 h-10 lg:w-[90px]" />

              <div className="lg:pt-20 mb-auto">
                <label className="uppercase text-sm font-semibold text-zinc-300">
                  Get started with Sync Homes
                </label>
                <div className="font-bold text-2xl md:text-4xl text-white">
                  {currentSlide === 0 && (
                    <TextContent>
                      <p>
                        With Sanity you can structure your content, so it can be
                        transformed and distributed any way you like.
                      </p>
                      <p className="pt-8">This structure is your schema.</p>
                    </TextContent>
                  )}
                  {currentSlide === 1 && (
                    <TextContent>
                      <p>
                        From that schema, Sanity generates a UI to create
                        content.
                      </p>
                      <p className="pt-8">This is your Studio.</p>
                    </TextContent>
                  )}
                  {currentSlide === 2 && (
                    <TextContent>
                      <p>
                        Content created in Studio lives in a real-time datastore
                        you can connect to any application.
                      </p>
                      <p className="pt-8">This is Content Lake.</p>
                    </TextContent>
                  )}
                  {currentSlide === 3 && (
                    <TextContent>
                      <p>login comparito, esa es la wea...</p>
                      <p className="pt-8">Legal.</p>
                    </TextContent>
                  )}
                </div>
              </div>
              {currentSlide <= 2 && (
                <BottomSlider>
                  <button
                    onClick={movePrev}
                    className="items-center w-12 h-12 rounded-full flex justify-center hover:bg-cyan-500/30 transition-colors cursor-pointer disabled:hover:bg-transparent disabled:opacity-30 disabled:cursor-auto"
                    disabled={isDisabled('prev')}
                  >
                    <ChevronLeftIcon
                      className="flex-shrink-0 w-5 h-5 text-[#A9FFF1]"
                      aria-hidden="true"
                    />
                  </button>
                  <div className="flex space-x-3">
                    <ActiveDot
                      onClick={() => setCurrentSlide(0)}
                      dotIndex={0}
                      currentDot={currentSlide}
                    />
                    <ActiveDot
                      onClick={() => setCurrentSlide(1)}
                      dotIndex={1}
                      currentDot={currentSlide}
                    />
                    <ActiveDot
                      onClick={() => setCurrentSlide(2)}
                      dotIndex={2}
                      currentDot={currentSlide}
                    />
                  </div>
                  <button
                    onClick={moveNext}
                    className="items-center w-12 h-12 rounded-full flex justify-center bg-cyan-500/50 hover:bg-cyan-500/30 transition-colors cursor-pointer disabled:opacity-25 disabled:cursor-not-allowed"
                    disabled={isDisabled('next')}
                  >
                    <ChevronRightIcon
                      className="flex-shrink-0 w-5 h-5 text-[#A9FFF1]"
                      aria-hidden="true"
                    />
                  </button>
                </BottomSlider>
              )}
            </div>
          </RightPanel>
        </GetStartedContainer>
      </GetStartedLayout>
    </>
  );
}

export const TextContent: React.FC = ({ children }) => {
  return <p className="pt-8 lg:pt-12">{children}</p>;
};
