import Vue from 'vue';
import Component from 'vue-class-component';
import {
  QBtn,
  QIcon,
} from 'quasar';

@Component({
  name: 'error404',
  components: {
    QBtn,
    QIcon,
  },
})
export default class Error404 extends Vue {
  get canGoBack(): boolean { return window.history.length > 1; }

  public goBack(): void {
    window.history.go(-1);
  }
}
