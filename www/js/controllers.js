angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaBarcodeScanner) {
    $scope.imageData = {
        text: null,
        format: null,
        cancelled: null,
        error: null
    };

    $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            $scope.imageData.text = imageData.text;
            $scope.imageData.format = imageData.format;
            $scope.imageData.cancelled = imageData.cancelled;
        }, function(error) {
            $scope.imageData.error = error;
        });
    };
})

.controller('FriendsCtrl', function($scope, Friends) {
    $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
    $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {});
