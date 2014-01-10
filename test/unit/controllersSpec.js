describe('PhoneCat controllers', function() {
	beforeEach(module('phonecatApp'));

	describe('PhoneListCtrl', function(){

		it('should create "phones" model with 3 phones', function() {
			var scope = {},
			ctrl = $controller('PhoneListCtrl', { $scope: scope });

			expect(scope.phones.length).toBe(3);
		});
	});
});