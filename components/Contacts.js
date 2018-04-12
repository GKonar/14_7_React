// Komponent Contacts ma za zadanie wyświetlić całą listę kontaktów
var Contacts = React.createClass({
	propTypes: {
		items: React.PropTypes.array.isRequired,
	},

	render: function(){
		var contacts = this.props.item.map(function(contact) {
			return React.createElement(Contact, { item:contact, key: contact.id});
		});

		return(
			React.createElement('ul',{className: 'contactsList'}, contacts)
		);
	}
});