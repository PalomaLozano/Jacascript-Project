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

//variables
const menuCollapsed = document.querySelector('.js--menu');
const menuHamb = document.querySelector('.js--hamb');

//handler

function handleCollapsable(){
  menuCollapsed.classList.toggle('collapsed');
  //menuCollapsed.classList.add('js--menu');
}



//Listener
menuHamb.addEventListener('click', handleCollapsable);

