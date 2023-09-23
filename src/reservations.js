
function reservations(element) {
    document.getElementsByClassName('main-nav-container')[0].style.display = 'block';
    if (element.firstElementChild) {element.firstElementChild.remove();}

    const rsvp = document.createElement('section');
    rsvp.classList.add('rsvp');

    element.appendChild(rsvp);

    const formWrap = document.createElement('div');
    formWrap.classList.add('form-container');
    rsvp.appendChild(formWrap);

    const heading = document.createElement('h2');
    heading.textContent = 'Make Your Reservation Below';
    formWrap.appendChild(heading);

    const form = document.createElement('form');
    //Name, Number, Email, Submit

    const sections = [
        {
            id: "name",
            type: "text", 
            name: "name",
        },
        {
            id: "number",
            type: "tel", 
            name: "number",
        },
        {
            id: "email",
            type: "email", 
            name: "email",
        }
    ];

    sections.map((section) => {
        const para = document.createElement('p');
        const label = document.createElement('label');
        const input = document.createElement('input');

        label.setAttribute("for", `${section.id}`);
        input.setAttribute("id", `${section.id}`);
        input.setAttribute("type", `${section.type}`);
        input.setAttribute("name", `${section.name}`);

        label.textContent = `${section.name.charAt(0).toUpperCase()}${section.name.slice(1)}: `;
        para.append(label, input);
        form.appendChild(para);
    });

    const button = document.createElement('button');
    button.setAttribute("type", "submit");
    button.textContent = 'Submit';

    form.appendChild(button);
    formWrap.appendChild(form);
}

export { reservations };