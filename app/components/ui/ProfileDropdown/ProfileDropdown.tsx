import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import cn from 'clsx';
import { useRouter } from 'next/router';

interface ProfileProps {
  user?: string;
}

const ProfileDropdown: React.FC<ProfileProps> = ({ user }) => {
  const router = useRouter();

  const handleSignOut = (e: any) => {
    e.preventDefault();
    router.push('/api/auth/logout');
  };

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex font-semibold uppercase border-[#A9FFF1]/50 hover:border-[#A9FFF1] border-2 items-center transition-colors justify-center w-8 h-8 text-sm text-white bg-black rounded-full hover:bg-[#A9FFF1]/20">
            {user?.charAt(0)}
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-black ring-1 ring-[#A9FFF1] ring-opacity-5 divide-y divide-[#A9FFF1]/20 focus:outline-none">
            <div className="px-4 py-3">
              <p className="text-sm text-zinc-400">Signed in as</p>
              <p className="text-sm font-medium text-white truncate">{user}</p>
            </div>
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={() => router.push('/account')}
                    className={cn(
                      active ? 'bg-zinc-900 text-white' : 'text-zinc-300',
                      'block px-4 py-2 text-sm cursor-pointer'
                    )}
                  >
                    Account settings
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={() => router.push('/')}
                    className={cn(
                      active ? 'bg-zinc-900 text-white' : 'text-zinc-300',
                      'block px-4 py-2 text-sm cursor-pointer'
                    )}
                  >
                    Support
                  </div>
                )}
              </Menu.Item>
            </div>
            <div className="py-1">
              <form method="POST" action="#">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      onClick={handleSignOut}
                      className={cn(
                        active ? 'bg-zinc-900 text-white' : 'text-zinc-300',
                        'block w-full text-left px-4 py-2 text-sm'
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </form>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default ProfileDropdown;
