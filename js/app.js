var app=angular.module('portfolio',['ngRoute'])
.config(function($routeProvider){
	$routeProvider.when('/projects/:id',{
		templateUrl:'views/show.html'
	}).when('/cv',{
		templateUrl:'views/cv.html'
	}).when('/projects',{
		templateUrl:'views/projects.html'
	}).when('/:type',{
		templateUrl:'views/projects.html'
	})
	.otherwise({redirectTo:'/projects'});
});

var projects=[{
	id:5,
	name:'Vicken Liu | Portfolio',
	info:'Version 3 personal portfolio,Try to squeeze all the information on a single page. Started from scratch,Try to impliment more new stuff within the code.',
	link:'www.vickenliu.com',
	img:'img/portfolio.png',
	type:'personal'
},{
	id:1,
	name:'EDA blogs',
	info:'Here is where my EDA study assignments go,including blogs,and js Apps. It records most of reflections and learning experience',
	link:'vickenliu.github.io',
	img:'img/eda.png',
	type:'personal'
},{
	id:2,
	name:'Tongle Health Consulting Service Center',
	info:'Transfer an old style plain page to a modern, clean-designed website.Fully functinal, cross-browsers,and mobile friendly.',
	link:'www.tlgay.com',
	img:'img/tl.png',
	type:'commercial'
},{
	id:3,
	name:'Personal Website',
	info:'Version1 personal portfolio refreshing with new technichs implementation',
	link:'www.vickenliu.com/V1',
	img:'img/bgcn2.jpg',
	type:'personal'
},{
	id:4,
	name:'Portfolio | App',
	info:'Deliver the one page App to showcase my works, and playing around with AJAX and new designed layout. ',
	link:'www.vickenliu.com/test',
	img:'img/test.png',
	type:'personal'
},{
	id:6,
	name:'SHARE WITH ME',
	info:"I had an idea to recieve others' sharing with me, I created this App with Ruby on Rails to play around and inspire peopele to contact with me.",
	link:'www.vickenliu.com',
	img:'img/rails.png',
	type:'commercial'
},{
	id:7,
	name:'This is Me | App',
	info:'Portfolio of one page App developed with Angular Js',
	link:'/',
	img:'img/angular.png',
	type:'commercial'
}],
types=['personal','commercial'],
historys=[{
	year:'2016.1-2016.5',
	school:'Enspiral Dev Academy',
	active:'Web Development',
	img:'img/dev.png'
},{
	year:'2015.10-present',
	school:'Code School',
	active:'Full-stack Development',
	img:'img/codeschool.png'
},{
	year:'2015.7-2009.6',
	school:'China Three Gorges University',
	active:'Engineering of Automation',
	img:'img/ctgu.png'
}];

app.controller('mainController', function($scope,$routeParams){
	$scope.types=types;
	$scope.routeParams=$routeParams;
	if($routeParams.type){
		$scope.projects=projects.filter(function(a){
			return a.type == $routeParams.type;
		});
	}else{
		$scope.projects=projects;
	}
});
app.directive('myName',function(){
	return{
		restrict:'E',
		scope: {
      		projects: '='
    	},
		templateUrl:'views/myName.html',
		link: function(){
			setTimeout(mason, 100);
			function mason(){
				console.log('ex');
				$('div.grid').masonry({
				  // options
				  itemSelector: 'div.grid-item',
				  columnWidth: 'div.grid-item'
				});
			}
		}
	};
});
app.controller('showController',function($scope,$routeParams){
	$scope.project=projects.filter(function(a){
		return a.id==$routeParams.id;
	})[0];
	$scope.console=function(){
		console.log($routeParams);
	};
});
app.controller('educationController',function($scope){
	$scope.historys=historys;
});
