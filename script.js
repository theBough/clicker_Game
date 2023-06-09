function makeButtons(){
  for(i = 0 ; i<100 ; i++){
    var btn  = document.createElement("button")
    btn.setAttribute("type", "button");
    btn.setAttribute("class","btnClass");
    btn.setAttribute("id",i);
    document.getElementById("theGrid").appendChild(btn);
    document.getElementById(i).onclick = thisClick
  }//end loop  
}
function pickRandomBtn(){
  var rndNum = Math.random()*100
  rndNum = Math.floor(rndNum)
  return rndNum;
}//end pickRandomBtn
var thisClick = function(){
  var thisBtn = pickRandomBtn()
  document.getElementById(thisBtn).style.backgroundColor = "green"
  document.getElementById(this.id).style.backgroundColor = "black"
  
}//end thisClick
