import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <div class= "container block">
    <div class="container">
      <br>
      <h1>Temperature Converter</h1>
      <label for="#degreeInput">Enter Starting Degree</label>
      <br>
      <input type="text" #degreeInput />
    </div>
    <br>
    
    <div class="row">
    <button class="btn btn-primary col-4" (click)="convertFtoC(degreeInput.value)">Farenheit to Celsius</button>
    <br/>
    <button class="btn btn-success col-4" (click)="convertCtoF(degreeInput.value)">Celsius to Fahrenheit</button>
    <br/>
    <button class="btn btn-danger col-4" (click)="convertFtoK(degreeInput.value)">Fahrenheit to Kelvin</button>
    <br/>
    <button class="btn btn-success col-4" (click)="convertKtoF(degreeInput.value)">Kelvin to Fahrenheit</button>
    <br/>
    <button class="btn btn-danger col-4" (click)="convertCtoK(degreeInput.value)">Celsius to Kelvin</button>
    <br/>
    <button class="btn btn-primary col-4" (click)="convertKtoC(degreeInput.value)">Kelvin to Celsius</button>
    <br/>
    </div>
    <br>



    <div>
      <p #degreeOutput>Resulting Degree</p>
    @if(isC){  
      <p>{{celsius}}&#8451;</p>
    } @else if (isF){
      <p>{{fahrenheit}}&#8457;</p>
    } @else if (isK) {
      <p>{{kelvin}}&#8490;</p>
    } @else {
      <p>Degree to be Displayed</p>
    }

    </div>
    </div>
  `,
  styles: `
   .block{border: 2px solid black;}
   .block{background-color:cornsilk;}
  `,
})
export class App {
  name = 'Angular';
  fahrenheit: string = '';
  celsius: string = '';
  kelvin: string = '';
  isC: boolean = false;
  isF: boolean = false;
  isK: boolean = false;

  convertFtoC(value: string) {
    let valueNum = parseInt(value);
    let answer = (5 / 9) * (valueNum - 32);
    this.celsius = answer.toFixed(2);
    this.changeActiveDegree(1);
  }
  convertCtoF(value: string) {
    let valueNum = parseInt(value);
    let answer = 1.8 * valueNum + 32;
    this.fahrenheit = answer.toFixed(2);
    this.changeActiveDegree(2);
  }
  convertFtoK(value: string) {
    let valueNum = parseInt(value);
    let answer = (5 / 9) * (valueNum - 32) + 273.15;
    this.kelvin = answer.toFixed(2);
    this.changeActiveDegree(3);
  }
  convertKtoF(value: string) {
    let valueNum = parseInt(value);
    let answer = (9 / 5) * (valueNum - 273.15) + 32;
    this.fahrenheit = answer.toFixed(2);
    this.changeActiveDegree(2);
  }
  convertKtoC(value: string) {
    let valueNum = parseInt(value);
    let answer = valueNum - 273.15;
    this.celsius = answer.toFixed(2);
    this.changeActiveDegree(1);
  }
  convertCtoK(value: string) {
    let valueNum = parseInt(value);
    let answer = valueNum + 273.15;
    this.kelvin = answer.toFixed(2);
    this.changeActiveDegree(3);
  }
  changeActiveDegree(choice: number) {
    switch (choice) {
      case 1: //celsius
        this.isC = true;
        this.isF = false;
        this.isK = false;
        break;
      case 2: //Fahrenheit
        this.isC = false;
        this.isF = true;
        this.isK = false;
        break;
      case 3: //Kelvin
        this.isC = false;
        this.isF = false;
        this.isK = true;
        break;
      default: //Default
        this.isC = false;
        this.isF = false;
        this.isK = false;
    }
  }
}

bootstrapApplication(App);
