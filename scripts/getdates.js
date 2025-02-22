const courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
    technology: ["HTML", "CSS"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
    technology: ["C#"],
    completed: false,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
];

const currentYear = new Date().getFullYear();

const lastModified = document.lastModified;

document.querySelector("footer #currentyear").textContent = `© ${currentYear}`;

document.querySelector(
  "footer #lastModified"
).textContent = `Last Modified: ${lastModified}`;


function displayCourses(filter = "All") {
  const courseContainer = document.querySelector("#course-certificate");
  courseContainer.innerHTML = "";

  const certSection = document.querySelector(".cert-section");
  certSection.style.backgroundColor = "white";
  certSection.style.borderRadius = "15px";
  certSection.style.textAlign = "center";
  certSection.style.padding = "20px";
  certSection.style.margin = "20px auto";
  certSection.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
  certSection.style.maxWidth = "96%";

  const buttons = document.querySelectorAll(".filter-button");
  buttons.forEach((button) => {
    button.style.margin = "0.5rem";
    button.style.padding = "0.5rem 1rem";
    button.style.fontSize = "1rem";
    button.style.backgroundColor = "#000000";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    button.style.transition = "background-color 0.3s ease, transform 0.2s ease";

    button.addEventListener("mouseenter", () => {
      button.style.backgroundColor = "#0056b3";
      button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
      button.style.backgroundColor = "#007bff";
      button.style.transform = "scale(1)";
    });
  });

  const filteredCourses = courses.filter(
    (course) => filter === "All" || course.subject === filter
  );

  courseContainer.style.display = "flex";
  courseContainer.style.flexWrap = "wrap";
  courseContainer.style.gap = "1rem";
  courseContainer.style.justifyContent = "center";

  filteredCourses.forEach((course) => {
    const courseDiv = document.createElement("div");
    courseDiv.style.border = "2px solid #ccc";
    courseDiv.style.borderRadius = "10px";
    courseDiv.style.padding = "15px";
    courseDiv.style.margin = "10px";
    courseDiv.style.fontFamily = "Arial, sans-serif";
    courseDiv.style.color = "white";
    courseDiv.style.textAlign = "center";
    courseDiv.style.flex = "1 1 calc(30% - 1rem)";
    courseDiv.style.boxSizing = "border-box";

    if (course.completed) {
      courseDiv.style.backgroundColor = "green";
    } else {
      courseDiv.style.backgroundColor = "gray";
    }

    courseDiv.innerHTML = `
      <h3>${course.subject} ${course.number}: ${course.title}</h3>
    `;

    courseContainer.appendChild(courseDiv);
  });

  const style = document.createElement("style");
  style.textContent = `
    .hamburger {
      display: none;
    }

    @media (max-width: 768px) {
      .hamburger {
        display: block;
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 2rem;
        background: none;
        border: none;
        cursor: pointer;
        color: white;
      }
      nav {
        display: none;
      }
      nav.visible {
        display: block;
        background-color: #444656;
        padding: 1rem;
        border: 1px solid #ddd;
      }
      nav ul {
        flex-direction: column;
        gap: 1rem;
        list-style: none;
        padding: 0;
      }
      .card-container {
        flex-direction: column;
        gap: 1rem;
      }
      .cert-section {
        width: 90%;
      }
      #course-certificate {
        flex-direction: column;
        gap: 1rem;
      }
      #course-certificate > div {
        flex: 1 1 100%;
      }
    }
  `;
  document.head.appendChild(style);

  const hamburgerButton = document.createElement("button");
  hamburgerButton.className = "hamburger";
  hamburgerButton.setAttribute("aria-label", "Toggle Navigation");
  hamburgerButton.innerHTML = "☰";

  const nav = document.querySelector("nav");
  nav.before(hamburgerButton);

  hamburgerButton.addEventListener("click", () => {
    nav.classList.toggle("visible");
  });
}


document
  .querySelector("#filter-all")
  .addEventListener("click", () => displayCourses("All"));
document
  .querySelector("#filter-wdd")
  .addEventListener("click", () => displayCourses("WDD"));
document
  .querySelector("#filter-cse")
  .addEventListener("click", () => displayCourses("CSE"));

displayCourses();