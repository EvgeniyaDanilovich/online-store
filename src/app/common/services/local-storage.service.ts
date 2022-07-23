import { Injectable } from '@angular/core';
import { LocalStorageKeys } from 'src/app/common/enums/local-storage-keys';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  setItem<T>(key: LocalStorageKeys, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: LocalStorageKeys): T | null {
    const item: string | null = localStorage.getItem(key);
    return this.convertToObject<T>(item);
  }

  removeItem(key: LocalStorageKeys): void {
    localStorage.removeItem(key);
  }

  clearStore(): void {
    localStorage.clear();
  }

  private convertToObject<T>(item: string | null): T | null {
    if (item === null) return null;
    return JSON.parse(item);
  }
}
