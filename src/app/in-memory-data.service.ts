import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
  	const persons = [
  		{ id : 1, name:'Parivallal', mobile:'8939062670', email:'pari@gmail.com' },
  		{ id : 2, name:'Nivetha', mobile:'8939062676', email:'nivetha@gmail.com' },
  		{ id : 3, name:'Nishanth', mobile:'8939062628', email:'nishanth@gmail.com' },
  		{ id : 4, name:'Nikash', mobile:'8939062621', email:'nikash@gmail.com' }
  	];
  	return {persons};
  }

}
