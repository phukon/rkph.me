// const gpg = require("gpg")
// const privateKey = "KEY_HERE"

// gpg.importKey(privateKey, [], (success, err) => {
//   // run rest of code to decrypt file
// })

function injecthtml(){
	const parent = document.getElementById(':xd')
	const wrapper = document.createElement('div');
  wrapper.innerHTML =  `<div id="terminal">
    <a id="before"></a>
  </div>
  <div id="command" onclick="$('texter').focus();">
    <textarea type="text" id="texter" onkeyup="typeIt(this, event)" onkeydown="typeIt(this, event); 
                   moveIt(this.value.length, event)" onkeypress="typeIt(this, event);" autofocus></textarea>
    <div id="liner">
      <span id="typer"></span><b class="cursor" id="cursor">█</b>
    </div>
  </div>`

  parent.appendChild(wrapper) 
}