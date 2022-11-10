const phrasesData = {
    current: 0,
    phrases: [
        { ru: 'Привычка - вторая натура', eng: 'Consuetudo est altera natura' },
        { ru: 'Заметьте хорошо!', eng: 'Nota bene' },
        { ru: 'Беда не приходит одна', eng: 'Nulla calamitas sola' },
        { ru: 'Через тернии к звёздам', eng: 'Per aspera ad astra' },
    ]
}

const phrasesContainer = document.querySelector('.phrases__container');
const controlsContainer = document.querySelector('.phrases__controls');

const selectedPhrases = phrasesContainer.querySelector('.selected');
const tempPhrases = phrasesContainer.querySelector('.temp');
const unselectedPhrases = phrasesContainer.querySelector('.unselected');

const addControl = controlsContainer.querySelector('.add');
const clearControl = controlsContainer.querySelector('.clear');


const getElementOffsetY = (parent, element) => {
    const parentTop = parent.getBoundingClientRect().top;
    const elementTop = element.getBoundingClientRect().top;

    return elementTop - parentTop;
}

const setCssVaribale = (name, value) => document.documentElement.style.setProperty(name, value);

const add = () => {
    const { phrases, current } = phrasesData;
    const phraseText = `${current + 1} ${phrases[current]?.ru}`;
    if (current === phrases.length) return;

    phrasesData.current += 1;

    const li = document.createElement('li');
    li.classList.add('phrase');
    li.textContent = phraseText;
    li.classList.add('appear');

    unselectedPhrases.appendChild(li);
    li.addEventListener('click', select);

    setTimeout(() => li.classList.remove('appear'), 1000);

    return li;
}

const clear = () => {
    unselectedPhrases.innerHTML = '';
    selectedPhrases.innerHTML = '';
    phrasesData.current = 0;
}

const select = (event) => {
    const li = event.target;
    const temp = li.cloneNode(true);
    const selected = li.cloneNode(temp);

    const index = Number(li.innerHTML.split(' ')[0]);
    const engText = phrasesData.phrases[index - 1].eng;
    selected.innerHTML = `${index} ${engText}`;

    const height = li.offsetHeight;
    const offsetFrom = getElementOffsetY(phrasesContainer, li);
    const offsetTo = getElementOffsetY(phrasesContainer, selectedPhrases);

    setCssVaribale('--calculated-height', `${height}px`);
    setCssVaribale('--temp-from', `${offsetFrom}px`);
    setCssVaribale('--temp-to', `${offsetTo}px`);
    tempPhrases.prepend(temp);
    tempPhrases.classList.add('select');

    unselectedPhrases.classList.add('up');

    li.classList.add('delete');

    setTimeout(() => {
        selectedPhrases.prepend(selected);
        selected.addEventListener('click', unselect);

        unselectedPhrases.removeChild(li);
        tempPhrases.removeChild(temp);
        tempPhrases.classList.remove('select');
        unselectedPhrases.classList.remove('up');
    }, 1000);
}

const unselect = (event) => {
    const li = event.target;
    const temp = li.cloneNode(true);
    const unselected = li.cloneNode(temp);

    const index = Number(li.innerHTML.split(' ')[0]);
    const ruText = phrasesData.phrases[index - 1].ru;
    unselected.innerHTML = `${index} ${ruText}`;

    const height = li.offsetHeight;
    const offsetFrom = getElementOffsetY(phrasesContainer, li);
    const offsetTo = getElementOffsetY(phrasesContainer, selectedPhrases);

    setCssVaribale('--calculated-height', `${height}px`);
    setCssVaribale('--temp-from', `${offsetFrom}px`);
    setCssVaribale('--temp-to', `${offsetTo}px`);
    tempPhrases.appendChild(temp);
    tempPhrases.classList.add('unselect');

    unselectedPhrases.classList.add('up');

    li.classList.add('delete');

    setTimeout(() => {
        selectedPhrases.removeChild(li);
        unselectedPhrases.appendChild(unselected);
        unselected.addEventListener('click', select);

        tempPhrases.removeChild(temp);
        tempPhrases.classList.remove('unselect');
        unselectedPhrases.classList.remove('up');

        unselected.classList.add('reduce');
        setTimeout(() => unselected.classList.remove('reduce'), 1000);
    }, 1000);
}

addControl.addEventListener('click', add);

clearControl.addEventListener('click', clear)