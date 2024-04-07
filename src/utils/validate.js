import validatorRules from './validatorRules';

export function validate(values, config) {
	const errors = {};

	for (const key in values) {
		const validationRules = config[key];
		for (const rule in validationRules) {
			const { message, param } = validationRules[rule];

			const validator = validatorRules[rule];

			const hasError = validator && !validator(values[key], param, values);

			if (hasError) {
				errors[key] = message;
				break;
			}
		}
	}

	return errors;
}
