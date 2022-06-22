import Marquee from '@/components/ui/Marquee';
import IntegrationCard from '@/components/ui/IntegrationCard';

import Image from 'next/image';
import Solutions from '../components/ui/Solutions/Solutions';

export default function index() {
  const integrations = [
    {
      id: '1',
      name: 'amazon',
      url: 'asd',
      image: '/integrations/amazon.svg'
    },
    {
      id: '2',
      name: 'google',
      url: 'asdasdasd',
      image: '/integrations/google.svg'
    },
    {
      id: '3',
      name: 'legrand',
      url: 'asdasdasd',
      image: '/integrations/legrand.svg'
    },
    {
      id: '4',
      name: 'schneider',
      url: 'asdasdasd',
      image: '/integrations/schneider.svg'
    },
    {
      id: '5',
      name: 'smartThings',
      url: 'asdasdasd',
      image: '/integrations/smartThings.svg'
    }
  ];

  return (
    <>
      <div className="bg-black pb-8 sm:pb-12 lg:pb-12">
        <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-6">
            <div>
              <div className="mt-20">
                <div>
                  <a href="#" className="inline-flex space-x-4">
                    <span className="rounded bg-[#A9FFF1]/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-[#A9FFF1]">
                      Proof of concept
                    </span>
                  </a>
                </div>
                <div className="mt-6 sm:max-w-xl">
                  <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                    Easily upgrade your home to a smart home
                  </h1>
                  <p className="mt-6 text-xl text-zinc-200">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="relative sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-10">
                <div className="flex-col flex absolute py-6 space-y-4">
                  <div>
                    <Image
                      src="https://media0.giphy.com/media/J4yNWuvc2afezrAnQ2/giphy.gif?cid=ecf05e47yrw48kaolspkbbozknyobdwdgfpo2fgd7t0mblk2&rid=giphy.gif&ct=g"
                      alt="Illustration"
                      className="rounded-3xl"
                      width={400}
                      height={220}
                    />
                  </div>
                  <div className="ml-44">
                    <Image
                      src="https://media3.giphy.com/media/hT68WFMsbKBO6c1l2T/giphy.gif?cid=ecf05e47zfmqo04lyea4127t4qchth88crzo23j373d6kly8&rid=giphy.gif&ct=g"
                      alt="Illustration"
                      className="rounded-3xl"
                      width={400}
                      height={220}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Solutions />

      <div className="mx-auto w-full max-w-7xl px-6 pt-20 pb-40">
        <div className="pb-16 lg:text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-[#A9FFF1]">
            Integrations
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">
            Enhancing compatibility
          </p>
          <p className="mt-4 max-w-2xl text-xl text-zinc-200 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        <Marquee>
          {integrations.map((integration) => (
            <IntegrationCard key={integration.id} integration={integration} />
          ))}
        </Marquee>
      </div>
    </>
  );
}
