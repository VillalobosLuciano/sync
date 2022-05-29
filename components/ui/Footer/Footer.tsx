import Link from 'next/link';
import s from './Footer.module.css';
import Logo from 'components/icons/Logo';
import GitHub from 'components/icons/GitHub';
import Igniter from 'components/icons/Igniter';

export default function Footer() {
  return (
    <footer className="border-t border-[#A9FFF1]/30">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="text-primary grid grid-cols-1 gap-8 border-b border-[#A9FFF1]/10 py-12 transition-colors duration-150 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className="col-span-1 lg:col-span-8">
            <div className="grid md:grid-flow-col md:grid-cols-3 md:grid-rows-2">
              <span className="py-3 md:py-0 md:pb-4">
                <Link href="/">
                  <a className="text-zinc-200 transition duration-150 ease-in-out hover:text-zinc-100">
                    Home
                  </a>
                </Link>
              </span>
              <span className="py-3 md:py-0 md:pb-4">
                <Link href="/pricing">
                  <a className="text-zinc-200 transition duration-150 ease-in-out hover:text-zinc-100">
                    Pricing
                  </a>
                </Link>
              </span>
              <span className="py-3 md:py-0 md:pb-4">
                <Link href="/terms">
                  <a className="text-zinc-200 transition duration-150 ease-in-out hover:text-zinc-100">
                    Terms of Use
                  </a>
                </Link>
              </span>
              <span className="py-3 md:py-0 md:pb-4">
                <Link href="/privacy">
                  <a className="text-zinc-200 transition duration-150 ease-in-out hover:text-zinc-100">
                    Privacy Policy
                  </a>
                </Link>
              </span>
            </div>
          </div>
          <div className="text-primary col-span-1 flex items-start lg:col-span-2 lg:justify-end">
            <div className="flex h-10 items-center space-x-6">
              <a
                className={s.link}
                aria-label="Github Repository"
                href="https://github.com"
              >
                <GitHub />
              </a>
              {/* <I18nWidget /> */}
            </div>
          </div>
        </div>
        <div className="text-accent-6 flex flex-col items-center justify-between space-y-4 pt-6 pb-10 text-sm md:flex-row">
          <div>
            <span>&copy; {new Date().getFullYear()} ‣ SYNC. </span>
          </div>
          <div className="flex items-center text-sm text-white">
            <span className="text-white">Created by</span>
            <a
              rel="noopener noreferrer"
              href="https://igniter.studio"
              aria-label="igniter.studio Link"
              target="_blank"
              className="text-white"
            >
              <Igniter
                className="-ml-2 inline-block h-6 text-white"
                alt="igniter.studio Logo"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
