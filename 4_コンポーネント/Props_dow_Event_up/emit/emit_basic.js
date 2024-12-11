Vue.createApp({
    data() {
        return {
            // カウンター値
            current: 0
        };
    },
    methods: {
        // plusMinus イベントでカウンター値を更新
        onplue(e){
            this.current += e;
        }
    }
})
.component('my-counter', {
    // ボタンクリックで、親コンポーネントから受け取る値
    props:['step'],
    // 子から、親コンポーネントへ渡す イベント宣言
    emits: ['plusMinus'],
    template: `<button type="button" v-on:click="onclick">
{{ step }}</button>`,
    methods: {
        // クリック時に plusMinus イベントを発生
        onclick(){
            this.$emit('plusMinus', Number(this.step));
        }
    }
}).mount('#app');