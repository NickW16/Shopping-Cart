import maca3d from '../assets/maca-3d.png';
import maca3d2 from '../assets/maca-3d-2.png';
import maca3d3 from '../assets/maca-3d-3.png';
import chunli1 from '../assets/3d-items/chun-li-1.png';
import chunli2 from '../assets/3d-items/chun-li-2.png';
import chunli3 from '../assets/3d-items/chun-li-3.png';
import shera1 from '../assets/3d-items/she-ra-1.png';
import shera2 from '../assets/3d-items/she-ra-2.png';
import metaquest1 from '../assets/3d-items/meta-quest-1.png';
import metaquest2 from '../assets/3d-items/meta-quest-2.png';
import metaquest3 from '../assets/3d-items/meta-quest-3.png';
import metaquest4 from '../assets/3d-items/meta-quest-4.png';
import katarina1 from '../assets/3d-items/katarina-1.png';
import elise1 from '../assets/3d-items/elise-1.png';
import elise2 from '../assets/3d-items/elise-2.png';
import elise3 from '../assets/3d-items/elise-3.png';
import ward1 from '../assets/3d-items/ward-1.png';
import ward2 from '../assets/3d-items/ward-2.png';

export const products = [
   {
      id: 1,
      name: "Massa D20",
      category: "RPG",
      price: "89,90",
      description: "Massa customizada, com cabeça de dado de 20 lados D20!",
      fullDescription: "Produto feito através de impressão 3D e pintado à mão, composto de plástico ABS e cabo de madeira envernizado.",
      images: [
         maca3d,    
         maca3d2,
         maca3d3,      
      ],
      specifications: {
         comprimento: "63 cm",
         material: "PLA/ABS",
         peso: "200g",
      },
      tags: [ "dungeon and dragons", "dado", "maca", "massa", "d20", "cosplay" ],
      inStock: true
   },
   {
      id: 2,
      name: "Par Braceletes Chun-li Cosplay - Street Fighter",
      category: "Video-Games",
      price: "89,00",
      description: "Modelo inspirado nos braceletes da personagem Chun-Li do Street Fighter!",
      fullDescription: "Produto feito através de impressão 3D, composto de plástico ABS e PLA , com acabamento interno em EVA para maior conforto. Trata-se de um produto de fabricação artesanal, sujeito a conter marcas e imperfeições.",
      images: [
         chunli1,    
         chunli2,
         chunli3,      
      ],
      specifications: {
         diametroInterno: "5,5cm",
         diametroExterno: "9cm",
         comprimentoDosEspinhos: "2,5cm",
         altura: "2,5cm",
         material: "PLA/ABS",
      },
      tags: [ "cosplay", "chun-li", "street fighter", ],
      inStock: true
   },
   {
      id: 3,
      name: "Espada de Proteção - She-Ra",
      category: "Animes",
      price: "159,00",
      description: "Modelo inspirado na Espada da Proteção da personagem She-Ra!",
      fullDescription: "Produto feito através de impressão 3D, composto de plástico ABS e PLA , com acabamento interno em EVA para maior conforto. Trata-se de um produto de fabricação artesanal, sujeito a conter marcas e imperfeições.",
      images: [
         shera1,    
         shera2,
      ],
      specifications: {
         comprimento: "82cm",   
      },
      tags: [ "cosplay", "espada da proteção", "she-ra", "he-man" ],
      inStock: true
   },
   {
      id: 4,
      name: "Apoio de Cabeça estilo Elite Strap para Meta Quest 3/3S",
      category: "Video-Games",
      price: "29,00",
      description: "Apoio de cabeça estilo Elite Strap para óculos de realidade virtual Meta Quest 3 ou Meta Quest 3S!",
      fullDescription: "Trata-se de um produto de fabricação artesanal, feito através de impressão 3D, composto de plástico ABS, sujeito a conter marcas e imperfeições.",
      images: [
         metaquest1,
         metaquest2,
         metaquest3,
         metaquest4,
      ],
      specifications: {
      },
      tags: [ "Meta Quest", "3S", "RV", "VR" ],
      inStock: true
   },
   {
      id: 5,
      name: "Katarina Máscara Rosa Negra - League of Legends",
      category: "Video-Games",
      price: "129,00",
      description: "Máscara inspirada na Personagem Katarina, de League of Legends!",
      fullDescription: "A máscara acomoda um tamanho de cabeça entre 55 cm e 57 cm de circunferência (Tamanhos P e M) e os brincos possuem  9 cm de comprimento. Trata-se de um produto de fabricação artesanal, feito através de impressão 3D, composto de plástico ABS, sujeito a conter marcas e imperfeições.",
      images: [
         katarina1,
      ],
      specifications: {
      },
      tags: [ "lol", "katarina", "league of legends", "espada", "lamina", "Máscara Rosa Negra" ],
      inStock: true
   },
   {
      id: 6,
      name: "Máscara Elise Baile da Rosa Negra - League of Legends",
      category: "Video-Games",
      price: "119,00",
      description: "Máscara inspirada na Personagem Elise, de League of Legends!",
      fullDescription: "Produto feito através de impressão 3D e pintado à mão, composto de resina. Trata-se de um produto de fabricação artesanal, sujeito a conter marcas e imperfeições.",
      images: [
         elise1,
         elise2,
         elise3,
      ],
      specifications: {
      },
      tags: [ "lol", "elise", "league of legends", "espada", "lamina", "Máscara Rosa Negra" ],
      inStock: true
   },
   {
      id: 7,
      name: "Luminária Sentinela - League of Legends",
      category: "Video-Games",
      price: "199,00",
      description: "Luminária com modelo inspirado na Ward (Sentinela) de League of Legends!",
      fullDescription: "Produto feito através de impressão 3D e pintado à mão, composto de plástico ABS. Trata-se de um produto de fabricação artesanal, sujeito a conter marcas e imperfeições.",
      images: [
         ward1,
         ward2,
      ],
      specifications: {
         alturaTotal: "32cm",
         largura: "38cm",
         comprimentoDoFio: "180cm",
      },
      tags: [ "lol", "sentinela", "league of legends", "luminária", "decoração", "abajur", "ward" ],
      inStock: true
   },
   


]
