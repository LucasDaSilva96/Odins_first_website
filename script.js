"use strict";

const footer_time = document.querySelector("time");

const date = new Date();
const year = date.getFullYear();

footer_time.textContent = year;
