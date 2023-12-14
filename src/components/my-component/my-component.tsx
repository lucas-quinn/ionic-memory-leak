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
        {this.isOpen && <ion-tabs>
          <ion-tab tab="home">
            <ion-nav></ion-nav>
          </ion-tab></ion-tabs>}
      </Host>
    );
  }
}
