const contacts = [];
const ul = document.getElementById('contactList');
const contactCountElement = document.getElementById('contactCount');

function updateContactCount() {
  contactCountElement.textContent = `Número de contactos: ${contacts.length}`;
}

function addContact(event) {
  event.preventDefault();
  const { elements } = event.currentTarget;
  const input = elements.namedItem("value");

  if (!input.value.trim()) {
    alert('Por favor, ingresa un nombre de contacto.');
    return;
  }

  contacts.push(input.value);
  const li = document.createElement('li');
  li.innerText = input.value;

  const btnEdit = document.createElement('button');
  btnEdit.textContent = "Editar";
  btnEdit.addEventListener('click', () => {
    const newValue = prompt('Edita el nombre del contacto:', li.innerText.replace('EditarEliminar', '').trim());
    if (newValue) {
      li.innerText = newValue;
      li.appendChild(btnEdit);
      li.appendChild(btnDelete);
      updateContactsArray();
    }
  });

  const btnDelete = document.createElement('button');
  btnDelete.textContent = "Eliminar";
  btnDelete.addEventListener('click', () => {
    ul.removeChild(li);
    contacts.splice(contacts.indexOf(input.value), 1);
    updateContactCount();
  });

  li.appendChild(btnEdit);
  li.appendChild(btnDelete);
  ul.appendChild(li);

  input.value = "";
  updateContactCount();
}

function updateContactsArray() {
  contacts.length = 0;
  Array.from(ul.children).forEach(li => {
    contacts.push(li.innerText.replace('Editar', '').trim());
  });
  updateContactCount();
}

document.getElementById('contact-form').addEventListener("submit", addContact);
