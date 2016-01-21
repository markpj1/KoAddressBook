//Module for Address book

var AddressBook = (function () {
	//add members here
	var contact = {
		name: ko.observable(),
		phoneNumber: ko.observable()
	};

	var contacts = ko.observableArray();
	
  //push object {name phoneNumber} into contacts array. 
	var addContact = function () {
		console.log("Adding new contact with name: " + contact.name() + " and phoneNumber " + contact.phoneNumber());
	  contacts.push({name: contact.name(), phoneNumber: contact.phoneNumber()});
    clearContact();
    console.log(contacts());
	};

	var clearContact = function () {
		contact.name(null);
		contact.phoneNumber(null);
	};


  // code to initialize functions.
	var init = function () {
		ko.applyBindings(AddressBook);
	};
	

	//execute functions when DOM loads
	$(init);

	//add members that will be exposed public
	return {
		contact: contact,
		contacts: contacts,
		addContact: addContact
	}; 

}());

