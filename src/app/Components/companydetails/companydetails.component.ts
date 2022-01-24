import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css']
})
export class CompanydetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private router:Router) {
    console.log(activatedRoute.params);
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
     let id = params["id"];
      console.log(id);  })
    }
    navigate():void{
      console.log("navigate");
      this.router.navigateByUrl("/companies");
      // this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      // this.router.navigate(['/companies']));
    }
}
