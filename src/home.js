
function home(element, state) {
    document.getElementsByClassName('main-nav-container')[0].style.display = 'none';
    if (element.firstElementChild) {element.firstElementChild.remove();}

    const options = ['Menu', 'Hours', 'Reservations'];

    const container = document.createElement('nav');
    container.classList.add('nav-container');

    element.appendChild(container);

    options.map(button);

    function button(name) {
        const button = document.createElement('button');
        button.textContent = name;

        button.addEventListener("click", (e) => {
            console.log(`${e.currentTarget.textContent}`);
            state(`${e.currentTarget.textContent}`);
        });

        container.appendChild(button);
    }
}

export { home };