import React from "react";
import Navigation from "../components/Navigation";

const Scoreboard = () => {
  return (
    <div className="scoreboard">
      <Navigation />
      <div className="teamName">
        <form className="teamHome">
          <input
            class="form-control"
            type="text"
            placeholder="Nom de l'équipe à domicile"
            aria-label="Nom de l'équipe à domicile"
          />
          <label for="exampleColorInput" class="form-colorHome">
            Couleur du maillot
          </label>
        </form>
        <form className="teamVisitor">
          <input
            class="form-control"
            type="text"
            placeholder="Nom de l'équipe visiteuse"
            aria-label="Nom de l'équipe visiteuse"
          />
        </form>
      </div>
      <div class="col-4 btnsubmit">
        <button class="btn btn-primary" type="submit">
          Confirmer les équipes
        </button>
      </div>
    </div>
  );
};

export default Scoreboard;
