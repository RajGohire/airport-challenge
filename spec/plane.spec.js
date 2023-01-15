const testFramework = require('../test_framework.js');
const Plane = require('../src/plane.js');

console.log('------------------------------');
console.log('Running tests for plane.js');

// Test 1
{
	console.log('------------------------------');
	console.log('Test 1. (getFlightNum() test). Valid name => "XA-FCV"')

	let input, expected, actual, result, airport, plane, weather;
	
	//1. Arrange
	plane = new Plane('XA-FCV');
	expected = 'XA-FCV';

	//2. Act
	actual = plane.getFlightNum();

	//3. Assert
	result = testFramework.assertEquals(expected, actual);
	
	if (result) console.log("Test Passed.");
	else console.log(`Test Failed. Expected ${expected} but received ${actual}.`);
	console.log('Output: ' + result);
}

// Test 2
{
	console.log('------------------------------');
	console.log('Test 2. (constructor test). Invalid name => Throws Error')

	let input, expected, actual, result, airport, plane, weather;
	
	//1. Arrange
	expected = new Error();

	//2. Act
	actual = new Plane();

	//3. Assert
	result = testFramework.assertThrows(actual);
	
	if (result) console.log("Test Passed.");
	else console.log(`Test Failed. Expected ${expected} but received ${actual}.`);
	console.log('Output: ' + result);
}

console.log('------------------------------');
//Clear
// input = undefined;
// expected = undefined;
// actual = undefined;
// result=undefined;
// airport = undefined;
// plant = undefined;
// weather = undefined;