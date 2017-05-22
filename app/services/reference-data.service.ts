import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { EnvironmentConfig }  from './environment-config';

@Injectable()
export class ReferenceDataService {
  private baseUrl = '';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private config: EnvironmentConfig ){
    this.baseUrl = config.movieApiUrl() + '/api/referenceData';
  }

  getCategories(): Promise<string[]> {
    return this.http.get(this.baseUrl + '/categories')
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  };

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // todo use toastr + log
    return Promise.reject(error.message || error);
  }

}