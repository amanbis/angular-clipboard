(function() {
	var app = angular.module('clipboard', []);

	app.controller('MainController', function() {
		this.list = lists;
		this.newTitle = '';
		this.newTask = '';

		this.checklist = checklists;
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};

		this.addTitle = function() {
			this.list.title = this.newTitle;
			this.list.active = true;
		};

		this.addTask = function(listObj) {
			/*this.list.count++;
			this.list.tasks['task' + this.list.count] = this.newTask;*/
			listObj.tasks.push(this.newTask);
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

	var checklists = [
		{
			id: 1,
			title: "Videogames",
			tasks: [
				"Mass Effect",
				"Mass Effect 2",
				"Mass Effect 3"
			],
			active: false
		},
		{
			id: 2,
			title: "Books",
			tasks: [
				"The Count of Monte Cristo",
				"Never Let Me Go",
				"The Colorless Tsukuru Tazaki"
			],
			active: false
		}
	];

})();
