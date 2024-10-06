import { Link, useLocation } from "react-router-dom";
import {
  Disclosure,
  Menu,
  MenuItems,
  MenuItem,
  MenuButton,
} from "@headlessui/react";

const navigation = [
  { name: "Calculadora", href: "/" },
  { name: "Dinâmica", href: "/dinamica" },
  { name: "Sobre o projeto", href: "/sobre" },
];
function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
export default function Header() {
  const location = useLocation();
  return (
    <>
      <Disclosure as='nav' className='bg-gray-800'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between w-full'>
            <div className='flex justify-between items-center w-full'>
              <div className='flex-shrink-0'>
                <img
                  alt='Universidade Federal de pernambuco'
                  src='https://tuliodepadua.github.io/recicle/images/logo_ufrpe.png'
                  className='h-12'
                />
              </div>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      aria-current={
                        location.pathname === item.href ? "page" : undefined
                      }
                      className={classNames(
                        location.pathname === item.href
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className='md:hidden '>
                <Menu>
                  <MenuButton className='navbar-burger flex items-baseline text-white p-3'>
                    <svg
                      className='block h-4 w-4 fill-current'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <title>Mobile menu</title>
                      <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
                    </svg>
                  </MenuButton>
                  <MenuItems
                    anchor='bottom'
                    className='bg-slate-600 border-spacing-2'
                  >
                    {navigation.map((item) => (
                      <MenuItem key={item.name}>
                        <Link
                          to={item.href}
                          className='block data-[focus]:bg-blue-100 data-[focus]:text-slate-600 bg-slate-600 p-2 text-white text-sm'
                        >
                          {item.name}
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </>
  );
}
