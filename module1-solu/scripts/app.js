(function (){

	angular.module("LunchCheck", [])
	.controller("LunchCheckCtrl", LunchCheckCtrl);

	LunchCheckCtrl.$inject = ["$scope"]
	function LunchCheckCtrl($scope){
		$scope.message = "";
		$scope.items = "";

		$scope.checkItems = function(){
			if($scope.items === ""){
				$scope.message = "Please enter data!"
			}else{
				$scope.message = splitAndCheckLength($scope.items)
			}
		 
		};

		function splitAndCheckLength(string){
			var arr = string.split(",");
				if(arr.length <= 3){
					return "Enjoy!";
				}else if(arr.length > 3){
					return "Too much!";
				}
		}
	};



})();