const addBorder = [
    [document.querySelectorAll('.chair'), document.querySelector('.chair'), 40, 40],
    [document.querySelectorAll('.upperbody__container .nose'), document.querySelector('.upperbody__container'), 6, 50],
    [document.querySelectorAll('.lowerbody__container .nose'), document.querySelector('.lowerbody__container'), 6, 50],
    [document.querySelectorAll('.roof__container .visor'), document.querySelector('.roof__container'), 8, 50],
];

const addBorderInPercents = (elements, from, percentWidth, percentHeight) => {
    elements.forEach(element => {
        const borderWidthInPx = `${from.clientWidth / 100 * percentWidth}px`;
        const borderHeightInPx = `${from.clientHeight / 100 * percentHeight}px`;

        element.style.borderTopWidth = borderHeightInPx;
        element.style.borderRightWidth = borderWidthInPx;
        element.style.borderBottomWidth = borderHeightInPx;
        element.style.borderLeftWidth = borderWidthInPx;
    });
}

addBorder.forEach(element => addBorderInPercents(...element))