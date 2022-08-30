import React from "react";

const Color = () => {


    const colorHome = (e) => {
        let colorH = e.target.value;

        document.getElementById("colorInputHome").value = `${colorH}`
    }

    const colorVisitor = (e) => {
        let colorV = e.target.value;

        document.getElementById("colorInputVisitor").value = `${colorV}`
    }




  return (
    <div className="color">
      <div className="teamH">
        <label for="colorInputHome" class="form-label">
          Color picker
        </label>
        <input
          onChange={colorHome}
          type="color"
          class="form-control form-control-color"
          id="colorInputHome"
          title="Choisissez votre couleur"
        />
      </div>

      <div className="teamH">
        <label for="colorInputVisitor" class="form-label">
          Color picker
        </label>
        <input
          onChange={colorVisitor}
          type="color"
          class="form-control form-control-color"
          id="colorInputVisitor"
          title="Choisissez votre couleur"
        />
      </div>
    </div>
  );
};

export default Color;
