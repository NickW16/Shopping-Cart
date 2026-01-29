import { useState, useEffect } from 'react';
import styles from './MainPage.module.css';
import ronnie from '../assets/3d-items/ronnie.png';
import twob from '../assets/3d-items/2b.png';
import shermie from '../assets/3d-items/shermie.png';
import whip from '../assets/3d-items/whip.png';

const MainPage = () => {
   const [currentIndex, setCurrentIndex] = useState(0);

   const images = [
      { src: ronnie, alt:"Ronnie Coleman" },
      { src: twob, alt: "2b de Nier" },
      { src: shermie, alt: "Shermie de King of Fighters" },
      { src: whip, alt: "Whip de King of Fighters" },
   ];
   
   //side scroller:
   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
         );
      }, 5000); //change image every 3 secs

      return () => clearInterval(interval);
   }, [images.length]);

   return (
      <div className={styles.mainPage}>

         <h1>Aramaker: A Melhor em impressão 3D!</h1>

         <div className={styles.sliderAndText}>
            <div className={styles.sliderContainer}>
               <div className={styles.slider}>
                  {images.map((image, index) => (
                     <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className={index === currentIndex ? styles.active : ''}
                     />
                  ))}
               </div>
               <div className={styles.sliderDots}>
                  {images.map((_, index) => (
                     <span
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                        onClick={() => setCurrentIndex(index)}
                     />
                  ))}
               </div>
            </div>
         
            <div className={styles.textContent}>
               <h2>Por que escolher Aramaker?</h2>
               
               <div className={styles.feature}>
                  <h3>✨ Impressão 3D de Alta Qualidade</h3>
                  <p>Utilizamos tecnologia de ponta e materiais premium (PLA, ABS, PETG) para garantir produtos duráveis e detalhados.</p>
               </div>

               <div className={styles.feature}>
                  <h3>🎨 Pintura Artesanal Personalizada</h3>
                  <p>Cada peça é pintada à mão por artistas especializados, trazendo vida e realismo aos seus personagens favoritos.</p>
               </div>

               <div className={styles.feature}>
                  <h3>⚡ Projetos Sob Medida</h3>
                  <p>Precisa de algo único? Trabalhamos com modelos customizados! Entre em contato e transforme sua ideia em realidade.</p>
               </div>

               <div className={styles.warning}>
                  <h3>/==/Atenção/==/</h3>
                  <p>Produto feito através de impressão 3D e pintado à mão, composto de plástico ABS e cabo de madeira envernizado. Trata-se de um produto de fabricação artesanal, sujeito a conter marcas e imperfeições.</p>
               </div>

               <div className={styles.timing}>
                  <h3>⏱️ Prazo de Produção:</h3>
                  <ul>
                     <li>Produtos em estoque: envio em até 3 dias úteis</li>
                     <li>Produtos sob encomenda: 10-15 dias úteis</li>
                  </ul>
               </div>
            </div>
         </div>

         {/* Additional sections */}
         <div className={styles.featuresSection}>
            <h2>🏆 Nossos Destaques</h2>
            <div className={styles.highlightGrid}>
               <button className={styles.highlightCard}>
                  <h3>Miniaturas de RPG</h3>
                  <p>D&D, Pathfinder e mais</p>
               </button>
               <button className={styles.highlightCard}>
                  <h3>Cosplay Props</h3>
                  <p>Armaduras e acessórios</p>
               </button>
               <button className={styles.highlightCard}>
                  <h3>Action Figures</h3>
                  <p>Personalizadas</p>
               </button>
               <button className={styles.highlightCard}>
                  <h3>Réplicas</h3>
                  <p>Jogos e Animes</p>
               </button>
            </div>
         </div>

         <div className={styles.ctaSection}>
            <button className={styles.ctaButton}>Explore Nossos Produtos</button>
            <button className={styles.ctaButtonSecondary}>Solicite um Orçamento</button>
         </div>     
      </div>   )
}

export default MainPage;
