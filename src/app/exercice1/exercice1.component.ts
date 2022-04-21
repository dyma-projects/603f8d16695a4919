import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public image: string = "https://dyma.fr/assets/logo.png";
  public ditBonjour: string = "Bonjour";

  public clique() {
    console.log("clique");
  }
  constructor() {}

  ngOnInit(): void {}
}
