import { Component } from '@angular/core';
import { Character } from '../../models/character';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  character: Array<Character>= [
    {
      id: 1,
      name: 'Sasuke',
      clan: 'Uchiha',
      affiliation: [' Konohagakure', ' Otogakure', ' Ryūchi Cave', ' Akatsuki'],
      mainAffiliation: 'konoha',
      nature: [' Lightning', ' Fire', ' Wind', ' Earth', ' Water'],
      patent: 'Genin',
      mission: 34,
      kill: 85,
      img: 'https://lh4.googleusercontent.com/9eMLU-SQRYtQNr8U0A7jOjLqoyqoIavtcutERnf0jn1HXSQyjXIfumcBlpWUe19U_h-uf3s8Ypn2FpgoOHxJR4OtirYT3Gaz9jkxrmQjnZFBgzfZnTVb7pIeCNsczcDJzOlMhoB9qFhB6f4vyi8eONJYKs695x7TJZJ-QXt8KXAuss3GRR1zr42jmFeanQ',
    },
    {
      id: 2,
      name: 'Kakashi',
      clan: 'Hatake',
      affiliation: [' Konohagakure', ' Root', ' Allied Shinobi Forces'],
      mainAffiliation: 'konoha',
      nature: [' Lightning', ' Fire', ' Wind', ' Earth', ' Water'],
      patent: 'Hokage',
      mission: 571,
      kill: 1298,
      img: 'https://criticalhits.com.br/wp-content/uploads/2021/04/Kakashi_Boruto.jpg',
    },
    {
      id: 3,
      name: 'Obito',
      clan: 'Uchiha',
      affiliation: [' Konohagakure', ' Akatsuki', ' Kirigakure'],
      mainAffiliation: 'konoha',
      nature: [' Lightning', ' Fire', ' Wind', ' Earth', ' Water', ' Wood'],
      patent: 'Chunin',
      mission: 47,
      kill: 1284,
      img: 'https://staticg.sportskeeda.com/editor/2023/02/fc8d6-16756653708400-1920.jpg',
    },
    {
      id: 4,
      name: 'Naruto',
      clan: 'Uzumaki',
      affiliation: [
        ' Konohagakure',
        ' Mount Myōboku',
        ' Allied Shinobi Forces',
      ],
      mainAffiliation: 'konoha',
      nature: [' Lightning', ' Fire', ' Wind', ' Earth', ' Water', ' Wood'],
      patent: 'Hokage',
      mission: 247,
      kill: 70,
      img: 'https://sm.ign.com/ign_br/screenshot/default/naruto-boruto_bpec.jpg',
    },
    {
      id: 5,
      name: 'Kurotsuchi',
      clan: 'Kamizuru',
      affiliation: [' Iwagakure', ' Allied Shinobi Forces'],
      mainAffiliation: 'iwa',
      nature: [' Fire', ' Earth', ' Water'],
      patent: 'Tsuchikage',
      mission: 742,
      kill: 148,
      img: 'https://staticg.sportskeeda.com/editor/2022/09/b511d-16632473097456.png',
    },
    {
      id: 6,
      name: 'Shikamaru',
      clan: 'Nara',
      affiliation: [' Konohagakure', ' Allied Shinobi Forces'],
      mainAffiliation: 'konoha',
      nature: [' Fire', ' Earth'],
      patent: 'Jonin',
      mission: 428,
      kill: 75,
      img: 'https://nerdhits.com.br/wp-content/uploads/2021/09/shikamaru-hokage-768x402.jpg',
    },
    {
      id: 7,
      name: 'Suigetsu',
      clan: 'Hōzuki',
      affiliation: [' Kirigakure', ' Otogakure', ' Akatsuki'],
      mainAffiliation: 'kiri',
      nature: [' Wind', ' Water'],
      patent: 'Genin',
      mission: 49,
      kill: 173,
      img: 'https://64.media.tumblr.com/0317e8b559c52f4aa40a1f96517a954c/tumblr_pcmmzbaXWU1wjlimbo1_1280.png',
    },
    {
      id: 8,
      name: 'Yagura',
      clan: 'Karatachi',
      affiliation: [' Kirigakure'],
      mainAffiliation: 'kiri',
      nature: [' Wind', ' Water'],
      patent: 'Mizukage',
      mission: 579,
      kill: 879,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ZzMjlD3bKfPmwpjd_h6D_-63qq9bDHqjeg&usqp=CAU',
    },
  ];
}