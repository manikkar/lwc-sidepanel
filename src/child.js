import { LightningElement, api } from "lwc";

/**
 * Show an item
 */
export default class Child extends LightningElement {

 openpanel = false;
  icon = `utility:chevronright`;

 handlepanel(){
   this.openpanel = !this.openpanel;
   this.icon = this.openpanel ? `utility:chevronleft`:`utility:chevronright`;
 }

    @api title = '';
    @api position = 'left';
    @api size = 'medium';
    @api open = false;
    @api customHeader = false;
    @api hideHeader = false;
    @api fullHeight = false;

    connectedCallback(){
      console.log(this.panelClass);
    }
    
    get panelClass(){
        return `slds-panel slds-size_${this.size} slds-panel_docked ${this.position === 'left' ? ' slds-panel_docked-left ' : ' slds-panel_docked-right '} ${this.open ? ' slds-is-open ' : ''} ${this.fullHeight ? ' full-height ' : ''}` ;
    }
    get displayHeader(){
        return !this.hideHeader && !this.customHeader;
    }
    handleCloseClick(){
        this.dispatchEvent(new CustomEvent('close'));
    }
}
