const Plane = require('./plane.js');

class Airport {

	DEF_CAPACITY = 10;

	constructor(airportCapacity = this.DEF_CAPACITY) {
		this.planes = [];
		this.airportCapacity = airportCapacity;
	}

	getCapacity() {
		return this.airportCapacity;
	}

	changeCapacity(size) {
		if (typeof size !== 'number' || size < 0) return new Error('Invalid new capacity passed as argument.')
		this.airportCapacity = size;
	}
	
	isAtAirport(plane) {
		return this.planes.includes(plane);
	}

	takeOff(plane) {
		if (plane instanceof Plane === false || this.isAtAirport(plane) === false) return new Error('Invalid plane passed as argument');
		this.planes.splice(this.planes.indexOf(plane), 1);
	}

	land(plane) {
		if (plane instanceof Plane === false || this.isAtAirport(plane) === true) return new Error('Invalid plane passed as argument.');
		this.planes.push(plane);
	}

	isFull() {
		console.log(this.planes.length)
		return this.planes.length == this.getCapacity();
	}

}

module.exports = Airport;
