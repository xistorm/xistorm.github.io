const header = document.querySelector('header');

const logoBorders = [
    [header.querySelectorAll('.face'), document.querySelector('.logo__picture'), 2.5],
    [header.querySelectorAll('.smile'), document.querySelector('.logo__picture'), 0, 0, 0, 1.6],
    [header.querySelectorAll('.smile__top'), document.querySelector('.logo__picture'), 1.6],
    [header.querySelectorAll('.smile__bottom'), document.querySelector('.logo__picture'), 1.6],
    [header.querySelectorAll('.nose'), document.querySelector('.logo__picture'), 2.5, 0, 0, 1.6],
    [header.querySelectorAll('.nostrils'), document.querySelector('.logo__picture'), 0, 1.6, 0, 0],
    [header.querySelectorAll('.eye'), document.querySelector('.logo__picture'), 1.6],
    [header.querySelectorAll('.eyebrow'), document.querySelector('.logo__picture'), 0, 2.5, 0, 0],
    [header.querySelectorAll('.eyebags__right .top'), document.querySelector('.logo__picture'), 0, 1.6, 0, 0],
    [header.querySelectorAll('.eyebags__right .bottom'), document.querySelector('.logo__picture'), 0, 1.6, 1.6, 0],
    [header.querySelectorAll('.eyebags__left .top'), document.querySelector('.logo__picture'), 1.6, 1.6, 0, 0],
    [header.querySelectorAll('.eyebags__left .bottom'), document.querySelector('.logo__picture'), 0, 1.6, 1.6, 0],
];


if (typeof addBorder === 'undefined') {
    addBorder = [...logoBorders];
} else {
    console.log(addBorder)
    addBorder = [...addBorder, ...logoBorders];
}
