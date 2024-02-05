export const PUBLIC_KEY = 'nkyQqC9qHI6X7XrB-';

export const TEMPLATE_ID = 'template_xwf7mtg';

export const SERVICE_ID = 'service_jmb94ve';

(function () {
	emailjs.init({
		publicKey: PUBLIC_KEY,
		list: [
			'foo@emailjs.com',
			'bar@emailjs.com',
			'test@gmail.com'
		],
		limitRate: {
			throttle: 10000
		}
	});

	let templateParams = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};

	const setTemplateParams = () => {
		templateParams.name = document.getElementById('name').value
		templateParams.email = document.getElementById('email').value
		templateParams.subject = document.getElementById('subject').value
		templateParams.message = document.getElementById('message').value
	}

	const handleSubmit = evt => {
		let thisForm = evt.target;

		evt.preventDefault();
		thisForm.querySelector('.loading').classList.add('d-block');

		setTemplateParams();

		console.log(templateParams);

		emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {}).then(
			() => {
				thisForm.querySelector('.loading').classList.remove('d-block');
				thisForm.querySelector('.sent-message').classList.add('d-block');
			},
			(error) => {
				thisForm.querySelector('.loading').classList.remove('d-block');
				thisForm.querySelector('.sent-message').classList.add('d-block');
				console.log('FAILED...', error);
			},
		)
	};

	document.getElementById('contact-form').addEventListener('submit', handleSubmit);
})();