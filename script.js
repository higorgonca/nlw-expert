const perguntas = [
    {
      pergunta: "Qual é o nome do mapa original de Fortnite?",
      respostas: [
        "Island",
        "Battleland",
        "Erangel",
      ],
      correta: 0
    },
    {
      pergunta: "Qual arma de fogo em Fortnite é conhecida por causar grande dano de longa distância?",
      respostas: [
        "Rifle de Assalto",
        "Pistola",
        "Sniper Rifle",
      ],
      correta: 2
    },
    {
      pergunta: "Quem é o desenvolvedor de Fortnite?",
      respostas: [
        "Blizzard Entertainment",
        "Epic Games",
        "Valve Corporation",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome do modo de jogo em Fortnite onde os jogadores podem construir livremente?",
      respostas: [
        "Survival Mode",
        "Creative Mode",
        "Battle Royale",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o objetivo principal em Fortnite Battle Royale?",
      respostas: [
        "Construir a maior torre",
        "Sobreviver e ser o último jogador ou equipe em pé",
        "Coletar moedas",
      ],
      correta: 1
    },
    {
      pergunta: "Quantos jogadores podem participar de uma partida de Fortnite Battle Royale?",
      respostas: [
        "50",
        "100",
        "150",
      ],
      correta: 1
    },
    {
      pergunta: "Qual desses itens é usado para construir estruturas em Fortnite?",
      respostas: [
        "Munição",
        "Madeira",
        "Escudo",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome do evento sazonal em Fortnite onde os jogadores podem desbloquear itens exclusivos?",
      respostas: [
        "Evento de Halloween",
        "Battle Pass",
        "Festivais de Verão",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome do modo de jogo em Fortnite onde os jogadores devem trabalhar juntos para defender um objetivo contra hordas de inimigos?",
      respostas: [
        "Survival Mode",
        "Battle Royale",
        "Save the World",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome do veículo terrestre em Fortnite que pode transportar vários jogadores?",
      respostas: [
        "Hoverboard",
        "Carrinho de Golfe",
        "Caminhão Monstro",
      ],
      correta: 1
    }
  ]
  
  const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

    //para cada * de * // repetição
for(const item of perguntas) {
    const quizitem = template.content.cloneNode(true)
    quizitem.querySelector('h3').textContent = item.pergunta


        for(let resposta of item.respostas) {
            const dt = quizitem.querySelector('dl dt').cloneNode(true) 
            dt.querySelector('span').textContent = resposta
            dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
            dt.querySelector('input').value = item.respostas.indexOf(resposta)
            dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta  
            
            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
            
            }



            quizitem.querySelector('dl').appendChild(dt)
        }

    quizitem.querySelector('dl dt').remove()

    quiz.appendChild(quizitem)
    
}