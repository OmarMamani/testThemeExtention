
 class AddToCartButton extends HTMLButtonElement {
 
   constructor() {
     super();
   }
 
   connectedCallback() {
     this.addEventListener('click', this.partyTime)
   }
 
   async partyTime(evt) {
      const variantId = evt.target.dataset.productid

      let formData = {
        'items': [{
         'id': variantId,
         'quantity': 1
         }]
       };
       const response = await fetch("/cart/add.js", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })
  
      console.log('response.json()', response.json())
      return { status: response.status, addedProduct: await response.json() }   }
 
 }
 
 customElements.define('add-to-cart', AddToCartButton, { extends: "button" })