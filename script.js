function dente() {
    fetch('dados.json')
    .then(response => response.json())
    .then(dadinho =>{
        document.getElementById('destinho').innerHTML
        `<div class="card">
            <img src="img/` + dadinho.nome+`"alt="">
            <h3>`+dadinho.idade+` </h3>
            <p>`+dadinho.altura+` </p>
            <a hrfe="`+dadinho.sobrenome+`">
            <button type="button">saiba mais</button>
            </a>
            </div>`;
    })}
