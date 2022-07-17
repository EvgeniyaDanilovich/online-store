import { Injectable } from '@angular/core';
import { LocalStorageKeys } from 'src/app/common/enums/local-storage-keys';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  setItem<T>(key: LocalStorageKeys, value: string):void{
    localStorage.setItem(key, value);
  }

    getItem<T>(key: LocalStorageKeys): T{
       return  localStorage.getItem(key);
  }

  removeItem(key: LocalStorageKeys):void{
    localStorage.removeItem(key);
  }
}
