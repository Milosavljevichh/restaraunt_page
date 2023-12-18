import deleteContent from "./empty-page";

import homeLoad from "./home-page";
import loadFooter from "./load-footer";
import generateMenu from "./page-load";
import fadeInOut from "./transition";

export default function loadHeader() {
    let container = document.getElementById('content');
    // generating header
    //generating elements
   let header = document.createElement('header');
   let left = document.createElement('div');
   let right = document.createElement('div');
   let logo = document.createElement('a');
   let menu = document.createElement('nav');
   let tabs = document.createElement('ul');
       //adding attributes 
   left.setAttribute('id', 'left');
   right.setAttribute('id','right');
   logo.setAttribute('id', 'logo');
   logo.addEventListener('click', () => {
        let load = 'Load home';
        fadeInOut(load);
   })
   logo.innerHTML = 'IzaPizza';
   // menu.innerHTML('menu');
        //adding children
        for (let i=0; i<=2; i++ ) {
            let li = document.createElement('li');
                let a = document.createElement('a');
            if (i===0) {
                a.innerHTML = 'home';
                a.addEventListener('click', ()=>{
                    let load = 'Load home';
                    fadeInOut(load);
                })
            } else if (i===1) {
                a.innerHTML = 'prices';
                a.addEventListener('click', ()=>{
                    let load = 'Load menu';
                    fadeInOut(load);
                })
            } else {
                a.innerHTML = 'about';
            };
            li.appendChild(a);
            tabs.appendChild(li);
        };
        menu.appendChild(tabs);
        left.appendChild(logo);
        right.appendChild(menu);
        header.append(left, right);
        container.appendChild(header);
};