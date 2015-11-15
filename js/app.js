(function() {
	var app = angular.module('clipboard', []);

	app.controller('MainController', ['$scope', function($scope) {
		this.list = lists;
		this.newTitle = '';
		this.newTask = '';
		this.taskID = 9;

		$scope.checklist = checklists;
		$scope.tab = 1;
		this.newList = {};

		$scope.taskView = false;
		$scope.bg = true;

		$scope.theme = {
			bgImg: 'bamboo',
			bgColor: 'bamboo-color',
			inputBorder: 'bamboo-input',
			colorRGB: { light: 'rgb(142, 168, 134)', dark: 'rgb(119, 139, 113)'},
			colorRGBA: { light: 'rgba(142, 168, 134, 0.95)', dark: 'rgba(119, 139, 113, 0.95)'}
		};

		$scope.selectTab = function(setTab) {
			$scope.tab = setTab;
			$scope.taskView = true;
			console.log($scope.tab);
		};

		$scope.isSelected = function(checkTab) {
			return $scope.tab === checkTab;
		};

		this.addList = function() {
			this.newList = { 
				id: 0,
				title: "New List",
				tasks: [],
				completed: [],
				active: false
			};

			this.newList.id = this.checklist.length + 1;
			this.checklist.push(this.newList);
			this.selectTab(this.newList.id);
			console.log(this.checklist);
		};

		this.addTitle = function(listObj) {
			listObj.title = this.newTitle;
			listObj.active = true;
			this.newTitle = "";
		};

		this.editTitle = function(listObj) {
			this.newTitle = listObj.title;
			listObj.active = false;
		};

		this.removeList = function(list) {
			var index = this.checklist.indexOf(list);
			this.checklist.splice(index, 1);

			for(var i = index; i < this.checklist.length; i++) {
				var newID = this.checklist[i].id;
				this.checklist[i].id = newID - 1;
			}

			if (this.tab > this.checklist.length) {
				this.tab = this.tab - 1;
			}
		};

		this.addTask = function(listObj) {
			/*this.list.count++;
			this.list.tasks['task' + this.list.count] = this.newTask;*/
			this.taskID++;
			var item = { id: this.taskID, description: this.newTask, active: true };
			listObj.tasks.push(item);
			this.newTask = '';
		};

		this.editTask = function(task) {
			this.selectTask.taskDesc[task.id] = task.description;
			task.active = false;
		};

		this.setTaskEdit = function(task) {
			task.description = this.selectTask.taskDesc[task.id];
			task.active = true;
		};

		this.cancelTaskEdit = function(task) {
			task.active = true;
		};

		this.removeTask = function(list, task) {
			var index = list.tasks.indexOf(task);
			list.tasks.splice(index, 1);
		};

		this.completeTask = function(list, task) {
			var index = list.tasks.indexOf(task);
			list.completed.push(task);
			list.tasks.splice(index, 1);
			console.log(list.completed);
		};

		this.undoComplete = function(list, complete) {
			var index = list.completed.indexOf(complete);
			list.tasks.push(complete);
			list.completed.splice(index, 1);
			console.log(list.tasks);
		};

		$scope.setTheme = function(light, dark) {
			$scope.theme.bgColor = $scope.theme.bgImg + '-color';
			$scope.theme.inputBorder = $scope.theme.bgImg + '-input';
			$scope.theme.colorRGB.light = 'rgb(' + light + ')';
			$scope.theme.colorRGB.dark = 'rgb(' + dark + ')';
			$scope.theme.colorRGBA.light = 'rgba(' + light + ', 0.95)';
			$scope.theme.colorRGBA.dark = 'rgba(' + dark + ', 0.95)';
		};

		this.selectTask = {
			checked: {},
			taskDesc: {}
		};
	}]);

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
				{ id: 1, description: "Mass Effect", active: true },
				{ id: 2, description: "Mass Effect 2", active: true },
				{ id: 3, description: "Mass Effect 3", active: true }
			],
			completed: [],
			active: true
		},
		{
			id: 2,
			title: "Books",
			tasks: [
				{ id: 4, description: "The Count of Monte Cristo", active: true },
				{ id: 5, description: "Never Let Me Go", active: true },
				{ id: 6, description: "The Colorless Tsukuru Tazaki", active: true }
			],
			completed: [],
			active: true
		},
		{
			id: 3,
			title: "Songs",
			tasks: [
				{ id: 7, description: "Farewell and Into the Inevitable", active: true },
				{ id: 8, description: "An End Once and For All", active: true },
				{ id: 9, description: "Liara's Theme/Vigil", active: true }
			],
			completed: [],
			active: true
		}
	];

})();
