const f = ['f', 'o', 'p'];

console.log(f);
//we could work with arrays in same way as c and cpp for xample to replace an element of the tab or remove it and so on
//we can work also with like a class for example:
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

console.log(person.firstname, person.lastname, person.adress, person.age, person.hobbies);
//i can specifie the position in every tab for example in hobbie and then it s gonna gives me the exact position

console.log(person);

for (let i = 0; i <=10; i++)
    {
        console.log(`For Loop Number: ${i}`);
    }
//the same thing for the while loop exactly as in c and cpp

const x = 10;
if(x == 10 || x > 100)
    {
        console.log('ok');
    }
    else
        console.log("KO");

