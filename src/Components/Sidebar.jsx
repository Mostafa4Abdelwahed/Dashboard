import { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom"
import { Menu, MenuButton, MenuItem, MenuList, WrapItem } from '@chakra-ui/react'
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import { LiaUsersCogSolid } from "react-icons/lia";
import { PiArticleNyTimesLight, PiCity } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";
import Container from "./../Components/Container";


const Sidebar = () => {
    const [open, setOpen] = useState(false);
    return (
        <Fragment>
            <div className={`fixed z-50 lg:right-0 w-[220px] h-full bg-teal-950 text-white ${open ? "right-0" : "-right-[100%]"}`}>
                <ul className="mt-16  mb-auto flex flex-col gap-1.5">
                    <li>
                        <Link className="SideLink flex items-center shadow-md py-2 px-3 transition-all hover:bg-teal-600 gap-2 text-lg" to="/"><IoHomeOutline />الصفحة الرئيسية</Link>
                    </li>
                    <li>
                        <NavLink className="SideLink flex items-center py-2 px-3 transition-all hover:bg-teal-600 gap-2 text-lg" to="/properties"><MdOutlineVilla />الوحدات</NavLink>
                    </li>
                    <li>
                        <NavLink className="SideLink flex items-center py-2 px-3 transition-all hover:bg-teal-600 gap-2 text-lg" to="/agents"><LiaUsersCogSolid />المكاتب</NavLink>
                    </li>
                    <li>
                        <NavLink className="SideLink flex items-center py-2 px-3 transition-all hover:bg-teal-600 gap-2 text-lg" to="/articles"><PiArticleNyTimesLight />المقالات</NavLink>
                    </li>
                    <li>
                        <NavLink className="SideLink flex items-center py-2 px-3 transition-all hover:bg-teal-600 gap-2 text-lg" to="/cities"><PiCity />المدن</NavLink>
                    </li>
                    <li>
                        <NavLink className="SideLink flex items-center py-2 px-3 transition-all hover:bg-teal-600 gap-2 text-lg" to="/settings"><IoSettingsOutline />الاعدادات</NavLink>
                    </li>
                    <li>
                        <span className="SideLink cursor-pointer flex items-center py-2 px-3 transition-all hover:bg-teal-600 gap-2 text-lg"><IoIosLogOut />تسجيل الخروج</span>
                    </li>
                </ul>
                    <a href="/" target="_blank" className="cursor-pointer absolute bottom-5 left-5 right-5 text-center flex justify-center items-center py-2 px-3 transition-all rounded-md bg-teal-600 gap-2 text-lg"><IoIosLogOut />عرض الموقع</a>
            </div>
            <header className="bg-teal-900 z-50 fixed left-0 right-0">
                <Container>
                    <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-2">
                        <Link to="/" className="text-white font-bold text-2xl">
                            لوحة التحكم
                        </Link>

                        <div className="flex items-center justify-end md:justify-between">

                            <div className="flex items-center gap-4">
                                <div className="sm:flex sm:gap-4">
                                    <Menu>
                                        <WrapItem>
                                            <MenuButton>
                                                <img src="https://bit.ly/dan-abramov" className='h-10 w-10 rounded-full' />
                                            </MenuButton>
                                        </WrapItem>
                                        <MenuList>
                                            <MenuItem as={Link} to="/settings">الاعدادات</MenuItem>
                                            <MenuItem>تسجيل خروج</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </div>

                                <button onClick={() => { setOpen(!open) }}
                                    className="block rounded bg-teal-600 p-2.5 text-white transition hover:text-white/75 md:hidden"
                                >
                                    <span className="sr-only">Toggle menu</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>

        </Fragment>
    )
}

export default Sidebar
