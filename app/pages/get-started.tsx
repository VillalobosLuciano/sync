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
import { useUser } from '@supabase/supabase-auth-helpers/react';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';
import { Provider } from '@supabase/supabase-js';
import GitHub from '@/components/icons/GitHub';
import Button from '@/components/ui/Button';

export default function GetStarted() {
  const router = useRouter();
  const { user } = useUser();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type?: string; content?: string }>({
    type: '',
    content: ''
  });

  const handleOAuthSignIn = async (provider: Provider) => {
    setLoading(true);
    const { error } = await supabaseClient.auth.signIn({ provider });
    if (error) {
      setMessage({ type: 'error', content: error.message });
    }
    setLoading(false);
  };

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

              <div className="lg:pt-14 mb-auto">
                <label className="uppercase text-sm font-semibold text-zinc-300">
                  Get started with Sync Homes
                </label>
                <div className="">
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
                    <div>
                      <TextContent>
                        <p>Learn the basics.</p>
                      </TextContent>
                      <p className="pt-4 text-zinc-200">
                        We’ll walk you through setting up Studio, publishing
                        your content, and connecting a frontend. It’s quick and
                        free.
                        <p className="pt-2">Simply sign up to continue.</p>
                      </p>
                      <div className="flex flex-col pt-12">
                        <div className="w-80">
                          <Button
                            variant="slim"
                            type="submit"
                            disabled={loading}
                            onClick={() => handleOAuthSignIn('github')}
                          >
                            <GitHub />
                            <span className="ml-2">Continue with GitHub</span>
                          </Button>
                        </div>
                        <Link href="/signup">
                          <a className="text-[#A9FFF1] hover:text-[#A9FFF1]/80 transition-colors pt-2.5">
                            Sign up with email
                          </a>
                        </Link>
                      </div>
                      <div className="flex pt-14">
                        <p className="text-zinc-200">
                          Already have an account?
                        </p>
                        <Link href="/signin">
                          <a className="text-[#A9FFF1] hover:text-[#A9FFF1]/80 transition-colors ml-2">
                            Sign in
                          </a>
                        </Link>
                      </div>
                    </div>
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
  return (
    <div>
      <p className="font-bold text-2xl md:text-4xl text-white pt-8">
        {children}
      </p>
    </div>
  );
};
