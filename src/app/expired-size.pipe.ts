import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expiredSize'
})
export class ExpiredSizePipe implements PipeTransform {

  transform(expiryDate: string): string {
    const currentDate = new Date();
    const expiry = new Date(expiryDate);

    if (expiry.getTime() < currentDate.getTime()) {
      return '18px';
    }

    return '';
  }

}
