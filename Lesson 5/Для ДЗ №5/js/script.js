'use strict'


let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    // body = document.getElementsByTagName('body') [0];
    body = document.body,
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv') [0],
    promptforApple = document.querySelector("#prompt"),
    // arr = document.querySelectorAll('.menu-item');
     
    

//Добавляем 5-й элемент (li) в наш (ul)

let li = document.createElement('li');
li.classList.add('menu-item');
li.innerHTML = 'Пятый пункт'; 
menu.appendChild(li);


//Меняем два элемента местами
menu.insertBefore(menuItem[2], menuItem[1]);


//Меняем картинку заднего фона
body.style.background = 'url(../img/apple_true.jpg)';

//Меняем заголовок и добавляем слово
title.textContent = 'Мы продаем только подлинную технику Apple';

//Удаляем рекламу со страницы
adv.remove();

//Отношение к технике Apple
let yourOpinion = prompt("Ваше отношение к технике Apple?"); 
promptforApple.textContent = yourOpinion;

//Сортировка (nav) от большего к меньшему
