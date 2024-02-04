// Abstraction
class Animal {
    constructor(type, coldBlooded, hasBackbone) {
      this.type = type;
      this.coldBlooded = coldBlooded;
      this.hasBackbone = hasBackbone;
    }
  
    getType() {
      return this.type;
    }
  
    isColdBlooded() {
      return this.coldBlooded;
    }

    isBackbone() {
        return this.backbone;
  }
}
  
  // Inheritance
  class Arthropod extends Animal {
    constructor() {
      super("Arthropod", true, true);
    }
  }
  
  class Fish extends Animal {
    constructor() {
      super("Fish", true, true);
    }
  }
  
  class Amphibian extends Animal {
    constructor() {
      super("Amphibian", true, true);
    }
  }
  
  class Reptile extends Animal {
    constructor() {
      super("Reptile", true, true);
    }
  }
  
  class Bird extends Animal {
    constructor() {
      super("Bird", false, true);
    }
  }
  
  class Mammal extends Animal {
    constructor() {
      super("Mammal", false, true);
    }
  }
  
  // Encapsulation
  class Cat extends Mammal {
    constructor() {
      super("Cat", false,);
    }
  }
  
  class Eagle extends Bird {
    constructor() {
      super("Eagle", false,);
    }
  }
  
  // Polymorphism
  const animals = [
    new Arthropod(),
    new Fish(),
    new Amphibian(),
    new Reptile(),
    new Bird(),
    new Mammal(),
    new Cat(),
    new Eagle(),
  ];
  
  animals.forEach((animal) => {
    const bloodType = animal.isColdBlooded() ? "Cold-blooded" : "Warm-blooded";
    const boneType = animal.isBackbone() ? "noBackbone" : "Backbone";
    console.log(`${animal.getType()} - ${bloodType}`);
    console.log(`${animal.getType()} - ${boneType}`);
  });