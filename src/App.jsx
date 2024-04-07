import styles from './App.module.css';
import { useStore } from './hooks/UseStore';
import { InputForm } from './components/InputForm';
import { sendData, validateScheme, validate } from './utils';
import { useEffect, useState, useRef } from 'react';


export const App = () => {
	const { getState, updateState } = useStore();
	const { email, password, passwordRepeat } = getState();
	const [error, setError] = useState({});
	const isValid = Object.keys(error).length === 0;
	const buttonRef = useRef(null);

	function onSubmit(event) {
		event.preventDefault();
		sendData(getState());
	}

	const onChange = ({ target }) => {
		updateState(target.name, target.value);
	};

	useEffect(() => {
		const error = validate(getState(), validateScheme);
		setError(error);
	}, [getState()]);

	useEffect(() => {
		if (isValid) {
			buttonRef.current.focus();
		}
	}, [isValid]);

	return (
		<>
			<form onSubmit={onSubmit} className={styles['registration-form']}>
				<InputForm
					onChange={onChange}
					name={'email'}
					label={'Почта'}
					id={'1'}
					error={error?.email}
					value={email}
				/>
				<InputForm
					onChange={onChange}
					name={'password'}
					label={'Пароль'}
					id={'2'}
					error={error?.password}
					value={password}
				/>
				<InputForm
					onChange={onChange}
					name={'passwordRepeat'}
					label={'Повторите Пароль'}
					id={'3'}
					error={error?.passwordRepeat}
					value={passwordRepeat}
				/>

				<button
					ref={buttonRef}
					disabled={!isValid}
					type="submit"
					className={styles['registration-form__btn']}
				>
					Зарегистрироваться
				</button>
			</form>
		</>
	);
};
