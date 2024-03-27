//app.js
// => Root Component
import RawComponent from './raw.js'; //javascript에서는 같은 경로에있어도 ./있어야함(생략불가)
const { createApp } = Vue

const template = 
`<div>
    <!-- 자식컴포넌트 추가 -->
    <raw-component/>
    <rawComponent/>
</div>
`;

createApp({
    template,
    components : {
        RawComponent, // 'raw-component' : RawComponent
    }
})
.mount('#app');