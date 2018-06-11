import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ItemService } from './item.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'Tour of Heroes';
  items: Item[];
  item: Item;
  comments: string[] = [];
  private itemId: number;

  constructor(private itemService: ItemService)
            {
  
            }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
       this.items = this.itemService.getItems();
       
    
  }

  add(name: string): void {

      if (this.items.length == 0) {
      this.itemId = 0;
    } else {
      let maxId =this.items[this.items.length-1].id;
      this.itemId = maxId + 1;
    }
    let item  = new Item();
    item.id = this.itemId;
    item.name = name;
    item.numberOfComments = 0;
    item.comments = [];
    this.itemService.addItem(item);
    this.getItems();
      
  }

  delete(item: Item): void {
     this.itemService.removeItem(item.id);
    this.getItems();

  }


  onSelect(item) {
    this.item = item;
    console.log("item.id = "+this.item.id);
    this.comments = this.item.comments;
}




addComent(comment: string)/*: void */{
  console.log("add comment item.id = "+this.item.id);
 this.item.numberOfComments++;
 this.item.comments.push(comment);
 this.itemService.updateItem(this.item);
 this.getItems();
}



isActive(item) {
  return this.item === item;
};

}
