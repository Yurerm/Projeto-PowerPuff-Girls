/* 
  objetivo 1 - quando o mouse passar em cima do personagm temos que:
  - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele

  - retirar classe selecionado do personagem que esta selecionado

  objetivo 2 - quando passar o mouse em cima do personagem, trocar a imagem e nome do personagem grande
  - alterar imagem do jogador 1
  -alterar o nome do jogador 1
*/
 const personagens = document.
 querySelectorAll('.personagem')
        //objetivo 1
 personagens.forEach((personagem) => {
     personagem.addEventListener('mouseenter', () => {
        const idselecionado = personagem.attributes.id.value;

        if(idselecionado === 'Ele') return;

        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado') 
        
        personagem.classList.add('selecionado')

        //Objetivo 2
    
      const imagemJogador1 = document.getElementById('personagem-jogador-1');
       imagemJogador1.src = `./src/imagens/${idselecionado}.png`;

       const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');
         nomeJogador1.innerHTML = nomeSelecionado;
         
     });
 });

