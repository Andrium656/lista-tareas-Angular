import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent implements OnInit {
  // Ctrol + . = para sacar la importación
  listaTarea: Tarea[] = [];
  nombreTarea = '';

  constructor() {}

  ngOnInit(): void {}

  agregarTarea() {
    // crear el objeto tarea
    const tarea: Tarea = {
      // tarea recibe 2 argumentos: nombre y estado que genere en models/Tarea
      nombre: this.nombreTarea,
      estado: false,
    };
    // agregar el objeto tarea al array
    this.listaTarea.push(tarea);

    // Resetear el formulario(Input)
    this.nombreTarea = '';
  }
  eliminartarea(index: number): void {
    // Al metodo splice debo especificarle desde donde y cauntos elementos quiero eliminar.
    this.listaTarea.splice(index, 1);
  }
  actualizartarea(tarea: Tarea, index: number): void {
    this.listaTarea[index].estado = !tarea.estado;
  }
}
