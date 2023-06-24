import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expiredColor'
})
export class ExpiredColorPipe implements PipeTransform {

  transform(expiryDate: string): string {
    const currentDate = new Date();
    const expiry = new Date(expiryDate);

    if (expiry.getTime() < currentDate.getTime()) {
      return 'red';
    }

    return '';
  }

}
