// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

//PART1
//Select and cache the <main> element in a variable named mainEl.

const mainEl=document.querySelector("main");
//console.log(mainEl);
//Set the background color of mainEL
mainEl.style.backgroundColor="var(--main-bg)";


//Set the content of mainEl
mainEl.innerHTML=`<h1>DOM Manipulation</h1>`;

//Add a class to mainEl
mainEl.classList.add("flex-ctr");

//PART2 - Creating the NavBar
//Cache menu bar in variable topMenuEl

const topMenuEl=document.querySelector("#top-menu");

console.log(topMenuEl);

//set the height to 100 percent
topMenuEl.style.height="100%"

//Set the background color of topMenuE
topMenuEl.style.backgroundColor="var(--top-menu-bg)";

//Add a class of flex-around
topMenuEl.classList.add("flex-around");

//Iterate over the entire menuLinks array and for each "link" object

for(let link of menuLinks)
{
    const a=document.createElement("a"); //create a <a> element
    //console.log(link.href)
    a.setAttribute("href",link.href); //Set Attribute href
    a.textContent=link.text; //Set the new element's content to the value
    topMenuEl.appendChild(a);  //Append the new element to the topMenuEl element
 }

 //Part 4: Adding Interactivity
 

