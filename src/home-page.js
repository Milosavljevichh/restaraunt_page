
import fadeInOut from "./transition";

export default function homeLoad() {
    let container = document.getElementById('content');

    let homeSec = document.createElement('section');
    let title = document.createElement('div');
    homeSec.setAttribute('id','hero');
    homeSec.setAttribute('class','hero-home');
    let h1 = document.createElement('h1');
    let hr = document.createElement('hr');
    let p = document.createElement('p');
    let btn = document.createElement('a');
    btn.class = 'CTA';
    btn.addEventListener('click',() => {
        let menu = 'Load menu';
        fadeInOut(menu);
    });

    btn.innerHTML = 'menu';
    h1.innerHTML = `It's a pizza,IzaPizza`;
    p.innerHTML = `You're taking your time to read this? Then
    take your time to order our pizza!`;

    title.append(h1,hr,p,btn);
    homeSec.appendChild(title);
    container.appendChild(homeSec);


};