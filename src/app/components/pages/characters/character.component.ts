import {Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Character } from '../../../shared/interfaces/character.interface';

@Component({
  selector:'app-character',
  template:`
       <div class="card pb-3 mt-4">
      <div class="image">
        <a [routerLink]="['/character-details', character.id]">
            <img [src]="character.image"
            [alt]="character.name"
            class="card-img-top">
        </a>
      </div>
      <div class="card-inner pl-2">
        <div class="header pl-2">
          <a [routerLink]="['/character-details', character.id]">
          <h2>{{character.name | slice: 0:15}}</h2>
        </a>
        <h4 class="text-muted">{{character.gender}}</h4>
        <small class="text-muted"> {{character.created | date}}</small>
        </div>
      </div>
    </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterComponent{
    @Input()character:Character;
}
