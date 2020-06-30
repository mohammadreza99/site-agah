import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Constants {
  public readonly API_ENDPOINT: string = 'domain/api';
  public readonly API_MOCK_ENDPOINT: string = 'mock-domain/api';
}
