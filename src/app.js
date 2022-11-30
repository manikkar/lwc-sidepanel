import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Welcome to Lightning Web Components!";

  showFeatures = true;
  openpanel = false;
  icon = `utility:chevronright`;

 handlepanel(){
   this.openpanel = !this.openpanel;
   this.icon = this.openpanel ? `utility:chevronleft`:`utility:chevronright`;
 }
  /**
   * Getter for the features property
   */
  get features() {
    return [
      {
        label: "Learn in the browser.",
        icon: "utility:edit",
      },
      {
        label: "View changes to code instantly with Live Compilation.",
        icon: "utility:refresh",
      },
      {
        label: "Style your components with SLDS.",
        icon: "utility:brush",
      },
    ];
  }
}
