import axios from 'axios';
import { API_URL } from '../constants/apiConstants';

export default axios.create({
	baseURL: API_URL,
	timeout: 5000,
	withCredentials: true,
	/* headers: {
		Authorization: 'Bearer',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	}, */
});
