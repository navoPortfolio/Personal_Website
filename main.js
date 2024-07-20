// ***********************************************************************
        // Function to toggle hamburger menu
        // ***********************************************************************

        function hamburgerToggle() {
            var x = document.getElementById("mobile_header_menu");
            if (x.style.display === "flex") {
                x.style.display = "none";
                
            }
             else {
                x.style.display = "flex";
            }
        }
