var logger = {
	enableLog:false,
	loggedFunctionArray: [],
	log: function(message){
		if (this.enableLog === true && window.console != undefined) {
			var prefix = "";
			for (var i = 1; i < this.loggedFunctionArray.length; i++) 
				prefix += "\t";
			console.log(prefix + this.loggedFunctionArray[this.loggedFunctionArray.length - 1] + " : ", message);
		}
	},//log
	startLog: function(functionName){
		this.loggedFunctionArray.push(functionName);
		this.log("Start");
	},//startLog
	endLog: function(){
		//var loggedFunction = this.loggedFunctionArray[this.loggedFunctionArray.length-1];
		this.log("End");
		this.loggedFunctionArray.pop();
	},//startLog
};//logger