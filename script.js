//Script.js

const btn = document.querySelector('.btn'),
      jokeEl = document.querySelector('.joke');


btn.addEventListener('click', getJoke);
      getJoke();

function getJoke() {

    const config = { headers: {
        Accept: 'application/json',
},
    };

    fetch('https://icanhazdadjoke.com/' , config ).then((res) => res.json()).then(data => jokeEl.textContent = `${data.joke}`);
}
