/*import db,{ mongoClient} from './db.js'

const seedDb = async () => {
    await db 
    .collection('products')
    .insertMany([
        {
            name: 'Kunai',
            description: 'Uma espécie de Adaga negra com o objetivo de pressionar e esfaquear, pode também causar danos ao ser lançada, apesar de não ser esse o seu objetivo.',
            price: 20,
            quantity: 50,
            category: [
                { name: 'ferramenta', type: 'curta distância' },
                { name: 'ferramenta', type: 'longa distância' },
                { name: 'ferramenta', type: 'curta distância e longa distância' },

                { name: 'utils', type: 'curta distância' },
                { name: 'utils', type: 'longa distância' },
                { name: 'utils', type: 'curta distância e longa distância' },
            ]
        },
        {
            name: 'Shuriken',
            description: 'Elas são estrelas afiadas com quatro pontas de metal, úteis para jogar. Elas também podem ser utilizadas para o combate próximo, mas não são muito eficientes',
            price: 30,
            quantity: 50,
            category: [
                { name: 'ferramenta', type: 'curta distância' },
                { name: 'ferramenta', type: 'longa distância' },
                { name: 'ferramenta', type: 'curta distância e longa distância' },

                { name: 'utils', type: 'curta distância' },
                { name: 'utils', type: 'longa distância' },
                { name: 'utils', type: 'curta distância e longa distância' },
            ]
        },
        {
            name: 'Etiqueta Explosiva',
            description: 'É comumente utilizada na confecção de armadilhas, devido à facilidade de anexá-las em superfícies ou ligá-las a fios para que sejam acionadas quando tencionados, além de poderem ser presas em armas de arremesso para lançá-las e explodir próximo do alvo.',
            price: 10,
            quantity: 50,
            category: [
                { name: 'ferramenta', type: 'curta distância' },
                { name: 'ferramenta', type: 'longa distância' },
                { name: 'ferramenta', type: 'curta distância e longa distância' },

                { name: 'utils', type: 'curta distância' },
                { name: 'utils', type: 'longa distância' },
                { name: 'utils', type: 'curta distância e longa distância' },
            ]
        }
    ])
    mongoClient.close({ safe:true });
}

seedDb();*/