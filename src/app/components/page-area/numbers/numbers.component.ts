import { Component } from '@angular/core';
import { GeneratorService } from '../../../services/genrator.service';
import { CommonModule } from '@angular/common';
import { filter, first, map, take, takeLast } from 'rxjs';
@Component({
  selector: 'app-numbers',
  imports: [CommonModule],
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.css'
})
export class NumbersComponent {
  public num1:number=0;
  public num2:number=0;
  public num3:number=0;
  public arr: number[] = [];


  public constructor(private generator:GeneratorService){}
  public gen1(){
    try{
      this.num1 = this.generator.getRandomNumber();
    }
    catch (err:any) {
      alert(err.message);
    }
  }
//   public gen2(){
//     this.generator.getRandomNumberDelayed()
//         .then(n => this.num2 = n)
//         .catch(err => alert(err.message));
//   }
// }

public async gen2() {
  try{
  this.num2 = await this.generator.getRandomNumberDelayed();
}
catch (err: any) {
  alert(err.message);
}
}
public async gen3() {
  try {
      const observable = this.generator.getRandomNumbersDelayed(20);
      // observable.subscribe({
      //     next: n => this.arr.push(n),
      //     error: err => alert(err.message),
      //     complete: () => alert("Done")
      // });

    //   observable.pipe(filter(n => n % 2 == 0)).subscribe({
    //     next: n => this.arr.push(n),
    //     error: err => alert(err.message),
    //     complete: () => alert("Done")
    // });

  //   observable.pipe(map(n => n **2)).subscribe({
  //     next: n => this.arr.push(n),
  //     error: err => alert(err.message),
  //     complete: () => alert("Done")
  // });

  
//   observable.pipe(take(5)).subscribe({
//     next: n => this.arr.push(n),
//     error: err => alert(err.message),
//     complete: () => alert("Done")
// });


// Start observable but report only last 5 numbers:
observable.pipe(takeLast(5)).subscribe({ // Observable start
  next: n => this.arr.push(n),
  error: err => alert(err.message),
  complete: () => alert("Done")
});
    
  }
  catch (err: any) {
      alert(err.message);
  }
}
}