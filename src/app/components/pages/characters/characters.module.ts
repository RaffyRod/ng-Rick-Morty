import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from '@characters/character-list/character-list.component';
import { CharacterDetailsComponent } from '@characters/character-details/character-details.component';
import { RouterModule } from '@angular/router';
import { CharacterComponent } from '@characters/character.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const myComponent = [ CharacterDetailsComponent,
                      CharacterListComponent,
                      CharacterComponent ];

@NgModule({
  declarations: [ ...myComponent ],
  imports: [
    CommonModule, RouterModule, InfiniteScrollModule
  ],
  exports:[ ...myComponent ]
})
export class CharactersModule { }
