import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  // userSignUp(user: any){
  //   this.http.post('http://localhost:1025/auth/signup', user).subscribe((responseData) =>{
  //     console.log("Result:: ", responseData);
  //     if(responseData["status"] == "success"){
  //       if(responseData["data"]["userType"] == "manager"){
  //          this.router.navigate(['/managerlog']);

  //       }else if (responseData["data"]["userType"] == "customer"){
  //         var UserName = responseData["data"]["username"];
  //         this.router.navigate(['/customer', UserName]);
  //       }
  //     }
  //   });
  // }

  // userSignIn(user: any){
  //   this.http.post('http://localhost:1025/auth/signin', user).subscribe((responseData) =>{
  //     console.log("Result:: ", responseData);
  //     // console.log("password:: ", responseData["data"]["password"]);
  //     if(responseData["status"] == "success"){
  //       if(responseData["data"]["userType"] == "manager"){
  //          this.router.navigate(['/managerlog']);

  //       }else if (responseData["data"]["userType"] == "customer"){
  //         var UserName = responseData["data"]["username"];
  //         this.router.navigate(['/customer', UserName]);
  //       }
  //     }
  //   });
  // }

}
