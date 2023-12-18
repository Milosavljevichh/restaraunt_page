export default function loadFooter() {
    let container = document.getElementById('content');
    //generating footer
    let footer = document.createElement('footer');
    footer.id = 'footer';
    let copyright = document.createElement('p');
    copyright.innerHTML = 'copyright &copy; Milosavljevich';
    //appending footer
    footer.appendChild(copyright);
    container.appendChild(footer);
};