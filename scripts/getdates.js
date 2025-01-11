const currentYear = new Date().getFullYear();

const lastModified = document.lastModified;

document.querySelector("footer #currentyear").textContent = `© ${currentYear}`;

document.querySelector(
  "footer #lastModified"
).textContent = `Last Modified: ${lastModified}`;
