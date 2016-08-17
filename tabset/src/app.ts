import { Component } from '@angular/core';
import { TAB_COMPONENTS  } from './Tabset';


@Component({
  selector: 'app',
  template: `
    <div>
      <tabset>
        <tab title="Dog">
          <blink>Dogs are my fav!</blink>
        </tab>
        <tab title="Panda">
          Pandas are cool animals
        </tab>
        <tab title="Duck">
          Ducks are cool animals too
        </tab>
      </tabset>
    </div>
  `,
  directives: [ TAB_COMPONENTS ]
})
export class App {

}
