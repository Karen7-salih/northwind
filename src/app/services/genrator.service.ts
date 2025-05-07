import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  public getRandomNumber():number{
    const num = Math.floor(Math.random()*100);
    if(Math.random() <0.5) throw new Error("something bad girl...")
    return num; 
  }
  public getRandomNumberDelayed():Promise<number>{
    return new Promise<number>((resolve,reject)=>{
      setTimeout(()=>{
        const num = Math.floor(Math.random()*100);
        if(Math.random() < 0.5) {
          reject(new Error("something bad girl..."))
        }
        resolve(num);
      },1000)
    })
    
  }


  public getRandomNumbersDelayed(count: number):Observable<number>{
    return new Observable<number>((observer: Observer<number>)=>{
      const timerId = setInterval(() => {

        if(count <= 0) {
          clearInterval(timerId);
          observer.complete();
          return;
        }
      })
      setInterval(()=>{
        const num = Math.floor(Math.random()*100);
        // if(Math.random() < 0.5) {
        //   observer.error(new Error("something bad girl..."))
        //   return;
        // }

        observer.next(num);
        count--;
      },1000)
    })
    
  
}
}
  