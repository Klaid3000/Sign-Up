import styles from './SubmitButton.module.css';

const SubmitButton = ({ isFormValid, registerButtonRef }) => {
	return (
		<button
			ref={registerButtonRef}
			type="submit"
			className={styles.submitButton}
			disabled={!isFormValid()}
		>
			Зарегистрироваться
		</button>
	);
};

export default SubmitButton;
