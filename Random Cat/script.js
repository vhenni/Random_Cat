cat_result = document.getElementById('cat_result');
fact_result = document.getElementById('fact_result');
cat_btn = document.getElementById('cat_btn');

cat_btn.addEventListener('click',() => {    
    getRandomCat();
    getRandomFact();
});


function getRandomCat() {
    fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then(data => {
        cat_result.innerHTML = `<img src="${data.file}"/>`
    })
}

function getRandomFact() {
    fetch('https://catfact.ninja/fact')
    .then(res => res.json())
    .then(data => {
        const catFact = data.fact;
        fact_result.innerHTML = catFact;
    })
}