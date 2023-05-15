const reviews = [
    {
        id: 1,
        author: "Leio Mclaren",
        job: "web developer",
        image: "./images/avatar-leio-mclaren.jpg",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Neque volutpat ac tincidunt vitae semper quis. Commodo sed egestas 
        egestas fringilla phasellus faucibus.`
    },
    {
        id: 2,
        author: "Sarah Jones",
        job: "UX/UI designer",
        image: "./images/avatar-sarah-jones.jpg",
        text: `Turpis cursus in hac habitasse platea. Blandit cursus risus 
        at ultrices mi tempus imperdiet nulla. Vestibulum sed arcu non odio 
        euismod lacinia. Turpis massa sed elementum tempus egestas sed. 
        Dolor sed viverra ipsum nunc aliquet. Sit amet facilisis 
        magna etiam tempor.`
    },
    {
        id: 3,
        author: "Alexander Hipp",
        job: "software developer",
        image: "./images/avatar-alexander-hipp.jpg",
        text: `In vitae turpis massa sed elementum tempus egestas sed sed. 
        Venenatis a condimentum vitae sapien pellentesque. Eget dolor 
        morbi non arcu risus quis varius. Tortor condimentum lacinia 
        quis vel eros.`
    },
    {
        id: 4,
        author: "Vanessa Hudgens",
        job: "web developer",
        image: "./images/avatar-vanessa-hudgens.jpg",
        text: `Molestie at elementum eu facilisis sed. Enim sit amet 
        venenatis urna cursus eget nunc scelerisque viverra. Fringilla 
        ut morbi tincidunt augue interdum velit. Purus ut faucibus 
        pulvinar elementum integer enim.`
    }
];

const author = document.getElementById("author");
const job = document.getElementById("job");
const image = document.getElementById("image");
const text = document.getElementById("text");

const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {UpdateItem()});

btnNext.addEventListener("click", function() {
    currentItem++;
    if (currentItem > reviews.length - 1) currentItem = 0;
    UpdateItem();
});
btnPrev.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0) currentItem = reviews.length - 1;
    UpdateItem();
});

function UpdateItem() {
    const item = reviews[currentItem];
    author.textContent = item.author;
    job.textContent = item.job;
    image.src = item.image;
    text.textContent = item.text;
}