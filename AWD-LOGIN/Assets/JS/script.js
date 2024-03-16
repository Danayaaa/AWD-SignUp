$(document).ready(function(){
    $(".email-login").hide(); 
    $(".email-signup").show(); 
    $("#login-box-link").removeClass("active"); 
    $("#signup-box-link").addClass("active");

    $("#signup-box-link").click(function(){
        $(".email-login").fadeOut(100);
        $(".email-signup").delay(100).fadeIn(100);
        $("#login-box-link").removeClass("active");
        $("#signup-box-link").addClass("active");
    });
    $("#login-box-link").click(function(){
        $(".email-login").delay(100).fadeIn(100);
        $(".email-signup").fadeOut(100);
        $("#login-box-link").addClass("active");
        $("#signup-box-link").removeClass("active");
    });
});
document.querySelector('.email-signup .u-form-group button').addEventListener('click', function(event) {
    event.preventDefault();

    var firstName = document.querySelector('.email-signup input[placeholder="first name"]').value;
    var lastName = document.querySelector('.email-signup input[placeholder="last name"]').value;
    var password = document.querySelector('.email-signup input[placeholder="Password"]').value;
    var confirmPassword = document.querySelector('.email-signup input[placeholder="Confirm Password"]').value;

    document.getElementById('modalText').innerHTML = 'First Name:  ' + firstName + '<br>Last Name:  ' + lastName + '<br>Password:  ' + password + '<br>Confirm Password:  ' + confirmPassword;

    var modal = document.getElementById('myModal');
    modal.style.display = 'block';

    document.querySelector('.close').addEventListener('click', function() {
        modal.style.display = 'none';
    });
});