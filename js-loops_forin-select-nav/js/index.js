console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write/change code here --v--

for (const key in languages) {
    const language = languages[key];
    // console.log(language);

    const option = document.createElement("option");
    select.append(option);
    // console.log(option);
    
    option.textContent = language;    
}

// --^-- write/change code here --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--
for (const key in nav) {
    const items = nav[key]; 
    //console.log (items);
    
    const listItems = document.createElement("li");
    const anchor = document.createElement("a");

    ul.append(listItems); 
    listItems.append(anchor);

    anchor.href = items["href"];
    anchor.textContent = items["text"];           
}

// --^-- write/change code here --^--
