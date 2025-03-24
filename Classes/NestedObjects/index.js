// nested objects = Objects inside of other objects. Allows you to represent more complex data structures
// Child Object is enclosed by a Parent Object

//  Person{Address{}, ContactInfo{}}
// ShoppingCart{Keyboard{}, Monitor}


const person = {
    fuullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Water"
    }
}



console.log(person.fuullName);
console.log(person.age)
console.log(person.isStudent);
console.log(person.hobbies)

console.log("");

//looping with a for 
for(const property in person.address){
    console.log(person.address[property]);
}



//ANOTHER EXAMPLE
class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}



const person1 = new Person("Test", 30,"124 Conch St." ,"Bikini Bottom", "Int. Waters");

const person2 = new Person("Patrick", 37, "128 Conch St.",
                                           "Bikini Bottom",
                                           "Int. Waters"  
)


const person3 = new Person("Squidward", 45, "126 Conch St.",
    "Bikini Bottom",
    "Int. Waters"  
)


console.log(person1.address.street)