$(document).ready(function() {

    $('.btn-primary').click(function(e) {
      e.preventDefault();
      $('#credit, #debit').val('');
    });



});

function ctrl($scope){
  $scope.rows = [];
  $scope.ol = function(){ 
    return Object.keys($scope.rows).length;
  }
  
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
        total = (total + $scope.rows[i].amount);
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
    //if($scope.temp) $scope.rows.pop(); 
    //else if($scope.creditAmount) $scope.temp = true;

    rightnow = $scope.todaysDate();
    
    if($scope.creditAmount)  $scope.rows = $scope.rows.concat( [{amount:+$scope.creditAmount, date:rightnow}] );
    else $scope.temp = false;

  };

  $scope.debitTemp = function(){
    //if($scope.temp) $scope.rows.pop(); 
    //else if($scope.debitAmount) $scope.temp = true;
    
    rightnow = $scope.todaysDate();

    if($scope.debitAmount)  $scope.rows = $scope.rows.concat( [{amount:-$scope.debitAmount, date:rightnow}] );
    else $scope.temp = false;

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
  
}