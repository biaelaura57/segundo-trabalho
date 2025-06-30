const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "afirmacao"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "afirmacao"
            }
        ]
    }, // <--- VÍRGULA ADICIONADA AQUI
    {
        enunciado: "enunciado 2",
        alternativas: [
            {
                texto: "alternativa 1!",
                afirmacao: "afirmacao"
            },
            {
                texto: "alternativa 2",
                afirmacao: "afirmacao"
            }
        ]
    }
];

// VARIÁVEIS MOVIDAS PARA FORA DA ARRAY
let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    // limpa as alternativas anteriores antes de adicionar as novas
    caixaAlternativas.innerHTML = ``;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        // ASPAS RETAS NO LUGAR DAS CURVAS
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

// Inicia a exibição da primeira pergunta
mostraPergunta();