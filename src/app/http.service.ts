import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    //,'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private http: HttpClient) { }

  /** GET request*/
  getRequest(url: any): Observable<any> {
    return this.http.get<any>(url);
  };

  /** POST request*/
  postRequest(url: any, data: any): Observable<any> {
    console.log("Post Data",data);
    return this.http.post<any>(url, data, httpOptions);
  }

  /** DELETE request*/
  deleteRequest(url: any): Observable<{}> {
    //const url = `${this.heroesUrl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url, httpOptions);
  }
  /** UPDATE request*/
  updatetRequest(url: any, data: any): Observable<any> {
    return this.http.post<any>(url, data, httpOptions);
  }

  // errorHandler(err: HttpErrorResponse) {
  //   return Observable.throw(err.message || "Server Error");
  // }

  private authInterceptor(observable: Observable<Response>): Observable<Response> {
    return observable.pipe(
      catchError(err => {
        if (err.status == 401) {
          return EMPTY;
        } else {
          return throwError(err.message || "Server Error");
        }
      })
    );
  }

}
