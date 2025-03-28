// static = keyword that defines properties or methods 


class MathUtil{
       static PI = 3.14159;
       static getDiameter(radius){
              return radius * 2;
       }

       static getCircumference(radius){
              return 2 * this.PI *radius;
       }

       static getArea(radius){
              return this.PI * radius * radius;
       }
}


console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getCircumference(10));



class User{
       static userCount = 0;

       constructor(username){
              this.username = username;
              User.userCount++;
       }

       static getUserCount(){
              console.log(`There are ${User.userCount} users online`);
       }
       sayHello(){
              console.log(`Hello, my username is ${this.username}`)
       }
}


const user1 = new User("Yawo");
const user2 = new User("Kelvin");

console.log(user1.username);
console.log(user2.username);
console.log(`User count: ${User.userCount}`);



user1.sayHello();
user2.sayHello();

User.getUserCount();