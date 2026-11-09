const config = {
  ateliers: [
    { id: 1, titre: "Créer une affiche avec Figma", places: 8 },
    { id: 2, titre: "Découvrir les raccourcis VS Code", places: 0 },
    { id: 3, titre: "Construire un quiz en JavaScript", places: 5 },
    { id: 4, titre: "Créer une page responsive avec Tailwind CSS", places: 12 },
    { id: 6, titre: "Animer une interface avec CSS", places: 0 },
  ],
  modes: {
    presentiel: "En présentiel",
    distance: "À distance",
  },
  campus: ["Youssoufia", "Asfi", "Nador"],
};

const selectedConfig = {
  atelierId: null,
  mode: "",
  campus: "",
  email: "",
};
const list = document.getElementById("liste-ateliers");
const modelist = document.getElementById("liste-modes");
const campuslist = document.getElementById("liste-campus");
const recapbox = document.getElementById("recapitulatif-contenu");

function afficher(){
  config.ateliers.forEach((atelier) =>{
      const label = document.createElement("label");
      label.classList.add("carte-choix");
      const input = document.createElement("input")
            input.type="radio";
            input.name="choix";
            input.value = atelier.id


      const h2 = document.createElement("p");
      h2.textContent = atelier.titre;

      const nbrpalce = document.createElement("p");
      nbrpalce.textContent = atelier.places
      if(atelier.places != 0)
      {
      label.append(input);
      label.append(h2);
      label.append(nbrpalce);
      list.append(label);
      }
      input.addEventListener("change", () => {
      selectedConfig.atelierId = Number(input.value);
      modelist.textContent="";
      affichermodes();
      });
     
  });
}
function affichermodes(){

  const label = document.createElement("label");
      label.classList.add("carte-choix");

  const input = document.createElement("input")
            input.type="radio";
            input.name="mode";
            input.value ="En présentiel"

  const p = document.createElement("p");
  p.textContent = "En présentiel";

  const label2 = document.createElement("label");
      label2.classList.add("carte-choix");

  const input2 = document.createElement("input")
            input2.type="radio";
            input2.name="mode";
            input2.value="À distance"

  const p2 = document.createElement("p");
  p2.textContent = "À distance";

  label.append(input,p);
  label2.append(input2,p2);

  modelist.append(label,label2);


  input.addEventListener("change", () => {
    selectedConfig.mode = input.value;
  });

  input2.addEventListener("change", () => {
    selectedConfig.mode = input2.value;
  });
}


function campus{


}

afficher();


