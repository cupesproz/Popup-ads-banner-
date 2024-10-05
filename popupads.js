setTimeout(function(){
 document.getElementById('popbox').classList.remove('hide');
 document.body.className+=" flowbox";
document.getElementById('imgcontent').innerHTML = document.getElementById('imgcontent').innerHTML.replace('<!--','').replace('-->','');
 }, 5000);
function removeClassonBody(){var element=document.body;element.className=element.className.replace(/bflowboxb/g,"")}
