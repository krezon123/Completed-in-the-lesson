// //console.log("hello world")

// //процес сложения называется конкатенацией

// //console.log('hello'+ ' world')

// //console.log("2+2")




// //let combination = 2+2
// //console.log(combination)



// //alert ('hello world')

// // создарние переменной

// //вариант 1
// //var a = 10 //устаревший вариант
// //a = 20
// //console.log(a);

// //вариант 2 современный вариант создания переменной
// //let timur = 293
// //timur = 89
// //console.log(timur);

// //вариант 3 переопределить переменную нельзя
// //const c = 20
// //c = 30
// //console.log(c);




// // Тип данных number


// // infinity

// //let a =infinity
// //console.log(189 / 0)

// // NaN Вычеслительная ошибка

// //console.log('stroka' + 20)
// //console.log('stroka' + ' это строка')



// // тип данных bigint

// //console.log(54546545646546555555555555)
// //console.log(54546545646546545555555555n)


// // тип дынных string

// // let str1 = 'Jojo'
// // let str3 = "Jojo"
// // let str1 = `Anime ${2 + 2 * 100}`

// // console.log(str1);
// // console.log(str2);
// // console.log(str3);

// // булевый тип данных


// // тип null





// // console.log(typeof 10);
// // console.log(typeof 'cat');
// // console.log(typeof 10n);
// // console.log(typeof true); 
// // console.log(typeof undefined);
// // console.log(typeof null);



// console.log("01")

// console.log('Добро'+' пожаловать'+' на курс' + ' Геннадий')

// //alert ('29.07.2024')

// document.getElementById('one').innerHTML = 'Hello World'



// console.log(typeof 10); //Number
// console.log(typeof 'cat'); //String
// console.log(typeof 10n); //BigInt
// console.log(typeof true); //Boolean
// console.log(typeof undefined); //Undefined
// console.log(typeof null); //object






//====================================

// УРОК - 3


// document.getElementById('one').innerHTML = 'Hello World'


// document - обращение к нашему документы 
// getElementById - найти значение по id
// innerHTML - Свойство, которое представляет возможность получить содержимое элемента и изменять содержимое элемента посредством дан ого свойства.


// document.querySelector('#one').innerHTML = 666

// document.querySelector('p').innerHTML = 'Anime'



// let btnn = document.querySelector('.btn')
// let inp = document.querySelector('.txt')

// btnn.onclick = function (){
//     console.log('da');
//     console.log(inp.value);
// }


// let btnn = document.querySelector('.btn')
// let inp = document.querySelector('.txt')

// btnn.onclick = function (){
//     console.log('da');
//     let e = inp.value
//     console.log(e);
// }



// let btnn = document.querySelector('.btn')
// let inp = document.querySelector('.txt')
// let out = document.querySelector('#one')

// btnn.onclick = function (){
//     console.log('da');
//     let e = inp.value
//     out.innerHTML = `${e}`
// }



// let myhappy = prompt('Когда у тебя ДР бро?')
// console.log(myhappy);


// if(Условие){
//     действие которое произойдет если условие истино
// }


// let myhappy = prompt('Когда у тебя ДР бро?')
// if(myhappy == 22){
//     console.log('yes');
// }else{
//     console.log('no');
// }



// let out = document.querySelector('#one')

// let myhappy = prompt('Когда у тебя ДР бро?')
// if(myhappy >= 100){
//     out.innerHTML = 'yes';
// }else{
//     console.log(myhappy);
// }


// УРОК 4 ==========================



// c else if

// let year = prompt ('В каком году вышел Ходячий замок?')

// if(year < 2004){
//     console.log('Рано');
// }
// else if(year > 2004){
//     console.log('Поздно');
// }
// else {
//     console.log('Верно');
// }





//только с if()

// let year = prompt ('В каком году вышел Ходячий замок?')

// if(year < 2004){
//     console.log('Рано');
// }
// if(year > 2004){
//     console.log('Поздно');
//  }
// if(year == 2004){
//     console.log('Верно');
// }




// Обычный вариант через стандартный if/ else

// let day = prompt ('Сколько дней в неделе?')
// let week;

// if(day == 7){
//     week = true
// }
// else{
//     week = false
// }
// console.log(week);





// тернарный оператор (  ? :  )

// let day = prompt ('Сколько дней в неделе?')

// let week = day == 7 ? true : false
// console.log(week);


//let результат = (условие) ? первый вариант : второй вариант



// let day = prompt ('Сколько дней в неделе?')

// if(10 > 2){
//     console.log(1);
// }
// else{
//     console.log(2);
// }

// let day = prompt ('Сколько дней в неделе?')
// let week = 10>2 ? console.log(1) : console.log(2);


// ** возведение в степень
// % остаток от деления

