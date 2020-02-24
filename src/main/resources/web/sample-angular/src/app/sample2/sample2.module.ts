import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { Sample2RoutingModule } from './sample2-routing.module';
import { Sample2Component } from './sample2.component';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';



@NgModule({

  declarations: [Sample2Component],
  imports: [
    CommonModule
    ,FormsModule
    ,ReactiveFormsModule
    ,Sample2RoutingModule
    ,MatFormFieldModule
    ,MatCheckboxModule
    ,MatInputModule
    ,MatRadioModule
    ,MatSelectModule
    ,MatIconModule
  ]
})
export class Sample2Module { }
