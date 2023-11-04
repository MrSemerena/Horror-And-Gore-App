import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-body-card-ui',
  templateUrl: './home-body-card-ui.component.html',
  styleUrls: ['./home-body-card-ui.component.scss'],
})
export class HomeBodyCardUiComponent  implements OnInit {
  home_creatures_cards: {
    id: number,
    bg_color: string,
    image: string,
    title: string,
    subtitle: string,
    description: string
  }[] = [
    {
      id: 0,
      bg_color: "#a51b0b",
      image: "/assets/images/home/cards/creatures/malfus.jpeg",
      title: "",
      subtitle: "",
      description: ""
    },
    {
      id: 1,
      bg_color: "#a51b0b",
      image: "/assets/images/home/cards/creatures/bazuzu.jpeg",
      title: "",
      subtitle: "",
      description: ""
    },
    {
      id: 2,
      bg_color: "#a51b0b",
      image: "/assets/images/home/cards/creatures/blob.jpg",
      title: "",
      subtitle: "",
      description: ""
    },
    {
      id: 3,
      bg_color: "#a51b0b",
      image: "/assets/images/home/cards/creatures/chucky.jpeg",
      title: "",
      subtitle: "",
      description: ""
    },
    {
      id: 4,
      bg_color: "#a51b0b",
      image: "/assets/images/home/cards/creatures/dolly.jpeg",
      title: "",
      subtitle: "",
      description: ""
    },
    {
      id: 5,
      bg_color: "#a51b0b",
      image: "/assets/images/home/cards/creatures/blade.jpg",
      title: "",
      subtitle: "",
      description: ""
    },
    {
      id: 6,
      bg_color: "#a51b0b",
      image: "/assets/images/home/cards/creatures/jigsaw.jpg",
      title: "",
      subtitle: "",
      description: ""
    },
    {
      id: 7,
      bg_color: "#a51b0b",
      image: "/assets/images/home/cards/creatures/michael_myers.jpg",
      title: "",
      subtitle: "",
      description: ""
    },
    {
      id: 8,
      bg_color: "#a51b0b",
      image: "/assets/images/home/cards/creatures/leatherface.jpeg",
      title: "",
      subtitle: "",
      description: ""
    },
    {
      id: 9,
      bg_color: "#a51b0b",
      image: "/assets/images/home/cards/creatures/freddy_krueger.jpeg",
      title: "",
      subtitle: "",
      description: ""
    }
  ];

  home_magic_cards: {
    id: number,
    bg_color: string,
    image: string,
    title: string,
    subtitle: string,
    description: string
  } [] = [
    {
      id: 0,
      bg_color: "",
      image: "",
      title: "",
      subtitle: "",
      description: ""
    },
    {
      id: 1,
      bg_color: "",
      image: "",
      title: "",
      subtitle: "",
      description: ""
    },
    {
      id: 2,
      bg_color: "",
      image: "",
      title: "",
      subtitle: "",
      description: ""
    },
    {
      id: 3,
      bg_color: "",
      image: "",
      title: "",
      subtitle: "",
      description: ""
    },
    {
      id: 4,
      bg_color: "",
      image: "",
      title: "",
      subtitle: "",
      description: ""
    },
    {
      id: 5,
      bg_color: "",
      image: "",
      title: "",
      subtitle: "",
      description: ""
    }
  ];

  constructor() { }

  ngOnInit() {}

}
