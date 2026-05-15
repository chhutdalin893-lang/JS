class Dog {

    #name;
    #color;
    #price;
    #qty;

  
    constructor(name, color, price, qty) {
        this.#name = name;
        this.#color = color;
        this.#price = price;
        this.#qty = qty;
    }


    getName() { 
        return this.#name; 
    }
    getColor() {
         return this.#color; 
        }
    getPrice() {
        return this.#price; 
    }
    getQty() {
         return this.#qty; 
        }


        
    setName(name) {
         this.#name = name; 
        }

    setColor(color) { 
        this.#color = color; 
    }

    setPrice(price) {
         this.#price = price; 
        }

    setQty(qty) { 
        this.#qty = qty; 
    }
}


const myDog = new Dog('Toto', 'brown', 250, 1);

console.log("Name:", myDog.getName());
console.log("Color:", myDog.getColor());
console.log("Price:", myDog.getPrice());
console.log("Quantity:", myDog.getQty());

