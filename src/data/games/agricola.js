import always from "ramda/es/always";
import cond from "ramda/es/cond";
import flip from "ramda/es/flip";
import multiply from "ramda/es/multiply";
import negate from "ramda/es/negate";
import _gte from "ramda/es/gte";
import T from "ramda/es/T";

let gte = flip(_gte);

const agricola = {
  name: "agricola",
  title: "Agricola",
  designer: "Uwe Rosenberg",
  bgg: 31260,
  players: {
    min: 1,
    max: 5
  },
  fields: [{
    name: "fields",
    type: "function",
    func: cond([[gte(5), always(4)],
                [gte(4), always(3)],
                [gte(3), always(2)],
                [gte(2), always(1)],
                [T,      always(-1)]])
  },{
    name: "pastures",
    type: "function",
    func: cond([[gte(4), always(4)],
                [gte(3), always(3)],
                [gte(2), always(2)],
                [gte(1), always(1)],
                [T,      always(-1)]])
  },{
    name: "grain",
    type: "function",
    func: cond([[gte(8), always(4)],
                [gte(6), always(3)],
                [gte(4), always(2)],
                [gte(1), always(1)],
                [T,      always(-1)]])
  },{
    name: "vegetables",
    type: "function",
    func: cond([[gte(4), always(4)],
                [gte(3), always(3)],
                [gte(2), always(2)],
                [gte(1), always(1)],
                [T,      always(-1)]])
  },{
    name: "sheep",
    type: "function",
    func: cond([[gte(8), always(4)],
                [gte(6), always(3)],
                [gte(4), always(2)],
                [gte(1), always(1)],
                [T,      always(-1)]])
  },{
    name: "boar",
    label: "Wild Boars",
    type: "function",
    func: cond([[gte(7), always(4)],
                [gte(5), always(3)],
                [gte(3), always(2)],
                [gte(1), always(1)],
                [T,      always(-1)]])
  },{
    name: "cattle",
    type: "function",
    func: cond([[gte(6), always(4)],
                [gte(4), always(3)],
                [gte(2), always(2)],
                [gte(1), always(1)],
                [T,      always(-1)]])
  },{
    name: "spaces",
    label: "Unused Spaces",
    type: "function",
    func: negate
  },{
    name: "stables",
    label: "Fenced Stables"
  },{
    name: "clay",
    label: "Clay Hut Rooms"
  },{
    name: "stone",
    label: "Stone House Rooms",
    type: "function",
    func: multiply(2)
  },{
    name: "family",
    label: "Family Members",
    type: "function",
    func: multiply(3)
  },{
    name: "cards",
    label: "Points for Cards"
  },{
    name: "bonus",
    label: "Bonus Points"
  },{
    name: "total",
    type: "sum",
    fields: ["fields",
             "pastures",
             "grain",
             "vegetables",
             "sheep",
             "boar",
             "cattle",
             "spaces",
             "stables",
             "clay",
             "stone",
             "family",
             "cards",
             "bonus"]
  }]
};

export default agricola;
