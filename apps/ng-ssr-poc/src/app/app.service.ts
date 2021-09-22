import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(@Inject(DOCUMENT) private readonly doc: Document) {}

  public getWindow(): Window | null {
    return this.doc.defaultView;
  }

  public getLocation(): Location {
    return this.doc.location;
  }

  public getBody(): HTMLElement {
    return this.doc.body;
  }
}
