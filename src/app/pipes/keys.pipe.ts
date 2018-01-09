import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  pure: false
})
export class KeysPipe implements PipeTransform {

  transform( value: any ): any {

    let keys = [];
    // "value" es el objeto que viene de Firebase. Firebase no reresa un array, si no un Objeto con objetos dentro.
    for( let key in value ){
      keys.push(key)
    }
    return keys;

  }

}
