
import { action, makeObservable, observable} from 'mobx';

class Store {   
    
    constructor(value) {
        this.value = value;
        makeObservable(this, {
            value: observable,
            __set: action
        });
    }

    __set(v) {
        this.value = v;
    }

    setValue(v) {
        this.__set(v);
    }
}

window.testStore = new Store('test');

export default window.testStore;