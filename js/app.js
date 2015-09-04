(function() {
	var app = angular.module('clipboard', []);

	app.controller('MainController', function() {
		this.list = lists;
		this.newTitle = '';
		this.newTask = '';

		this.games = videogames;

		this.addTitle = function() {
			this.list.title = this.newTitle;
			this.list.active = true;
		};

		this.addTask = function() {
			this.list.count++;
			this.list.tasks['task' + this.list.count] = this.newTask;
		};

		this.removeTask = function(task) {
			console.log(task);
		};
	});

	var lists = { 
		title: 'Hi',
		tasks: {},
		active: false,
		count: 0
	};

	var videogames = [
		"Mass Effect",
		"Mass Effect 2",
		"Mass Effect 3"
	];

})();
