import { Component } from "@angular/core";

@Component({
  selector: 'app-futter',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public autor: any = {nombre: 'Daniel', apellido: 'Spencer'};
}
