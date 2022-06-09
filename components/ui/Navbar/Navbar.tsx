import Link from 'next/link';
import s from './Navbar.module.css';

import Logo from 'components/icons/Logo';
import { useUser } from 'utils/useUser';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';
import { useRouter } from 'next/router';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';

const Navbar = () => {
  const { user } = useUser();
  const router = useRouter();

  console.log('user data', user);

  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex justify-around align-center flex-row py-4 md:py-6 relative">
          <div className="flex flex-1 items-center">
            <Link href="/">
              <a className={s.logo} aria-label="Logo">
                <Logo />
              </a>
            </Link>
          </div>

          <nav className="space-x-12">
            <Link href="/">
              <a className={s.link}>About</a>
            </Link>
            <Link href="/">
              <a className={s.link}>Solutions</a>
            </Link>
            <Link href="/pricing">
              <a className={s.link}>Plans</a>
            </Link>
            {/* <Link href="/account">
              <a className={s.link}>Account</a>
            </Link> */}
          </nav>
          <div className="lg:flex flex-1 justify-end space-x-8 hidden">
            {user ? (
              <ProfileDropdown user={user?.email} />
            ) : (
              <>
                <Link href="/signin">
                  <a className={s.link}>Sign in</a>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
