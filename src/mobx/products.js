import {action, makeObservable, observable} from 'mobx';
import prodList from '../data/prodList';

class Products {
  list = prodList;

  constructor() {
    makeObservable(this, {
      list: observable,
      addProduct: action,
      removeProduct: action,
      changeCnt: action
    });
  }

  addProduct(id, cnt) {
    this.list.find(el => el.id === id).count = cnt;
    this.list.find(el => el.id === id).added = true;
  }

  changeCnt(id, newVal){
    this.list.find(el => el.id === id).count = newVal;
  }

  removeProduct(id) {
    this.list.find(el => el.id === id).added = false;
  }
}

const products = new Products();

export default products;
