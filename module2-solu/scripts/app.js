(function(){

	angular.module("ShoppingListCheckOff", [])
	.controller("ListController1", ListController1)
	.controller("ListController2", ListController2)
	.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

	ListController1.$inject = ["ShoppingListCheckOffService"];
	function ListController1(ShoppingListCheckOffService){
		var itemBuyer = this;
		ShoppingListCheckOffService.populateList();
		itemBuyer.Items = ShoppingListCheckOffService.getItemsToBuy();
		itemBuyer.Message = "Everything bought!"
		itemBuyer.buyItem = function (index) {
			ShoppingListCheckOffService.buyItem(index);

		}
		
		
		
	};

	ListController2.$inject = ["ShoppingListCheckOffService"];
	function ListController2(ShoppingListCheckOffService){
		var itemsBought = this;

		itemsBought.Items = ShoppingListCheckOffService.getItemsBought();
		itemsBought.Message = "Nothing bought yet."
		
	};

	function ShoppingListCheckOffService(){
		var service = this;

		var toBuyItems = [];
		service.populateList = function(){
			for (var i = 0; i <= 10; i++) {
				var item = {
					name: "Cookies",
					quantity: "10 bags"
				}
				toBuyItems.push(item);
			}
		}
		
		
		var boughtItems = [];

		service.buyItem = function(index){
			boughtItems.push(toBuyItems[index]);
			toBuyItems.splice(index, 1);
		}

		service.getItemsBought = function(){
			return boughtItems;
		}

		service.getItemsToBuy = function () {
			return toBuyItems;
		}

	};



})();