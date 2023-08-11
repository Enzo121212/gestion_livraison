import { Component, OnInit } from '@angular/core';
import { BackService } from './back.service';
import { person } from 'src/person';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'debut';
  isSidebarActive: boolean = false;
  myMoney :number = 500;
  pers : person = {
    "id": 6,
		"name": "Enzo Kiale",
		"email": "Enzo.enim@aol.net",
		"phone": "(4568749) 394-6753",
		"region": "Ouyest",
		"country": "Mada"
  }
  name :string = ''
  // dataPerson :person = [];

  nameReactive = new FormControl('');
  yearReactive = new FormControl(0);

  constructor(
    private back  : BackService,
    private formBuilder : FormBuilder
  ){}

  informationForm:FormGroup = this.formBuilder.group({
    name : this.nameReactive,
    year : this.yearReactive
  })

  saveReactive(){
    console.log(this.informationForm.value)
  }

  ngOnInit(): void {
    // this.back.createPerson(this.pers).subscribe(data=>{
    //   console.log('data', data)
    // });
    this.back.getPerson().subscribe(data=>{
      console.log('first', data)
    })
  }

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }

  addMoney(){
    this.myMoney += 100;
  }

  getMoney(data : number){
    this.myMoney = data;
  }

  valider(data:HTMLInputElement){
    console.log( data.value)
  }

  save(data:NgForm){
    console.log('data', data.form.value)
  }

}
