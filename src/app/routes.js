import applicationTemplate from 'controllers/application/template.html';
                              
import authenticationTemplate from 'controllers/authentication/template.html';
import homeTemplate from 'controllers/home/template.html';
import loginTemplate from 'controllers/login/template.html';
import myProfileTemplate from 'controllers/myProfile/template.html';

export default function ( $stateProvider, $urlRouterProvider, $locationProvider ) {
    'ngInject';

    $locationProvider.html5Mode( {
        enabled: true,
        requireBase: false
    } );

    $urlRouterProvider.otherwise( '/' );

    $stateProvider
        .state( 'app', {
            url: '',
            abstract: true,
            templateUrl: applicationTemplate,
            controller: 'ApplicationController'
        } )
        .state( 'app.home', {
            url: '/',
            templateUrl: homeTemplate,
            controller: 'HomeController'
        } )
        .state( 'app.login', {
            url: '/login',
            templateUrl: loginTemplate,
            controller: 'LoginController'
        } )
        .state( 'app.my', {
            url: '/my',
            templateUrl: authenticationTemplate,
            controller: 'AuthenticationController'
        } )
        .state( 'app.my.profile', {
            url: '/profile',
            templateUrl: myProfileTemplate,
            controller: 'MyProfileController'
        } );
}
