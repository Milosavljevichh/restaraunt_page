import deleteContent from "./empty-page";
import generateMenu from "./page-load";
import loadFooter from "./load-footer";
import homeLoad from "./home-page";

export default function fadeInOut(page) {
    let container = document.getElementById('content');
    container.classList.add('molimte');
    container.addEventListener('animationend', ()=>{
        deleteContent();
        if (page==='Load menu') {
            generateMenu();
        } else if (page==='Load home') {
            homeLoad();
        }
        loadFooter();
        container.classList.add('jebise');
        container.classList.remove('molimte');
    }, {once: true})
    container.addEventListener('animationend', ()=> {
        // container.classList.remove('jebise');
    }, {once: true})
}