import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';

export interface MenuItem {
  icon: string;
  id: string;
  value: string,
}

@Component({
  selector: 'dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css']
})
export class DropdownMenuComponent {
  @Input()  public menuItems: Array<MenuItem> = [];
  @Output() public itemSelected = new EventEmitter<number>();

  @ViewChildren("menuItems") 
  private menuItemsRef: QueryList<ElementRef>;

  public onClick(event: MouseEvent, index: number) {
    event.stopPropagation();
    this.itemSelected.emit(index);
  }

  public setFocusOnFirstMenuItem(): void {
    if (this.menuItemsRef != null && this.menuItemsRef.first != null) {
      this.menuItemsRef.first.nativeElement.focus();
    } 
  }

  public onKeyDown(event: KeyboardEvent, index: number) {
    switch (event.key) {
      case "ArrowUp":
        event.stopPropagation();
        (index === 0
           ? this.menuItemsRef.last 
           : this.menuItemsRef.get(index - 1)
        ).nativeElement.focus();
        break;
    
      case "ArrowDown":
        event.stopPropagation();
        (index === this.menuItemsRef.length - 1
          ? this.menuItemsRef.first 
          : this.menuItemsRef.get(index + 1)
        ).nativeElement.focus();
        break;
    }
  }
}
