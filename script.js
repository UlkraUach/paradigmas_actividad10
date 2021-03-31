let list = document.getElementById("lista");

//let valores = ['Irving Rios', 'Luis Fernando', 'Melissa García'];
let valores = [];

const mostrarValores = () => valores.map(valor => {
    let componenteLi = document.createElement("li");
    componenteLi.innerHTML = valor;
    lista.appendChild(componenteLi);
})

const agregarValor = () => {
    let valor = document.getElementById("valor");
    lista.innerHTML = "";
    valores.push(valor.value);
    console.log(valores);
    mostrarValores();
    valor.value="";
}

const limpiarValores = () => {
    lista.innerHTML = "";
    valores = [];
}

mostrarValores();