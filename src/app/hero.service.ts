import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { 
 
    }


  getHeroes (): Hero[] {
    let localStorageItem = JSON.parse(localStorage.getItem('todos'));
    return localStorageItem == null ? [] : localStorageItem.todos;
  }

  addHero (hero: Hero): void {
    let todos = this.getHeroes();
    todos.push(hero);
    this.setLocalStorageTodos(todos);
      }

  private setLocalStorageTodos(todos: Hero[]): void {
    localStorage.setItem('todos', JSON.stringify({ todos: todos }));
  }

  clearStorage(): void {
   localStorage.clear();
  }

  public removeHero(id: number): void {
    let todos = this.getHeroes();
    todos = todos.filter((todo)=> todo.id != id);
    this.setLocalStorageTodos(todos);
  }


  public updateHero(hero: Hero): void {
    let todos = this.getHeroes();
    todos.find((todo)=> todo.id == hero.id).comments=hero.comments;
    this.setLocalStorageTodos(todos);
  }



 
}
