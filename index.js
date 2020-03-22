// 1. Вывести в консоль сообщение `"My first debug"`
let firstMessage = "My first debug"
console.log(firstMessage) 
 
//2. Создать переменные возраст, кличка питомца и вывести в консоль (variant 1 -> сделанно extention Turbo Logger)
let age = 2
console.log("age", age)
let petNickname = "Mary"
console.log("petNickname", petNickname)


//2. Создать переменные возраст, кличка питомца и вывести в консоль (variant 2)
console.log(age)
console.log(petNickname)

//3. Изменить возраст и вывести эти данные опять

age = 3
console.log("age", age)

//4. Создать переменные каждого из типов (number, string и тд) в JS и с помощью typeof вывести в консоль тип

let secretQuestion = true
console.log(typeof secretQuestion)
let price = 25
console.log(typeof number)
let productPriceCurrency = 'USD'
console.log(typeof weight)
let mailingList = null
console.log(typeof mailingList)
let name = 'Maxim'
let greeting = 'Best wishes from Fronend 19!';  
console.log('Hello '+name+'! Best wishes from Fronend 19!') 
console.log(typeof greeting)


const bestSelerbook = {
    name:'Harry Potter',
    author:'Joanne Rowling',
    booksSold: 456789098754321,
    price: 45,
    priceCurrency: 'USD'
}
console.log("bestSelerbook", bestSelerbook)

const favoriteMovies =['Big bang theory', 'How I met your mother', 'Limitless']
console.log("favoriteMovies", favoriteMovies)



//5. У объекта `cons student = {name: "{Ваше имя}", surname: "{Ваша фамилия}", isActive: true}`взять свойство isActive и вывести тип

const student = {
    name: 'Valeriia',
    surname: 'Volkova',
    isActive: true
}
console.log(typeof student.isActive)

// 6. Создать массивы из 5 элементов для таких сущностей: фрукты, числа, студенты (массив объектов)
let fruits = ['pineapple','mandarin','apple','plum','banana']
let numbers = [1, 2, 3, 4, 5]
let students = [
    studentWebDesighn = {
        name:'Andre',
        surname:'Tan',
        age: 35,
        completedHomeTasks: 12,
        getDiplom: true
    },
    studentPHP = {
        name:'Rasmus',
        surname: 'Lerdorf',
        age: 51,
        completedHomeTasks: 2,
        getDiplom: false
    },
    studentJS = {
        name:'Brendan',
        surname: 'Eich',
        age: 58,
        completedHomeTasks: 67,
        getDiplom: true
    },
    studentReactJS = {
        name:'Jordan',
        surname: 'Walke',
        age: 32,
        completedHomeTasks: 123,
        getDiplom: true
    },
    studentHtml = {
        name:'Tim',
        surname: 'Berners-Lee',
        age: 64,
        completedHomeTasks: 1,
        getDiplom: false
    } 
]
//Со звездочкой: 

//- Из массива чисел от 1 до 10 вывести первый и последний элемент

let numbersFromOneToTen = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] 
console.log(numbersFromOneToTen[0]);
console.log(numbersFromOneToTen[9]);

//- Используя объекта student (пункт 5) вывести сообщение
 //`студент: {имя} {фамилия}, сейчас активен: {isActive}`

 let message= `Студент ${student.name} ${student.surname}, сейчас активен: ${student.isActive}`
 
 console.log(message)
 
