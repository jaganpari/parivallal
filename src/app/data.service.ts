import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Person } from './person';
import { MessageService } from './message.service';


const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application' })
}

@Injectable()
export class DataService {
  
  private personsUrl = 'api/persons';
  
  constructor(
  	private http: HttpClient
  ) { }

  getPersons(): Observable<Person[]> {
  	return this.http.get<Person[]>(this.personsUrl);
  }

  getPerson(person: Person): Observable<Person> {
  	return this.http.get<Person>(this.personsUrl+'/'+person.id);
  }


  addPerson(person: Person): Observable<Person> {
  	return this.http.post<Person>(this.personsUrl, person, httpOptions);
  }

  updatePerson(person: Person): Observable<Person> {
  	return this.http.put<Person>(this.personsUrl, person, httpOptions);
  }

  deletePerson(person: Person): Observable<Person> {
  	return this.http.delete<Person>(this.personsUrl+'/'+person.id);
  }

  searchPersons(personName: string): Observable<Person[]> {
    personName = personName.trim();
    const options = personName ?{ params: new HttpParams().set('name', personName) } : {};
    return this.http.get<Person[]>(this.personsUrl, options);
  }

  /*private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log('${operation} failed: ${error.message}');
      return of(result as T);
    };
  }
 
  private log(message: string) {
    this.messageService.add('PersonService: ' + message);
  }*/

}


