describe('GatherTop controllers', function () {

  describe('EventListController', function () {

    var scope, ctrl, $httpBackend;

    beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/events.json').
        respond([
          {name: 'Bolinger Board Game Night'},
          {name: 'Some Other Event'},
          {name: 'One More Event'}
        ]);

      scope = $rootScope.$new();
      ctrl = $controller(EventListController, {$scope: scope});
    }));
  });
});