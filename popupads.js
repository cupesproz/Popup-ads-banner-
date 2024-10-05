setTimeout(function(){

const close = document.getElementById('close');
const popbox = document.getElementById('popbox');
      
    // Function to close the popup

    function closeFunc() {     
    
      popbox.style.display = 'none';
      $('body').css('overflow', 'scroll');
 function removeClassonBody(){var element=document.body;element.className=element.className.replace(/bflowboxb/g,"")};

    };  
document.getElementById('popbox').classList.remove('hide');
document.body.className.add="flowbox";
document.getElementById('imgcontent').innerHTML = document.getElementById('imgcontent').innerHTML.replace('<!--','').replace('-->','');

  // Close the popup when the close button is clicked

    close.addEventListener('click', closeFunc);

 }, 5000);
