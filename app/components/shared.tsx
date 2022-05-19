import { NavLink, Link } from "@remix-run/react"
import { useState } from "react"
import type { MobileNavigationBarType } from "~/utils/types"
import type { To } from "history"
import { CaretUpIcon, CaretDownIcon, PhoneIcon, MessageIcon, FacebookIcon, TwitterIcon, MenuIcon, CartIcon } from "./icons"
import logo from "~/../public/images/logopng.jpeg"

type CustomNavLinkType = {
    to: To,
    name: string,
    className?: string
    icon?: JSX.Element
}

const CustomNavLink = ({ to, name, className }: CustomNavLinkType) => {
    return (
        <NavLink
            prefetch="render"
            to={to}
            className={({ isActive }) =>
                isActive ? `link-is-active ${className}` : `link-is-not-active ${className}`
            }
        >
            {name}
        </NavLink>
    )
}

const CustomMobileNavLink = ({ to, name, className, icon }: CustomNavLinkType) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? `mobile-link-is-active ${className}` : `mobile-link-is-not-active ${className}`
            }
        >
            {name}
            {icon}
        </NavLink>
    )
}

const MobileNavigationBar = ({ handleShow }: MobileNavigationBarType): JSX.Element => {
    const [displayPages, setDisplayPages] = useState<boolean>(false)
    return (
        <div className="md:hidden mobile-nav-link-wrapper transition-all delay-75 ease-in-out -left-[999px] w-full">
            <div className="flex items-center justify-between pb-2 border-b border-b-[#fff] text-[18px] tracking-wider">
                <CustomMobileNavLink to="/" name="Home" />
                {/* <CaretDownIcon className="w-6 h-6 text-[#fad90e] cursor-pointer" /> */}
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-b-[#fff] text-[18px] tracking-wider">
                <CustomMobileNavLink to="/events" name="Events" />
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-b-[#fff] text-[18px] tracking-wider">
                <CustomMobileNavLink to="/chapters" name="Chapters" />
            </div>

            <div onClick={() => {
                setDisplayPages(!displayPages)
            }} className="cursor-pointer pb-2 border-b border-b-[#fff] text-[18px] tracking-wider">
                <div className="flex items-center justify-between">
                    <CustomMobileNavLink to="/pages" name="Pages" />
                    {displayPages ? <CaretUpIcon className="w-6 h-6 text-[#fad90e] cursor-pointer" /> : <CaretDownIcon className="w-6 h-6 text-[#fad90e] cursor-pointer" />}
                </div>
                <div className={displayPages ? `bg-white p-3 mt-[10px] rounded-sm` : `hidden`}>
                    <div className="px-6 grid gap-y-4">
                        <CustomMobileNavLink to="/pages/about-us" className="pb-3 border-b text-gray-600 text-sm" name="About Us" />
                        <CustomMobileNavLink to="/pages/blog" className="pb-3 border-b text-gray-600 text-sm" name="Blog" />
                        <CustomMobileNavLink to="/pages/shop" className="pb-3 text-gray-600 text-sm" name="Shop" />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pb-2 border-b-[#fff] text-[18px] tracking-wider">
                <CustomMobileNavLink to="/contact-us" name="Contact Us" />
            </div>

            {/* <div className="flex items-center justify-between text-[18px] tracking-wider">
                <div className="flex gap-x-3">
                    <CustomMobileNavLink to="/shop/cart" name="" icon={<CartIcon className="w-8 h-8 text-white" />} />
                </div>

            </div> */}
        </div>
    )
}

const TopNavigationBar = (): JSX.Element => {
    return (
        <div className="bg-[#007a4f] bg-gradient-to-l from-[#1d9e64] flex justify-between w-full px-8 min-h-[50px] md:grid md:py-5 md:place-content-center md:gap-y-6 lg:flex lg:py-0 lg:gap-y-0">
            <div className="flex items-center gap-x-4 text-white flex-1">
                <p className="flex items-center gap-x-2 text-white">
                    <PhoneIcon className="w-4 h-4" />
                    Tel: +234800000000
                </p> |
                <p className="flex items-center gap-x-2 text-white">
                    <MessageIcon className="w-4 h-4" />
                    info@pleasetalktosomebody.org
                </p>
            </div>

            <div className="flex items-center gap-x-8 md:place-content-center lg:place-content-between">
                <div className="flex items-center gap-x-4 text-white">
                    <FacebookIcon className="w-4 h-4" />
                    <a href="https://twitter.com/PlsTalk2Sombody">
                        <TwitterIcon className="w-4 h-4" />
                    </a>
                </div>
                <button className="appointment-link">Donate now</button>
            </div>
        </div>
    )
}

export const NavigationBar = (): JSX.Element => {
    const [showMobileNavLink,] = useState<boolean>(true)
    const handleShowMobileNavLink = () => {
        const mobilemenu = document.querySelector('.mobile-nav-link-wrapper')

        if (mobilemenu !== null) {
            mobilemenu.classList.toggle('show')
        }
    }

    return (
        <>
            <div className="fixed w-full top-0 z-[1]">
                <div className="mobile-nav-wrapper">
                    <Link to="/" className="font-nanum-pen font-bold text-4xl text-white">
                        <div className="flex items-center font-nanum-pen font-bold md:text-[20px] lg:text-[30px] text-[#353535]"><img src={logo} alt="Please Talk To Somebody" className="w-12 h-12" /></div>
                    </Link>
                    <div className="flex gap-x-3 items-center">
                        <MenuIcon onClick={handleShowMobileNavLink} className="menu-icon" />
                        <div className="flex gap-x-3">
                            <CustomMobileNavLink to="/shop/cart" name="" icon={<CartIcon className="w-6 h-6 text-white hover:text-[#ffd800] transition-all ease-in" />} />
                        </div>
                    </div>
                </div>

                {showMobileNavLink &&
                    <div>
                        <MobileNavigationBar handleShow={handleShowMobileNavLink} />
                    </div>
                }
            </div>


            <div className="hidden md:flex flex-col fixed top-0 z-[2] w-full drop-shadow-lg">
                <div className="hidden md:flex">
                    <TopNavigationBar />
                </div>
                <div className="min-h-[70px] flex justify-between md:px-4 bg-[#fff] text-[#18af7a]">
                    <div className="logo flex">
                        <div className="flex items-center font-nanum-pen font-bold md:text-[20px] lg:text-[30px] text-[#353535]">
                            <img src={logo} alt="Please Talk To Somebody" className="w-12 h-12" />
                        </div>
                    </div>

                    <div className="flex gap-x-[40px]">
                        <CustomNavLink to='/' name="Home" className="text-[14px] lg:text-[16px]" />
                        <CustomNavLink to='/events' name="Events" className="text-[14px] lg:text-[16px]" />
                        <CustomNavLink to='/chapters' name="Chapters" className="text-[14px] lg:text-[16px]" />

                        <div className="grid menu overflow-hidden">
                            <CustomNavLink to='/pages' name="Pages" className="text-[14px] lg:text-[16px]" />
                            <div className="sub-menu h-[80px] z-[8] bg-[#fff] text-[#18af7a] bottom-[-79px] drop-shadow-lg w-[305px] absolute right-[10px] p-3 justify-between gap-x-10 items-center px-8 rounded-bl rounded-br">
                                <CustomNavLink to='/pages/about-us' name="About Us" className="text-[14px] lg:text-[16px]" />
                                <CustomNavLink to='/pages/blog' name="Blog" className="text-[14px] lg:text-[16px]" />
                                <CustomNavLink to='/pages/shop' name="Shop" className="text-[14px] lg:text-[16px]" />
                            </div>
                        </div>
                        <CustomNavLink to='/contact-us' name="Contact" className="text-[14px] lg:text-[16px]" />
                    </div>

                </div>
            </div>
        </>
    )
}

export const Footer = (): JSX.Element => {
    return (
        <footer className="flex flex-col md:flex-row justify-between p-10 items-center bg-[#007a4f] bg-gradient-to-r from-[#2bce85]">
            <div className="text-white">
                <p className="text-2xl">PTTS</p>
            </div>
            <div className="text-white">
                <p className="font-bold text-xl">Contact us</p>
            </div>
            <div className="text-white">
                <p>All rights reserved</p>
            </div>
        </footer>
    )
}