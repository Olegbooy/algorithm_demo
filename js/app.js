// @ts-ignore
let menu = document.querySelector('header .container .right__part');

function toggleMenu(el) {
    el.classList.toggle('active')
    menu.classList.toggle('active')
}

const tilt = $('.tilt_el').tilt();


function validateInput() {
    $(document).on('input', '[data-input-converter]', function () {
        let input = $(this)

        input.val(input.val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
    })
}

window.onload = function () {
    let c = {
        'USD': '78',
        'EUR': '85.6',
        'RUB': '1'
    }

    let giveInput = document.querySelector('.inputGive');
    let currency1 = document.querySelector('.selectGive');
    let currency2 = document.querySelector('.selectTook');
    let result = document.querySelector('.convert__result');

    function summ() {
        let z = 0;
        if(currency1.value === currency2.value){ // Если оба значения в селектах равны
            result.innerText = giveInput.value; // То просто вписываем данные из поля ввода
        } else {
            if(currency1.value != 'RUB'){ // Если не равны рублю, то
                z = giveInput.value*c[currency1.value]; // Переводим сумму в рубли
                result.innerHTML = Math.ceil((z/c[currency2.value])*100)/100; // Делим на курс и округляем до сотых
            } else { // Если не равны
                result.innerHTML = Math.ceil((giveInput.value*c[currency2.value])*100)/100; // Умножаем на курс и округляем до сотых
            }
        }
    }

    giveInput.oninput = function () { // При вводе данных в поле вызываем функцию.
        summ();
    };
    currency1.onchange = function () { // При смене первого селекта вызываем функцию.
        summ();
    };
    currency2.onchange = function () { // При смене второго селекта вызываем функцию.
        summ();
    }
}


const btnExchange = document.querySelector('.exchange__changer .btn')

let w

function displayWindowSize() {
    w = document.documentElement.clientWidth;
    if(w < 992) {
        btnExchange.innerText = 'Обменять';
    } else {
        btnExchange.innerHTML = `<svg width="20" height="33" viewBox="0 0 20 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.7282 16.0714L0 3.57087L3.6359 0L20 16.0714L3.6359 32.1429L0 28.572L12.7282 16.0714Z" fill="black" fill-opacity="0.5"/>
        </svg> `
    }
}

window.addEventListener("resize", displayWindowSize)
displayWindowSize()


$(document).ready(() => {
    $('.our__services .services__inner .head').on('click', accordeonFunc);
    $('.healthy__info .info__inner .head').on('click', secondAccordeon)
})

function accordeonFunc() {
    $(this).next().slideToggle(400)
    $(this).find('.top__block svg').toggleClass('active')
}

function secondAccordeon() {
    $(this).next().slideToggle(400)
    $(this).find('svg').toggleClass('active')
}