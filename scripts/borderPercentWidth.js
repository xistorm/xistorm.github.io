const addBorderInPercents = (
    elements,
    from,
    percentRight,
    percentBottom = percentRight,
    percentLeft = percentRight,
    percentTop = percentBottom,
) => {
    elements.forEach(element => {
        console.log(element)
        element.style.borderRightWidth = `${from.clientWidth / 100 * percentRight}px`;
        element.style.borderBottomWidth = `${from.clientHeight / 100 * percentBottom}px`;
        element.style.borderLeftWidth = `${from.clientWidth / 100 * percentLeft}px`;
        element.style.borderTopWidth = `${from.clientHeight / 100 * percentTop}px`;
    });
}

addBorder.forEach(element => addBorderInPercents(...element))