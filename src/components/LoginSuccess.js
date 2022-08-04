/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import {UserContext} from '../context/UserContext'
import {useContext} from 'react'

import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';


const LoginSuccess = () => {
 {/* start */}
 <button
 type="button"
 className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
>
 <span className="sr-only">View notifications</span>
 <BellIcon className="h-6 w-6" aria-hidden="true" />
</button>

{/* Profile dropdown */}
<Menu as="div" className="ml-3 relative">
 <div>
   <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
     <span className="sr-only">Open user menu</span>
     <img
       className="h-8 w-8 rounded-full"
       src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
       alt=""
     />
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
   <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
     <Menu.Item>
       {({ active }) => (
         // eslint-disable-next-line jsx-a11y/anchor-is-valid, no-undef
         <a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} >
           Your Profile
         </a>
       )}
     </Menu.Item>
     <Menu.Item>
       {({ active }) => (
         // eslint-disable-next-line jsx-a11y/anchor-is-valid
         <a
           href="#"
           // eslint-disable-next-line no-undef
           className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
         >
           Settings
         </a>
       )}
     </Menu.Item>
     <Menu.Item>
       {({ active }) => (
         // eslint-disable-next-line jsx-a11y/anchor-is-valid
         <a
           // eslint-disable-next-line no-undef
           href="#"  onClick={logout} 
           // eslint-disable-next-line no-undef
           className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
         >
            {/* <button>Logout</button> */}
           Log Out
         </a>
       )}
     </Menu.Item>
   </Menu.Items>
 </Transition>
</Menu>
{/* end */}

       }

       export default LoginSuccess;