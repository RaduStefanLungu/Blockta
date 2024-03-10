
  
  // Composant pour afficher chaque objet avec son image
  function Objet({ nom, image, valeur }) {
    const data = [
        { nom: "Objet 1", image: "image1.jpg", valeur: 10 },
        { nom: "Objet 2", image: "image2.jpg", valeur: 20 },
        { nom: "Objet 3", image: "image3.jpg", valeur: 30 }
      ];
      
    return (
      <div>
        <h2>{nom}</h2>
        <img src={image} alt={nom} />
        <p>Valeur : {valeur}</p>
      </div>
    );
  }
  export default Objet;