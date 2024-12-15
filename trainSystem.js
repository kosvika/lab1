'use strict';

class Passenger {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Ticket {
    constructor(passenger, train, price) {
        this.passenger = passenger;
        this.train = train;
        this.price = price;
    }
}

class Train {
    constructor(name, destination) {
        this.name = name;
        this.destination = destination;
        this.ticketsSold = 0;
    }

    sellTicket(ticket) {
        this.ticketsSold++;
        console.log(`Ticket sold to ${ticket.passenger.name} for ${ticket.price}`);
    }
}

// Тестування
const passenger = new Passenger('Ivan', 30);
const train = new Train('Express', 'Kyiv');
const ticket = new Ticket(passenger, train, 100);

train.sellTicket(ticket);
