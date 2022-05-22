import { FamilyMember } from "./FamilyMember";

export class Employee{
  /**
   *
   */
  constructor(firstName:string,
    address:string,
    birthdate:Date) {
this.firstName=firstName;
this.address=address;
this.birthdate=birthdate;
  }
  id!: string;
  firstName!:string;
  lastName!:string;
  address!:string;
  birthdate!:Date;
  age!:number;
  mobile!:string;
  familyMembers!:FamilyMember[];
}
