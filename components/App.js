//Wprowadzenie do atrybutów REACT-a // 
var contacts = [
  {
    id: 1,
    firstName: 'Jan',
    lastName: 'Nowak',
    email: 'jan.nowak@example.com',
  },
  {
    id: 2,											//Tablica z kontaktami
    firstName: 'Adam',
    lastName: 'Kowalski',
    email: 'adam.kowalski@example.com',
  },
  {
    id: 3,
    firstName: 'Zbigniew',
    lastName: 'Koziol',
    email: 'zbigniew.koziol@example.com',
  }
];

var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};

var App = React.createClass({ // App jest odpowiedzialne za wyświetlanie, powiązanie, wszystkich elementów !!
	render: function(){ 
		return (
			React.createElement('div', {className: 'app'}, 				// className to odpowiednik class na elemencie HTML
				React.createElement(ContactForm, {contact: contactForm}), // Komponent ContactForm
				React.createElement(Contacts, {item: contacts}, {}) 		// Komponent Contacts
			)
		);
	}
});

// contact to jest contactForm     oba przekazujemy do środka komponentów
// item to jest contacts      
