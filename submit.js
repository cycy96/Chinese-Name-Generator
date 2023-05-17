
        function checkGender(){				
            if(document.getElementById('radioMale').checked)
            {
                alert("Gender selected: Male.");
                window.open("male.html");
            }
            else if(document.getElementById('radioFemale').checked)
            {
                alert("Gender selected: Female.");
                window.open("female.html");
            }

            else
            {
                alert("Nothing has been selected");
            }
            
        }
