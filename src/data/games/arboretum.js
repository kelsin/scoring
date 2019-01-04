const arboretum = {
  name: "arboretum",
  title: "Arboretum",
  designer: "Dan Cassar",
  bgg: 140934,
  players: {
    min: 2,
    max: 4
  },
  fields: [{
    name: "spruce",
    label: "Blue Spruce",
    color: "rgb(27,75,135)"
  },{
    name: "cassia",
    color: "rgb(249,203,6)"
  },{
    name: "cherry",
    label: "Cherry Blossom",
    color: "rgb(250,126,177)"
  },{
    name: "dogwood",
    color: "rgb(178,178,178)"
  },{
    name: "jacaranda",
    color: "rgb(96,49,153)"
  },{
    name: "maple",
    color: "#F37423"
  },{
    name: "oak",
    color: "#6C3E27"
  },{
    name: "poinciana",
    label: "Royal Poinciana",
    color: "#D21529"
  },{
    name: "poplar",
    label: "Tulip Poplar",
    color: "#77BC40"
  },{
    name: "willow",
    color: "#0F4224"
  },{
    name: "total",
    type: "sum",
    fields: ["spruce", "cassia", "cherry", "dogwood", "jacaranda", "maple", "oak", "poinciana", "poplar", "willow"]
  }]
};

export default arboretum;
