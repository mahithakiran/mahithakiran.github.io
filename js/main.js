// Functions for each action-command.

function help(){
  return "<h2><span style=\"color:#eb926d;\">Help:</span></h2><table>\
  <tr>\
    <td>all</td>\
    <td>Give me the complete picture</td>\
  </tr>\
  <tr>\
    <td>about</td>\
    <td>about me</td>\
  </tr>\
  <tr>\
    <td>contact</td>\
    <td>how to contact me</td>\
  </tr>\
  <tr>\
    <td>links</td>\
    <td>Alert I have hidden spiders here</td>\
  </tr>\
  <tr>\
    <td>skills</td>\
    <td>Languages Im comfortable with</td>\
  </tr>\
  <tr>\
    <td>cv</td>\
    <td>Download my CV here</td>\
  </tr>\
</table>";
}

function contact(){
  return "<h2><span style=\"color:#cc6666;\">Contact:</span></h2><table>\
  <tr>\
    <td>Email :</td>\
    <td><a href=\"mailto:omar1024@protonmail.com\">Enter Mail</a></td>\
  </tr></table>";
}

function skills(){
  return "<h2><span style=\"color:#81b2be;\">Skills:</span></h2><ul><li>C</li><li>Python</li><li>JS</li><li>Vuejs</li></ul>";
}

function about(){
  return "<p>Hey myself Mahitha.Im a frontend Dev.I help spiderman to build web</p>";
}

function cv(){
  return "<span style=\"color:#8abeb7;\"><h2>CV:</h2></span><p>\tDownload from <a href=\"src/cv.pdf\" target=\"_blank\" style=\"text-decoration: underline;\">here</a>.</p>";
}


function links(){
  return "<span style=\"color: #b5bd68;\"><h2>Links:</h2></span><ul>\
  <li><a href=\"https://www.linkedin.com/in/mahitha-kiran-3947251a2/\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i> LinkedIn</a></li>\
  <li><a href=\"https://www.github.com/mahithakiran\" target=\"_blank\"><i class=\"fab fa-github\"></i> Github</a></li>\
  </ul>";
}


function commandProcessor(e){

  //Check if the enter key is pressed
  if(e.keyCode == 13){

    //Clear the area where info will be printed
    document.getElementById('injected').innerHTML= "";

    //Get user input
    var txtInput = document.getElementById('txtBox').value;

    //Select what info to print according to command
    if(txtInput == "help"){
      document.getElementById('injected').innerHTML=help();
    }else if (txtInput=="all") {
      document.getElementById('injected').innerHTML=about() + "\n\n\n" + skills() + "\n\n\n" + links() + "\n\n\n" + contact() + "\n\n\n" + cv();
    }else if (txtInput == "about") {
      document.getElementById('injected').innerHTML=about();
    }else if (txtInput == "contact") {
      document.getElementById('injected').innerHTML=contact();
    }else if (txtInput == "cv") {
      document.getElementById('injected').innerHTML=cv();
    }else if (txtInput=="skills") {
      document.getElementById('injected').innerHTML=skills();
    }else if (txtInput=="links") {
      document.getElementById('injected').innerHTML=links();
    }else {
      document.getElementById('injected').innerHTML = 'Keyword doesnt exist! Have you tried help';
    }

    //Clear input text box
    document.getElementById('txtBox').value= "";
  }
}
