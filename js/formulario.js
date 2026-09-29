const formulario = document.getElementById("formCadastro");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const campos = formulario.querySelectorAll("input");

        campos.forEach(function(campo) {

            if (!campo.checkValidity()) {
                campo.classList.add("campo-invalido");
            } else {
                campo.classList.remove("campo-invalido");
            }

        });

        if (!formulario.checkValidity()) {

            formulario.reportValidity();

            return;
        }

        const dados = new FormData(formulario);

        const cadastro = Object.fromEntries(dados.entries());

        salvarCadastro(cadastro);

        const mensagem = document.getElementById("mensagemCadastro");

        mensagem.textContent = "Cadastro realizado com sucesso!";
        mensagem.className = "alerta alerta-sucesso";

    });

}


function carregarCadastro() {

    const dadosSalvos = localStorage.getItem("cadastroUsuario");

    if (!dadosSalvos) {
        return;
    }

    const cadastro = JSON.parse(dadosSalvos);

    document.getElementById("nome").value = cadastro.nome;
    document.getElementById("cpf").value = cadastro.cpf;
    document.getElementById("email").value = cadastro.email;
    document.getElementById("telefone").value = cadastro.telefone;
    document.getElementById("data_nascimento").value = cadastro.data_nascimento;
    document.getElementById("cep").value = cadastro.cep;
    document.getElementById("endereco").value = cadastro.endereco;
    document.getElementById("numero").value = cadastro.numero;
    document.getElementById("cidade").value = cadastro.cidade;
    document.getElementById("estado").value = cadastro.estado;
}

carregarCadastro();

function calcularIdade() {

    const dataNascimento = document.getElementById("data_nascimento").value;

    if (!dataNascimento) {
        return;
    }

    const nascimento = dayjs(dataNascimento);
    const hoje = dayjs();

    const idade = hoje.diff(nascimento, "year");

    const resultado = document.getElementById("idadeCalculada");

    resultado.textContent = "Idade: " + idade + " anos";
}

calcularIdade();
document.getElementById("data_nascimento").addEventListener("input", calcularIdade);
// ==============================
// MODO ESCURO
// ==============================

const botaoModoEscuro = document.querySelector("#modo-escuro");

if (botaoModoEscuro) {
    botaoModoEscuro.addEventListener("click", () => {
        document.body.classList.toggle("modo-escuro");

        if (document.body.classList.contains("modo-escuro")) {
            botaoModoEscuro.textContent = "☀️ Modo claro";
        } else {
            botaoModoEscuro.textContent = "🌙 Modo escuro";
        }
    });
}