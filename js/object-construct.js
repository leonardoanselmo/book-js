function hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}

var palaceHotel = new hotel('Palace Hotel', 155, 77);

var nameHotel = palaceHotel.name;
var roomsHotel = palaceHotel.rooms;
var bookedHotel = palaceHotel.booked;
var availableHotel = palaceHotel.checkAvailability();

var atrNameHotel = document.getElementById('hotel-name');
atrNameHotel.innerHTML = 'Hotel: '+nameHotel;

var atrRoomsHotel = document.getElementById('hotel-rooms');
atrRoomsHotel.innerHTML = 'Quartos: '+roomsHotel;

var atrBookedHotel = document.getElementById('hotel-booked');
atrBookedHotel.innerHTML = 'Reservados: '+bookedHotel;

var atrAvailableHotel = document.getElementById('hotel-available');
atrAvailableHotel.innerHTML = 'Disponivéis: '+availableHotel;
