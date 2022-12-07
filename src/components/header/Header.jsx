import React, { useState, useEffect, useRef } from 'react';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { MdDarkMode, MdLightMode, MdSearch } from 'react-icons/md';
import HeaderButton from './HeaderButton';
import avatar from '../../assets/musashi.jpg';
import HeaderMenu from './HeaderMenu';

const Header = ({ isFull, onSetFull }) => {
	const [lightMode, setLightMode] = useState(true);
	const [showMenu, setShowMenu] = useState(false);
	const menuWrapperRef = useRef();
	const menuRef = useRef();

	useEffect(() => {
		const closeMenu = (e) => {
			if (
				e.path[0] !== menuRef.current &&
				e.path[0] !== menuWrapperRef.current
			) {
				setShowMenu(false);
			}
		};
		document.body.addEventListener('click', closeMenu);

		return () => {
			document.body.removeEventListener('click', closeMenu);
		};
	}, []);

	const onLightModeHandler = () => {
		setLightMode((state) => !state);
	};

	const onShowMenuHandler = () => {
		setShowMenu(true);
	};

	return (
		<header
			className={`${
				isFull
					? 'left-64 w-[calc(100%_-_16rem)]'
					: 'left-20 w-[calc(100%_-_5rem)]'
			} pr-10 pl-4 flex items-center h-16 fixed top-0 border-b-2 border-black duration-500 transition-all`}>
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
		</header>
	);
};

export default Header;
