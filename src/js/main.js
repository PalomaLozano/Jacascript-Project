/* eslint-disable no-console */

'use strict';
//CREANDO VARIABLES PARA LA LISTA DEL MENÚ, estos aparecerán cuando sean llamados

//const item1 =   'home';
//const item2 =   'who we are';
//const item3 =   'contact';
//const arrow =   'white arrow';

//LLAMO AL MENÚ DE MI HTML, este es el elemento sobre el que vamos a trabajar

//const menu = document.querySelector('.js--dropdown');

//creamos desde aquí el menú (li)

//let lista =
//`<li class="menu--home"> ${item1} </li>`;

//lista +=
//`<li class="menu--who_we_are"> ${item2} </li>`;

//lista +=
//`<li class="menu--contact"> ${item3} </li>`;

//lista +=
//`<li class="white--arrow/> ${arrow} </li>`;

//menu.innerHTML = lista;

//const menuDropdown = document.querySelector( '.js--dropdown');

//menuDropdown.classList.add( '.collapsed');
//menuDropdown.classList.remove( '.collapsed');



//HEADER
//variables
const menuCollapsed = document.querySelector('.js--menu');
const menuHamb = document.querySelector('.js--hamb');

//handler

function handleCollapsable(){
  menuCollapsed.classList.toggle('collapsed');
}

//Listener
menuHamb.addEventListener('click', handleCollapsable);


//SECOND PART

//VARIABLES
//variables
const descriptionCollapsed = document.querySelector('.js--paragraph');
const descriptionTitle = document.querySelector('.js--title');

//handler

function descriptionCollapsable(){
  descriptionCollapsed.classList.toggle('collapsed');
}

//Listener
descriptionTitle.addEventListener('click', descriptionCollapsable);



//CONDITIONALS
//variables
const descriptionCollapsedTwo = document.querySelector('.js--paragraph_Two');
const descriptionTitleTwo = document.querySelector('.js--title_Two');

//handler

function descriptionCollapsableTwo(){
  descriptionCollapsedTwo.classList.toggle('collapsed');
}

//Listener
descriptionTitleTwo.addEventListener('click', descriptionCollapsableTwo);



//FUNCTIONS
//variables
const descriptionCollapsedThree = document.querySelector('.js--paragraph_Three');
const descriptionTitleThree = document.querySelector('.js--title_Three');

//handler

function descriptionCollapsableThree(){
  descriptionCollapsedThree.classList.toggle('collapsed');
}

//Listener
descriptionTitleThree.addEventListener('click', descriptionCollapsableThree);


//EVENTS
//variables
const descriptionCollapsedFour = document.querySelector('.js--paragraph_Four');
const descriptionTitleFour = document.querySelector('.js--title_Four');

//handler

function descriptionCollapsableFour(){
  descriptionCollapsedFour.classList.toggle('collapsed');
}

//Listener
descriptionTitleFour.addEventListener('click', descriptionCollapsableFour);


//OBJECTS
//variables
const descriptionCollapsedFive = document.querySelector('.js--paragraph_Five');
const descriptionTitleFive = document.querySelector('.js--title_Five');

//handler

function descriptionCollapsableFive(){
  descriptionCollapsedFive.classList.toggle('collapsed');
}

//Listener
descriptionTitleFive.addEventListener('click', descriptionCollapsableFive);


//ARRAYS AND LOOPS
//variables
const descriptionCollapsedSix = document.querySelector('.js--paragraph_Six');
const descriptionTitleSix = document.querySelector('.js--title_Six');

//handler

function descriptionCollapsableSix(){
  descriptionCollapsedSix.classList.toggle('collapsed');
}

//Listener
descriptionTitleSix.addEventListener('click', descriptionCollapsableSix);
