var container = document.querySelector('.container');
const price = 12;

var cnt = document.getElementById('cnt');
var prices = document.getElementById('price');
var seats = document.querySelectorAll('.row .seat');
retriveData();


container.addEventListener('click', (e) => {

    //Select the movies
    if (e.target.classList.contains('movies') && !e.target.classList.contains('chosen')) {
        document.querySelector('.movies.chosen').className = 'movies';
        e.target.classList.add('chosen');
    }

    //Selection of seats
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')
        updateTicket();
    }
})


function updateTicket() {
    let count = document.querySelectorAll('.row .seat.selected');


    let storeCount = [...count].map(function (e) {
        return [...seats].indexOf(e);
    });

    sessionStorage.setItem('store', JSON.stringify(storeCount));
    cnt.innerText = count.length;
    prices.innerText = count.length * price;

}

function retriveData() {
    if (sessionStorage.getItem('store')) {
        let data = sessionStorage.getItem('store');
        let data1 = JSON.parse(data);
        seats.forEach((e, i) => {
            if (data1.indexOf(i) > -1) {
                e.className = 'seat selected';
            }
        });
        cnt.innerText = data1.length;
        prices.innerText = data1.length * price;
    }



}