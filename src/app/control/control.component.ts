import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-control",
  templateUrl: "./control.component.html",
  styleUrls: ["./control.component.css"]
})
export class ControlComponent implements OnInit {
  value: number = 0;
  constructor() {}

  ngOnInit() {}

  add(): void {
    this.value++;
  }
  subtract(): void {
    this.value--;
  }
}
