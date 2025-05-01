(function () {
    "use strict";
    window.addEventListener(
        "load",
        function () {
            var forms = document.getElementsByClassName("needs-validation");
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener(
                    "submit",
                    function (event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        } else {
                            event.preventDefault();
                            var destination = document.getElementById("destination").value;
                            var travelDate = document.getElementById("travelDate").value;
                            var experience = document.getElementById("experience").value;
                            var photo = document.getElementById("photo").value;

                            var message =
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