// let a = 3000000n * 3300000022222222n

// console.log(a);
// console.log(12 % 4);

// console.log(102321 <= 50000000000);
// console.log(5 == '5');

// || опертор ИЛИ
// True || True = TRUE
// False || True = TRUE
// TRUE || FALSE = TRUE
// FALSE || FALSE = FALSE

// if(2> 5 || 5> 6){
// console.log(2);
// }else{
// console.log(1);
// }

// Оператор И &&
// True && True = TRUE
// False && True = False
// TRUE && FALSE = False
// FALSE && FALSE = FALSE

// if(2> 5 && 12> 6){
//     console.log(2);
//     }else{
//     console.log(1);
//     }


// ================== Урок 5


// let i = 0;
// ++i
// console.log(++i)
// console.log(i++)


//Структура цикла

//1 итерация
// 0 < 3
//Вывод в консоль переменную i
//увеличение i на i

//2 итерация
// 1 < 3
//Вывод в консоль переменную i
//увеличение i на i

//3 итерация
// 2 < 3
//Вывод в консоль переменную i
//увеличение i на i

//4 итерация
// 3 < 3
// Условие ложно завершаем цикл


// let i = 2;
// while (i <= 5) {
//     console.log(i);
//     i++
// }



// let i = 0;
// do{
//     console.log(i);
//     i++
// }while (i < 10)

//краткая запись
// for(let i = 0; i<10; i++){
//     console.log(i);
    
// }


// let b = 0;
// for(;;){
//     b++
//     console.log(b);
//     break // остановка цикла
    
// }


// for(let i = 1; i<=10; i++){
//     console.log(i);
    
// }







// Урок 6


// switch проверяет через строгое равно ===
// switch(x){
//   case "Значение 1": // Аналог if(x === "Значение")
//   // Тело это case, при учловии если Case истина
//   break
//   case "Значение 2": //Аналог if(x === "Значение 2")
//   // Тело это case, при учловии если Case истина
//   break

//   default: // аналог else
//     // дефолтный вариант если все предыдущие условия не подошли

// }




// let a = 5 + 5
// switch (a) {
//   case 5:
//     alert(1)
//     break
//   case 10:
//     alert(2)
//     break
//   case 15:
//     alert(3)
//     break

//   default:
//     alert(4)
// }




// let a = '1'
// let b = 0

// switch(+a){
//   case b + 1:
//     alert('Выполнися, т.к. значение +а будет 1 в точности равно b + 1')
//     break
//   default:
//     alert('Это не выполнится')
// }




// let a = 12

// switch(a){
//   case 12:
//     alert('Правельно')
//     break
//   case 5:
//   case 10:
//     alert('Не Правельно')
//     break
//   default:
//     alert('результат кривой')
// }




// все что вводим в промт строковый тип данных
// let arg = prompt('Введите число')

 
// // у switch проверка строгая
// switch(+arg){
//   // "0" === 0
//   case '0':
//   case '1':
//     alert('Один или ноль')
//   break
//   case '2':
//     alert('Два')
//   break
//   case 3:
//     alert('никогда не выполнится')
//   break

//   default:
//     alert('Неизвестное число')
// }





// ?? оператор слияния находит и возвращает первое определенное значение 

// let user;
// alert(user ?? 'Аноним')

// let firstName = null
// let lastName = null
// let nickName = 'timur'

// alert(firstName ?? lastName ?? nickName ?? 'Аноним')







// Урок 7


// function one(){
//     //Тело функции
//     console.log('Это функция');
    
// }
// //1 вариант вызова функции
// one()


//2 вариант вызова функции по клику
// let btn = document.querySelector('.btn')

// btn.onclick = one




// function borsh(){
// Набор действий
// }
// borsh()




// function one() {
//     console.log(123);
//     return 666
// }


// let a = 10
// let b = 20

// function summa(){
//     return a + b
// }
// console.log(summa() + 20);


// let a = 10
// let b = 20

// function summa(){
//     console.log(a + b);
//     return a * b
// }
// console.log(summa() + 20);




// let a = 10
// let b = 50

// function summa(){
//     return a - b
// }
// console.log(summa() +20);





// function multiply(x,y){
//     return x * y
// }
// console.log(multiply(10,20));



// function multiply(x){
//     return `Привет ${x}`
// }  
// console.log(multiply("Тимур"));





// let btn = document.querySelector('.btn')
// btn.onclick = function(){
//     console.log('anonim');
    
// }




// // function declaration - можем вызывать раньше чем мы объявили

// function one(){
//     console.log(1);
    
// }
// one()


// // function expression

// let two = function(){
//     console.log(2);
    
// }
// two()

// //Стрелочная функция - нельзя использовать this
// let there = () =>{
//     console.log(3);
    
// }
// there()







//============Урок 8



