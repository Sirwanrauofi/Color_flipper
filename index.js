document.getElementById('btn').addEventListener('click',()=>{
    const randomColor=Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    document.body.style.backgroundColor='#'+randomColor;
    document.querySelector('.color').textContent= '#'+randomColor;
});