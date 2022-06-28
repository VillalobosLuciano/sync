import { GetStartedLayout } from '../components/GetStartedLayout';
import Link from 'next/link';
import Logo from '@/components/icons/Logo';
import { XIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import {
  BottomSlider,
  GetStartedContainer,
  LeftPanel,
  RightPanel
} from '@/components/getStarted/GetStarted';

export default function GetStarted() {
  const router = useRouter();

  return (
    <>
      <GetStartedLayout>
        <GetStartedContainer>
          <LeftPanel>
            <button
              onClick={() => {
                router.push('/');
              }}
              className="absolute top-4 right-4 rounded hover:bg-cyan-500/20 p-1.5 cursor-pointer"
            >
              <XIcon className="block h-5 w-5" />
            </button>
            <div className="">
              <Logo />
            </div>
          </LeftPanel>
          <RightPanel>
            <div className="pt-8 lg:pt-28 flex flex-col">
              <Logo className="w-16 h-10 lg:w-[90px]" />

              <div className="lg:pt-20 mb-auto">
                <label className="uppercase text-sm font-semibold text-zinc-300">
                  Get started with Sync Homes
                </label>
                <div className="font-bold text-2xl md:text-4xl text-white">
                  <p className="pt-8 lg:pt-12">
                    With Sanity you can structure your content, so it can be
                    transformed and distributed any way you like.
                  </p>
                  <p className="pt-8">This structure is your schema.</p>
                </div>
              </div>
              <BottomSlider />
            </div>
          </RightPanel>
        </GetStartedContainer>
      </GetStartedLayout>
    </>
  );
}
