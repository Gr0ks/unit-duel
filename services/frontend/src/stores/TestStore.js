
import { action, makeObservable, observable} from 'mobx';

class Store {   
    
    constructor(value) {
        this.value = value;
        makeObservable(this, {
            value: observable,
            set: action
        });
    }

    set(v) {
        this.value = v;
    }
}

window.testStore = new Store('test');

export default window.testStore;