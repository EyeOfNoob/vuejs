//app.js
// => Root Component
import RawComponent from './raw.js';
import InputComponent from './input.js';
import ModelComponent from './exam01.js';
import listComponent from './list.js';
import ForComponent from './exam02.js';
import IfComponent from './if.js';
import EventComponent from './event.js';
import WatchComponent from './watch.js';

const { createApp } = Vue

const template =`
<div>
    <!-- 자식 컴포넌트 추가 -->
    <!-- <RawComponent/> -->
    <!-- <InputComponent /> -->
    <!-- <ModelComponent /> -->
    <!-- <listComponent /> -->
    <!-- <ForComponent /> -->
    <!-- <IfComponent /> -->
    <!-- <EventComponent /> -->
    <WatchComponent />
</div>
`;

createApp({
    template,
    components : {
        RawComponent, 
        InputComponent,
        ModelComponent,
        listComponent,
        ForComponent,
        IfComponent,
        EventComponent,
        WatchComponent
    }
})
.mount('#app');