import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-body-banners',
  templateUrl: './home-body-banners.component.html',
  styleUrls: ['./home-body-banners.component.scss'],
})
export class HomeBodyBannersComponent  implements OnInit {
  home_banners: {
    id: number,
    bg_image: string,
    title: string,
    subtitle: string,
    description: string
  }[] = [
    {
      id: 0,
      bg_image: "/assets/images/home/banners/tgc_bg_image.jpeg",
      title: "Trading Card Games",
      subtitle: "Where we are going to take mechanics and ideas",
      description: "These type of games are amazing. Basically, because it uses the strategy element. Is a constant 'Rock-Paper-Scissor' mechanic where one of the elements is stronger than other "
    },
    {
      id: 1,
      bg_image: "/assets/images/home/banners/slashers_bg_image.jpg",
      title: "Slashers",
      subtitle: "These will be the Creatures",
      description: "The decks will contain a lot of these cards, which will made battle on the matches. To pick these one must take into account a lot of elements, sucj as level, type, effects, attack power and defence power"
    },
    {
      id: 2,
      bg_image: "/assets/images/home/banners/fields_bg_image.jpg",
      title: "Fields",
      subtitle: "Iocnic places of Horror Movies",
      description: "These places we had seem them many times on the movies. For example: Crystal Lake, Freddy's House... Just to mention a few. They represent something special to the creature or give more powers"
    },
    {
      id: 3,
      bg_image: "/assets/images/home/banners/weapons_bg_image.jpeg",
      title: "Weapons (Equipment)",
      subtitle: "These increase creatures attack!",
      description: "Weapons are the main tools of Slashers, not the same case with monsters. For example, in the image we can see Freddy's Glove. In this case the weapon becomes part of the creatures body"
    },
    {
      id: 4,
      bg_image: "/assets/images/home/banners/objects_bg_image.jpeg",
      title: "Objects (Equipment or Magic Cards)",
      subtitle: "Special items that had some effects on creatures",
      description: "These powerful items can act like boosters to creatures or means to summon creatures, such as Cenobites or other beings"
    },
    {
      id: 5,
      bg_image: "/assets/images/home/banners/science_bg_image.png",
      title: "Magic Cards",
      subtitle: "Formulas, substances or spells",
      description: "These compounds can act as special items or elements that can modify the flow of the game. For example, in the image we show Re-Animator's re-agent"
    },
    {
      id: 6,
      bg_image: "/assets/images/home/banners/rituals_bg_image.jpg",
      title: "Rituals",
      subtitle: "Either to summon or increase Creatures Attack",
      description: "These cermonies have great power and have a lot of uses. We portrait one of the most popular: The Damballa's Ritual that allow the soul transference, either from a human to a doll and viceversa"
    },
    {
      id: 7,
      bg_image: "/assets/images/home/banners/cursed_items_bg_image.jpeg",
      title: "Cursed Objects",
      subtitle: "They contain Dark and Terrible Powers",
      description: "These items had been inflictted with powerful curses. Some contain Demons, others can cause harm and death to those who found them"
    },
    {
      id: 8,
      bg_image: "/assets/images/home/banners/traps_bg_image.jpeg",
      title: "Traps",
      subtitle: "cards that counters other player's moves",
      description: "These cards are able to counter other player's moves and even change the flow of the game, when player usea them on the right time"
    }
  ];

  constructor() { }

  ngOnInit() {}

}
