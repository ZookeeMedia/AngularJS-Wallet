$(document).ready(function() {

    $('.btn-primary').click(function(e) {
      e.preventDefault();
      $('#credit, #debit').val('');
    }); 

});

function ctrl($scope){
  $scope.rows = [{amount: 1234,  date: "17-04-2015:15.30pm"},{amount: -234,  date: "17-04-2015:15.30pm"},{amount: 33,  date: "17-04-2015:15.30pm"}];
  $scope.ol = Object.keys($scope.rows).length;
  //$scope.rows.push{amount:36,date:'17/04/2015'}; //{amount:52,date:'17/04/2015'},{amount:29,date:'17/04/2015'}

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

    //rightnow = $scope.todaysDate();
    rightnow = "17-04-2015:16:47pm";
    
    if($scope.creditAmount)  $scope.rows = $scope.rows.concat( [{amount:+$scope.creditAmount, date:rightnow}] );
    else $scope.temp = false;
  };

  $scope.todaysDate = function(){

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    } 

    if(mm<10) {
        mm='0'+mm
    } 

    today = dd+'-'+mm+'-'+yyyy;

    return today;

  }

  $scope.debitTemp = function(){
    //if($scope.temp) $scope.rows.pop(); 
    //else if($scope.debitAmount) $scope.temp = true;
    
    //rightnow = $scope.todaysDate();
    rightnow = "17-04-2015:16:47pm";
    
    if($scope.debitAmount)  $scope.rows = $scope.rows.concat( [{amount:-$scope.debitAmount, date:rightnow}] );
    else $scope.temp = false;

  };
  
  $scope.isTemp = function(i){
    return i==$scope.rows.length-1 && $scope.temp;
  };
  
}