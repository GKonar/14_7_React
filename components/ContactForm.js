// ContactForm - wyświetla widok formularza, ale bez powiązanej logiki
var ContactForm = React.createClass({ //Tworzymy klasę naszego komponentu dzięki metodzie createClass
	propTypes:{
		contact: React.PropTypes.object.isRequired,
	},

	render: function() {
		return(
			React.createElement('form', {className: 'contactForm'}, //tworzymy obiekt form o klasie contactForm
				React.createElement('input', {  //tworzymy obiekt input z właściwościami w propsach
					type: 'text',
					placeholder: 'Imię',
					value: this.props.contact.firstName,
				}),
				React.createElement('input', {
					type: 'text',							// 3 inputy, czyli miejsca do wpisywania
					placeholder: 'Nazwisko',				// oraz 1 przycisk do submit
					value: this.props.contact.lastName,
				}),
				React.createElement('input', {
					type: 'text',
					placeholder: 'Email',
					value: this.props.contact.email,
				}),
				React.createElement('button',{type: 'submit'}, "Dodaj Kontakt") // tworzymy przycisk
			)
		)
	},
})


//ODBUGOWANY