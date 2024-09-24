// Menu
let menuOpener = (document.querySelector('.menu-opener') as HTMLDivElement);
let nav = (document.querySelector('header nav')as HTMLElement);

menuOpener.addEventListener('click',() => {
    if (nav.classList.contains('opened')){
        nav.classList.remove('opened');
        (menuOpener.querySelector('.close-icon')as HTMLDivElement).style.display = 'none';
        (menuOpener.querySelector('.hamburguer')as HTMLDivElement).style.display = 'flex';
    } else {
        nav.classList.add('opened');
        (menuOpener.querySelector('.close-icon')as HTMLDivElement).style.display = 'flex';
        (menuOpener.querySelector('.hamburguer')as HTMLDivElement).style.display = 'none';
    }
}); 

