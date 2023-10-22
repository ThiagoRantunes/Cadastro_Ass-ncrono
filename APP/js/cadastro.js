const form = document.getElementById("form");

const nomeIp = document.getElementById("nome");
const emailIp = document.getElementById("email");
const senhaIp = document.getElementById("senha");

form.addEventListener("submit", async function(e){

    e.preventDefault();

    let dados = {
        nome: nomeIp.value,
        email: emailIp.value,
        senha: senhaIp.value 
    }

    let body = JSON.stringify(dados);

    const response = await fetch("http://localhost/cadastro_js/API/cadastro.php", {
        method: "POST",
        body: body,
        headers: {
            "Content-Type":"application/json"
        }
    });

    const data = await response.json();

    if(data.validacao == true){
        alert("Cadastrado com Sucesso!");
        nomeIp.value = null;
        emailIp.value = null;
        senhaIp.value = null;
    }else{
        alert("Erro ao Cadastrar!");
    }

});