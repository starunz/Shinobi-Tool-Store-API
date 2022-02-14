import db, { mongoClient } from './db.js'

const seedDb = async () => {
    await db
        .collection('products')
        .insertMany([
            {
                name: 'Kunai',
                image: 'https://static.wikia.nocookie.net/naruto/images/6/6f/Kunai.PNG/revision/latest/scale-to-width-down/350?cb=20160215210707&path-prefix=pt-br',
                description: 'Uma espécie de Adaga negra com o objetivo de pressionar e esfaquear, pode também causar danos ao ser lançada, apesar de não ser esse o seu objetivo.',
                price: 20,
                quantity: 50,
                category: [
                    {
                        id: 1,
                        type: 'ferramenta'
                    }
                ]
            },
            {
                name: 'Shuriken',
                image: 'https://static.wikia.nocookie.net/naruto/images/4/42/Shuriken.PNG/revision/latest/scale-to-width-down/350?cb=20160215204108&path-prefix=pt-br',
                description: 'Elas são estrelas afiadas com quatro pontas de metal, úteis para jogar. Elas também podem ser utilizadas para o combate próximo, mas não são muito eficientes',
                price: 30,
                quantity: 50,
                category: [
                    {
                        id: 1,
                        type: 'ferramenta'
                    }
                ]
            },
            {
                name: 'Etiqueta Explosiva',
                image: 'https://static.wikia.nocookie.net/naruto/images/c/c1/Selo_Explosivo.PNG/revision/latest/scale-to-width-down/1000?cb=20210427151700&path-prefix=pt-br',
                description: 'É comumente utilizada na confecção de armadilhas, devido à facilidade de anexá-las em superfícies ou ligá-las a fios para que sejam acionadas quando tencionados, além de poderem ser presas em armas de arremesso para lançá-las e explodir próximo do alvo.',
                price: 10,
                quantity: 50,
                category: [
                    {
                        id: 2,
                        type: 'utensílio'
                    }
                ]
            },
            {
                name: 'Bomba de Fumaça',
                image: 'https://static.wikia.nocookie.net/naruto/images/4/45/Bomba_de_fuma%C3%A7a.PNG/revision/latest/scale-to-width-down/350?cb=20140418023801&path-prefix=pt-br',
                description: 'Pequenas esferas embrulhadas em papel, ou recipientes, que ao serem lançadas contra o chão explodem liberando uma cortina de fumaça.',
                price: 10,
                quantity: 50,
                category: [
                    {
                        id: 2,
                        type: 'utensílio'
                    }
                ]
            },
            {
                name: 'Bomba de Luz',
                image: 'https://static.wikia.nocookie.net/naruto/images/7/7a/Hikaridama.PNG/revision/latest/scale-to-width-down/350?cb=20130627022119&path-prefix=pt-br',
                description: 'Usadas para diversas coisas, cria uma luz ofuscante quando detonada.',
                price: 12,
                quantity: 50,
                category: [
                    {
                        id: 2,
                        type: 'utensílio'
                    }
                ]
            },
            {
                name: 'Colete',
                image: 'https://static.wikia.nocookie.net/naruto/images/2/2f/Diversos_Coletes.png/revision/latest/scale-to-width-down/350?cb=20150610021117&path-prefix=pt-br',
                description: 'Coletes são uma forma de proteção em vestimenta acolchoada projetada para fornecer pelo menos uma proteção parcial de coisas como um trauma de força-bruta, estilhaços e outros projéteis.',
                price: 180,
                quantity: 50,
                category: [
                    {
                        id: 2,
                        type: 'utensílio'
                    }
                ]
            },
            {
                name: 'Cota de Malha',
                image: 'https://static.wikia.nocookie.net/naruto/images/9/9b/Cota_de_Malha%28Jiraiya%29.png/revision/latest/scale-to-width-down/350?cb=20211207231316&path-prefix=pt-br',
                description: 'Criado da ligação de vários anéis de metal e feito sob encomenda que se ajusta às formas do corpo. Este tipo de equipamento é utilizado debaixo das vestes, servindo para proteger de ataques em diferentes partes do corpo.',
                price: 140,
                quantity: 50,
                category: [
                    {
                        id: 2,
                        type: 'utensílio'
                    }
                ]
            },
            {
                name: 'Dardo de Injeção',
                image: 'https://static.wikia.nocookie.net/naruto/images/e/e0/Dardos_de_Inje%C3%A7%C3%A3o.png/revision/latest/scale-to-width-down/350?cb=20160824054138&path-prefix=pt-br',
                description: 'Esta espécie de dardo de tiro é usados por ninjas médicos. Eles são preenchidos com uma substância química de ação rápida que nocauteia o alvo dentro de segundos.',
                price: 20,
                quantity: 50,
                category: [
                    {
                        id: 1,
                        type: 'ferramenta'
                    }
                ]
            },
            {
                name: 'Esfera Explosiva',
                image: 'https://static.wikia.nocookie.net/naruto/images/3/39/Bakusaidama.PNG/revision/latest/scale-to-width-down/350?cb=20201023032345&path-prefix=pt-br',
                description: 'É uma esfera de metal com kunai soldadas dentro dela, que também tem um papel explosivo oculto que faz com que a esfera exploda ao entrar em contato com algo, enviando kunai e fragmentos da esfera como estilhaços para ferir o adversário.',
                price: 35,
                quantity: 50,
                category: [
                    {
                        id: 1,
                        type: 'ferramenta'
                    }
                ]
            },
            {
                name: 'Etiqueta de Fumaça',
                image: 'https://static.wikia.nocookie.net/naruto/images/0/0d/Etiqueta_de_Fuma%C3%A7a.png/revision/latest/scale-to-width-down/350?cb=20210713190057&path-prefix=pt-br',
                description: 'Utilizada para liberar uma cortina de fumaça no campo de batalha, a fim de obstruir a visão inimiga e auxiliar em uma fuga ou ataques furtivos.',
                price: 10,
                quantity: 50,
                category: [
                    {
                        id: 2,
                        type: 'utensílio'
                    }
                ]
            },
            {
                name: 'Etiqueta de Tratamento',
                image: 'https://static.wikia.nocookie.net/naruto/images/5/50/Etiqueta_de_Tratamento.png/revision/latest/scale-to-width-down/207?cb=20200416030854&path-prefix=pt-br',
                description: 'É uma etiqueta utilizada em tratamentos médicos.',
                price: 25,
                quantity: 50,
                category: [
                    {
                        id: 2,
                        type: 'utensílio'
                    }
                ]
            },
            {
                name: 'Fio de Aço',
                image: 'https://static.wikia.nocookie.net/naruto/images/0/03/Cordas_de_Arame.png/revision/latest/scale-to-width-down/350?cb=20200213130229&path-prefix=pt-br',
                description: 'O Fio de Aço é uma fina fibra constituída de aço, servindo a diversos propósitos. Por sua maleabilidade e por sua fina espessura — comparado a outros materiais maleáveis, seus usos são virtualmente infinitos.',
                price: 25,
                quantity: 50,
                category: [
                    {
                        id: 1,
                        type: 'ferramenta'
                    }
                ]
            },
            {
                name: 'Fūma Shuriken',
                image: 'https://static.wikia.nocookie.net/naruto/images/4/4a/Fuma_Shuriken_Dobrada.png/revision/latest/scale-to-width-down/350?cb=20151125010824&path-prefix=pt-br',
                description: 'A Fūma Shuriken é uma grande shuriken, com quatro lâminas possuindo nitidez preeminente e letalidade.',
                price: 50,
                quantity: 50,
                category: [
                    {
                        id: 1,
                        type: 'ferramenta'
                    }
                ]
            },
            {
                name: 'Jōhyō',
                image: 'https://static.wikia.nocookie.net/naruto/images/6/68/J%C5%8Dhy%C5%8D2.PNG/revision/latest/scale-to-width-down/350?cb=20160419082738&path-prefix=pt-br',
                description: 'O Jōhyō se consiste de uma longa corda, normalmente possui vários metros de comprimento, com uma alça presa a um fim, e um ferrão de metal ligado a outro, agindo como um peso que permite ao usuário para lançar o dardo para fora em um alvo de longo alcance para vinculá-las em seguida, bobina-los ou realizar um ataque contra eles.',
                price: 20,
                quantity: 50,
                category: [
                    {
                        id: 1,
                        type: 'ferramenta'
                    }
                ]
            },
            {
                name: 'Kusari-Fundo',
                image: 'https://static.wikia.nocookie.net/naruto/images/e/e3/Kusari_fundo.png/revision/latest/scale-to-width-down/300?cb=20151222201515&path-prefix=pt-br',
                description: 'É um tipo de corrente com um peso em suas extremidades. O peso é em cada um dos seus pontos são usados para enrolar a corrente em torno do seu alvo, e ao fazê-lo cria um nó muito difícil de desarmar, de modo que também serve para bloquear espadas e outras armas.',
                price: 20,
                quantity: 50,
                category: [
                    {
                        id: 1,
                        type: 'ferramenta'
                    }
                ]
            },
            {
                name: 'Lâminas de Chakra',
                image: 'https://static.wikia.nocookie.net/naruto/images/d/da/Asuma_usando_Chakura_Nagashi.PNG/revision/latest/scale-to-width-down/350?cb=20120622214327&path-prefix=pt-br',
                description: 'As Lâminas de Chakra são armas cortantes feitas de uma metal especial que pode ser infundido através do "fluxo de chakra" com uma transformação da natureza ou chakra Yin-Yang para produzir efeitos adicionais.',
                price: 50,
                quantity: 50,
                category: [
                    {
                        id: 1,
                        type: 'ferramenta'
                    }
                ]
            },
            {
                name: 'Mecanismo de Kunai Escondida',
                image: 'https://static.wikia.nocookie.net/naruto/images/8/8c/Mecanismo_de_Kunai_escondida.PNG/revision/latest/scale-to-width-down/350?cb=20130314210621&path-prefix=pt-br',
                description: 'Este item permite ao usuário instantaneamente estender e retrair uma kunai de sua manga com um fio de mola.',
                price: 15,
                quantity: 50,
                category: [
                    {
                        id: 1,
                        type: 'ferramenta'
                    }
                ]
            },
            {
                name: 'Máscara de Gás',
                image: 'https://static.wikia.nocookie.net/naruto/images/4/4a/M%C3%A1scara_de_G%C3%A1s.PNG/revision/latest/scale-to-width-down/350?cb=20151211150944&path-prefix=pt-br',
                description: 'A Máscara de Gás é um equipamento utilizado para proteção contra todos os tipos de gases.',
                price: 90,
                quantity: 50,
                category: [
                    {
                        id: 2,
                        type: 'utensílio'
                    }
                ]
            },
            {
                name: 'Papel Sensível',
                image: 'https://static.wikia.nocookie.net/naruto/images/a/a0/Papel_de_Chakra.PNG/revision/latest/scale-to-width-down/350?cb=20151012212549&path-prefix=pt-br',
                description: 'O Papel Sensível é um papel que permite identificar o tipo elemental de chakra de um ninja.',
                price: 20,
                quantity: 50,
                category: [
                    {
                        id: 2,
                        type: 'utensílio'
                    }
                ]
            },
            {
                name: 'Pergaminho',
                image: 'https://static.wikia.nocookie.net/naruto/images/7/73/Pergaminho.PNG/revision/latest/scale-to-width-down/350?cb=20130309230051&path-prefix=pt-br',
                description: 'O pergaminho pode ser usado por ninjas para invocar criaturas, pessoas ou itens para seu auxílio, tornando o transporte desses elementos mais fácil. Ele também pode armazenar alguma técnica ninja.',
                price: 40,
                quantity: 50,
                category: [
                    {
                        id: 2,
                        type: 'utensílio'
                    }
                ]
            }

        ])
    mongoClient.close({ safe: true });
}

seedDb();