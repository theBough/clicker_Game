var countElement = document.getElementById("myCounter")
var count = 0;

function makeButtons(){
  for(i = 0 ; i<100 ; i++){
    var btn  = document.createElement("button")
    btn.setAttribute("type", "button");
    btn.setAttribute("class","btnClass");
    btn.setAttribute("id",i);
    document.getElementById("theGrid").appendChild(btn);
    document.getElementById(i).onclick = thisClick
  }//end loop  
  document.getElementById(pickRandomBtn()).style.backgroundColor = "green"
}//end makeButtons
function pickRandomBtn(){
  var rndNum = Math.random()*100
  rndNum = Math.floor(rndNum)
  return rndNum;
}//end pickRandomBtn
var thisClick = function(){
  var thisBtn = pickRandomBtn()
  if(document.getElementById(this.id).style.backgroundColor == "green"){
     document.getElementById(thisBtn).style.backgroundColor = "green"
      document.getElementById(this.id).style.backgroundColor = "black"
      count += 1;
      countElement.textContent = "Count: " + count;
  }//end if  
}//end thisClick
