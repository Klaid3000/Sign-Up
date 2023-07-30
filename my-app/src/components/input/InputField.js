import styles from './InputField.module.css';

const InputField = ({ label, type, name, value, onChange, error }) => {
	return (
		<div className={styles.formGroup}>
			<label>{label}:</label>
			<input type={type} name={name} value={value} onChange={onChange} />
			{error && <span className={styles.error}>{error}</span>}
		</div>
	);
};

export default InputField;
