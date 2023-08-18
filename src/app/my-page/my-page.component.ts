import { Component } from '@angular/core';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent {

//FUNCIÓN QUE APLICA ESTILO A OPCIÓN SELECCIONADA Y QUITA EL ESTILO A LA SELECCIÓN ANTERIOR
seleccionar(link:any) {
  let opciones:any = document.querySelectorAll('#links a');
  opciones[0].className = "";
  opciones[1].className = "";
  opciones[2].className = "";
  opciones[3].className = "";
  opciones[4].className = "";
  link.className = "seleccionado";
// Desaparecemos el menu una vez seleccionada una opción en el modo responsive
var x:any = document.getElementById("nav");
x.className = "";
}

// FUNCIÓN QUE MUESTRA EL MENU RESPONSIVE
responsiveMenu(){
  var x:any = document.getElementById("nav");
  if (x.className === "") {
      x.className = "responsive";
  } else {
    x.className = "";
  }
}
}