const assertEquals = (expected, actual) => expected === actual;
const assertNotEquals = (expected, actual) => expected !== actual;
const assertTrue = actual => actual === true;
const assertFalse = actual => actual=== false;
const assertTypeOf = (expected, actual) => expected === typeof actual;
const assertThrows = actual => typeof actual === typeof new Error();
// const assertPropEqual = (expected, actual) => 

export {
	assertEquals,
	assertNotEquals,
	assertTrue,
	assertFalse,
	assertTypeOf,
	assertThrows //, assertPropEqual,
};
