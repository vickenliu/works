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
	id:8,
	name:'Meowtown',
	info:'This was a school challenge for server-side scripting, I added database and handle-bars with server redering to show my interested of this project.It covers : backend server, database, server-side rendering',
	link:'cat-city.herokuapp.com',
	img:'http://res.cloudinary.com/vicken/image/upload/c_scale,w_500/v1462707560/cat_cbqfsq.png',
	type:'personal'
},{
	id:5,
	name:'Re-Reddit',
	info:'This was originally a group full-stack project of 3 people in 2 days,I brought it furture to how it is now over the following saturday. We used react+redux ,facebook oauth log-in, backend server & database. It has all the feature of reddit.',
	link:'re-reddit.herokuapp.com',
	img:'http://res.cloudinary.com/vicken/image/upload/c_scale,w_500/v1462707580/reddit_znppoz.png',
	type:'personal'
},{
	id:1,
	name:'EDA blogs',
	info:'Here is where my EDA study assignments go,including blogs,and js Apps. It records most of reflections and learning experience',
	link:'vickenliu.github.io',
	img:'http://res.cloudinary.com/vicken/image/upload/c_scale,w_500/v1462707600/eda_ozkjfq.png',
	type:'personal'
},{
	id:2,
	name:'Tongle Health Consulting Service Center',
	info:'Transfer an old style plain page to a modern, clean-designed website.Fully functinal, cross-browsers,and mobile friendly.',
	link:'www.tlgay.com',
	img:'http://res.cloudinary.com/vicken/image/upload/c_scale,w_500/v1462707601/tl_yfubji.png',
	type:'commercial'
},{
	id:4,
	name:'Portfolio | App',
	info:'Deliver the one page App to showcase my works, and playing around with AJAX and new designed layout. ',
	link:'www.vickenliu.com/test',
	img:'http://res.cloudinary.com/vicken/image/upload/c_scale,w_500/v1462707606/test_qwzob4.png',
	type:'personal'
},{
	id:6,
	name:'SHARE WITH ME',
	info:"I had an idea to recieve others' sharing with me, I created this App with Ruby on Rails to play around and inspire peopele to contact with me.",
	link:'share-with-me.herokuapp.com',
	img:'http://res.cloudinary.com/vicken/image/upload/c_scale,w_500/v1462707574/rails_qqen0j.png',
	type:'commercial'
},{
	id:7,
	name:'This is Me | App',
	info:'Portfolio of one page App developed with Angular Js',
	link:'/',
	img:'http://res.cloudinary.com/vicken/image/upload/c_scale,w_500/v1462707551/angular_dsppsv.png',
	type:'commercial'
}],
types=['personal','commercial'],
historys=[{
	year:'2016.1-2016.5',
	school:'Enspiral Dev Academy',
	active:'Full-stack Web Development',
	img:'img/dev.png'
},{
	year:'2015.10-present',
	school:'Code School',
	active:'Full-stack Development',
	img:'img/codeschool.png'
},{
	year:'2005.7-2009.6',
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
