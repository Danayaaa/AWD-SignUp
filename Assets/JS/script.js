$(document).ready(function(){
    $(".login").hide(); 
    $(".signup").show(); 
    $("#login-box-link").removeClass("active"); 
    $("#signup-box-link").addClass("active");

    $("#signup-box-link").click(function(){
        $(".login").fadeOut(100);
        $(".signup").delay(100).fadeIn(100);
        $("#login-box-link").removeClass("active");
        $("#signup-box-link").addClass("active");
    });
    $("#login-box-link").click(function(){
        $(".login").delay(100).fadeIn(100);
        $(".signup").fadeOut(100);
        $("#login-box-link").addClass("active");
        $("#signup-box-link").removeClass("active");
    });
});
document.querySelector('.signup .input button').addEventListener('click', function(event) {
    event.preventDefault();

    var firstName = document.querySelector('.signup input[placeholder="first name"]').value;
    var lastName = document.querySelector('.signup input[placeholder="last name"]').value;
    var password = document.querySelector('.signup input[placeholder="Password"]').value;
    var confirmPassword = document.querySelector('.signup input[placeholder="Confirm Password"]').value;

    document.getElementById('modalText').innerHTML = 'First Name:  ' + firstName + '<br>Last Name:  ' + lastName + '<br>Password:  ' + password + '<br>Confirm Password:  ' + confirmPassword;

    var modal = document.getElementById('myModal');
    modal.style.display = 'block';

    document.querySelector('.close').addEventListener('click', function() {
        modal.style.display = 'none';
    });
});
