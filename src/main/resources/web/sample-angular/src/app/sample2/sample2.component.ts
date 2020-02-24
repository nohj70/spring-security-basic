import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.scss']
})
export class Sample2Component implements OnInit {

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');


  username: string;
  password: string;

  constructor(fb: FormBuilder) {
    console.log('asdf');
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

  ngOnInit(): void {
    console.log('asdf');
  }

}
