/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import {UserContext} from '../context/UserContext'
import {useContext} from 'react'


const navigation = [
  { name: 'Log In / Sign Up', href: '/login', current: true },
]

const navigation1 = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const {user,logout} = useContext(UserContext);
  return (
<>
    <header className="header trans_300"> 
 		{/* <!-- main Navigation --> */}
			<div className="main_nav_container">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-right">
							<div className="logo_container">
								{/* <a href="#">Cool <span>Shop</span></a> */}
						  <a href="index"><img src="assets/img/hypesupp.png" className="logo" alt="Logo"/></a>
							</div>
							<nav className="navbar">
                {
                  user &&
                  <>
                  <ul className="navbar_menu">
									<li><a href="#">Home</a></li>
									<li><a href="#">Shop</a></li>
									<li><a href="#">Promo</a></li>
									<li><a href="#">Pages</a></li>
									<li><a href="#">Blog</a></li>
									<li><a href="#">Contact</a></li>
								</ul>
                  
                <div className="w3-dropdown-hover">
                <ul className="navbar_user">
									{/* <li><a href="#"><i className="fa fa-search icon-navbar" arial-hidden="true"></i></a></li> */}
									<li><a href="#"><i className="fa fa-user icon-navbar" arial-hidden="true"></i></a></li>
									<li className="checkout">
										{/* <a href="#">
											<i className="fa fa-shopping-cart" aria-hidden="true"></i>
											<span id="checkout_items" className="checkout_items">2</span>
										</a> */}
									</li>
								</ul>	
    <div className="w3-dropdown-content w3-bar-block w3-border">
      <p href="#" className="w3-bar-item">Hi, {user.name}</p>
      <a href="#" onClick={logout}  className="w3-bar-item w3-button">Log Out</a>
      {/* <a href="#" className="w3-bar-item w3-button">Link 2</a>
      <a href="#" className="w3-bar-item w3-button">Link 3</a> */}
    </div>
  </div>
                
				
								
                </>
                }
                 {
                  !user &&
                  <ul className="navbar_user">
                    <a href="/login" className="navbar-login">Login / Sign Up</a>
                  </ul>
                 }
								<div className="hamburger_container">
									<i className="fa fa-bars icon-navbar" aria-hidden="true"></i>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</header>

    <div className="fs_menu_overlay"></div>
    <div className="hamburger_menu">
      <div className="hamburger_close"><i className="fa fa-times" aria-hidden="true"></i></div>
      <div className="hamburger_menu_content text-right">
        <ul className="menu_top_nav">
        {
          user &&
          <>
          <li className="menu_item"><a href="#">Home</a></li>
          <li className="menu_item"><a href="#">Shop</a></li>
          <li className="menu_item"><a href="#">Promotion</a></li>
          <li className="menu_item"><a href="#">Pages</a></li>
          <li className="menu_item"><a href="#">Blog</a></li>
          <li className="menu_item"><a href="#">Contact</a></li>
          </>
        }

        {
          !user &&
          <>
          <li className="menu_item"><a href="/login">Login / Sign Up</a></li>
          </>
        }
        </ul>
      </div>
    </div>
    </>

//     <Disclosure as="nav" className="bg-gray-800">
//   {({ open }) => (
// <>
//       <div className="max-w-10xl mx-auto px-2 sm:px-6 lg:px-8">
//         <div className="relative flex items-center justify-between h-16">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             {/* Mobile menu button*/}
//             <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//               <span className="sr-only">Open main menu</span>
//               {open ? (
//                 <XIcon className="block h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <MenuIcon className="block h-6 w-6" aria-hidden="true" />
//               )}
//             </Disclosure.Button>
//           </div>
//           <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex-shrink-0 flex items-center">
//               <img
//                 className="block lg:hidden w-auto logo"
//                 src="assets/img/hypesupp.png"
//                 alt="Hypesupp"
//               />
//               <img
//                 className="hidden lg:block w-auto logo"
//                 src="assets/img/hypesupp.png"
//                 alt="Hypesupp"
//               />
              
//             </div>
//             <div className="hidden sm:block sm:ml-6">
//               <div className="flex space-x-4">
                
//                {/* {!user &&
//                 navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
   
//                     className={classNames(
//                       item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                       'px-3 py-2 rounded-md text-sm font-medium'
//                     )}
//                     aria-current={item.current ? 'page' : undefined}
//                   >
//                     {item.name}
//                   </a>
//                 ))
//               } */}

//               {user &&
//                 navigation1.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
   
//                     className={classNames(
//                       item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                       'px-3 py-2 rounded-md text-sm font-medium'
//                     )}
//                     aria-current={item.current ? 'page' : undefined}
//                   >
//                     {item.name}
//                   </a>
//                 ))
//               }
//               </div>
//             </div>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            
//             {/* start */}
//             {/* <button
//               type="button"
//               className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//             >
//               <span className="sr-only">View notifications</span>
//               <BellIcon className="h-6 w-6" aria-hidden="true" />
//             </button> */}
            
//                        {/* Profile dropdown */}
//                        <Menu as="div" className="ml-3 relative">
//               <div>
//               {user &&
//                 <Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
//                   <span className="sr-only">Open user menu</span>
                  
//                   <img
//                     className="h-8 w-8 rounded-full"
//                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                     alt=""
//                   />
                 
//                   {/* <p className="user-font">Hi, {user.name}</p> */}
//                 </Menu.Button>
//               }

//               {!user &&
//                <a href='/login' className="login">Login/SignUp</a>
//               }
//               </div>
//               <Transition
//                 as={Fragment}
//                 enter="transition ease-out duration-100"
//                 enterFrom="transform opacity-0 scale-95"
//                 enterTo="transform opacity-100 scale-100"
//                 leave="transition ease-in duration-75"
//                 leaveFrom="transform opacity-100 scale-100"
//                 leaveTo="transform opacity-0 scale-95"
//               >
//                 <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//                   <Menu.Item>
//                     {({ active }) => (
//                       // eslint-disable-next-line jsx-a11y/anchor-is-valid
//                       <a href="#" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} >
//                         Your Profile
//                       </a>
//                     )}
//                   </Menu.Item>
//                   <Menu.Item>
//                     {({ active }) => (
//                       // eslint-disable-next-line jsx-a11y/anchor-is-valid
//                       <a
//                         href="#"
//                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
//                       >
//                         Settings
//                       </a>
//                     )}
//                   </Menu.Item>
//                   <Menu.Item>
//                     {({ active }) => (
//                       // eslint-disable-next-line jsx-a11y/anchor-is-valid
//                       <a
//                         href="#"  onClick={logout} 
//                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
//                       >
//                          {/* <button>Logout</button> */}
//                         Log Out
//                       </a>
//                     )}
//                   </Menu.Item>
//                 </Menu.Items>
//               </Transition>
//             </Menu>
//             {/* end */}
            
//           </div>
//         </div>
//       </div>

//       <Disclosure.Panel className="sm:hidden">
//         <div className="px-2 pt-2 pb-3 space-y-1">
//         {!user &&
//           navigation.map((item) => (
//             <Disclosure.Button
//               key={item.name}
//               as="a"
//               href={item.href}
//               className={classNames(
//                 item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                 'block px-3 py-2 rounded-md text-base font-medium'
//               )}
//               aria-current={item.current ? 'page' : undefined}
//             >
//               {item.name}
//             </Disclosure.Button>
//           ))}

//       {user &&
//           navigation1.map((item) => (
//             <Disclosure.Button
//               key={item.name}
//               as="a"
//               href={item.href}
//               className={classNames(
//                 item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                 'block px-3 py-2 rounded-md text-base font-medium'
//               )}
//               aria-current={item.current ? 'page' : undefined}
//             >
//               {item.name}
//             </Disclosure.Button>
//           ))}
//         </div>
//       </Disclosure.Panel>
//     </>

  
//   )}
// </Disclosure>

  )
}

export default Navbar;