import { observer, inject } from 'mobx-react';



const Home = inject('testStore')(observer(({testStore}) => (
    <div>
        <h2>Home</h2>
        <p>{testStore.value }</p>
    </div>
)));

export default Home;