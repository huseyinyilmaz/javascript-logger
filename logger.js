var logger = function(){
		var loggedFunctionArray = [];
	return {
		enableLog:false,
		log: function(message){
			if (this.enableLog === true && window.console != undefined) {
				var prefix = "";
				for (var i = 1; i < loggedFunctionArray.length; i++) 
					prefix += "\t";
				console.log(prefix + loggedFunctionArray[loggedFunctionArray.length - 1] + " : ", message);
			}
		},//log
		warn: function(message){
			if (this.enableLog === true && window.console != undefined) {
				var prefix = "";
				for (var i = 1; i < loggedFunctionArray.length; i++) 
					prefix += "\t";
				console.warn(prefix + loggedFunctionArray[loggedFunctionArray.length - 1] + " : ", message);
			}
		},//log
	
		startLog: function(functionName){
			if (this.enableLog === true && window.console != undefined) {
				loggedFunctionArray.push(functionName);
				this.log("Start");
				if(console.time)
					console.time(functionName);
			};
		},//startLog
		endLog: function(){
			if (this.enableLog === true && window.console != undefined) {
				this.log("End");
				if(console.time)
					console.timeEnd(loggedFunctionArray.pop());
				else
					loggedFunctionArray.pop();
			};
		}//endLog
	};//logger
}();