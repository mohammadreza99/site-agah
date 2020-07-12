import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Constants {
  public readonly API_URL: string = 'http://192.168.10.207:9090/api/';
}
