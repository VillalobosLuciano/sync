import Link from 'next/link';
import s from './Navbar.module.css';
import Logo from 'components/icons/Logo';
import { useUser } from 'utils/useUser';
import { useRouter } from 'next/router';
import cn from 'clsx';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';

const Navbar = () => {
  const router = useRouter();
  const { user } = useUser();

  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center flex-row py-4 md:py-6 relative">
          <div className="flex flex-1 items-center">
            <Link href="/">
              <a className={s.logo} aria-label="Logo">
                <Logo />
              </a>
            </Link>
          </div>

          <nav className="">
            <ActiveLink href="/Platform">Platform</ActiveLink>
            <ActiveLink href="/solutions">Solutions</ActiveLink>
            <ActiveLink href="/Resources">Resources</ActiveLink>
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
