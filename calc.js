let outputScreen = document.getElementById("output-screen");

function display(num){
  outputScreen.value += num;
}

function Calculate(){
   

   n=outputScreen.value
    out=eval(n)
    outputScreen.value=out
    outputScreen.value=eval(outputScreen.value)
}

function Clear(){
  outputScreen.value = "";
}
function del(){
  outputScreen.value = outputScreen.value.slice(0,-1);
}