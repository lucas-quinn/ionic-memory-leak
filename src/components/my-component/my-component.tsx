import { Component, Host, State, h } from '@stencil/core';


@Component({
  tag: 'my-component',
  shadow: true,
})
export class MyComponent {

  @State()
  isOpen = false;


  handler = () => {
    // we can set internal to trigger this indifinitely so you don't need to click


    setInterval(() => {
      this.isOpen = !this.isOpen;
    }, 10);


    // this.isOpen = !this.isOpen;
  }


  render() {
    return (
      <Host>

        <button onClick={this.handler}>Trigger Leak</button>
        <br />
        {/* this kind of leak happens in prod too */}
        {this.isOpen && <ion-tabs>
          <ion-tab tab="home">
            <ion-nav></ion-nav>
          </ion-tab></ion-tabs>}

        {/* this kind of leaking only happens in dev environment so it is not that big, but still, it's very hard to difficate if it's dev only, so it makes the dev experience very bad. */}
        {/* {this.isOpen && <ion-button>Test</ion-button>} */}
      </Host>
    );
  }
}
