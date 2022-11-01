import Link from 'next/link';
import s from './Navbar.module.css';
import Logo from 'components/icons/Logo';
import { useUser } from 'utils/useUser';
import { useRouter } from 'next/router';
import cn from 'clsx';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';
import { MenuAlt3Icon, XIcon } from '@heroicons/react/outline';
import routes from '../../../config/routes';
import { useState } from 'react';

const defaultRoutes = [
  routes.platform,
  routes.resources,
  routes.solutions,
  routes.pricing
];

const Navbar = () => {
  const router = useRouter();
  const { user } = useUser();
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>

      {/* Mobile nav */}
      <div className="fixed inset-x-0 top-0 z-50 flex flex-col p-2 border-b border-[#A9FFF1]/30 backdrop-filter backdrop-blur-lg bg-black md:hidden">
        <div className="flex justify-between items-center mx-1">
          <div
            onClick={() => {
              router.push('/');
              setIsExpanded(false);
            }}
            className="cursor-pointer relative m-2"
          >
            <Logo />
          </div>
          <div className="mt-3">
            <button
              className="text-gray-400 transition duration-300"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <XIcon className="block w-8 h-8" aria-hidden="true" />
              ) : (
                <MenuAlt3Icon className="block w-8 h-8" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        {isExpanded && (
          <div className="h-screen pt-10">
            {defaultRoutes.map((route) => (
              <div
                className="pt-4 pb-2 px-2 border-b border-[#A9FFF1]/30"
                onClick={() => {
                  router.push(route.path);
                  setIsExpanded(false);
                }}
                key={route.path}
              >
                <p className="my-4 text-sm font-semibold text-right">
                  {route.label}
                </p>
              </div>
            ))}

            <div className="w-full space-y-4 pt-20">
              <button
                onClick={() => {
                  router.push('/signin');
                  setIsExpanded(false);
                }}
                className=" w-full py-4 text-xs font-semibold uppercase border transition-colors border-[#A9FFF1]/50 tracking-wide text-[#A9FFF1]"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  router.push('/get-started');
                  setIsExpanded(false);
                }}
                className="bg-[#A9FFF1]/10 w-full py-4 text-xs font-semibold uppercase transition-colors  tracking-wide text-[#A9FFF1]"
              >
                Get started
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mx-auto max-w-7xl px-6 hidden md:block">
        <div className="flex items-center flex-row py-4 md:py-6 relative">
          <div className="flex flex-1 items-center">
            <Link href="/">
              <a className={s.logo} aria-label="Logo">
                <Logo />
              </a>
            </Link>
          </div>
          <nav className="">
            <ActiveLink href="/platform">Platform</ActiveLink>
            <ActiveLink href="/solutions">Solutions</ActiveLink>
            <ActiveLink href="/resources">Resources</ActiveLink>
            <ActiveLink href="/pricing">Pricing</ActiveLink>
          </nav>
          <div className="lg:flex flex-1 justify-end space-x-6 hidden">
            {user ? (
              <ProfileDropdown user={user?.email} />
            ) : (
              <>
                <Link href="/signin">
                  <a className={s.link}>Log in</a>
                </Link>
                <button
                  onClick={() => router.push('/get-started')}
                  className="bg-[#A9FFF1]/10 px-5 py-3 text-xs font-semibold uppercase border transition-colors border-transparent hover:border-[#A9FFF1]/50 tracking-wide text-[#A9FFF1]"
                >
                  Get started
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

interface Props {
  href: string;
}

export const ActiveLink: React.FC<Props> = ({ children, href }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        'px-6 py-2 font-semibold text-xs uppercase tracking-wide transition duration-300',
        {
          'text-[#A9FFF1]': isActive,
          'text-zinc-200 hover:text-white': !isActive
        }
      )}
    >
      {children}
    </a>
  );
};
