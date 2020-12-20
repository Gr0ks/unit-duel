
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

    async getFromServer() {
        const resp = await fetch(`http://localhost:8080/api/v0`)
        if (resp.ok) {
            const r = await resp.json()
            console.log(r)
            this.__set(r.version)
        }
        
    }
}

window.testStore = new Store('test');

export default window.testStore;