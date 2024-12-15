class Passenger {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Train {
    constructor(name, destination) {
        this.name = name;
        this.destination = destination;
        this.ticketsSold = 0;  // Лічильник проданих квитків
    }

    sellTicket() {
        this.ticketsSold++;
    }

    getTicketCount() {
        return this.ticketsSold;
    }
}

class Ticket {
    constructor(passenger, train, price) {
        this.passenger = passenger;
        this.train = train;
        this.price = price;
    }
}

class TicketSystem {
    constructor() {
        this.passengers = [];
        this.trains = [];
        this.tickets = [];
    }

    // Додавання нового пасажира в колекцію
    addPassenger(name, age) {
        const passenger = new Passenger(name, age);
        this.passengers.push(passenger);
    }

    // Редагування пасажира в колекції
    editPassenger(oldName, newName, newAge) {
        const passenger = this.passengers.find(p => p.name === oldName);
        if (passenger) {
            passenger.name = newName;
            passenger.age = newAge;
        }
    }

    // Видалення пасажира з колекції
    deletePassenger(name) {
        this.passengers = this.passengers.filter(p => p.name !== name);
    }

    // Пошук одного пасажира в колекції
    findPassenger(name) {
        return this.passengers.find(p => p.name === name);
    }

    // Додавання потяга в колекцію
    addTrain(name, destination) {
        const train = new Train(name, destination);
        this.trains.push(train);
    }

    // Редагування потяга в колекції
    editTrain(oldName, newName, newDestination) {
        const train = this.trains.find(t => t.name === oldName);
        if (train) {
            train.name = newName;
            train.destination = newDestination;
        }
    }

    // Видалення потяга з колекції
    deleteTrain(name) {
        this.trains = this.trains.filter(t => t.name !== name);
    }

    // Пошук одного потяга в колекції
    findTrain(name) {
        return this.trains.find(t => t.name === name);
    }

    // Покупка пасажиром квитка на потяг
    buyTicket(passengerName, trainName, price) {
        const passenger = this.findPassenger(passengerName);
        const train = this.findTrain(trainName);

        if (passenger && train) {
            const ticket = new Ticket(passenger, train, price);
            this.tickets.push(ticket);
            train.sellTicket();
            return ticket;
        } else {
            console.log("Пасажир або потяг не знайдено!");
        }
    }

    // Зміна квитка із одного потяга на інший
    changeTicket(ticket, newTrain) {
        ticket.train = newTrain;
        newTrain.sellTicket();
    }

    // Скасування покупки квитка
    cancelTicket(ticket) {
        const train = ticket.train;
        train.ticketsSold--;
        this.tickets = this.tickets.filter(t => t !== ticket);
    }

    // Пошук потяга, на який продали найбільше/найменше квитків
    findTrainWithMostTickets() {
        return this.trains.reduce((maxTrain, train) => {
            return (train.getTicketCount() > maxTrain.getTicketCount()) ? train : maxTrain;
        });
    }

    findTrainWithLeastTickets() {
        return this.trains.reduce((minTrain, train) => {
            return (train.getTicketCount() < minTrain.getTicketCount()) ? train : minTrain;
        });
    }
}

// Тестування системи
const system = new TicketSystem();

// Додавання пасажирів та потягів
system.addPassenger('Ivan', 30);
system.addPassenger('Olga', 25);
system.addTrain('Express', 'Kyiv');
system.addTrain('FastTrain', 'Lviv');

// Редагування пасажира
system.editPassenger('Ivan', 'Vlad', 32);

// Пошук пасажира
console.log(system.findPassenger('Vlad'));

// Покупка квитка
const ticket1 = system.buyTicket('Vlad', 'Express', 100);

// Зміна квитка на інший потяг
const newTrain = system.findTrain('FastTrain');
system.changeTicket(ticket1, newTrain);

// Скасування квитка
system.cancelTicket(ticket1);

// Пошук потягів з найбільшою та найменшою кількістю квитків
console.log(system.findTrainWithMostTickets());
console.log(system.findTrainWithLeastTickets());
