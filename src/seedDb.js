import db, { mongoClient } from './db.js'

const seedDb = async () => {
    await db
        .collection('products')
        .insertMany([
            {
                name: 'Kunai',
                image: 'https://criticalhits.com.br/wp-content/uploads/2018/09/Kunai.png',
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
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6onrYZEjezUwGGHuyc_aizMyMno6KKVCl98yph8idU9Ji3v5hUpF69PXPVSWdR33X0wc&usqp=CAU',
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
                image: 'https://pm1.narvii.com/6452/0eaf812f2927e692829e9726a20e1806458e4ec1_hq.jpg',
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
                image: 'http://manual-ninja.weebly.com/uploads/7/0/2/5/7025819/637833830.PNG?481',
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
                image: 'https://2img.net/h/img1.wikia.nocookie.net/__cb20130411002318/naruto/pt-br/images/8/8d/Bomba_de_Luz_(Shikamaru).PNG',
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
                image: 'http://pm1.narvii.com/6340/0d70def1499522dc7c5f0f26eee09b374db98f9c_00.jpg',
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
                name: 'Pássaro Mecânico',
                image: 'https://worldfolha.weebly.com/uploads/5/6/8/4/56844585/p-ssaro-mec-nico_orig.png',
                description: 'Um Pássaro Mecânico semelhante a um brinquedo de corda que Chiyo mantém armazenado em um pergaminho.',
                price: 30,
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
                image: 'https://worldfolha.weebly.com/uploads/5/6/8/4/56844585/dardo-de-inje-o_orig.png',
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
                image: 'https://1.bp.blogspot.com/-51YcLhctDR8/UQEuuocUspI/AAAAAAAAN2M/elLmQ3OZLQg/s280/Esfera+explosiva+granada+de+kunai.png',
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
                name: 'Selo de Chakra',
                image: 'https://worldfolha.weebly.com/uploads/5/6/8/4/56844585/selo-supressor-de-chakra_orig.png',
                description: 'O Selo de Chakra é um etiqueta especial capaz de restringir chakra e influências negativas.',
                price: 250,
                quantity: 50,
                category: [
                    {
                        id: 2,
                        type: 'utensílio'
                    }
                ]
            },
            {
                name: 'Antídoto',
                image: 'https://worldfolha.weebly.com/uploads/5/6/8/4/56844585/ant-doto_orig.png',
                description: 'Antídotos são tipos de medicamentos que agem como uma cura para vários venenos.',
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
                image: 'https://worldfolha.weebly.com/uploads/5/6/8/4/56844585/fiodea-o_orig.jpg',
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
                image: 'https://worldfolha.weebly.com/uploads/5/6/8/4/56844585/f-ma-shuriken_orig.png',
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
                image: 'https://worldfolha.weebly.com/uploads/5/6/8/4/56844585/j-hy-2_orig.png',
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
                image: 'https://worldfolha.weebly.com/uploads/5/6/8/4/56844585/kusari-fundo_orig.png',
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
                image: 'https://worldfolha.weebly.com/uploads/5/6/8/4/56844585/lamina-de-chakra_orig.jpg',
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
                image: 'https://worldfolha.weebly.com/uploads/5/6/8/4/56844585/mecanismo-de-kunai-escondida_orig.png',
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
                image: 'https://worldfolha.weebly.com/uploads/5/6/8/4/56844585/m-scara-de-g-s_orig.png',
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
                image: 'https://worldfolha.weebly.com/uploads/5/6/8/4/56844585/papel-de-chakra_orig.png',
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
                image: 'https://pm1.narvii.com/6314/f3ba2e97098b044a5468f29a4a4539b12ca112f5_hq.jpg',
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