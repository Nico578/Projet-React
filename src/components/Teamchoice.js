import React from 'react';

const Teamchoice = () => {
    let teamH = "";
    let teamV = "";
    let colorH = "";
    let colorV = "";
  
    const teamHome = (e) => {
      teamH = e.target.value;
    };
  
    const teamVisitor = (e) => {
      teamV = e.target.value;
    };
  
    const btn = (e) => {
      e.preventDefault();
  
      if (teamH.length < 3) {
        document.getElementById("errorH").innerHTML =
          "Veuillez entrez 3 caractères minimum";
      }
      if (teamV.length < 3) {
        document.getElementById("errorV").innerHTML =
          "Veuillez entrez 3 caractères minimum";
      } else {
        document.getElementById("errorV").style.display = "none";
        document.getElementById("errorH").style.display = "none";
        console.log(teamH);
        console.log(teamV);
        console.log(colorH);
        console.log(colorV);
      }
    };
  
    const colorHome = (e) => {
      colorH = e.target.value;
  
      document.getElementById("colorInputHome").value = `${colorH}`;
    };
  
    const colorVisitor = (e) => {
      colorV = e.target.value;
  
      document.getElementById("colorInputVisitor").value = `${colorV}`;
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
                name="team"
              />
              <label for="colorInputHome" class="form-label">
                Couleur du maillot
              </label>
              <input
                onChange={colorHome}
                type="color"
                class="form-control form-control-color"
                id="colorInputHome"
                title="Choisissez votre couleur"
              />
              <span id="errorH"></span>
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
              <label for="colorInputVisitor" class="form-label">
                Couleur du maillot
              </label>
              <input
                onChange={colorVisitor}
                type="color"
                class="form-control form-control-color"
                id="colorInputVisitor"
                title="Choisissez votre couleur"
              />
              <span id="errorV"></span>
            </form>
          </div>
        </div>
        <form action="">
          <input onClick={btn} type="submit" value="Valider" className="btn" />
        </form>
      </div>
    );
};

export default Teamchoice;