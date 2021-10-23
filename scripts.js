/* Add your JavaScript to this file */
function checkforblank()
{

    if(document.getElementById('email').value==""){

  alert("Please enter a valid email address");
  return false;

    }
    else{
        var evalue=document.getElementById('email').value;

        alert("Thank you! Your email address "+ " " +  evalue + " "+ "  has been added to our mailing list !");
    }
} 


