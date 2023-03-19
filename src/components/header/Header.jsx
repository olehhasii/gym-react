import React, { useState, useEffect, useRef } from 'react';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { MdDarkMode, MdLightMode, MdSearch } from 'react-icons/md';
import { createPortal } from 'react-dom';

import HeaderButton from './HeaderButton';
import avatar from '../../assets/musashi.jpg';
import menuIcon from '../../assets/menu.png';
import HeaderMenu from './HeaderMenu';
import SelectLanguage from './SelectLanguage';

import Navigation from '../navigation/Navigation';

const Header = ({ isFull, onSetFull }) => {
	const [lightMode, setLightMode] = useState(true);
	const [showMenu, setShowMenu] = useState(false);
	const [openNav, setOpenNav] = useState(false);

	const menuWrapperRef = useRef();
	const menuRef = useRef();
	const navRef = useRef();
	const navButtonRef = useRef();

	useEffect(() => {
		const closeMenu = (e) => {
			if (
				/* e.path[0] !== menuRef.current &&
				e.path[0] !== menuWrapperRef.current */
				e.composedPath()[0] !== menuRef.current &&
				e.composedPath()[0] !== menuWrapperRef.current
			) {
				setShowMenu(false);
			}
		};
		document.body.addEventListener('click', closeMenu);

		return () => {
			document.body.removeEventListener('click', closeMenu);
		};
	}, []);

	useEffect(() => {
		const closeNav = (e) => {
			if (
				e.composedPath()[0] !== navRef.current &&
				e.composedPath()[0] !== navButtonRef.current
			) {
				setOpenNav(false);
			}
		};
		document.body.addEventListener('click', closeNav);

		return () => {
			document.body.removeEventListener('click', closeNav);
		};
	}, []);

	const onLightModeHandler = () => {
		setLightMode((state) => !state);
	};

	const onShowMenuHandler = () => {
		setShowMenu(true);
	};

	const rootDiv = document.getElementById('root');

	return (
		<header
			className={`${
				isFull
					? 'lg:left-64 lg:w-[calc(100%_-_16rem)]'
					: 'lg:left-20 lg:w-[calc(100%_-_5rem)]'
			} pr-6 pl-4 flex items-center h-16 fixed top-0 shadow-md duration-500 transition-all z-10 bg-white w-full`}>
			<HeaderButton
				icon={
					<FaAngleDoubleLeft
						className={`${
							isFull
								? 'duration-500 transition-all'
								: 'rotate-180 duration-500 transition-all'
						}`}
					/>
				}
				onClickHandler={onSetFull}
				hidden={'hidden lg:flex'}
			/>
			<HeaderButton
				icon={
					<img
						src={menuIcon}
						alt='menu'
						className=' w-7 h-7'
						ref={navButtonRef}
					/>
				}
				onClickHandler={() => setOpenNav(true)}
				hidden={'block lg:hidden'}
			/>
			<div className='flex items-center ml-auto gap-2 relative'>
				<HeaderButton icon={<MdSearch className='text-xl' />} />
				{lightMode ? (
					<HeaderButton
						icon={<MdDarkMode className='text-xl' />}
						onClickHandler={onLightModeHandler}
					/>
				) : (
					<HeaderButton
						icon={<MdLightMode className='text-xl' />}
						onClickHandler={onLightModeHandler}
					/>
				)}
				<SelectLanguage />
				<HeaderButton
					icon={
						<img
							src={avatar}
							alt='avatar'
							className='rounded-full'
							ref={menuRef}
						/>
					}
					onClickHandler={onShowMenuHandler}
				/>
				<HeaderMenu show={showMenu} wrapperRef={menuWrapperRef} />
			</div>
			{openNav &&
				createPortal(
					<Navigation
						isFull={true}
						responsive={'fixed top-0 z-50 bg-white'}
						refResponsive={navRef}
					/>,
					rootDiv
				)}
			{openNav &&
				createPortal(
					<div className='fixed left-0 top-0 w-full h-full bg-black opacity-50 overflow-hidden z-40'></div>,
					rootDiv
				)}
		</header>
	);
};

export default Header;
