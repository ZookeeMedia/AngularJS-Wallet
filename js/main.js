function ctrl($scope){
  $scope.rows = ['20','37','412'];
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
    //
  };

  $scope.credittotal = function (){
    //
  };

  $scope.debittotal = function (){
    //
  };

  $scope.creditTemp = function(){
    if($scope.temp) $scope.rows.pop(); 
    else if($scope.creditAmount) $scope.temp = true;
    
    if($scope.creditAmount) $scope.rows.push($scope.creditAmount);
    else $scope.temp = false;
  };

  $scope.debitTemp = function(){
    if($scope.temp) $scope.rows.pop(); 
    else if($scope.debitAmount) $scope.temp = true;
    
    if($scope.debitAmount) $scope.rows.push($scope.debitAmount);
    else $scope.temp = false;
  };
  
  $scope.isTemp = function(i){
    return i==$scope.rows.length-1 && $scope.temp;
  };
  
}