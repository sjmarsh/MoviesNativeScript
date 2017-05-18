import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';


@Injectable()
export class ReferenceDataService {
  //private baseUrl = environment.movieApiUrl + '/api/referenceData';
  private baseUrl = '';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http){
    var env = this.getEnvironmentData();
    this.baseUrl = env.movieApiUrl + '/api/movies';
  }

  private getEnvironmentData(): any{
    let data = {};
    this.http.get('../environment.json').subscribe(env =>  data = env.json());
    return data;
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