// let a = document.querySelector('.qwer')
// a.style.color = 'red'
// a.style.background = "black"
// a.style.marginLeft =  '200px' // без тире между и с большой буквы margin-left




// let a = document.querySelector('.qwer')

// a.classList.add('black')
// // a.style.color = 'red'
// // a.classList.add('qwer1')
// a.classList.remove('black') // удаляет стили




// let a = document.querySelector('.qwer')

// let btn = document.querySelector('.btn')

// btn.onclick = function(){
//     this.classList.add('txt')
  
// }



// let a = document.querySelector('.qwer')

// let btn = document.querySelector('.btn')
// let bod = document.querySelector('body')

// btn.onclick = function(){
//     this.classList.add('txt')
//     bod.classList.toggle('qwe') //toggle - переключательклассов
  
// }







//Урок 9


//Так вот массив , это объединённый набор данных помещенные в квадратные скобки - это и есть массив.


// let a = 'Anime'
// let b = 'Targarien'
// let c = 10
// let w = true

// let arr = ['Aime', 'Targarien', 10, true, 20n]
// console.log(arr[1]); //от 0 до 4


// let a = 'Anime'
// let b = 'Targarien'
// let c = 10
// let w = true

// let arr = ['Aime', 'Targarien', 10, true, 20n]
// console.log(arr [arr.length - 1]);
// console.log(arr.length);




// let a = [1,2,3,4,5,6,7,8]
// // const b = ['a','b','c','d']

// // pushc-cдобавляет элемент в конец массива

// console.log(a.length);
// a.push('Aime', 'Targarien', 10, true, 20n)
// //Можно так или так
// a.push(9)
// a.push(10)
// a.push(11)
// a.push(12)
// console.log(a);

// b.push('Hello', 'world', 'i am', 'good', 10, 20,30,40)
// b.push(true,false)
// b.pop()
// // console.log(b[b.length - 1]);
// console.log(b.pop());
// console.log(b);


//особенность при работе с js и массивами, что даже если он у нас объявлен как const то мы без проблем можем вносить изменения в массив, прошу обратить на это внимание и запоминть на будущее

//метод pop - удаляет последние данные массива




//метод удаления
// let a = [1,2,3,4,5,6,7,8]
// const b = ['a','b','c','d']

// b[10] = 'q'
// console.log(b);




//метод удаления
// let a = [1,2,3,4,5,6,7,8]
// const b = ['a','b','c','d']
// delete a[3]
// console.log(a);




// let a = [1,2,3,4,5,6,7,8]
// // a.splice(3)
// a.splice(2,5) //(индекс начала удаления , сколько элементов удалять)
// console.log(a);



// let a = [1,2,3,4,5,6,7,8]
// // a.splice(3)
// a.splice(1,1,'Мы поменяли и удалили') //(индекс начала удаления , сколько элементов удалять, заменить или добавить элемент)
// console.log(a);



//двумерные массивы

// let b = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// console.log(b[2][2]);






//=====Урок 10


//Api - это возможность взаимодействия между клиентом и сервером либо сервером и сервером



// etch('https://api.openweathermap.org/data/2.5/weather?lat=55.45&lon=37.99&appid=4887eee23775a05b8ba479485391eddd';)
// .then(function (resp){return resp.json()})
// .then(function (data){

// console.log(data);
// console.log(data.main);
// document.querySelector('.city-name').innerHTML = data.name
// document.querySelector('.temp').innerHTML = Math.round((data.main.temp - 273 )) + '°'
// document.querySelector('.desc').innerHTML = data.weather[0].description

// })






//======================== Урок 11 ======================

//метод add

//Set - Строгое сравнение (===) удаляет дубликаты 


// let a = new Set()
// a.add(666)
// a.add(1)
// a.add('1')
// a.add(2)
// a.add('строка')
// a.add('Строка')
// // a.clear() //clear - очистка кода перед этим значением
// console.log(a);


// let a = new Set()
// a.add(666)
// a.add(1)
// a.add(2)
// a.add(3)
// a.add(4)
// a.add('СтрОка')
// // a.delete(4)
// a.delete('Строка')
// console.log(a);

// console.log(a.has(21)); // has - выводит true/false




// let b = [1,2,3,4,5,6,6,7,7,7,7,7,7,7]
// console.log(b);

// let a = new Set(b)

// for(let i of a){
//     console.log(i);
    
// }




// let a = [1,2,3,4,5]
// for(let i = 0; a.length > i; i++){
//     console.log(a[i] +10);
    
// }





// let a = [1,2,3,4,5]
// for(let i in a){
//     console.log(a[i]);
    
// }




// let a = [1,2,3,4,5]
// for(let i of a){
//     console.log(i);
    
// }




