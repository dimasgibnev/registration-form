export const validateScheme = {
	password: {
		isRequired: {
			message: 'Пароль обязателен',
		},
		min: {
			message: 'Пароль должен содеражать минимум 6 символов',
			param: 6,
		},
		max: {
			message: 'Пароль должен содержать максимум 20 символов',
			param: 20,
		},
	},
	email: {
		isRequired: {
			message: 'Почта обязательна',
		},
		isEmail: {
			message: 'Почта должна быть верной',
		},
	},
	passwordRepeat: {
		isRequired: {
			message: 'Пароль обязателен',
		},
		matchPassword: {
			message: 'Пароль должен совпадать',
			param: 'password'
		},
	},
};
