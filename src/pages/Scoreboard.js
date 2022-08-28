import React from "react";
import Navigation from "../components/Navigation";

const Scoreboard = () => {
  let teamH = "";

  const teamHome = (e) => {
    teamH = e.target.value;
  };

  const btn = (e) => {
    e.preventDefault();

    if (teamH.length < 3) {
      document.getElementById('error').innerHTML="Veuillez entrez 3 caractères minimum";
      
    } else {
      document.getElementById('error').style.display= 'none'
      console.log(teamH)
    }
  };

  return (
    <div className="scoreboard">
      <Navigation />
      <form className="teamHome">
        <label id="teamHomeLabel" htmlFor="teamHome"> Nom de l'équipe à domicile</label>
        <input
          onChange={teamHome}
          className="form-control-home teamHome-container"
          type="text"
          autoComplete="off"
          id="teamHome"
          placeholder="Entrez le nom de l'équipe ici"
          aria-label="Nom de l'équipe à domicile"
          name="team"
        />
        <span id="error"></span>

        <input onClick={btn} type="submit" value="Valider" className="btn" />
      </form>
    </div>
  );
};

export default Scoreboard;
