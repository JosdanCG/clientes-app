import { Component } from '@angular/core';
import { Producto } from './card-producto';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css'],
})
export class CardProductoComponent {
  public Producto = [
    {
      url: 'assets/inicio.jpg',
      id: 1,
      name: "Alice's Cards",
      price: 12,
      detail: 'It is a beautiful paquet cards for Alicie in Wonderland Fans',
    },
    {
      url: 'assets/pochita.jpg',
      id: 2,
      name: 'Teddy Pochita',
      price: 25,
      detail: 'For Chainsaw Men fans you will have a own pochita in your live!',
    },
    {
      url: 'assets/picolin.jpg',
      id: 3,
      name: 'Fantasmin',
      price: 22,
      detail:
        'It is a beautifull goshy. Free shipping. Returns are not accepted',
    },
    {
      url: 'assets/lechudog.jpg',
      id: 4,
      name: 'LechuDog',
      price: 30,
      detail:
        'It is a beautiful stuffed animal a combination between dog and lettuce. So cute!',
    },
    {
      url: 'assets/sheep.jpg',
      id: 5,
      name: 'Sweetly Sheep',
      price: 32,
      detail:
        'In several sizes for that families with their little children ^^',
    },
    {
      url: 'assets/catcircle.jpg',
      id: 6,
      name: 'Kitty',
      price: 15,
      detail:
        'For cats Lover, there are in various sizes it will stay by your side!',
    },
  ] as Array<Producto>;
}
