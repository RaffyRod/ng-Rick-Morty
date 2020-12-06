import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor( ) { }

  searchCharacters(query = '', page = 1){}
  getDetails(id:number){}
}
