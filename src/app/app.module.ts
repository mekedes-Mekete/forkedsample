import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./shared/modules/material/material.module";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { SurveyComponent } from "./survey/survey.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";
import { DropdownMenuComponent } from "./shared/components/dropdown-menu/dropdown-menu.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SurveyComponent,
    ConfirmDialogComponent,
    DropdownMenuComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class AppModule {}
