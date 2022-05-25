import {
  HttpClient,
  HttpContext,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // postUsers(data: any) {
  //   return this.http.post<any>(`http://localhost:3000/signupUsers`, data).pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }

  // getUsers() {
  //   return this.http.get<any>(`http://localhost:3000/signupUsers`).pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }

  postStudents(data: any) {
    return this.http.post<any>(`http://localhost:3000/posts`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getStudents() {
    return this.http.get<any>(`http://localhost:3000/posts`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateStudents(data: any, id: number) {
    return this.http.put<any>(`http://localhost:3000/posts/` + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteStudents(id: number) {
    return this.http.delete<any>(`http://localhost:3000/posts/` + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  wishlistDetails() {
    return this.http.get<any>(`http://localhost:3000/posts`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
