function colorChange(){
    const div = document.querySelector('.box');

    if(div.classList.contains('blue')){
        div.classList.add('pink');
        div.classList.remove('blue');
        console.log(pink);
        pink++;
    }

    else{div.classList.add('blue');
    div.classList.remove('pink');
    console.log(blue++);}
}

function fontcolorChange(){
    const h1 = document.querySelector('.font');

    if(h1.classList.contains('black')){
        h1.classList.add('fontpink');
        h1.classList.remove('black');
    }

    else{
        h1.classList.add('black')
        h1.classList.remove('fontpink');

    }

    if(h1.innerText === '안녕하세요!'){
        h1.innerText = '가윤입니다.'
    }
     
    else{
        h1.innerText = '안녕하세요.'
    }
}