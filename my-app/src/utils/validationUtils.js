export const isEmailValid = (email) => {
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailPattern.test(email);
};

export const isPasswordValid = (password) => {
	return password.length >= 6;
};
