console.log("script linked");
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  console.log(window.scroll);
  if (window.scrollY > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// hamburger triggering
const navList = document.querySelector(".nav-right-list");
const hamburger = document.querySelector(".hamburger");
document.querySelector(".hamburger").addEventListener("click", () => {
  navList.classList.toggle("active");
  hamburger.classList.toggle("active");
});

const skillSet = [
  {
    "IOS Developers": "ios.svg",
  },
  {
    "BlockChain Developers": "blockchain.svg",
  },
  {
    ".Net Developers": "dotnet.svg",
  },
  {
    "React.Js Developers": "react.svg",
  },
  {
    "Java Developers": "java.svg",
  },
  {
    "React Native Developers": "native.svg",
  },
  {
    "Node JS Developers": "nodejs.svg",
  },
  {
    "Android Developers": "android.svg",
  },
  {
    "Angular Developers": "Angular.svg",
  },
  {
    "JavaScript Developers": "js.svg",
  },
  {
    "PHP Developers": "php.svg",
  },
  {
    "Salesforce Developers": "salesforce.svg",
  },
  {
    "Kotlin Developers": "kotlin.svg",
  },
  {
    "DJango Developers": "django.svg",
  },
  {
    "Python Developers": "python.svg",
  },
  {
    "spring Developers": "spring.svg",
  },
  {
    "Swift Developers": "swift.svg",
  },
  {
    "SQL Developers": "sql.svg",
  },
  {
    "Devops Engineers": "devops.svg",
  },
  {
    "Security Engineer": "security.svg",
  },
  {
    "AWS Developers": "aws.svg",
  },
  {
    "Wordpress Developers": "wordpress.svg",
  },
  {
    "Azure Developers": "azure.svg",
  },
  {
    "show all skills": "hicon--linear--right-1.png",
  },
];
const skillsetContainer = document.getElementById("specific-skill-set");

skillSet.forEach((item) => {
  const key = Object.keys(item)[0];
  const value = item[key];

  const div = document.createElement("div");
  div.className = "grid-item";

  div.innerHTML = `
  
    <img src=assets/${value} alt="">
    <p>${key}</p>
  
          `;

  skillsetContainer.appendChild(div);
});
const accordionData = [
  {
    1: "What makes recruiting software developers from Zazz so unique?",
  },
  {
    2: "Do you commit that partnering with Zazz will result in the highest quality work delivered on schedule?",
  },
  {
    3: "Could you send me a copy of the resumes of your software engineers, so I know the developer's expertise level before hiring?",
  },
  {
    4: "Would you provide me direct access to my software development phase while you are still working on it?",
  },
  {
    5: "How many software developers can I hire and deploy for my project? Is there any limit?",
  },
  {
    6: "Can your experts create a highly attractive mobile and web application specially designed for my business?",
  },
  {
    7: "Do you offer specific or custom recruitment models for hiring software developers?",
  },
  {
    8: "Can I trust your dedicated developer's team to craft an aesthetically pleasing application design for my specific customer segment?",
  },
  {
    9: "What if the software developer is not working upto the mark? How will you address this issue?",
  },
  {
    10: "What is the minimum contractual period to partner with Zazz?",
  },
  {
    11: "Will your software developers use my company's assets, or will Zazz take care of it?",
  },
  {
    12: "How secure are your systems (PCs & laptops) with your remote developers?",
  },
  {
    13: "What is the minimum pricing for hiring software developers from Zazz?",
  },
  {
    14: "What if I'm unsure of the functionalities and technologies that might or might not be required in my software development?",
  },
  {
    15: "How does Zazz handle change requests during development?",
  },
  {
    16: "What is the process for hiring a dedicated team of software developers from Zazz?",
  },
];
const accordionContainer = document.getElementById("accordionExample");

accordionData.forEach((item) => {
  const key = Object.keys(item)[0];
  const value = item[key];

  const div = document.createElement("div");
  div.className = "accordion-item";

  div.innerHTML = `
            <h2 class="accordion-header" id="heading${key}">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${key}" aria-expanded="false" aria-controls="collapse${key}">
                 <p>  ${key}. ${value} </p>
                </button>
            </h2>
            <div id="collapse${key}" class="accordion-collapse collapse" aria-labelledby="heading${key}" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p>${value}</p>
                </div>
            </div>
        `;

  accordionContainer.appendChild(div);
});

const developers = [
  {
    "Jane Cooper": {
      image: "dev1.webp",
      exp: "5+ Years",
    },
  },
  {
    "Wade Warren": {
      image: "dev2.webp",
      exp: "7+ Years",
    },
  },
  {
    "Krisitin Watson": {
      image: "dev3.webp",
      exp: "6+ Years",
    },
  },
  {
    "Robert Fox": {
      image: "dev4.webp",
      exp: "6+ Years",
    },
  },
  {
    "Darlene Robertson": {
      image: "dev5.webp",
      exp: "6+ Years",
    },
  },
  {
    "Kathryn Murphy": {
      image: "dev6.webp",
      exp: "6+ Years",
    },
  },
  {
    "Arlene McCoy": {
      image: "dev7.webp",
      exp: "3+ Years",
    },
  },
  {
    "Annette Black": {
      image: "dev8.webp",
      exp: "6+ Years",
    },
  },
  {
    "Floyd Miles": {
      image: "dev9.webp",
      exp: "5+ Years",
    },
  },
  {
    "Ronald Richards": {
      image: "dev10.webp",
      exp: "6+ Years",
    },
  },
];
// Get a reference to the container element

const container = document.querySelector(".dynamic-developer-container");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentIndex = 1;

// Function to append developer details to the container
function appendDeveloperDetails() {
  container.innerHTML = "";

  developers.forEach((developerData, index) => {
    const developerName = Object.keys(developerData)[0];
    const { image, exp } = developerData[developerName];

    const developerDetailDiv = document.createElement("div");
    developerDetailDiv.classList.add("developer-detail");

    const imgElement = document.createElement("img");
    imgElement.src = `assets/${image}`;
    imgElement.alt = "";

    const devDetailDiv = document.createElement("div");
    devDetailDiv.classList.add("dev-detail");

    const expDiv = document.createElement("div");
    expDiv.classList.add("exp");

    const nameElement = document.createElement("h3");
    nameElement.textContent = developerName;

    const expElement = document.createElement("p");
    expElement.textContent = exp;

    const expTitleElement = document.createElement("p");
    expTitleElement.textContent = "Experience";

    expDiv.appendChild(nameElement);
    expDiv.appendChild(expElement);
    expDiv.appendChild(expTitleElement);

    devDetailDiv.appendChild(expDiv);

    developerDetailDiv.appendChild(imgElement);
    developerDetailDiv.appendChild(devDetailDiv);

    container.appendChild(developerDetailDiv);

    // Update currentIndex when we reach the end of the developers array
    if (index === currentIndex) {
      currentIndex = developers.length - 1;
    }
  });

  // Disable "Prev" button when showing the first developer
  prevButton.disabled = true;
  // Enable "Next" button when there are more developers to show
  nextButton.disabled = developers.length <= 1;
}

// Handle Next button click
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % developers.length;
  const translateX = -currentIndex * 310; // 310 is the total width of each developer-detail including margin
  container.style.transform = `translateX(${translateX}px)`;
  prevButton.disabled = false; // Enable "Prev" button
  nextButton.disabled = currentIndex > 2; // Disable "Next" button at the end
  console.log(currentIndex);
  if (currentIndex == developers.length) {
    // appendDeveloperDetails();
  }
});

// Handle Prev button click
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + developers.length) % developers.length;
  const translateX = -currentIndex * 310; // 310 is the total width of each developer-detail including margin
  container.style.transform = `translateX(${translateX}px)`;
  nextButton.disabled = false; // Enable "Next" button
  prevButton.disabled = currentIndex === 0; // Disable "Prev" button at the beginning
});

// Initial load
appendDeveloperDetails();
