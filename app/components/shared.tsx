import { NavLink, Link, NavLinkProps } from "@remix-run/react"
import { useState } from "react"
import type { MobileNavigationBarType } from "~/utils/types"
import type { To } from "history"
import CaretUpIcon, { CaretDownIcon, PhoneIcon, MessageIcon, FacebookIcon, TwitterIcon, MenuIcon } from "./icons"

type CustomNavLinkType = {
    to: To,
    name: string,
    className?: string
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

const CustomMobileNavLink = ({ to, name, className }: CustomNavLinkType) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? `mobile-link-is-active ${className}` : `mobile-link-is-not-active ${className}`
            }
        >
            {name}
        </NavLink>
    )
}

const MobileNavigationBar = ({ handleShow }: MobileNavigationBarType): JSX.Element => {
    const [displayPages, setDisplayPages] = useState<boolean>(false)
    return (
        <div className="mobile-nav-link-wrapper transition-all delay-75 ease-in-out -left-[999px] w-full">
            <div className="flex items-center justify-between pb-2 border-b border-b-[#fff] text-[18px] tracking-wider">
                <CustomMobileNavLink to="/" name="Home" />
                {/* <CaretDownIcon className="w-6 h-6 text-[#fad90e] cursor-pointer" /> */}
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-b-[#fff] text-[18px] tracking-wider">
                <CustomMobileNavLink to="/projects" name="Projects" />
                <CaretDownIcon className="w-6 h-6 text-[#fad90e] cursor-pointer" />
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-b-[#fff] text-[18px] tracking-wider">
                <CustomMobileNavLink to="/events" name="Events" />
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
                        <CustomMobileNavLink to="/pages/shop" className="pb-3 border-b text-gray-600 text-sm" name="Shop" />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <CustomMobileNavLink to="/contact-us" name="Contact Us" />
            </div>
        </div>
    )
}

const TopNavigationBar = (): JSX.Element => {
    return (
        <div className="bg-[#007a4f] flex justify-between w-full px-8 min-h-[50px] md:grid md:py-5 md:place-content-center md:gap-y-6 lg:flex lg:py-0 lg:gap-y-0">
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
                    <TwitterIcon className="w-4 h-4" />
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
                    <Link to="/" className="font-nanum-pen font-bold text-4xl text-white">PTTS</Link>
                    <MenuIcon onClick={handleShowMobileNavLink} className="menu-icon" />
                </div>

                {showMobileNavLink &&
                    <div>
                        <MobileNavigationBar handleShow={handleShowMobileNavLink} />
                    </div>
                }
            </div>


            <div className="hidden md:flex flex-col">
                <div className="hidden md:flex">
                    <TopNavigationBar />
                </div>
                <div className="min-h-[100px] flex items-center justify-between md:px-4 bg-[#fff] border-b-2 border-[#ffd800] text-[#18af7a]">
                    <div className="logo">
                        <Link to="/" className="font-nanum-pen font-bold md:text-[20px] lg:text-[40px] text-[#353535]">PleaseTalkToSomebody</Link>
                    </div>

                    <div className="flex items-center gap-x-4">
                        <CustomNavLink to='/' name="Home" className="text-[14px] lg:text-[16px]" />
                        <CustomNavLink to='/projects' name="Projects" className="text-[14px] lg:text-[16px]" />
                        <CustomNavLink to='/events' name="Events" className="text-[14px] lg:text-[16px]" />
                        <CustomNavLink to='/news' name="News" className="text-[14px] lg:text-[16px]" />
                        <CustomNavLink to='/pages' name="Pages" className="text-[14px] lg:text-[16px]" />
                        <CustomNavLink to='/contact-us' name="Contact" className="text-[14px] lg:text-[16px]" />
                    </div>
                </div>
            </div>
        </>
    )
}

export const Footer = (): JSX.Element => {
    return (
        <footer className="flex flex-col md:flex-row justify-between p-10 items-center bg-[#18af7a]">
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