import {PipeTransform,Pipe} from '@angular/core';

@Pipe({name:'shorten',
       pure: false}) //Performance issues for Pure... reloading the page
export class ShortenPipe implements PipeTransform{
   transform(value: any, limit:number) {
       if (value.length>limit)
        return value.substr(0,limit) + " ..."
       return value;
   }
}