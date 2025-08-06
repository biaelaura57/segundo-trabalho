const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Enunciado 1: Você já utilizou IA?",
        alternativas: ["sim", "não"],
    },
    {
        enunciado: "Enunciado 2: Você ve benefícios usando IA na escola?",
        alternativas: ["Sim", "Não"],
    },
    {
        enunciado: "Você acredita que ela será utilizada cada vez mais?",
        alternativas: ["Sim", "Não"],
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    // Limpa alternativas anteriores
    caixaAlternativas.innerHTML = "";

    // Cria as alternativas como botões
    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement("button");
        botao.textContent = alternativa;
        botao.classList.add("alternativa");
        botao.addEventListener("click", () => {
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                mostraResultado();
            }
        });
        caixaAlternativas.appendChild(botao);
    });
}

function mostraResultado() {
    caixaPerguntas.style.display = "none";
    caixaAlternativas.style.display = "none";
    caixaResultado.style.display = "block";
    textoResultado.textContent = "Obrigado por responder! Você decidiu o futuro da IA.";
}

// Começa o quiz
mostraPergunta();


