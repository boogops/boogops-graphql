import PropDef from "./prop-def";

class ThingDef {
  constructor(public id: string, public propDefs: PropDef[]) {}
}

export default ThingDef;
