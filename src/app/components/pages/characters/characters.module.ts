import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from '@characters/character-list/character-list.component';
import { CharacterDetailsComponent } from '@characters/character-details/character-details.component';
import { RouterModule } from '@angular/router';

const myComponent = [ CharacterDetailsComponent, CharacterListComponent ];

@NgModule({
  declarations: [ ...myComponent ],
  imports: [
    CommonModule, RouterModule
  ],
  exports:[ ...myComponent ]
})
export class CharactersModule { }
