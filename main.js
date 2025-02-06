const person = {
    firstname: 'khadija', 
    lastname: 'ah',
    age:'24',
    hobbies : ['gamming', 'movie'],
    adress :{
        street: '50 main st', city:'essaouira',
        state:'maroc'
    }
}

function Person(firstName, lastName, dob){// the same thing as cpp constructor 
    this.fisrtname = firstName;
    this.lastname = lastName;
    this.dob = dob;
}
 //oop 
 //let s declare an objet person is an instance of the classe person


 const person1 = new Person('jihn', 'Do', '2 3 4 5 ');
console.log(person1);