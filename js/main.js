$(document).ready(function() {
    $('.btn-primary').click(function(e) {
      e.preventDefault();
      $('#credit, #debit').val('');
    });
});

var app = angular.module("walletApp", []);

app.controller("ctrl", function($scope) {
//function ctrl($scope){
  $scope.rows = [];
  $scope.ol = function(){ 
    return Object.keys($scope.rows).length;
  }
  
  $scope.temp = false;
  
  $scope.total = function (){
    var total = 0;
    for(var i = 0; i < $scope.rows.length; i++){
        total = (total + $scope.rows[i].amount);
    }
    return total.toFixed(2);
  };

  $scope.creditdebit = function (amount){
    if(amount > 0){
      cd = "credit";
    } else {
      cd = "debit";
    }
    return cd;
  };

  $scope.creditTemp = function(){
    rightnow = $scope.todaysDate();
    
    if($scope.creditAmount)  $scope.rows = $scope.rows.concat( [{amount:+$scope.creditAmount.toFixed(2), date:rightnow}] );
    else $scope.temp = false;

  };

  $scope.debitTemp = function(){
    rightnow = $scope.todaysDate();
    total = $scope.total();
    if((parseFloat(total) - parseFloat($scope.debitAmount)) > 0 ){
      if($scope.debitAmount)  $scope.rows = $scope.rows.concat( [{amount:-$scope.debitAmount.toFixed(2), date:rightnow}] );
      else $scope.temp = false;
    }
  };

  $scope.todaysDate = function(){

    var today   = new Date();
    var dd      = today.getDate();
    var mm      = today.getMonth()+1; //January is 0!
    var yyyy    = today.getFullYear();
    var hour    = today.getHours();
    var minute  = today.getMinutes();

    if(dd<10) {
        dd='0'+dd
    } 

    if(mm<10) {
        mm='0'+mm
    } 

    today = dd+'-'+mm+'-'+yyyy+' '+hour+':'+minute;
    return today;

  }

  $scope.currencyFormat = function(amount){
    f = amount;
    if(!isNaN(amount)){
      if(amount > 0){
        f = "£" + f;
      } else {
        f *= -1;
        f = "-£" + f;
      }
    }
    return f;
  }

  $scope.isTemp = function(i){
    return i==$scope.rows.length-1 && $scope.temp;
  };
  
});