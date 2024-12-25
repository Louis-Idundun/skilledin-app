/* eslint-disable @typescript-eslint/no-unused-vars */

import Link from 'next/link'
import Wrapper from './Wrapper'
//import { Icons } from './Icons'
//import Logo from '../assets/logo.jpeg'

import { buttonVariants } from './ui/button'
//import Cart from './Cart'
// import { getServerSideUser } from '@/lib/payload-utils'
import { cookies } from 'next/headers'
//import UserAccountNav from './UserAccountNav'
import MobileNav from './MobileNav'
//import NavbarItems from './NavbarItems'


const Navbar = async () => {
  //const nextCookies = cookies()
  // const { user } = await getServerSideUser(nextCookies)
 

  return (
    <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
      <header className='relative bg-white'>
        <Wrapper>
          <div className='border-b border-gray-200'>
            <div className='flex h-16 items-center'>
              <MobileNav />

              <div className='ml-4 flex lg:ml-0'>
                <Link href='/'>
                  <h1 className='text-2xl font-semibold text-fuchsia-900'>Skilledin</h1>
                </Link>
              </div>

              <div className='hidden z-50 lg:ml-8 lg:block lg:self-stretch'>
               {/* <NavbarItems/> */}
              </div>

              <div className='ml-auto flex items-center'>
                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                  {/* {user ? null : (
                    <Link
                      href='/sign-in'
                      className={buttonVariants({
                        variant: 'ghost',
                      })}>
                      Login
                    </Link>
                  )} */}
                  <Link
                      href='/sign-in'
                      className={buttonVariants({
                        variant: 'ghost',
                      })}>
                      Home
                    </Link>
                    <Link
                      href='/sign-in'
                      className={buttonVariants({
                        variant: 'ghost',
                      })}>
                      Schools
                    </Link>
                  <Link
                      href='/sign-in'
                      className={buttonVariants({
                        variant: 'ghost',
                      })}>
                      Why Skilledin
                    </Link>
                    <Link
                      href='/sign-in'
                      className={buttonVariants({
                        variant: 'ghost',
                      })}>
                      Blog
                    </Link>
                    <Link
                      href='/sign-in'
                      className={buttonVariants({
                        variant: 'ghost',
                      })}>
                      FAQ
                    </Link>
                  <Link
                      href='/sign-in'
                      className={buttonVariants({
                        variant: 'ghost',
                      })}>
                      Login
                    </Link>

                  {/* {user ? null : (
                    <span
                      className='h-6 w-px bg-gray-200'
                      aria-hidden='true'
                    />
                  )} */}

                  {/* {0 ? (
                    <UserAccountNav user={user} />
                  ) : (
                    <Link
                      href='/sign-up'
                      className={buttonVariants({
                        variant: 'ghost',
                      })}>
                      Create account
                    </Link>
                  )} */}
                  <Link
                      href='/sign-up'
                      className={buttonVariants()}>
                      APPLY NOW
                    </Link>

                  {/* {user ? (
                    <span
                      className='h-6 w-px bg-gray-200'
                      aria-hidden='true'
                    />
                  ) : null} */}

                  {/* {'user' ? null : (
                    <div className='flex lg:ml-6'>
                      <span
                        className='h-6 w-px bg-gray-200'
                        aria-hidden='true'
                      />
                    </div>
                  )} */}

                  {/* <div className='ml-4 flow-root lg:ml-6'>
                    <Cart />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </header>
    </div>
  )
}

export default Navbar