import { useState, useRef } from 'react';
import './App.css';
import { isEmailValid, isPasswordValid } from './utils/validationUtils';
import InputField from './components/input/InputField';
import SubmitButton from './components/button/SubmitButton';

function App() {
	const registerButtonRef = useRef();

	const [formData, setFormData] = useState({
		email: '',
		password: '',
		repeatPassword: '',
	});

	const [errors, setErrors] = useState({
		email: '',
		password: '',
		repeatPassword: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
		setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { email, password, repeatPassword } = formData;

		if (!isEmailValid(email)) {
			setErrors((prevErrors) => ({
				...prevErrors,
				email: 'Неверный формат электронной почты',
			}));
		} else if (!isPasswordValid(password)) {
			setErrors((prevErrors) => ({
				...prevErrors,
				password: 'Пароль должен содержать как минимум 6 символов',
			}));
		} else if (password !== repeatPassword) {
			setErrors((prevErrors) => ({
				...prevErrors,
				repeatPassword: 'Пароли не совпадают',
			}));
		} else {
			console.log('Данные формы:', formData);
			registerButtonRef.current.focus();
		}
	};

	const isFormValid = () => {
		return (
			formData.email !== '' &&
			formData.password !== '' &&
			formData.repeatPassword !== ''
		);
	};

	return (
		<div className="App">
			<h2>Sign Up</h2>
			<form onSubmit={handleSubmit}>
				<InputField
					label="Email"
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					error={errors.email}
				/>
				<InputField
					label="Пароль"
					type="password"
					name="password"
					value={formData.password}
					onChange={handleChange}
					error={errors.password}
				/>
				<InputField
					label="Повторите пароль"
					type="password"
					name="repeatPassword"
					value={formData.repeatPassword}
					onChange={handleChange}
					error={errors.repeatPassword}
				/>
				<SubmitButton
					isFormValid={isFormValid}
					registerButtonRef={registerButtonRef}
				/>
			</form>
		</div>
	);
}

export default App;
