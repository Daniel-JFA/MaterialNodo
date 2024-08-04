// Social Media Profile

//1. User information

const username = 'LeydiDev'
const fullName = 'Leydi Madrid'
const age = 26
const isStudent = true

//2. Address
const address = {
    street: 'Calle 58',
    city: 'Medellìn',
    country: 'Colombia',
    zipCode: 5001
}

//3. Hobbies
const hobbies = ['Coding', 'Design', 'Learn']

//4. Generading personalize bio
const personalizeBio = `Hello 😊 I'm ${fullName}.
I'm ${age} years old.
I live in ${address.street}, ${address.city}, ${address.country}, the zip code is ${address.zipCode}.
My hobbies is ${hobbies.join(', ')}.
Follow me like ${username}`

//Print the user profile and bio
console.log(personalizeBio);