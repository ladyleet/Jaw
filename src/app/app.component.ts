import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements NgOnInit {
  title = "CodeSandbox";

  ngOnInit() {
    window.alert('hi');
  }
}
