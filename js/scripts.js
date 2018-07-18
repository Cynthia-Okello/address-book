//business logic
function Contact(first,last) {
this.firstName = first;
this.lastName = last;
}
Contact.prototype.fullName = function() {
  return this.firstName + "" + this.lastName;
}
function Address(street, city, county) {
  this.street = street;
  this.city = city;
  this.county = county;
}
Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.county;
}


// user interface logic
  $(document).ready(function() {
    $("form#new-contact").submit(function(event) {
      event.preventDefault();

      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();

      var newContact = new Contact(inputtedFirstName, inputtedLastName);

      $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName () + "</span></li>");


      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
    });
  });

  $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
  });

  $(document).ready(function() {
    $("form#new-address").submit(function(event) {
      event.preventDefault();

  
$(".new-address").each(function() {
  var inputtedStreet = $(this).find("input.new-street").val();
  var inputtedCity = $(this).find("input.new-city").val();
  var inputtedCounty = $(this).find("input.new-county").val();
  var newAddress = new Address(inputtedStreet, inputtedCity, inputtedCounty);
  newContact.addresses.push(newAddress);
});
...

...
$("ul#addresses").text("");
newContact.addresses.forEach(function(address) {
  $("ul#addresses").append("<li>" + address.fullAddress () + "</li>");
});
...
