// Menu data structure
// var menuLinks = [
//     { text: 'about', href: '/about' },
//     { text: 'catalog', href: '/catalog' },
//     { text: 'orders', href: '/orders' },
//     { text: 'account', href: '/account' },
//   ];

var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
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

 //Part 4
 //RLAB
 //PART 2: Adding Additional HTML and CSS

//Part 3: Creating the Submenu
//Cache submenu  in subMenuEl

const subMenuEl=document.querySelector("#sub-menu");
subMenuEl.style.height="100%"; //set height
subMenuEl.style.backgroundColor= "var(--sub-menu-bg)"; //Set the background color
subMenuEl.classList.add("flex-around"); //Add the class of flex-around

//hide it so as it appears dynamically
subMenuEl.style.position="absolute";  //set css position to absolute
subMenuEl.style.top="0";  //set css top property to 0

//Part 4: Adding Menu Interaction

//Select and cache the all of the <a> elements in topMenuEl
const topMenuLinks=document.querySelectorAll("a");
console.log(topMenuLinks);
//Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener("click",(event)=>{
  event.preventDefault(); //First call Preventdefault of event object
  if (event.target.tagName !== "A") 
    return; //mmediately return if the element clicked was not an <a> element.
  console.log(event.target.textContent);  //Log the  text content of the link clicked

  topMenuLinks.forEach(element => {
    element.classList.remove("active");
  });
  
  if(!event.target.classList.contains("active"))
  {
    const clickedLinkText=event.target.textContent.trim();
    const linkObject=menuLinks.find(link=> link.text==clickedLinkText);
    event.target.classList.toggle("active"); //add the active class to the <a> element

    //console.log(linkObject);
    //console.log(linkObject.subLinks);
    if(linkObject)
    {
      if(linkObject.subLinks && linkObject.subLinks.length>0)
        {
          subMenuEl.style.top="100%";
          buildSubMenu(linkObject.subLinks)
        }
        else
        {
          subMenuEl.style.top=0;
          //Setting the content in case above link is clicked which has no sublinks
          mainEl.innerHTML=`<h1>${event.target.textContent.trim().toUpperCase()}</h1>`

        }

    }
    
  }

});

//Part 5: Adding Submenu Interaction

function buildSubMenu(subLinks)
{
  subMenuEl.innerHTML="";
  for(let sublink of subLinks)
  {
    const a=document.createElement("a");
    a.setAttribute("a",sublink.href);
    a.textContent=sublink.text;
    subMenuEl.appendChild(a);
  }

}

//Adding event listener to the submenu

subMenuEl.addEventListener("click",(event)=>{
  //let aboutLink=false;
  event.preventDefault(); //First line should called Prevent Default Method
  if(event.target.tagName!=="A")
    return;
  console.log("Last",event.target.textContent);
  subMenuEl.style.top="0";  //Set top property to 0
  //Remove the active class from each <a> element in topMenuLinks
  topMenuLinks.forEach(link=>{link.classList.remove("active")
  });
//Set the mainEL to what submenu is clicked
  mainEl.innerHTML=`<h1>${event.target.textContent.trim().toUpperCase()}</h1>`
});
