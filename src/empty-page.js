export default function deleteContent() {
    let main = document.getElementById('hero'); 
    let foot = document.getElementById('footer');
    main.remove();
    foot.remove();
}