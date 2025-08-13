import { createProfileCard } from './cardModule.js';

const addBtn = document.getElementById("addProfileBtn");
const container = document.getElementById("profileContainer");
const countDisplay = document.getElementById("profileCount");

function updateCount() {
  const count = container.children.length;
  countDisplay.textContent = `Profiles: ${count}`;
}

addBtn.addEventListener("click", () => {
  const name = prompt("Enter Name:");
  const role = prompt("Enter Role:");

  if (name && role) {
    createProfileCard(name.trim(), role.trim(), container, updateCount);
  } else {
    alert("Please enter both Name and Role!");
  }
});
