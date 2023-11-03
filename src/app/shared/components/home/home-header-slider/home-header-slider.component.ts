import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header-slider',
  templateUrl: './home-header-slider.component.html',
  styleUrls: ['./home-header-slider.component.scss'],
})
export class HomeHeaderSliderComponent  implements OnInit {
  home_slides: {
    id: number,
    bg_image: string,
    title: string,
    subtitle: string,
    description: string
  }[] = [
    {
      id: 0,
      bg_image: "/assets/images/home/slides/horror_movies_bg_image.jpg",
      title: "Horror Movies",
      subtitle: "They give the framework and elements...",
      description: "Horror movies had been through many phases and transformations, but they have one specific goal: SHOCKING AUDIENCES. They will try this using many ways. Here, we are going to use some of them and transform them into a card game"
    },
    {
      id: 1,
      bg_image: "/assets/images/home/slides/slashers_bg_image.jpeg",
      title: "The Creatures come from the Slashers",
      subtitle: "Main Villains in Horror Flixs!",
      description: "Slashers and mosnters in Horror Films had been the faces in this genre. They come in lot of shapes and also they have several origins, but they maintain one objective: HAUNTING AND KILLING A SET OF VICTIMS. Either for revenge or because that is their main function"
    },
    {
      id: 2,
      bg_image: "/assets/images/home/slides/human_slasher_bg_image.jpg",
      title: "Human Slashers",
      subtitle: "Regular persons that broken...",
      description: "These persons suddenly broken on their ways. Some with shocking reasons or losses, others had no reason at all, just pure madness and some more just driven by revenge. Some are just regular humans with great intelligence, other had some special abilities to perform the goal they had set"
    },
    {
      id: 3,
      bg_image: "/assets/images/home/slides/demons_slasher_bg_image.jpeg",
      title: "Demons",
      subtitle: "Pure or half-breeds",
      description: "These creatures comes from Hell for several reason, but some share the goal of feeding on human souls and causing as much mayhem as possible. They are very powerful indeed, that is for sure!"
    },
    {
      id: 4,
      bg_image: "/assets/images/home/slides/supernatural_slasher_bg_image.jpeg",
      title: "Supernatural Slashers",
      subtitle: "Comming from other dimensions or realms...",
      description: "These beings comes from the Afterlife. Some are ghosts, others Dream Demons, others ancient gods but all of them come to our world with one simple goal. Cause chaos and mayhem, generating pain, desperation and suffering to the people"
    },
    {
      id: 5,
      bg_image: "/assets/images/home/slides/killer_dolls_bg_image.jpeg",
      title: "Killrt Dolls",
      subtitle: "Createted by magical or technological means...",
      description: "These creatures were created by magical means, some by technological means. Despite their size, they are very dangerous and capable of causing death and mayhem. Some of them also can use magic to their operations"
    },
    {
      id: 6,
      bg_image: "/assets/images/home/slides/aliens_bg_image.jpg",
      title: "Aliens",
      subtitle: "Comming from other worlds to conquer or feed...",
      description: ""
    },
    {
      id: 7,
      bg_image: "/assets/images/home/slides/tech_monsters_bg_image.jpg",
      title: "Technological Monsters",
      subtitle: "Creatures created by science...",
      description: ""
    },
    {
      id: 8,
      bg_image: "/assets/images/home/slides/cursed_objects_bg_image.jpg",
      title: "Cursed Objects",
      subtitle: "Items that you don't want to find...",
      description: ""
    }
  ];

  constructor() { }

  ngOnInit() {}

}
