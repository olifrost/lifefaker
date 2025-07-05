import AppDispatcher from "../dispatcher/AppDispatcher";
import AppConstants from "../constants/AppConstants";

export function addItem(item){
  AppDispatcher.dispatch({
    type:AppConstants.ADD_ITEM,
    item:item
  })
}

export function removeItem(item){
  AppDispatcher.dispatch({
    type:AppConstants.REMOVE_ITEM,
    item:item
  })
}

export function activateSlide(index){
  AppDispatcher.dispatch({
    type:AppConstants.ACTIVATE_SLIDE,
    index:index
  })
}

export function nextSlide(bool){
  AppDispatcher.dispatch({
    type:AppConstants.NEXT_SLIDE,
    bool:bool
  })
}

export function revealShown(bool){
  AppDispatcher.dispatch({
    type:AppConstants.REVEAL_SHOWN,
    bool:bool
  })
}
