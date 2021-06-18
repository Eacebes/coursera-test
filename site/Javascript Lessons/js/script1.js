(function(window) {

var eduardoAcebes = {};
eduardoAcebes.name = "Eduardo";
var greeting = "Hello ";
eduardoAcebes.sayHello = function () {
	console.log(greeting + eduardoAcebes.name);
}

window.eduardoAcebes = eduardoAcebes;
})(window);