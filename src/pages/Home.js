import React from "react";
import Navigation from "../components/Navigation";
import dev from "../assets/img/dev.png";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div class="container container-fluid first-container">
        <div class="row">
          <div class="col col-img img">
            <img src={dev} alt="developpeur" />
          </div>
          <div class="col col-text">
            <h1>Qu'est ce qu'un developpeur Web ?</h1>
            <p>
              Le développeur web est un professionnel qui réalise l’ensemble des
              fonctionnalités techniques d’un site ou d'une application web. Il
              est également appelé webmaster, ingénieur développement web,
              concepteur web ou analyste-programmeur.
                <br></br>
              Le développeur web crée, écrit, teste et documente des sites
              Internet, des applications ou des logiciels. Il utilise des
              langages informatiques pour écrire du code afin de concevoir des
              sites sur mesure ou d’adapter des solutions techniques existantes.
            </p>
          </div>
        </div>
      </div>
      <div className="container second-container">
        <div class="container text-center">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <div class="col">Column</div>
            <div class="col">Column</div>
            <div class="col">Column</div>
            <div class="col">Column</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
