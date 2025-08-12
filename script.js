btn.addEventListener('click',((e)=>{
    e.preventDefault();
    let input=document.getElementById('info').value; //canada
    let element=document.createElement('li'); //<li></Li>
    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');

    element.innerHTML=input+" "; //canada
    btn1.innerHTML="Done";
    btn2.innerHTML="Delete";
    let main=document.querySelector('ul');
    main.appendChild(element);
    element.appendChild(btn1);
    element.appendChild(btn2);

    btn1.addEventListener('click',(()=>{
        element.style.textDecoration="line-through";
    }))
    btn2.addEventListener('click',(()=>{
        element.remove();
    }))
}));
