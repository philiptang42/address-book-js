var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-777",
    email: "bob.jones@example.com"
};

mary = new Object();
mary.firstName = "Mary";
mary.lastName = "Johnson";
mary.phoneNumber = "(650) 888-8888";
mary.email = "mary.johnson@example.com";

contacts = new Array();
contacts[0] = bob
contacts[1] = mary

var printPerson = function(person) {
  console.log(person.firstName + " " + person.lastName)
};

var list = function() {
  contactsLength = contacts.length
  for (i = 0; i <= (contactsLength - 1); i++) {
    printPerson(contacts[i]);
  }
};

var search = function(lastName) {
  var contactsLength = contacts.length;
  for (var i = 0; i < contactsLength; i++) {
    if(contacts[i].lastName === lastName) {
      printPerson(contacts[i]);
    }
  }
};

list()
search("Jones")
