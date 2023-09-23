
function menu(element) {
    document.getElementsByClassName('main-nav-container')[0].style.display = 'block';
    if (element.firstElementChild) {element.firstElementChild.remove();}

    const menu = document.createElement('ul');
    menu.classList.add('menu');

    element.appendChild(menu);

    const menuItems = [
        {
            name: "Burger",
            price: "$5.00",
            desc: "A tasty well-done well-done beef burger."
        }, {
            name: "Fries",
            price: "$1.00",
            desc: "Perfectly crunchy, savory, salty fries."
        }, {
            name: "Pad Kra Pao",
            price: "$7.00",
            desc: "A Brooklyn take on a Thai classic."
        }, {
            name: "Water",
            price: "$0.00",
            desc: "The finest dihydrogen monoxide around."
        }
    ]


    menuItems.map((item) => {
        const food = document.createElement('li');
        const name = document.createElement('h2');
        const price =  document.createElement('h3');
        const detail = document.createElement('p');

        name.textContent = item.name;
        price.textContent = item.price;
        detail.textContent = item.desc;

        food.append(name, price, detail);

        menu.append(food);
    });
}

export { menu };