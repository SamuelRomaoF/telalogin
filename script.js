function mostrarNome() {
    const usuario = document.getElementById('usuario');
    const senha = document.getElementById('senha');
    const usuarioAviso = document.getElementById('usuario-aviso');
    const senhaAviso = document.getElementById('senha-aviso');
    const credenciaisIncorretas = document.getElementById('credenciais-incorretas');

    if (usuario.value === '') {
        usuarioAviso.innerText = 'Preencha o campo Usuário.';
        usuarioAviso.style.display = 'block';
        usuarioAviso.classList.add('aviso'); // Adiciona a classe 'aviso'
    } else {
        usuarioAviso.innerText = '';
        usuarioAviso.style.display = 'none';
        usuarioAviso.classList.remove('aviso'); // Remove a classe 'aviso'
    }

    if (senha.value === '') {
        senhaAviso.innerText = 'Preencha o campo Senha.';
        senhaAviso.style.display = 'block';
        senhaAviso.classList.add('aviso'); // Adiciona a classe 'aviso'
    } else {
        senhaAviso.innerText = '';
        senhaAviso.style.display = 'none';
        senhaAviso.classList.remove('aviso'); // Remove a classe 'aviso'

        // Verifica se o login está correto
        if (usuario.value === 'aa' && senha.value === 'aa') {
            // Redireciona para outro site
            window.location.href = 'https://agenciasml.netlify.app/';
            // Fim do redirecionamento
        } else {
            credenciaisIncorretas.style.display = 'block'; // Exibe a mensagem de credenciais incorretas
        }
    }
}