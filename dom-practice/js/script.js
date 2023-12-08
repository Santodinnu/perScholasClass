// let titleE1= document.getElementById('title');
// console.dir(titleE1);

// titleE1.style.textAlign="center";
// titleE1.style.backgroundColor="purple";

// let h1=document.querySelector("h1");
// // or let h1=document.querySelector("#title");
// // or let h1=document.querySelector(".main-title");
// console.dir(h1);

// let pE1=document.querySelector(".cool");
// console.log(pE1);

// pE1.innerHTML = "Comments for <strong> Today </strong>"
// pE1.style.color="blue";
//  let link=document.querySelector("a");
//  console.log(link);

// //  link.href="https://www.google.com";
// link.setAttribute("href","https://www.google.com");

// let liTags = document.getElementsByTagName("li");

// let liTags2 =document.getElementsByClassName("comment");

// let liTags3 = document.querySelectorAll(".comment");

// console.log(liTags);
// console.log(liTags2);
// console.log(liTags3);

// for(let li of liTags3){
//     console.log(li);
//     li.style.fontSize='30px';
// }

// for(let i=0; i<liTags3.length; i++)
// {
//     console.log(liTags3[i]);
// }

// // liTags3.forEach(li => console.log(li));

let btn = document.querySelector('button');

// function clickEventFunction(){}
// btn.addEventListener('click', clickEventfunction)

btn.addEventListener('click', function() {
    console.log('inside event listener function');
//     console.log(evt.target);
//     console.log(this);

    //creating a new li tag/element
    const li = document.createElement('li')

    //select the input because we need its value
    let input = document.querySelector('input')

    //set the li elements content to the value from the input
    //so the our comment has some text
    li.textContent = input.value
    
    //select the ul element and then add the new li element
    document.querySelector('ul').appendChild(li);

    // let ul = document.querySelector('ul')
    // ul.appendChild(li)

    input.value="";
    
})

// const test = document.querySelector('li');
// console.log(test);
// test.textContent = 'easter'

function handleClick(evt){
    if (evt.target.nodeName === "LI") {
        evt.target.style.color = 'red';
    }
    
}

document.querySelector('ul').addEventListener('click',handleClick);






