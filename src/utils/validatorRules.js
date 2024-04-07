/* eslint-disable import/no-anonymous-default-export */
export default {
	isRequired: (value) => Boolean(value.trim()),
	isEmail: (value) => {
		const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		return reg.test(String(value).toLowerCase());
	},
	min: (value, param) => value.length >= param,
	max: (value, param) => value.length <= param,
	matchPassword: (value, param, data) => value === data[param]

};
