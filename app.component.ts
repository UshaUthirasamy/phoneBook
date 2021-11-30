import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'phoneBookConverter';

code :string ='';
number :string ='';
result :string = '';
get(code: string, number: string) {
this.code = code;
this.number = number;
if (this.code.includes("91")) {
// India
this.code = "+"+code;
let firstHalf = number.slice(0,5);
let secondHalf = number.slice(5,10);
console.log("FirstHalf = ",firstHalf);
console.log("SecondHalf = ",secondHalf);
this.result = this.code+"-"+firstHalf+"-"+secondHalf;
} else if(this.code.includes("212")) {
// Morocco
this.code = "+"+code;
let firstHalf = number.slice(0,3);
let secondHalf = number.slice(3,5);
let thirdHalf = number.slice(5,7);
let fourHalf = number.slice(7,9);
this.result = this.code+"-"+firstHalf+"-"+secondHalf+"-"+thirdHalf+"-"+fourHalf;
} else {
// +30 Greece
this.code = "+"+code;
let firstHalf = number.slice(0,3);
let secondHalf = number.slice(3,10);
this.result = this.code+"-"+firstHalf+"-"+secondHalf;
}
}

}