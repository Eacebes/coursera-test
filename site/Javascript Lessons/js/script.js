// var x = 6;
// if else function
// if (x==1) {
// 	console.log("1");
// }else if (x==2) {
// 	console.log("2");
// }else if (x==5) {
// 	console.log("5");
// }else{
// 	console.log("X is not 1 or 2 or 5");
// }
// // if (x == 5) { 
// // 	console.log("YAY!");
// // }

// if (x == undefined) {
// console.log("x is undefined");
// }
// else {
// 	console.log("x has been defined"); 
// }



/********** String Concatination **********/
// var finalSentence = "I";
// finalSentence += " Love";
// finalSentence += " You ";

// console.log(finalSentence + "boo" + "<3" + "!");

/********** Regular Math Operators +,-,*,/ **********/
// console.log((5 + 4) / 3);
// console.log(undefined / 5);
// function test1 (a) {
// 	console.log(a / 5);
// }
// test1()


/********** Equality **********/

// var x = 4, y = 4;
// if (x == y) {
// 	console.log("x=4 is equal to y=4");
// }

// x = "4";
// if (x==y); {
// 	console.log("x='4' is equal to y=4");
// }

/********** Strict Equality **********/ 

// if (x === y) {
// 	console.log("Strict: x=4 is equal to y=4");
// }

// else {
// 	console
// 	.log("Strict: x='4' is NOT equal to y=4");
// }


/********** If Statement (all false) **********/

// if ( false || null || undefined || "" || 0 || NaN ) {
// 	console.log("This line won't ever execute");
// }
// else {
// 	console.log("All False");
// }

/********** If Statement (all true) **********/

// if (true && "hello" && 1 && -1 && "false") {
// 	console.log("All true");
// }

/********** Best practice of {} **********/ 

// function a()
// {
// 	return 
// 	{
// 		name: "Eduardo A. Acebes Jr."
// 	};
// }

// function b() {
// 	return {
// 		name: "Eduardo A. Acebes Jr."
// 	};
// } 

// console.log(a());
// console.log(b());

/********** FOR LOOP **********/ 

// var sum = 0;
// for (var i = 0; i < 10; i++) {
// 	console.log(i);
// 	sum = sum + i;
// }
// console.log("sum of 0 through 9 is: " + sum);


/********** Handling Default Values **********/ 

// function orderChickenWith(sideDish) {
// 	sideDish = sideDish || "whatever";
// 	console.log("Chicken with " + sideDish);
// }

// orderChickenWith("noodles");
// orderChickenWith();

/********** QUIZ (pls explain why 2 "hello" appear) **********/ 
// var x = 10;
// if ( (null) || (console.log("Hello")) || x > 5 ) {
//   console.log("Hello");
// }

/********** Object Creation **********/ 

// var school = new Object();
// school.name = "UPHSL";
// school.student = new Object();
// school.student.firstName = "Eduardo ";
// school.student.middleName = "Aggabao"
// school.student.lastName = " Acebes Jr.";

// console.log(school);

// console.log("Student Name is: " + school.student.firstName + school.student.middleName + school.student.lastName);


// console.log(school["name"]);
// var	studentNumber = "student id number"; school[studentNumber] = "14-2224-719";

// console.log("Student ID: " + school[studentNumber]);


/********** Better Way: Object Literal **********/ 

// var UPHSL = {
// 	name: "University of Perpetual Help System Laguna",
// 	studentName: {
// 		firstName: "Eduardo",
// 		lastName: " Acebes"
// 	},
// 	"student ID Number": "14-2224-719"
// };

// console.log(UPHSL.studentName.firstName);


/********** Functions are First-Class Data Types **********/ 
/********** Functions are Objects**********/ 

// function multiply(x,y) {
// 	return	x * y;
// }
// multiply.version = "v.1.0.0";
// console.log(multiply.version);

// /********** Functions factory **********/ 
// function makeMultiplier(multiplier) {
// 	var myFunc = function (x) {
// 		return multiplier * x;
// 	};

// 	return	myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));

// /********** Passing Functions as arguments**********/ 
// function doOperationOn(x, operation) {
// 	return operation(x);
// }

// var result = doOperationOn(5, multiplyBy3);
// console.log(result);
// result = doOperationOn(100, doubleAll);
// console.log(result);

/********** Copy by reference v.s By Value **********/ 
// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b = 5;
// console.log("after b updates:");
// console.log("a: " + a);
// console.log("b: " + b);






// var a = { x: 7};
// var b = a;
// console.log(a);
// console.log(b);


// b.x = 5;
// console.log("after b.x updates:");
// console.log(a);
// console.log(b);


/********** Pass by reference v.s by value **********/
// function changePrimitive(primValue) {
// 	console.log("in changePrimitive...");
// 	console.log("before:");
// 	console.log(primValue);

// 	primValue = 5;
// 	console.log("after:");
// 	console.log(primValue);
// }

// var value = 7;
// changePrimitive(value);
// console.log("after changePrimitive, orig value:");
// console.log(value);





// function changeObject(objValue) {
// 	console.log("in changeObject...");
// 	console.log("before:");
// 	console.log(objValue);

// 	objValue.x = 5;
// 	console.log("after:");
// 	console.log(objValue);
// }

// value = { x: 7};
// changeObject(value);
// console.log("after changeObject, orig value:");
// console.log(value);




/********** function constructors **********/
// function Circle(radius) {
// 	this.radius = radius;
// }

// 	Circle.prototype.getArea = 
// 		function () {
// 			return Math.PI * Math.pow(this.radius, 2);
// 		};



// 	var myCircle = new Circle(2);
// 	console.log(myCircle.getArea());

// 	var myOtherCircle = new Circle(10);
// 	console.log(myOtherCircle.getArea());





/********** Object literal and "this" **********/

// var literalCircle = {
// 	radius: 10,

// 	getArea: function () {
// 		var self = this;
// 		console.log(this);

// 		var increaseRadius = function () {
// 			self.radius = 20;
// 		};
// 		increaseRadius();
// 		console.log(this.radius);

// 		return Math.PI * Math.pow(this.radius, 2);
// 	}
// };

// console.log(literalCircle.getArea());





/********** ARRAYS **********/
// var array = new Array();
// array[0] = "Eduardo"
// array[1] = 2;
// array[2] = function (name) {
// 	console.log("Hello " + name);
// };
// array[3] = {course: " HTML, CSS & JS"};

// console.log(array);
// array[2](array[0]);
// console.log(array[3].course)


/********** Short hand array creation **********/
// var names = ["Acebes", "Eduardo Jr.", "Aggabao"];
// // console.log(names);

// for (var i = 0; i < names.length; i++) {
// 	console.log("Hello " + names[i]);
// }

// names[100] = "Jim";
// for (var i = 0; i < names.length; i++) {
// 	console.log("Hello " + names[i]);
// }



// var names2 = ["Acebes", "Eduardo Jr.", "Aggabao"];

// // var myObj = {
// 	name: "Eduardo",
// 	course: "HTML/CSS/JS",
// 	platform: "Coursera"
// };

// for (var prop in myObj) {
// 	console.log(prop + ": " + myObj[prop]);
// }

// for (var name in names2) {
// 	console.log("Hello " + names2[name]);
// }

// names2.greetings = "Hi!";

// for (var name in names2) {
// 	console.log("Hello " + names2[name]);
// }





/********** Closures **********/
// function makeMultiplier(multiplier) {
// 	function b() {
// 		console.log("multiplier is: " + multiplier);
// 	}
// 	b();


// 	return (
// 		function (x) {
// 			return multiplier * x;

// 		}

// 	);
// }

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(10));