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

printPerson(contacts[0])
printPerson(contacts[1])
