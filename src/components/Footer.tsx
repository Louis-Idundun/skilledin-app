'use client'

import { usePathname } from 'next/navigation'
import Wrapper from './Wrapper'
//import { Icons } from './Icons'
import Link from 'next/link'

const Footer = () => {
  const pathname = usePathname()
  const pathsToMinimize = [
    '/verify-email',
    '/sign-up',
    '/sign-in',
  ]

  return (
    <footer className='bg-neutral-900 text-white flex-grow-0'>
      <Wrapper>
        <div className=''>
          {pathsToMinimize.includes(pathname) ? null : (
            <div className='pb-8 pt-16'>
              <div className='flex justify-center'>
                <h1 className='text-2xl font-semibold'>Skilledin</h1>
              </div>
            </div>
          )}

          {pathsToMinimize.includes(pathname) ? null : (
            <div>
              <div className='relative flex items-center px-6 py-6 sm:py-8 lg:mt-0'>
                <div className='absolute inset-0 overflow-hidden rounded-lg'>
                  <div
                    aria-hidden='true'
                    className='absolute inset-0 bg-gradient-to-br bg-opacity-90'
                  />
                </div>

                <div className='text-center relative mx-auto max-w-sm'>
                  <h3 className='font-semibold'>Become a student</h3>
                  <p className='mt-2 text-sm text-gray-300'>
                    Embark on your journey to acquire high-quality skills and 
                    knowledge in just minutes.{' '}
                    <Link
                      href='/sign-in?as=seller'
                      className='whitespace-nowrap font-semibold text-fuchsia-900 hover:text-white'>
                      Start learning today &rarr;
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className='py-10 md:flex md:items-center md:justify-between'>
          <div className='text-center md:text-left'>
            <p className='text-sm text-gray-300'>
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          <div className='mt-4 flex items-center justify-center md:mt-0'>
            <div className='flex space-x-8'>
              <Link
                href='#'
                className='text-sm text-gray-300 hover:text-white'>
                Terms
              </Link>
              <Link
                href='#'
                className='text-sm text-gray-300 hover:text-white'>
                Privacy Policy
              </Link>
              <Link
                href='#'
                className='text-sm text-gray-300 hover:text-white'>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
