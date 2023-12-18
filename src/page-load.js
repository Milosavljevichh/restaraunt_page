
import loadFooter from "./load-footer";
import loadHeader from "./load-header";

export default function generateMenu () {
    let container = document.getElementById('content');
    //generating main content
        //hero section
        //creating tags
    let main = document.createElement('main');
    let heroSec = document.createElement('section');
    let heroLeft = document.createElement('div');
    let heroRight = document.createElement('div');
    function createArticle(i, side) {
        let heroArticle = document.createElement('article');
        let img = document.createElement('img');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let a = document.createElement('a');
        if (i === 0) {
            if (side === 'left') {
                img.src = "img/box-pizza.jpg";
                h2.innerHTML = 'Pizza box';
                p.innerHTML = `It's a box. No pizza. Yes,you're ordering
                an empty box. A cardboard one, not a pizza one. Does a 
                box made out of pizza even exist? We don't know because
                we aren't making them. Find someone who does.`
                heroArticle.id = 'box';
            } else {
                img.src = "img/eggs-pizza.jpg";
                h2.innerHTML = 'Eggs Pizza';
                p.innerHTML = `Basic pizza + eggs. Mmmm tasty,right?
                We know it is. It really is. Trust us. Order it. Order
                it now... NOWWW!!!!`
                heroArticle.id = 'egg';
            }
        } else if (i===1) {
            if (side === 'right') {
                img.src = "img/basic-pizza.jpg";
                h2.innerHTML = 'Basic Pizza';
                p.innerHTML = `It's OUR pizza. Which means that
                it is the best, but to us it's basic. You have
                a lot more options. This one is tasty, but you
                can order something better from us *wink wink* ;)`
                heroArticle.id = 'basic';
            } else {
                img.src = "img/slice-pizza.jpg";
                h2.innerHTML = 'Pizza Slice';
                p.innerHTML = `Are you hungry but not hungry hungry?
                Well what a coincidence, we have a solution for you! Order
                a pizza slice for the price of a whole pizza!`
                heroArticle.id = 'slice';
            }
        } 
        heroArticle.append(img, h2, p, a);
        return heroArticle;
    }; 
    //adding attributes
    heroSec.setAttribute('id', 'hero');
    heroSec.setAttribute('class', 'hero');
    heroLeft.setAttribute('id', 'leftHero');
    heroRight.setAttribute('id', 'rightHero');
    //appending elements
    for (let i=0; i <= 1; i++) {
        let heroArticle = createArticle(i, 'left');
        
        heroLeft.append(heroArticle);
        heroArticle = createArticle(i, 'right');
        heroRight.append(heroArticle);
    };
    heroSec.appendChild(heroLeft);
    heroSec.appendChild(heroRight);
    main.appendChild(heroSec);
    container.appendChild(heroSec);
    
    
};
