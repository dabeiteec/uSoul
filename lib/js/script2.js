window.onload = ()=>{
    slidingUserWindow();
    windowFilmChecked();
    windowSeriesCheked();
    windowAnimeCheked();
    windowCartoonCheked();
    windowGameCheked();
    borderChoiceColorImg()
    buttonForSwithColor();
}
function windowFilmChecked(){
    const windowFilm = document.querySelector('#button_film')
    const closeFilm= document.querySelector('.close_button')
    const wf = document.querySelector('#window_film')
    closeFilm.addEventListener('click', () => wf.classList.add('hidden'));
    windowFilm.addEventListener('click', (event) => event.stopPropagation());
    windowFilm.addEventListener('click', () => wf.classList.remove('hidden'));
}
function windowSeriesCheked(){
    const windowSeries = document.querySelector('#button_series')
    const close = document.querySelector('.close_button')
    const ws = document.querySelector('#window_series')
    close.addEventListener('click', () => ws.classList.add('hidden'));
    // document.addEventListener('click', () => ws.classList.add('hidden'));
    windowSeries.addEventListener('click', (event) => event.stopPropagation());
    windowSeries.addEventListener('click', () => ws.classList.remove('hidden'));
}
function windowAnimeCheked(){
    const windowAnime = document.querySelector('#button_anime')
    const close = document.querySelector('.close_button')
    const wa = document.querySelector('#window_anime')
    close.addEventListener('click', () => wa.classList.add('hidden'));
    // document.addEventListener('click', () => wa.classList.add('hidden'));
    windowAnime.addEventListener('click', (event) => event.stopPropagation());
    windowAnime.addEventListener('click', () => wa.classList.remove('hidden'));
}
function windowCartoonCheked(){
    const windowCartoon = document.querySelector('#button_cartoon')
    const close = document.querySelector('.close_button')
    const wc = document.querySelector('#window_cartoon')
    // close.addEventListener('click', () => wa.classList.add('hidden'));
    document.addEventListener('click', () => wc.classList.add('hidden'));
    windowCartoon.addEventListener('click', (event) => event.stopPropagation());
    windowCartoon.addEventListener('click', () => wc.classList.remove('hidden'));
}
function windowGameCheked(){
    const windowGame = document.querySelector('#button_game')
    const close = document.querySelector('.close_button')
    const wg = document.querySelector('#window_game')
    // close.addEventListener('click', () => wg.classList.add('hidden'));
    document.addEventListener('click',()=> wg.classList.add('hidden'));
    windowGame.addEventListener('click', (event) => event.stopPropagation());
    windowGame.addEventListener('click', () => wg.classList.remove('hidden'));
}
function buttonForSwithColor(){
    const buttonBlueImg = document.querySelector('.button_blue_img')
    const buttonPinkImg = document.querySelector('.button_pink_img')
    const choiceImgPinkList = document.querySelectorAll('.pink_img')
    const choiceImgBlueList = document.querySelectorAll('.blue_img')
    function loadImg(choiceImgBlue,choiceImgPink){
        blueButton(choiceImgPink,choiceImgBlue)
        pinkButton(choiceImgPink,choiceImgBlue)
        choiceImgBlue.classList.remove('hidden');
        choiceImgPink.classList.add('hidden');
    }
    for(let index = 0; index < choiceImgPinkList.length; index++){
        loadImg(choiceImgBlueList[index],choiceImgPinkList[index] );
    }
    
    function pinkButton(choiceImgPink,choiceImgBlue){ 
        buttonPinkImg.addEventListener('click', () => choiceImgPink.classList.remove('hidden'));
        buttonBlueImg.addEventListener('click', (event) => event.stopPropagation());
        buttonPinkImg.addEventListener('click', () => choiceImgBlue.classList.add('hidden'));
    }
    function blueButton(choiceImgPink,choiceImgBlue){
        buttonBlueImg.addEventListener('click', () => choiceImgBlue.classList.remove('hidden'));
        buttonPinkImg.addEventListener('click', (event) => event.stopPropagation());
        buttonBlueImg.addEventListener('click', () => choiceImgPink.classList.add('hidden'));
    }
}
function borderChoiceColorImg(){
    const buttonBorderBlueImg = document.querySelector('.button_blue_img')
    const buttonBorderPinkImg = document.querySelector('.button_pink_img')
    const BorderBlueImg = document.querySelector('#choice_blue_color_button')
    const BorderPinkImg = document.querySelector('#choice_pink_color_button')

    BorderBlueImg.classList.add('.button_border_choice_color');

    buttonBorderPinkImg.addEventListener('click', () => BorderBlueImg.classList.remove('button_border_choice_color'));
    buttonBorderBlueImg.addEventListener('click', (event) => event.stopPropagation());
    buttonBorderPinkImg.addEventListener('click', () => BorderPinkImg.classList.add('button_border_choice_color'));

    buttonBorderBlueImg.addEventListener('click', () => BorderPinkImg.classList.remove('button_border_choice_color'));
    buttonBorderPinkImg.addEventListener('click', (event) => event.stopPropagation());
    buttonBorderBlueImg.addEventListener('click', () => BorderBlueImg.classList.add('button_border_choice_color'));
}

