import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexedDbService {
  private dbName = 'admin';
  private dbVersion = 1;
  private db!: IDBDatabase;
  constructor() {
    console.log('Inside service class ctor:: Rupesh');
    this.openDatabase();
    this.initializeDatabase();

  }


  async openDatabase(): Promise<IDBDatabase> {
    console.log('Inside openDatabse:: Rupesh');
    return new Promise<IDBDatabase>((resolve, reject) => {
      const request: IDBOpenDBRequest = window.indexedDB.open(this.dbName, this.dbVersion);
      // request.onsuccess = (event: Event) => {
      //   console.log("Inside onSuccess callback");
      //   this.db = (event.target as IDBOpenDBRequest).result;
      //   console.log('Database opened successfully!');
      // };
      request.onsuccess = (event: any) => {
        console.log("seems that db is opened ! ");
        console.log(event)
        const db = event.target.result
        resolve(db)
      };

      // request.onerror = (event: Event) => {
      //   console.log("Inside onError callback");
      //   console.error('Database error:', (event.target as IDBOpenDBRequest).error);
      // };
      request.onerror = event => {
        console.log("can't open IndexedDB");
        console.log(event)
        reject()
      }

      // request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      //   const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;

      //   // Create an object store if it doesn't exist
      //   if (!db.objectStoreNames.contains('myObjectStore')) {
      //     db.createObjectStore('myObjectStore', { keyPath: 'id', autoIncrement: true });
      //   }
      // };

      request.onupgradeneeded = (event: any) => {
        console.log("onupgradeneeded fired")
        const db = event.target.result
        resolve(db)
      };


    })
  }

  // CRUD operations

  // Create
  public addItem(item: any): void {
    const transaction = this.db.transaction(['myObjectStore'], 'readwrite');
    const objectStore = transaction.objectStore('myObjectStore');
    const request = objectStore.add(item);

    request.onsuccess = (event) => {
      console.log('Item added successfully!');
    };

    request.onerror = (event) => {
      console.error('Error adding item:', (event.target as IDBRequest).error);
    };
  }

  // Read
  async getAllItems(): Promise<any[]> {
    await this.initializeDatabase();

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['myObjectStore'], 'readonly');

      const objectStore = transaction.objectStore('myObjectStore');
      const request = objectStore.getAll();

      request.onsuccess = (event) => {
        resolve((event.target as IDBRequest).result);
      };

      request.onerror = (event) => {
        reject((event.target as IDBRequest).error);
      };
    });
  }
  async initializeDatabase(): Promise<void> {
    if (!window.indexedDB)
      return console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.")
    else if (!this.db)
      this.db = await this.openDatabase();
  }

  // Update
  public updateItem(item: any): void {
    const transaction = this.db.transaction(['myObjectStore'], 'readwrite');
    const objectStore = transaction.objectStore('myObjectStore');
    const request = objectStore.put(item);

    request.onsuccess = (event) => {
      console.log('Item updated successfully!');
    };

    request.onerror = (event) => {
      console.error('Error updating item:', (event.target as IDBRequest).error);
    };
  }

  // Delete
  public deleteItem(id: number): void {
    const transaction = this.db.transaction(['myObjectStore'], 'readwrite');
    const objectStore = transaction.objectStore('myObjectStore');
    const request = objectStore.delete(id);

    request.onsuccess = (event) => {
      console.log('Item deleted successfully!');
    };

    request.onerror = (event) => {
      console.error('Error deleting item:', (event.target as IDBRequest).error);
    };
  }
}
