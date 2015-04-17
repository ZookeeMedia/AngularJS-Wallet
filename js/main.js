$(document).ready(function() {

    $('.btn-primary').click(function(e) {
      e.preventDefault();
      $('#credit, #debit').val('');
    }); 

});


function ctrl($scope){
  $scope.rows = [];
  $scope.temp = false;
  
  $scope.addRow = function(){
    $scope.temp = false;
    $scope.addName="";
  };
  
  $scope.deleteRow = function(row){
    $scope.rows.splice($scope.rows.indexOf(row),1);
  };
  
  $scope.plural = function (tab){
    return tab.length > 1 ? 's': ''; 
  };

  $scope.total = function (){
    var total = 0;
    for(var i = 0; i < $scope.rows.length; i++){
        total = (total + $scope.rows[i]);
    }
    return total;
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
    if($scope.temp) $scope.rows.pop(); 
    else if($scope.creditAmount) $scope.temp = true;
    
    if($scope.creditAmount) $scope.rows.push(+$scope.creditAmount);
    else $scope.temp = false;
  };

  $scope.debitTemp = function(){
    if($scope.temp) $scope.rows.pop(); 
    else if($scope.debitAmount) $scope.temp = true;
    
    if($scope.debitAmount) $scope.rows.push(-$scope.debitAmount);
    else $scope.temp = false;
  };
  
  $scope.isTemp = function(i){
    return i==$scope.rows.length-1 && $scope.temp;
  };
  
}