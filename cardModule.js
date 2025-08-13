export function createProfileCard(name, role, container, updateCount) {
  const card = document.createElement("div");
  card.className = "card";

  const nameEl = document.createElement("h3");
  nameEl.textContent = name;

  const roleEl = document.createElement("p");
  roleEl.textContent = role;

  const removeBtn = document.createElement("button");
  removeBtn.className = "delete-btn";
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", () => {
    card.remove();
    updateCount();
  });

  card.appendChild(nameEl);
  card.appendChild(roleEl);
  card.appendChild(removeBtn);

  container.appendChild(card);
  updateCount();
}
