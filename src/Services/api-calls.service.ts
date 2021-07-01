import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/interfaces/model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(private http: HttpClient,private router:Router) { }

  setDetailsData(body: Product){
    let url=`#`;
    return this.http.post(url,body);
  }
  getDetailsData(){
    let url=`https://run.mocky.io/v3/bee73507-bc00-4ad8-aaf4-fb7c0b3bba2e`;
    return this.http.get(url);
  }

  login(username: string, password: string) {  
    if (username == "admin" && password == "pass@123") {  
       localStorage.setItem('token', "1092837465");  
    }
  }  
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }  
  public get loggedIn(): boolean {  
    return (localStorage.getItem('token') !== null);  
  }  
}
