const sendBtn=document.querySelector('#sendBtn');
const messageIn=document.querySelector('#messageIn');
const messageOut=document.querySelector('#messageOut');
senBtn.addEvenListener('click',sendMsg)
function sendMsg (){
let content = messageIn.value;
if(content=== '' ){
alert('please enter valid value.current value is empty')
}
else{
messageOut.innerHTML=content;
messageIn.value= '';
}
}
