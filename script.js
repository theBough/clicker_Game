function makeButtons(){
  for(i = 0 ; i<100 ; i++){
    var btn  = document.createElement("button")
    btn.setAttribute("type", "button");
    btn.setAttribute("class","btnClass");
    btn.setAttribute("id",i);
    document.getElementById("theGrid").appendChild(btn);
  }//end loop  
}
