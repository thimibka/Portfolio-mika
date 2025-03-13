oimport { useEffect } from "react";

export default function BannerEffect() {
  useEffect(() => {
    function randomCharacter() {
      /*const characters = "!@#$%^&*()_+{}[]:;'<>,.?/|\\~";*/
      const characters = "01";
      /*const characters = "</>";*/
      return characters[Math.floor(Math.random() * characters.length)];
    }

    function createRainEffect() {
      const matrixRain = document.querySelector(".matrixRain");
      const drop = document.createElement("div");
      drop.classList.add("drop");

      // Ajout d'un caractère aléatoire
      drop.innerText = randomCharacter();

      // Positionnement et style aléatoires
      const leftPosition = Math.random() * 100; // Position aléatoire en pourcentage
      const size = Math.random() * 1 + 0.5; // Taille aléatoire (entre 0.5em et 2em)
      const duration = Math.random() * 3 + 1; // Durée aléatoire (entre 1s et 3s)

      drop.style.left = `${leftPosition}%`;
      drop.style.fontSize = `${size}em`;
      drop.style.animationDuration = `${duration}s`;

      // Ajouter le caractère dans la div et supprimer après l'animation
      matrixRain.appendChild(drop);
      setTimeout(() => {
        matrixRain.removeChild(drop);
      }, duration * 2000);
    }

    // Générer les caractères toutes les 100 ms
    const interval = setInterval(createRainEffect, 10);

    return () => clearInterval(interval);
  }, []);

  return null;
}
