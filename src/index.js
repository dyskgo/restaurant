import { loadPage } from './loadpage.js';

import { loadAbout } from './about-tab.js'; 

import { createItem, loadMenu } from './menu-tab.js';

import { loadContact } from './contact-tab.js';

loadPage(); 

let aboutTab = document.getElementById('tab-about'); 
let menuTab = document.getElementById('tab-menu');
let contactTab = document.getElementById('tab-contact');

function getEventTarget(e) {
    e = e || window.event; 
    return e.target || e.srcElement; 
}

aboutTab.addEventListener('click', loadAbout); 
menuTab.addEventListener('click', loadMenu);
contactTab.addEventListener('click', loadContact); 

