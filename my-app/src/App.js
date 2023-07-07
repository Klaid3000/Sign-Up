import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

export const App = () => {
	const dateNow = new Date(); // отображаем дату и вызываем целый год под ссылкой (это императивный стиль написания кода)

	/*//тут return начинается декларативный стиль. Он не затрагивает элементы. Он просто объявляет, что элементы должны отображаться с учетом нашего текущего состояния.
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>{dateNow.getFullYear()}</p>
			</header>
		</div>
	);*/
	// Код без использования JSX
	return createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
			createElement(
				'p',
				{},
				'Edit ',
				<code>src/App.js</code>,
				' and save to reload.',
			),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			createElement('p', {}, dateNow.getFullYear()),
		),
	);
};
