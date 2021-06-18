(function (window) {

	var juzMiciano = {};
	juzMiciano.name = "Juz";
	var greeting = "Hi ";
	juzMiciano.sayHi =  function () {
		console.log(greeting + juzMiciano.name);	
	}


	window.juzMiciano = juzMiciano;
	
})(window);




