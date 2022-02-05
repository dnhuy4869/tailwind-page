import React, { useState } from 'react';
import { BsSunFill } from 'react-icons/bs';
import { HiOutlineMenu } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';

const NavBar = ({ isMobile }) => {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<nav className="flex items-center">
			<div className="flex items-center">
				<div className="text-20 font-bold mr-2">
					Nerd Card
				</div>
				<BsSunFill size={"24px"} color="#e9c46a" className="cursor-pointer" />
			</div>

			<ul className="relative md:flex md:gap-10 md:items-center ml-auto text-16 font-semibold">
				{
					openMenu && isMobile
						? (
							<MdOutlineClose size={"24px"} className="cursor-pointer" onClick={() => { setOpenMenu(!openMenu) }} />
						)
						: !openMenu && isMobile
							? (
								<HiOutlineMenu size={"24px"} className="cursor-pointer" onClick={() => { setOpenMenu(!openMenu) }} />
							)
							: (
								<>
									<li className="cursor-pointer hover:text-purple-500 transition-all duration-200">Features</li>
									<li className="cursor-pointer hover:text-purple-500 transition-all duration-200">Menu</li>
									<li className="cursor-pointer hover:text-purple-500 transition-all duration-200">Our Story</li>
									<li className="cursor-pointer hover:text-purple-500 transition-all duration-200 ml-28">Contact</li>
								</>
							)
				}

				{
					openMenu && (
						<div className="absolute z-10 right-8 bg-white p-8 text-center text-black text-13">
							<li className="cursor-pointer">Features</li>
							<li className="cursor-pointer">Menu</li>
							<li className="cursor-pointer">Our Story</li>
							<li className="cursor-pointer">Contact</li>
						</div>
					)
				}
			</ul>
		</nav>
	)
}

export default NavBar;