import { initialValue } from '../consts/initialValue';
import { useState } from 'react';

export const useStore = () => {
	const [state, setState] = useState(initialValue);

	return {
		getState: () => state,
		updateState: (fieldName, newValue) => {
			setState({ ...state, [fieldName]: newValue });
		},
		resetState: () => setState(initialValue),
	};
};
