async function buscarEndereco(cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json`)
        var consultaCEPCovertida = await consultaCEP.json();
        if(consultaCEPCovertida.erro){
            throw Error('CEP não existente!');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        
        cidade.value = consultaCEPCovertida.localidade;
        logradouro.value = consultaCEPCovertida.logradouro;
        estado.value = consultaCEPCovertida.uf;

        console.log(consultaCEPCovertida);
        return consultaCEPCovertida;
    }catch(erro){
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro);
    }
}
var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscarEndereco(cep.value) );


