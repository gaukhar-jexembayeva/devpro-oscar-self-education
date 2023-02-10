import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {apiResponse} from "../models/data.model";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {
  }

  getUsers = (): Observable<apiResponse> => {
    return this.http.get<apiResponse>("https://reqres.in/api/users");
  };
}
