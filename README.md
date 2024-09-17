# Make It Real - NAME OF THE PROJECT

This is a solution to the Gestión de Contactos usando JavaScript y DOM T preview card component project of the Make It Real course.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- JAVASCRIPT
- MANEJO DE DOOM


### Screenshot
SIMULATION
![](./src/assets/image1.png)
EDIT
![](./src/assets/image2.png)
DELETE
![](./src/assets/image.png)


## My process

### Built with

- JS
-  DOOM

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
  <ul id="contactList">
          <!-- Aquí aparecerán los contactos -->
        </ul>
```js
function updateContactsArray() {
  contacts.length = 0;
  Array.from(ul.children).forEach(li => {
    contacts.push(li.innerText.replace('Editar', '').trim());
  });
  updateContactCount();

#root {
  background-color: #19a1ad;
  background-image: url(./assets/bg-pattern-top.svg), url(./assets/bg-pattern-bottom.svg);}
```
### Continued development


## Author

- GITHUB - [@JohanPinares](https://github.com/JohanEmersonPinares)
- linkedin - [@JohanPinares](https://www.linkedin.com/in/johan-emerson-pinares/)


## Acknowledgments
