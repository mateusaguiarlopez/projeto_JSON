function dente() {
    fetch('dados.json')
    .then(response => response.json())
    .then(dadinho =>{
        document.getElementById('destino');
        dadinho.forEach(dadinho => {
           
            let linha = document.createElement('tr');
           
            linha.innerHTML = `
            <td> ${dadinho.nome} </td>
            <td> ${dadinho.idade} </td>
            <td> ${dadinho.altura} </td>
            <td> ${dadinho.sobrenome} </td>
            <button type="button">Nice</button> `
        tablet.appendChild(linha);

        });
       
    })
} 