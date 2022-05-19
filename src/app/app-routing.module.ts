import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DeactivateGuardService } from "./shared/services/deactivate-guard.service";
import { SurveyComponent } from "./survey/survey.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { 
    path: "survey", 
    component: SurveyComponent,
    canDeactivate: [DeactivateGuardService] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}