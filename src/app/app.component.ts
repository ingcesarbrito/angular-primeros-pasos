import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styles: [
    `
      h1 {
        color: blue;
      }
      p {
        color: red;
      }
    `
  ]
})
export class AppComponent {
  titulo: string = "Primeros pasos";
}
