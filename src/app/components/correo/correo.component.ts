import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo: any;

  constructor() {
    this.correo = {
      titulo: 'Titulo del email',
      cuerpo: 'Hola esto es un correo',
      emisor: 'correoemisor@curso.opw',
      destinatario: 'correodestinatario@curso.opw'
    }
  }

  ngOnInit(): void {
  }

}
