class Animal {
  constructor(name,type) {
    this.name = name;
    this.type = type;
  }
  
  //Abstract method..
  makeNoise() {
    console.log("Animals make noise depends on their type..")
  }
   // Encapsulation method
  #move() {
    console.log("Animals move");
  }
  //Polymorphism 
    reproduce(){
      console.log("animals can reproduce");
    }
}

class withOutBackbone extends Animal {
   constructor(name, type,) {
    super(name, type, );
    this.withoutbackbone = "withouthbackbone" 
   }

}

 class coldBlooded extends withOutBackbone {
    constructor( name, type, withoutbackbone ) {
       super(name, type, withoutbackbone);
       this.bloodType = "codeblooded";
    }
   // overriding the abstract method right here
   makeNoise() {
     console.log("making a cold blooded animal noise");
   }

   sunCool() {
    console.log("basking in the sun to regulate temperature");
   }

   reproduce() {
     console.log("coldblooded animals can reproduce");
   }
 }

  class withBackbone extends Animal {
     constructor(name, type,) {
      super(name, type);
      this.withbackbone = "withbackbone";
     }

     withBone() {
      console.log("they are animals with backbones  such as cat, eagle,frog, fish, tortoise");
     }
  }

   class warmBlooded extends withBackbone {
      constructor(name, type,) {
         super(name, type);
         this.bloodType = "warmblooded";
      }
      
      //overriding the abstract method right here 
       makeNoise() {
         console.log("Making a warm-blooded noise");
       }

       controlledTemperature() {
         console.log(" Regulating temperature internally");
       }

       reproduce() {
         console.log("warmblooded animals can reproduce");
       }
   }
      //polymorphism function..
    function performAnimalActivities(animal) {
       console.log(`Name: ${animal.name}, Type: ${animal.type}, Blood-Type: ${animal.bloodType}`);
          animal.makeNoise();
          animal.reproduce();
      
        if(animal instanceof coldBlooded) {
        animal.sunCool();
        //animal.makeNoise();
      } else if(animal instanceof warmBlooded) {
        animal.controlledTemperature();
        //animal.makeNoise();
      }

       console.log("------------");
    }

    //create instnces of animals
    // instance of animal without backbone...
     const arthropoda = new withOutBackbone("arthropoda","withoutbackbone");
    

   // instance of animals that are cold blooded
    const fish = new coldBlooded("Azu","fish");
    const frog = new coldBlooded("awo", "frog");
    const tortoise = new coldBlooded("mbe", "tortoise");

    // instance ofAnimal with bones.. 
     const Bone =  new withBackbone("Cat","Backbone");
      
      
     //inatnces of animals that are warm blooded..
      const Eagle = new warmBlooded("Eggy","Eagle");
      const Cat = new warmBlooded("Catty", "Cat");

      //Using polymorphism function created to display their methods...

      performAnimalActivities(arthropoda);
      performAnimalActivities(Bone);
      performAnimalActivities(fish);
      performAnimalActivities(frog);
      performAnimalActivities(tortoise);
      performAnimalActivities(Eagle);
      performAnimalActivities(Cat);

      //That's the end of this model.
