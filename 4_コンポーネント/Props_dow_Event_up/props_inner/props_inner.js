/**
 *  props で　親からの子へ値を渡し処理する。
 */
Vue.createApp({})
    .component('my-counter', {
        props: ['init'],
        template: `<div>現在値は{{ current }}です。
        <input type="button" v-on:click="onclick" value="増やす" />
        </div>`,
        
        // プロパティ（init）をもとに、データオブジェクトを定義
        data(){
            return {
                current: this.init
            };
        },
        methods: {
            // インクリメント処理
            onclick() {
                this.current++;
            }
        }
})
.mount(('#app'));