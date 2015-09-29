$(function(){

var person = sessionStorage.getItem('login');
var employees;

function getting(callback){
    return $.ajax({
        type: "GET",
        url: 'http://localhost:3001/api/employee',
        success: function(data){
            return callback(data);
        }
    })
};

var employeeCallback = function(data) {
    employees = data;
    console.log(employees);
};

getting(employeeCallback);


if (sessionStorage.getItem("login")){

    $("#loggedID").html(person);

    $('#exitUser').on('click', function() {

        $.get( "/../routes/check_login.js", function( data ) {
            $("#loggedIN").html( data );
            console.log( "Load was performed." );
        });

    });

    // HERE are the navigation buttons within the body

    $('#optionsProfile').on('click', function() {
        window.location.href = 'http://localhost:3000/optionsProfile';
    });

    $('#fullSchedule').on('click', function() {
        window.location.href = 'http://localhost:3000/fullSchedule';
    });

    $('#startPage').on('click', function() {
        window.location.href = 'http://localhost:3000/startPage';
    });

    $('#siteMap').on('click', function(){
       window.location.href = 'http://localhost:3000/siteMap';
    });

}

else {

    window.location.href = 'http://localhost:3000/startPage';

}

});