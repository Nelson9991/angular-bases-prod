import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() {}

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 15000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 8500,
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 7000,
    },
  ];

  addCharacter(character: Character): void {
    const newCharacter = { ...character, id: uuid() };
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string): void {
    console.log(this.characters);

    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
