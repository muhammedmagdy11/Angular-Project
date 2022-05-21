export class FamilyMember {
  /**
   *
   */
  constructor(name:string,relation:string) {
    this.name=name;
    this.relation=relation;
  }
  Id!:string;
  name!:string;
  relation!:string;
}
