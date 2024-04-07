import React from 'react';
import styles from './InputForm.module.css';

export const InputForm = ({ label, id, error, ...props }) => {
	return (
		<div className={styles['input-form']}>
			<div className={styles['input-form__label']}>
				<label htmlFor={id}>{label}</label>
			</div>
			<div className={styles['input-form__input']}>
				<input type="text" id={id} {...props} />
				{error && <span className={styles['input-form__error']}>{error}</span>}
			</div>
		</div>
	);
};
