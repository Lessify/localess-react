<br/>
<br/>
<img src="https://github.com/Lessify/localess/wiki/img/logo-adaptive.svg" alt="logo">
<br/>
<br/>

----

# Localess React

This client SDK is designed to work with the Localess API. It provides a simple way to interact with the Localess API from your React application.

## Installation

### NPM
````bash
npm install @localess/react
````

### Yarn
````bash
yarn add @localess/react
````

## Usage



### Visual Editor Enable
You can inject `BrowserVisualEditorService` in your main/app components.
It will help to load all required scripts to enable Visual Editor sync.

````ts
import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {BrowserVisualEditorService} from "@localess/angular/browser";

@Component({
  selector: 'll-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet></router-outlet> `,
})
export class AppComponent implements OnInit {
  constructor(
    private readonly visualEditorService: BrowserVisualEditorService
  ) {
  }

  ngOnInit(): void {
    this.visualEditorService.init()
  }
}
````

### Listen for Visual Editor Events
Your application can subscribe to the Localess Visual Editor Events :
````ts
@Component({
  selector: 'll-slug',
  standalone: true,
  templateUrl: 'slug.component.html',
  styleUrl: 'slug.component.scss',
})
export default class SlugComponent implements OnInit {
  platformId = inject(PLATFORM_ID)
  editorData = signal<any | undefined>(undefined);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // check if you are in Framework Edit Mode
      const isDraftMode = true;
      if (isDraftMode && window.localess) {
        window.localess.on(['input', 'change'], (event) => {
          if (event.type === 'input' || event.type === 'change') {
            this.editorData.set(event.data);
          }
        });
      }
    }
  }
}
````
