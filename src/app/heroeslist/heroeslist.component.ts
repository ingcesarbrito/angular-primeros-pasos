import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-heroeslist",
  templateUrl: "./heroeslist.component.html",
  styleUrls: ["./heroeslist.component.css"]
})
export class HeroeslistComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  superheroes: any[] = [
    {
      name: "batman",

      alterEgo: "bruce wayne",

      superpowers: ["genius intellect", "vast wealth", "indomitable will"]
    },

    {
      name: "sprocketman",

      alterEgo: "",

      superpowers: ["throws sprockets"]
    },

    {
      name: "wonder woman",

      alterEgo: "Princess Diana of Themyscira",

      superpowers: ["superhuman strength", "fly", "uses boomerang tiara"]
    },

    {
      name: "northstar",

      alterEgo: "Jean-Paul Beaubier",

      superpowers: ["superhuman speed", "fly", "project photonic blasts"]
    },

    {
      name: "superlopez",

      alterEgo: "Juan López Fernández",

      superpowers: ["superhuman strength", "flight", "X-ray vision"]
    }
  ];
}
