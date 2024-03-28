//app.js
import MyNameComponent from './components/myName.js';
import CheckComponent from './components/check.js';
import RefComponent from './components/ref_parent.js';

const { createApp } = Vue

const template=`
    <div>
        <!-- <MyNameComponent /> -->
        <!-- <CheckComponent /> -->
        <RefComponent />
    </div>
`;

createApp({
    template,
    components : {
        MyNameComponent,
        CheckComponent,
        RefComponent
    }
})
.mount('#app');