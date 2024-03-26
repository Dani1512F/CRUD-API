import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { ClienteService } from './cliente.service';
import swal from 'sweetalert2';
import { response } from 'express';
import { tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent {
  clientes!: Cliente[];
  paginador: any;

  constructor(
    private clienteService: ClienteService,
    private activatedRouted: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRouted.paramMap.subscribe((params) => {
      let page: number = Number(params.get('page'));

      if (!page) {
        page = 0;
      }
      this.clienteService.getClientes(page)
        .pipe(
          tap((response) => {
            console.log('Component: tap: 3');
            (response.content as Cliente[]).forEach((cliente) => {
              console.log(cliente.nombre);
            });
          })
        )
        .subscribe(response => 
          {this.clientes = response.content as Cliente[]
            this.paginador = response;}
        );
    });
  }

  delete(cliente: Cliente): void {
    swal
      .fire({
        title: 'Está seguro?',
        text: `¿Seguro que desea eliminar al cliente ${cliente.nombre}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.value) {
          this.clienteService.delete(cliente.id).subscribe((response) => {
            this.clientes = this.clientes.filter((cli) => cli !== cliente);
            swal.fire({
              title: 'Eliminado!',
              text: `Cliente ${cliente.nombre} borrado con éxito!`,
              icon: 'success',
            });
          });
        }
      });
  }
}
