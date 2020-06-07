import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,

  didInsertElement() {
    let firstInput = this.element.querySelector('input');
    if (firstInput) {
      firstInput.focus();
    }
  }
});
