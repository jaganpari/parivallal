import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import  { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	isavailable = true;
	itemCount : number;
	btnTxt : string = "Add";
	mode : string = "Add";
	persons: Person[];
	person: any = {};
	personName: string;
  personObj: any = {};

  constructor(private dataService: DataService) { }

  ngOnInit() {
  	this.getPersons();
  }

  searchPersons(personName: string) {
    if (personName) {
      this.dataService.searchPersons(personName).subscribe(persons => {
      	this.persons = persons;
      	this.itemCount = this.persons.length;
      });
    } else{
    	this.getPersons();
    }
  }

  getPersons() {
  	this.dataService.getPersons().subscribe(persons => {
  		console.log("fetched all");
  		this.persons = persons;
  		this.itemCount = this.persons.length;
  	});
  }

  getPerson(person: Person) {
  	this.dataService.getPerson(person).subscribe(person => {
  		console.log("fetched single");
		this.mode = 'Edit'; 
		this.btnTxt = 'Update'; 		
  		this.person = person;
  	});
  }

  addPerson(person: Person) {
  	this.person.id = this.persons.length+1;
	this.dataService.addPerson(this.person).subscribe(persons => {
		console.log("added");
		this.person = {};
		this.itemCount = this.persons.length;
		this.getPersons();
  	});
  }

  updatePerson() {
  	this.dataService.updatePerson(this.person).subscribe(() => {
  		console.log("updated");
  		this.person = {};
  		this.getPersons();
  		this.btnTxt = 'Add';
  	});
  }

  deletePerson(person: Person) {
  	this.persons = this.persons.filter(p => p !== person);
  	this.dataService.deletePerson(person).subscribe(() => {
  		console.log("deleted");
  		this.itemCount = this.persons.length;
  		if(this.itemCount === 0) {
  			this.personName = '';
  		}
  	});
  }

}