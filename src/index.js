function component() {
    let element = document.createElement('div');

    element.innerHTML = "Hello world! ".repeat(3);

    return element;
}

document.body.appendChild(component());
