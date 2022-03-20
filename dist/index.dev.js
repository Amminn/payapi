"use strict";

var open = document.getElementById('menu-open').addEventListener('click', opening);
var close = document.getElementById('menu-close').addEventListener('click', closing);
var header = document.getElementById('header');

function opening() {
  header.classList.add('open');
}

function closing() {
  header.classList.remove('open');
}