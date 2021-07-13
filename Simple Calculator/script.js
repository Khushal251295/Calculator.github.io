function display(val){
   
    document.getElementById('result').value += val;
    
}
function solve(){
  var expr =   document.getElementById('result').value;
   var solution =  eval(expr);
   document.getElementById('result').value = solution;
}
