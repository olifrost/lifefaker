import {EventEmitter} from "events";

import AppConstants from "../constants/AppConstants"
import AppDispatcher from "../dispatcher/AppDispatcher";

const CHANGE_EVENT = "change";

EventEmitter.defaultMaxListeners = 15;

class AppStore extends EventEmitter{
  constructor(){
    super();
    this.items = [];
    this.activeSlide = 0;
    this.goToNextSlide = false;
    this.isRevealShown = -1;
  }

  addItem(item){
    this.items.push(item);
    this.emit(CHANGE_EVENT);
  }

  revealShown(bool){
    this.isRevealShown = bool;
    if(bool > -1)this.emit(CHANGE_EVENT);
  }

  removeItem(item){
    let _items = this.items;

    for(var i = 0; i < _items.length; i++){
      if(item.imageURL === this.items[i].imageURL){
        _items.splice(i, 1);
      }
    }
    this.items = _items;
    this.emit(CHANGE_EVENT);
  }

  activateSlide(index){
    this.activeSlide = index;
    this.emit(CHANGE_EVENT);
  }

  nextSlide(bool){
    this.goToNextSlide = bool;
    this.emit(CHANGE_EVENT);

    this.goToNextSlide = false;
    this.activateSlide(1);
  }

  getItems(){
      return this.items;
  }

  getRevealStatus(){
    return this.isRevealShown;
}

  getActiveSlide(){
      return this.activeSlide;
  }

  getGotToNextSlide(){
      return this.goToNextSlide;
  }

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  handleActions(action){
    // console.log('handleActions : ',action);
    switch(action.type){
      case AppConstants.NEXT_SLIDE: {
        this.nextSlide(action.bool);
        break;
      }
      case AppConstants.REVEAL_SHOWN: {
        this.revealShown(action.bool);
        break;
      }
      case AppConstants.ADD_ITEM: {
        this.addItem(action.item);
        break;
      }
      case AppConstants.REMOVE_ITEM: {
        this.removeItem(action.item);
        break;
      }
      case AppConstants.ACTIVATE_SLIDE: {
        this.activateSlide(action.index);
        break;
      }
    }
  }

}

// AppStore.setMaxListeners(20);

const appStore = new AppStore();

AppDispatcher.register(appStore.handleActions.bind(appStore));

export default appStore;
