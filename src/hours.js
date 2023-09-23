
function hours(element) {
    document.getElementsByClassName('main-nav-container')[0].style.display = 'block';
    if (element.firstElementChild) {element.firstElementChild.remove();}

    const hours = document.createElement('section');
    hours.classList.add('hours');

    element.appendChild(hours);

    //Heading
    const heading = document.createElement('h2');
    heading.textContent = 'Hours';
    hours.appendChild(heading);

    //Hours of Operation
    const operating =  [
        {
            day: "Sunday",
            time: "8AM - 7PM"
        },
        {
            day: "Monday",
            time: "10AM - 9PM"
        },
        {
            day: "Tuesday",
            time: "10AM - 9PM"
        },
        {
            day: "Wednesday",
            time: "10AM - 9PM"
        },
        {
            day: "Thursday",
            time: "8AM - 10PM"
        },
        {
            day: "Friday",
            time: "12PM - 11PM"
        },
        {
            day: "Saturday",
            time: "8AM - 11PM"
        }
    ];

    operating.map((option) => {
        const line = `${option.day}: ${option.time}`;
        const para = document.createElement('p');
        para.textContent = line;
        hours.appendChild(para);
    });


    //Location
    const location = document.createElement('h2');
    location.textContent = 'Location'
    hours.appendChild(location);

    const address = document.createElement('address');
    address.textContent = '777 Cherrytree Lane, Mintwood, Vermont'
    hours.appendChild(address);
}

export { hours };