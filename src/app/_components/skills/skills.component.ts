import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { SkillsService, AuthenticationService } from 'src/app/_services';
import { ISkills } from 'src/app/_types';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent implements OnInit {

  skills: ISkills[];
  loading = true;
  displayedColumns: string[] = [
    'name',
    'description',
    'type',
  ];

  constructor(private skillsService: SkillsService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.skillsService.getAll().pipe(first())
      .subscribe(
        data => {
          this.skills = data;
          this.loading = false;
        });
  }

}
