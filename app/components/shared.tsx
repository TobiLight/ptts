import { NavLink, Link } from "@remix-run/react"
import { useState } from "react"
import type { MobileNavigationBarType } from "~/utils/types"
import type { To } from "history"
import { CaretDownIcon, PhoneIcon, MessageIcon, FacebookIcon, TwitterIcon, MenuIcon } from "./icons"

type CustomNavLinkType = {
    to: To,
    name: string,
    className: string
}

const CustomNavLink = ({ to, name, className }: CustomNavLinkType) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? `link-is-active ${className}` : `link-is-not-active ${className}`
            }
        >
            {name}
        </NavLink>
    )
}

const MobileNavigationBar = ({ handleShow }: MobileNavigationBarType): JSX.Element => {
    return (
        <div className="mobile-nav-link-wrapper transition-all delay-75 ease-in-out -left-[999px] w-full">
            <div className="flex items-center justify-between pb-2 border-b border-b-[#fff] text-[18px] tracking-wider">
                <p>Home</p>
                <CaretDownIcon className="w-6 h-6 text-[#fad90e] cursor-pointer" />
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-b-[#fff] text-[18px] tracking-wider">
                <p>Projects</p>
                <CaretDownIcon className="w-6 h-6 text-[#fad90e] cursor-pointer" />
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-b-[#fff] text-[18px] tracking-wider">
                <p>Events</p>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-b-[#fff] text-[18px] tracking-wider">
                <p>News</p>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-b-[#fff] text-[18px] tracking-wider">
                <p>Pages</p>
                <CaretDownIcon className="w-6 h-6 text-[#fad90e] cursor-pointer" />
            </div>

            <div className="flex items-center justify-between">
                <p>Contact</p>
            </div>
        </div>
    )
}

const TopNavigationBar = (): JSX.Element => {
    return (
        <div className="bg-[#18af7a] flex justify-between w-full px-8 min-h-[50px] md:grid md:py-5 md:place-content-center md:gap-y-6 lg:flex lg:py-0 lg:gap-y-0">
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
                    <h1 className="font-nanum-pen font-bold text-4xl text-white">PTTS</h1>
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
                <div className="min-h-[100px] flex items-center justify-between md:px-4 bg-[#18af7a] border-b-2 border-[#ffd800] text-white">
                    <div className="logo">
                        <Link to="/" className="font-nanum-pen font-bold md:text-[20px] lg:text-[40px] text-white">PleaseTalkToSomebody</Link>
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