// let a = [1,2,3]
// console.log(a.length) //Вывод длину массива. а-любой символ







//========================== Урок 12 ====================



// document.querySelector('.one').onclick = function(event){
//     console.log(1);
    // console.log(event);
// }


// document.querySelector('.tow').onclick = function(){
//     console.log(2);
// }



// двойной клик
// document.querySelector('.tow').ondblclick = function(){
//     console.log(123);
//     alert('Hello')
    
// }


// Клик правлй клавиши
// document.querySelector('.tow').oncontextmenu = function(){
//     console.log(123);
//     return false //контексное меню не выподает
    
// }



// Событие которое срабатывает каждый раз когда мы находимся в нутри блока
// событие которое срабатывает каждый раз когда мы находимся внутри блока, работает не попиксельно

// let width = 100
// document.querySelector('.there').onmousemove = function(){
// this.style.width = width + 'px'
// width++

// }




// //onmouseenter срабатывает при наведение

// document.querySelector('.there').onmouseenter = function(){
//     this.style.background = 'pink'
// }

// document.querySelector('.there').onmouseleave = function(){
//     this.style.background = '#555'
// }


// // onmusedown при нажатие на элемент

// document.querySelector('.there').onmousedown = function(){
//     this.style.background = '#ff0000'
// }

// //onmouseup при отпускание мыши

// document.querySelector('.there').onmouseup = function(){
//     this.style.background = 'green'
// }





// События инпута

// document.querySelector('.inp').oninput = function(event){

// console.log(event);

// }




// Событие клавиатуры onkeypress, не замечает служебных клавиш
// document.querySelector('.inp').onkeypress = function(event){

// console.log(event);
// console.log(event.charCode);
// console.log(event.code);
// console.log(event.key);
// console.log(event.keyCode)

// }

// Событие клавиатуры onkeydown замечает служебных клавиш

// document.querySelector('.inp').onkeydown = function(event){

// console.log(event);
// console.log(event.charCode);
// console.log(event.code);
// console.log(event.key);
// console.log(event.keyCode)

// }

// Событие клавиатуры onkeyup замечает служебные клавиши и срабатывает когда мы отпускам клавишу

// document.querySelector('.inp').onkeyup = function(event){

// console.log(event);
// console.log(event.charCode);
// console.log(event.code);
// console.log(event.key);
// console.log(event.keyCode)

// }




//===================== Урок 13 =========================


// localStorage.setItem('data', 5)
// console.log(localStorage.getItem('data'));



// let a =[1,2,3]
// // localStorage.setItem('data',a)
// localStorage.setItem('data', JSON.stringify(a))
// let b = localStorage.getItem('data')
// b = JSON.parse(b)
// console.log(b);
// console.log(b[2]);
// // localStorage.clear()
// console.log(typeof b);



// let xhttp = new XMLHttpRequest()

// xhttp.onreadystatechange = function(){
// if(this.readyState == 4 && this.status == 200){
// myfunc(this.responseText)
// }
// }
// xhttp.open('GET','https://automarine25.ru/';)
// xhttp.send()

// function myfunc(data){
// console.log(data);
// }








// ================ Урок 14 ========================


// let xhttp = new XMLHttpRequest()
// xhttp.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200){
//         myfunc(this.responseText)
//     }
// }
// xhttp.open('GET','https://automarine25.ru/')
// xhttp.send()

//     function myfunc(data){
//         console.log(data);
// }




// fetch('http://127.0.0.1:5500/index.html')
// .then(data =>{
//     console.log(data);
//     console.log(data.text());
// })






//Плохая запись

// fetch('http://127.0.0.1:5500/index.html')
// .then(data =>{
//     console.log(data);
//     data.text().then(data2 =>{
//         console.log(data2);    
//     })
// })





// Решение немного лучше, но все еще неочень

// fetch('http://127.0.0.1:5500/index.html')
// .then(data =>{
//     console.log(data);
//     return data.text()
// })
// .then(data =>{
//     console.log(data);
// })





// Лучшее решение

// fetch('http://127.0.0.1:5500/index.html')
// .then(data => data.text())
// .then(data =>{
//     console.log(data);
    
// })






// let a = new Promise((resolve, reject) =>{
//     fetch('http://127.0.0.1:5500/index.html')
//     .then(data =>{
//         resolve(data.text())
//     })
// })

// let b = new Promise((resolve, reject) =>{
//     fetch('https://www.google.ru/')
//     .then(data =>{
//         resolve(data.text())
//     })
// })

// a.then(data =>{
//     console.log(data);
    
// })

// Resolve – получается когда промис возвращает результат как мы задумали
// Reject – когда у него не получается этого сделать


// b.then(data =>{
//     console.log(data);
    
// })


// Promise.all([a,b]).then(data =>
//     console.log(data);
    
// )














