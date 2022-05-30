// console.log('Lection_24');

/*
    https://hsto.org/webt/yt/ym/f1/ytymf18shc3tzim_vdvpocuq8qy.png
    https://zametkinapolyah.ru/wp-content/uploads/2016/07/Client-server.jpg
    https://sergeygavaga.gitbooks.io/kurs-lektsii-testirovanie-programnogo-obespecheni/content/assets/23import.png

    https://i.stack.imgur.com/7o8ED.png
*/



const btn = document.querySelector('#click');

btn.addEventListener('click', () => {

    fetch('http://localhost:9900/info')
        .then(resp => resp.json())
        .then(data => {
            console.log(data);

            document.querySelector('#loaded-data').innerHTML = JSON.stringify(data);
        })


    fetch('https://api.openweathermap.org/data/2.5/weather?lat=50.451400&lon=30.472484&appid={INSERT API}&units=imperial')
    .then(resp => resp.json())
    .then(data => {
        console.log(data);

        document.querySelector('#weather').innerHTML = JSON.stringify(data, null, '\t');
    })
})