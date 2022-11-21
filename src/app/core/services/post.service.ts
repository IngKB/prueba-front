import { Injectable } from '@angular/core';
import { Post } from 'src/app/shared/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }
  getPosts() {
    return [new Post("Falcao ingresa a la cancha y... ¡tarda menos de un minuto en anotar gol!",
      "Un lindo momento vivió Falcao García en medio de la nostalgia por no estar en el Mundial. El delantero anotó gol en menos de un minuto durante el amistoso entre Colombia y Paraguay donde él selló el triunfo con un cabezazo al minuto 76.",
      ["Deportes", "Colombia"],
      [{ title: "partidoColombia", image: "https://e00-co-marca.uecdn.es/claro/assets/multimedia/imagenes/2022/11/20/16689135450677.jpg" },
      { title: "falcao", image: "https://e00-co-marca.uecdn.es/claro/assets/multimedia/imagenes/2022/11/20/16689144943941.jpg" }
      ]),
    new Post("¡Cinco razones para adoptar un perro criollo en Colombia!",
      "Está comprobado científicamente que los perros criollos son más fuertes y tienen mejores defensas que los de raza pura. Además, suelen ser muy longevos, se conocen ejemplares que han alcanzado los 20 años.",
      ["Mascotas"],
      [{ title: "perro", image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
      ])
    ];
  }
}
