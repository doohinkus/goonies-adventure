import { Component, OnInit } from '@angular/core';
import { Choice } from '../choice.model';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { PathfinderService } from '../pathfinder.service';

@Component({
  selector: 'app-mikey',
  templateUrl: './mikey.component.html',
  styleUrls: ['./mikey.component.css'],
  providers: [PathfinderService]
})
export class MikeyComponent implements OnInit {

  choices: Choice[];

   constructor(private router: Router, private PathfinderService: PathfinderService){}

  ngOnInit() {
     this.choices = this.PathfinderService.getChoices();
  }
  goToDetailPage(clickedChoice: Choice) {
    this.router.navigate(['results', clickedChoice.id]);
  };

}
