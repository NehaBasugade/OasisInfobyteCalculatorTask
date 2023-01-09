function clr(){
    output.value="";

}
function del(){
    output.value=output.value.slice(0,-1);
    
}
let output = document.getElementById("text");
let compute=(num)=>{
     output.value=output.value+num;
}

let Output =() =>{
    try{
        output.value=eval(output.value);
    }
    catch(err){
        alert("Operation invalid");
    }
}

