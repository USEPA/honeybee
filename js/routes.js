angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.home', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.submitAReport'
      2) Using $state.go programatically:
        $state.go('tabsController.submitAReport');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page3
      /page1/tab2/page3
  */
  .state('tabsController.submitAReport', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/submitAReport.html',
        controller: 'submitAReportCtrl'
      },
      'tab2': {
        templateUrl: 'templates/submitAReport.html',
        controller: 'submitAReportCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.userProfile'
      2) Using $state.go programatically:
        $state.go('tabsController.userProfile');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page4
      /page1/tab3/page4
  */
  .state('tabsController.userProfile', {
    url: '/page4',
    views: {
      'tab1': {
        templateUrl: 'templates/userProfile.html',
        controller: 'userProfileCtrl'
      },
      'tab3': {
        templateUrl: 'templates/userProfile.html',
        controller: 'userProfileCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page6',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.plantSpeciesIdentification'
      2) Using $state.go programatically:
        $state.go('tabsController.plantSpeciesIdentification');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page7
      /page1/tab2/page7
  */
  .state('tabsController.plantSpeciesIdentification', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/plantSpeciesIdentification.html',
        controller: 'plantSpeciesIdentificationCtrl'
      },
      'tab2': {
        templateUrl: 'templates/plantSpeciesIdentification.html',
        controller: 'plantSpeciesIdentificationCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.dataCollection'
      2) Using $state.go programatically:
        $state.go('tabsController.dataCollection');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page8
      /page1/tab2/page8
  */
  .state('tabsController.dataCollection', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/dataCollection.html',
        controller: 'dataCollectionCtrl'
      },
      'tab2': {
        templateUrl: 'templates/dataCollection.html',
        controller: 'dataCollectionCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.confirmation'
      2) Using $state.go programatically:
        $state.go('tabsController.confirmation');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page9
      /page1/tab2/page9
  */
  .state('tabsController.confirmation', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/confirmation.html',
        controller: 'confirmationCtrl'
      },
      'tab2': {
        templateUrl: 'templates/confirmation.html',
        controller: 'confirmationCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.labelGeneration'
      2) Using $state.go programatically:
        $state.go('tabsController.labelGeneration');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page10
      /page1/tab2/page10
  */
  .state('tabsController.labelGeneration', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/labelGeneration.html',
        controller: 'labelGenerationCtrl'
      },
      'tab2': {
        templateUrl: 'templates/labelGeneration.html',
        controller: 'labelGenerationCtrl'
      }
    }
  })

  .state('pastSubmissions', {
    url: '/page11',
    templateUrl: 'templates/pastSubmissions.html',
    controller: 'pastSubmissionsCtrl'
  })

$urlRouterProvider.otherwise('/page6')

  

});