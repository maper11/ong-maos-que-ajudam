function salvarCadastro(dados) {

    localStorage.setItem(
        "cadastroUsuario",
        JSON.stringify(dados)
    );

}