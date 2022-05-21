import { FamilyMember } from "./FamilyMember";

export class Employee{
  id!: string;
  firstName!:string;
  lastName!:string;
  address!:string;
  birthdate!:Date;
  age!:number;
  mobile!:string;
  familyMembers!:FamilyMember[];
}
