import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions/userActions';

const parseJwt = (token) => {
	try {
		return JSON.parse(atob(token.split('.')[1]));
	} catch (e) {
		return null;
	}
};

const AuthVerify = ({ props }) => {
	let location = useLocation();
	const dispatch = useDispatch();
	const [cookies] = useCookies();
	useEffect(() => {
		const token = cookies.access_token;
		if (token) {
			const decodedJwt = parseJwt(token);
			if (decodedJwt.exp * 1000 < Date.now()) {
				//logout
			} else {
				dispatch(setUser());
			}
		}
	}, [location, props, cookies.access_token, dispatch]);

	return;
};

export default AuthVerify;
