class enumeration extends HTMLElement {
  static get observedAttributes(){
    return ["display", "color", "size"]
  };

  constructor() {
    super();

    const shadow = this.attachShadow({mode: "open"});
    const div = document.createElement("div");
    const style = document.createElement("style");
    shadow.appendChild(style);
    shadow.appendChild(div);
  }
  
  connectedCallback() {
    
    console.log("Custom element <enumeration> added to page.");
    updateStyle(this);
  }
  
  disconnectedCallback() {
    console.log("Custom element <enumeration> removed from page.");
  }
  
  adoptedCallback() {
    console.log("Custom <enumeration> element moved to newpage.");
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed.`);
    updateStyle(this);
  }
}
// ei = enumeration item
customElements.define("enumeration-item", enumeration);

class enumerationSet extends HTMLElement {
  static observedAttributes = ["color", "size"];

  constructor() {
    super();
  }
  
  connectedCallback() {
    const shadow = this.attachShadow({mode: "open"});
    console.log("Custom element <enumeration> added to page.");
  }
  
  disconnectedCallback() {
    console.log("Custom element <enumeration> removed from page.");
  }
  
  adoptedCallback() {
    console.log("Custom <enumeration> element moved to newpage.");
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed.`);
  }
}
// es = enumeration set
customElements.define("enumeration-set", enumerationSet);

function updateStyle(elem) {
  const shadow = elem.shadowRoot;
  shadow.querySelector("style").textContent = `
    div {
      display: ${elem.getAttribute("display")};
      list-item-style: ${elem.getAttribute("list-item-style")};
      margin-top: ${elem.getAttribute("margin-top")};
      margin-bottom: ${elem.getAttribute("margin-bottom")};
      margin-left: ${elem.getAttribute("margin-left")};
      margin-right: ${elem.getAttribute("margin-right")};
      padding-left: ${elem.getAttribute("padding-left")};
    }
  `
}