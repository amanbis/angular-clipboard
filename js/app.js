(function() {
	var app = angular.module('clipboard', []);

	app.controller('MainController', function() {
		this.list = lists;
		this.newTitle = '';
		this.show = false;

		this.addTitle = function() {
			this.list.title = this.newTitle;
			this.show = true;
		};
	});

	var lists = { 
		title: 'Hi',
		tasks: {
			task1: 'Finish website',
			task2: 'Finish this app'	
		} 
	};

})();
