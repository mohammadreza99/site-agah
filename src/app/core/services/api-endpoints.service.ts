import { Injectable } from '@angular/core';

import { Constants } from '../config/constants';
import { UrlBuilder } from 'src/app/shared/models/url-builder';
import { QueryStringParameters } from 'src/app/shared/models/query-string-parameters';

@Injectable({
  providedIn: 'root',
})
export class ApiEndpointsService {
  constructor(private constants: Constants) {}

  private createUrl(action: string, isMockAPI: boolean = false): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      isMockAPI
        ? this.constants.API_MOCK_ENDPOINT
        : this.constants.API_ENDPOINT,
      action
    );
    return urlBuilder.toString();
  }
  // URL WITH QUERY PARAMS
  private createUrlWithQueryParameters(
    action: string,
    queryStringHandler?: (queryStringParameters: QueryStringParameters) => void
  ): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.constants.API_ENDPOINT,
      action
    );
    // Push extra query string params
    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }
    return urlBuilder.toString();
  }

  // URL WITH PATH VARIABLES
  private createUrlWithPathVariables(
    action: string,
    pathVariables: any[] = []
  ): string {
    let encodedPathVariablesUrl = '';
    // Push extra path variables
    for (const pathVariable of pathVariables) {
      if (pathVariable !== null) {
        encodedPathVariablesUrl += `/${encodeURIComponent(
          pathVariable.toString()
        )}`;
      }
    }
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.constants.API_ENDPOINT,
      `${action}${encodedPathVariablesUrl}`
    );
    return urlBuilder.toString();
  }

  ////////////////////////////// USAGE //////////////////////////////
  public getNewsEndpoint1(): string {
    return this.createUrl('news'); // https://domain.com/api/news
  }

  public getNewsEndpoint2(): string {
    return this.createUrl('news', true); // https://mock-domain.com/api/news
  }

  public getProductListByCountryAndPostalCodeEndpoint(
    countryCode: string,
    postalCode: string
  ): string {
    return this.createUrlWithQueryParameters(
      'productlist',
      (qs: QueryStringParameters) => {
        qs.push('countryCode', countryCode);
        qs.push('postalCode', postalCode);
      }
    ); // https://domain.com/api/productlist?countrycode=en&postalcode=12345
  }

  public getDataByIdAndCodeEndpoint(id: string, code: number): string {
    return this.createUrlWithPathVariables('data', [id, code]); // https://domain.com/api/data/12/67
  }

  // Now, go to a component and use them all together.
  // constructor(
  //   private apiHttpService: ApiHttpService,
  //   private apiEndpointsService: ApiEndpointsService
  // ) {
  // ngOnInit() {
  //   this.apiHttpService
  //       .get(this.apiEndpointsService.getNewsEndpoint())
  //       .subscribe(() => {
  //         console.log('News loaded'))
  //       });
  // }
}
