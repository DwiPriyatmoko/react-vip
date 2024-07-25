import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useCallback } from 'react';

export const login = (data, callback) => {
	axios
		.post('https://fakestoreapi.com/auth/login', data)
		.then((res) => {
			callback(true, res.data.token);
		})
		.catch((error) => {
			callback(false, error);
		});
};

export const getUsername = (token) => {
	const decoded = jwtDecode(token);
	return decoded.user;
};
