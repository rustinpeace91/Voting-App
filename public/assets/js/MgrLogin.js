console.log("I work");

$(document).ready(function () {
    // ########################################################################################

    // **************************FOR MANAGER LOGINS ONLY*****************************

    // ########################################################################################
    console.log("I work");
    $("#login").click(function () {


        var LogInEvent = {
            mgrEmail: $("#emailAddr").val().trim(),
            password: $("#password").val().trim()

        }
        
        // queries the database based on the email provided

        $.get("/api/manager/" + LogInEvent.mgrEmail)

        // On success, run the following code

        //STILL NEED VALIDATION
        .then(function(data) {
            var id = data.id;
            console.log(id);
                // Stores the manager ID retrieved from the database in the session 
                sessionStorage.setItem("managerId", parseInt(data.id));
                window.location.href = "index.html";
                console.log("redirecting");
                sessionStorage.setItem("managerEmail", $("#emailAddr").val().trim());
                alert("please enter a valid email address");

        });

        // redirect to MgrEventCreate.html


    });
});