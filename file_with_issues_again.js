/* Here is a file that contains JavaScript issues that will be picked up by most linters*/

function someFunction(unusedParam){
	var a = 10, b = 20;
	if( a!= b){
		return false;
	} else {
		return true;
	}
}

function aFunctionContainingGarbage(){
	just some random text
}

someFunction();