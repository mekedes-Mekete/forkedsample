import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";
import { IDeactivateComponent } from "../shared/services/deactivate-guard.service";

enum SatisfactionRatings {
  none_selected,
  very_dissatisfied,
  dissatisfied,
  neutral,
  satisfied,
  very_satisfied
}

@Component({
  selector: "app-survey",
  templateUrl: "./survey.component.html",
  styles: []
})
export class SurveyComponent implements IDeactivateComponent {
  public title = "Keeping Track of Form Changes In Angular";
  public satisfactionRatings = SatisfactionRatings;
  public satisfactionRating = SatisfactionRatings.none_selected;
  public comments: string = "";
  @ViewChild("f") private ngFormRef!: NgForm;

  constructor(public dialog: MatDialog) {}

  public onClick(value: SatisfactionRatings) {
    console.log(value);
  }

  public onSubmit(f: NgForm) {
    console.log(f.value); // { first: '', last: '' }
    console.log(f.dirty); // false
  }

  public canExit(): boolean | Observable<boolean> {
    return this.ngFormRef.dirty ? this.openUnsavedChangesDialog() : true;
  }

  private openUnsavedChangesDialog(): Observable<boolean> {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "26.5rem",
      data: {
        dialogTitle: "Unsaved Changes",
        dialogMessageLine1: "You have unsaved changes.",
        dialogMessageLine2: "Are you sure you want to leave the page?",
        yesButtonText: "Leave this Page",
        noButtonText: "Stay on this Page"
      }
    });

    return dialogRef.afterClosed();
  }
}
