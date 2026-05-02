const templateCard = document.querySelector("[#store-template-card]");
const storeContainer = document.querySelector("[data-cards-container]");
const template = document.getElementById("my-template");
// Access the template's content (a DocumentFragment)
const content = template.content;
// Clone the template content (most common use case)
const clone = template.content.cloneNode(true);
// Now you can modify and insert the clone
document.body.appendChild(clone);

//# sourceMappingURL=store.da771ae2.js.map
