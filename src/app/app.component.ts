import { Component, ElementRef, ViewChild } from "@angular/core";
import { DropdownMenuComponent, MenuItem } from "./shared/components/dropdown-menu/dropdown-menu.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild('menuTrigger', { read: ElementRef, static: true }) 
  private menuTrigger : ElementRef;
  
  @ViewChild(DropdownMenuComponent)
  private dropDownMenu : DropdownMenuComponent;

  public menuOpened = false;
  public investmentClasses: MenuItem[] = [
     {
       icon: "euro_symbol",
       id: "currencies",
       value: "currency"
     },
     {
       icon: "local_florist",
       id: "commodities",
       value: "commodity"
     },
     {
       icon: "insert_chart",
       id: "indices",
       value: "index"
    },
    {
       icon: "business",
       id: "stocks",
       value: "stock"
    }
  ];

  public onClick(event: MouseEvent) {
    //prevent event bubbling up to parent
    event.stopPropagation();
    this.menuOpened = false;
  }

  public onKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'Escape':
        this.menuOpened = false;
        this.menuTrigger.nativeElement.focus();
        break;
      case 'Enter':
          this.menuOpened = true;
          // make sure that the menu is open before setting focus
          setTimeout(() => this.dropDownMenu.setFocusOnFirstMenuItem(), 1);
          break;
      case 'Tab':
        if (this.menuOpened) {
          this.menuOpened = false;
        }
        break;
    }
  }
}