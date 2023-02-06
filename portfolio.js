let navigation = document.querySelector('.hidden');
let close = document.querySelector('#close');
let option = document.querySelector('#option');
let cont = document.querySelector('#cont');
let about = document.querySelector('#about');
let port = document.querySelector('#port');

option.addEventListener('click', function(event) {
    navigation.style.display = "flex";
    });
   

    close.addEventListener('click', function(event) {
        navigation.style.display = 'none';
        });
        cont.addEventListener('click', function(event) {
            navigation.style.display = 'none';
            });
            about.addEventListener('click', function(event) {
                navigation.style.display = 'none';
                });
                port.addEventListener('click', function(event) {
                    navigation.style.display = 'none';
                    });