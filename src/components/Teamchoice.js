import React from "react";
import { appendErrors, useForm } from "react-hook-form";

const Teamchoice = () => {
  

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="teamchoice">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container-fluid first-container">
          <div className="team-container">
            <label id="teamHomeLabel" htmlFor="teamHome">
              Nom de l'équipe à domicile
            </label>
            <input
              className="form-control-home teamHome-container"
              type="text"
              autoComplete="off"
              id="teamHome"
              placeholder="Entrez le nom de l'équipe ici"
              {...register("teamHome", { minLength: 3, required: true })}
            />
            {errors.teamHome && <p>3 caractères minimum obligatoire</p>}
            <span id="errorH"></span>
            <label htmlFor="colorInputHome" class="form-label">
              Couleur du maillot
            </label>
            <input
              type="color"
              className="form-control form-control-color"
              id="colorInputHome"
              title="Choisissez votre couleur"
              {...register("colorHome", { onChange: true, required: true })}
            />
          </div>
          <div className="team-container">
            <label id="teamVisitorLabel" htmlFor="teamVisitor">
              Nom de l'équipe à l'exterieur
            </label>
            <input
              className="form-control-visitor teamVisitor-container"
              type="text"
              autoComplete="off"
              id="teamVisitor"
              placeholder="Entrez le nom de l'équipe ici"
              {...register("teamVisitor", { minLength: 3, required: true })}
            />
            {errors.teamVisitor && <p>3 caractères minimum obligatoire</p>}
            <span id="errorV"></span>
            <label htmlFor="colorInputVisitor" class="form-label">
              Couleur du maillot
            </label>
            <input
              type="color"
              className="form-control form-control-color"
              id="colorInputVisitor"
              title="Choisissez votre couleur"
              {...register("colorVisitor", { required: true })}
            />
          </div>
        </div>
        <input type="submit" value="Valider" className="btn" />
        <span id="error"></span>
      </form>
    </div>
  );
};

export default Teamchoice;
