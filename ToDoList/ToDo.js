
const input=document.getElementById('input-box');
const listcontainer=document.getElementById('list-container');


// console.log(input);


function add() {
    if (input.value==='') {
        alert('you must write something');
    }
    else{
        let li=document.createElement('li')
        li.innerHTML=input.value;
        listcontainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span)
    }
    input.value=''
}

listcontainer.addEventListener('click',function (e) {

    if (e.target.tagName==='LI') {
        e.target.classList.toggle('checked');
    }
    else if (e.target.tagName==='SPAN') {
        e.target.parentElement.remove()
    }
},false)


