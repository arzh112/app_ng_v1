import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from './ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  url = "http://127.0.0.1:8000/api/categories";

  fetchAll() {
    return this.httpClient.get<ICategory[]>(this.url);
  }

  addCategory(newName: string){
    const category = {name: newName};
    return this.httpClient.post<ICategory>(this.url, category);
  }
}
