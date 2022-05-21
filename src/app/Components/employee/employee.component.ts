import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Employee } from 'src/app/Models/Employee';
import { FamilyMember } from 'src/app/Models/FamilyMember';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
//   imageSrc!: string;
//   myForm = new FormGroup({
//    fileSource: new FormControl('', [Validators.required])
//  });
Members:FamilyMember[]=[];
employee!:Employee;
@ViewChild('MemberName',{read:ElementRef}) MemberName!: ElementRef;
@ViewChild('MemberRelation',{read:ElementRef}) MemberRelation!: ElementRef;
  constructor() { }

  submit(form:NgForm){
    console.log('submitted',form);
    this.employee=form.value;
    this.employee.familyMembers=this.Members;
    console.log(this.employee);
  }
  AddMember(){
    this.Members.push(new FamilyMember(this.MemberName.nativeElement.value,this.MemberRelation.nativeElement.value));
    this.MemberName.nativeElement.value='';
    this.MemberRelation.nativeElement.value='';
  }
  DeleteMember(item:FamilyMember){
    let index=this.Members.findIndex(e=>e===item);
    this.Members.splice(index,1);
  }
  // get f(){
  //   return this.myForm.controls;
  // }

  // onFileChange(event:any) {
  //   const reader = new FileReader();

  //   if(event.target.files && event.target.files.length) {
  //     const [file] = event.target.files;
  //     reader.readAsDataURL(file);

  //     reader.onload = () => {

  //       this.imageSrc = reader.result as string;

  //       this.myForm.patchValue({
  //         fileSource: reader.result
  //       });

  //     };

  //   }
  // }

  // submit(){

  // }
  ngOnInit(): void {
  }


}
