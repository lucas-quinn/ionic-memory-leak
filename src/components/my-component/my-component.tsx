import { Component, State, h } from '@stencil/core';


@Component({
  tag: 'my-component',
  // shadow: true,
})
export class MyComponent {

  @State()
  isOpen = false;


  handler = () => {
    // we can set internal to trigger this indifinitely so you don't need to click


    // setInterval(() => {
    //   this.isOpen = !this.isOpen;
    // }, 100);


    this.isOpen = !this.isOpen;
  }


  render() {
    return (
      <div>
        <button onClick={this.handler}>Trigger Leak</button>
        {/* ion-button can be other element like ion-searchbar. and can be other stencil component too. */}
        <br />
        {this.isOpen && <ion-button>here</ion-button>}
      </div>
    );
  }
}
