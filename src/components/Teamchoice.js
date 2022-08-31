import React from "react";

const Teamchoice = () => {
  let teamH = "";
  let teamV = "";
  let colorH = "";
  let colorV = "";

  const teamHome = (e) => {
    teamH = e.target.value;

    if (teamH.length < 3) {
      document.getElementById("errorH").style.visibility = "visible";
      document.getElementById("errorH").innerHTML = "3 caractères obligatoire";
    } else {
      document.getElementById("errorH").style.visibility = "hidden";
    }
  };

  const teamVisitor = (e) => {
    teamV = e.target.value;

    if (teamV.length < 3) {
      document.getElementById("errorV").style.visibility = "visible";
      document.getElementById("errorV").innerHTML = "3 caractères obligatoire";
    } else {
      document.getElementById("errorV").style.visibility = "hidden";
    }
  };

  const colorHome = (e) => {
    console.log(colorH);
    colorH = e.target.value;
  };

  const colorVisitor = (e) => {
    colorV = e.target.value;
  };

  const btn = (e) => {
    e.preventDefault();

    if ((colorV.length && colorH.length && teamH.length && teamV.length)< 3) {
      document.getElementById("error").innerHTML =
        "Veuillez renseigner tous les champs";
    } else {
      document.getElementById("error").style.visibility =
        "hidden";
    }
  };
  return (
    <div className="teamchoice">
      <div className="container-fluid first-container">
        <div className="team-container">
          <form className="teamHome">
            <label id="teamHomeLabel" htmlFor="teamHome">
              Nom de l'équipe à domicile
            </label>
            <input
              onChange={teamHome}
              className="form-control-home teamHome-container"
              type="text"
              autoComplete="off"
              id="teamHome"
              placeholder="Entrez le nom de l'équipe ici"
              aria-label="Nom de l'équipe à domicile"
            />
            <span id="errorH"></span>
            <label htmlFor="colorInputHome" class="form-label">
              Couleur du maillot
            </label>
            <input
              onChange={colorHome}
              type="color"
              className="form-control form-control-color"
              id="colorInputHome"
              title="Choisissez votre couleur"
            />
          </form>
        </div>

        <div className="team-container">
          <form action="">
            <label id="teamVisitorLabel" htmlFor="teamVisitor">
              Nom de l'équipe à l'exterieur
            </label>
            <input
              onChange={teamVisitor}
              className="form-control-visitor teamVisitor-container"
              type="text"
              autoComplete="off"
              id="teamVisitor"
              placeholder="Entrez le nom de l'équipe ici"
              aria-label="Nom de l'équipe à l'exterieur"
            />
            <span id="errorV"></span>
            <label htmlFor="colorInputVisitor" class="form-label">
              Couleur du maillot
            </label>
            <input
              onChange={colorVisitor}
              type="color"
              className="form-control form-control-color"
              id="colorInputVisitor"
              title="Choisissez votre couleur"
            />
          </form>
        </div>
      </div>
      <form action="">
        <input onClick={btn} type="submit" value="Valider" className="btn" />
      </form>
      <span id="error"></span>
    </div>
  );
};

export default Teamchoice;
