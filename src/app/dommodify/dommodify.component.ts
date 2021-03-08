import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dommodify",
  templateUrl: "./dommodify.component.html",
  styleUrls: ["./dommodify.component.css"]
})
export class DommodifyComponent implements OnInit {
  inDOM: boolean = false;
  constructor() {}

  ngOnInit() {}

  toggle(): void {
    this.inDOM = !this.inDOM;
  }
}
