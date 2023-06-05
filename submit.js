import { inject } from '@vercel/analytics';
 
inject();

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

            else if(document.getElementById('radioSiblings').checked)
            {
                alert("Option selected: Siblings.");
                window.open("siblings.html");
            }

            else
            {
                alert("Nothing has been selected");
            }
            
        }
