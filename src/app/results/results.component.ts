import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Choice } from '../choice.model';
import { PathfinderService } from '../pathfinder.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  providers: [PathfinderService]
})
export class ResultsComponent implements OnInit {
  pathId: number;
  pathToDisplay: Choice;
  constructor(
 private route: ActivatedRoute,
 private location: Location,
 private pathfinderService: PathfinderService
) {}

  ngOnInit() {
 this.route.params.forEach((urlParametersArray) => {
  this.pathId = parseInt(urlParametersArray['id']);
});
  this.pathToDisplay = this.pathfinderService.getChoiceById(this.pathId);

}
}
