import maca3d from '../assets/maca-3d.png';
import maca3d2 from '../assets/maca-3d-2.png';
import maca3d3 from '../assets/maca-3d-3.png';

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
]
