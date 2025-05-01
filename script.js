(function () {
    "use strict";
    window.addEventListener(
        "load",
        function () {
            let forms = document.getElementsByClassName("needs-validation");
            let validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener(
                    "submit",
                    function (event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        } else {
                            event.preventDefault();
                            let destination = document.getElementById("destination").value;
                            let travelDate = document.getElementById("travelDate").value;
                            let experience = document.getElementById("experience").value;
                            let photo = document.getElementById("photo").value;

                            let message =
                                "Thank you for sharing your travel experience!" +
                                "<br>Destination: " +
                                destination +
                                "<br>Date of Travel: " +
                                travelDate +
                                "<br>Experience: " +
                                experience;

                            if (photo) {
                                message += "<br>Photo: " + photo;
                            }

                            document.getElementById("message").innerHTML = message;
                            document.getElementById("message").style.display = "block";
                            document.getElementById("experienceForm").reset();
                        }
                        form.classList.add("was-validated");
                    },
                    false
                );
            });
        },
        false
    );
})();
