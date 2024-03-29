//app.js
import MyNameComponent from './components/myName.js';
import CheckComponent from './components/check.js';
import RefComponent from './components/ref_parent.js';
import SoltComponent from './components/slot_parent.js';

const { createApp } = Vue

const template=`
    <div>
        <!-- <MyNameComponent /> -->
        <!-- <CheckComponent /> -->
        <!-- <RefComponent /> -->
        <SoltComponent />
    </div>
`;

createApp({
    template,
    components : {
        MyNameComponent,
        CheckComponent,
        RefComponent,
        SoltComponent
    }
})
.mount('#app');