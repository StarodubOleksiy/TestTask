import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Item } from './item';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ItemService {

  //private itemUrl = 'api/heroes';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { 
 
    }


  getItems (): Item[] {
    let localStorageItem = JSON.parse(localStorage.getItem('items'));
    return localStorageItem == null ? [] : localStorageItem.items;
  }

  addItem (item: Item): void {
    let items = this.getItems();
    items.push(item);
    this.setLocalStorageItems(items);
      }

  private setLocalStorageItems(items: Item[]): void {
    localStorage.setItem('items', JSON.stringify({ items: items }));
  }

  clearStorage(): void {
   localStorage.clear();
  }

  public removeItem(id: number): void {
    let items = this.getItems();
    items = items.filter((item)=> item.id != id);
    this.setLocalStorageItems(items);
  }


  public updateItem(item: Item): void {
    let items = this.getItems();
    console.log()
    items.find((foundItem)=> foundItem.id == item.id).comments=item.comments;
    this.setLocalStorageItems(items);
  }




 
}