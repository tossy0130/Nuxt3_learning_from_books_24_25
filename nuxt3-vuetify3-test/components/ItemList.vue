<template>
    <v-container>

        <v-btn @click="openDialog">新規登録</v-btn>
        <v-data-table
            :headers="headers"
            :items="items"
            class="elevation-1"
            >
        
            <tamplate v-slot:item.action="{ item }">
                <v-icon small @click="editItem(item)">mdi-pencil</v-icon>
                <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
            </tamplate>
        </v-data-table>

        <item-dialog
            v-model="dialog"
            :edited-item="editedItem"
            :form-title="formTitle"
            @save="saveItem"
        />
    </v-container>
</template>

<script>
// ダイアログ コンポーネント読み込み
import ItemDialog from './ItemDialog.vue'

export default {
    components: {
        ItemDialog,
},

data() {
    return {
        dialog: false,
        headers: [
            {text: 'Name', value: 'name'},
            {text: 'Actions', value: 'actions', sortable: false},
        ],
        items: JSON.parse(localStorage.getItem('items') || '[]'),
        editedIndex: -1,
        editedItem: {},
        defaultItem: {name:''},
    };
},

// === 新規か、変更かの分岐
computed:{
    formTitle() {
        return this.editedIndex === -1 ? '新規登録' : '変更'
    },
},
methods: { 
    // ダイアログ
    openDialog () {
        this.editedIndex = -1;
        this.editItem = Object.assign({}, this.defaultItem);
        this.dialog = ture;
    },
    // 変更
    editItem(item) {
        this.editedIndex = this.items.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
    },
    // 削除
    deleteItem(item) {
        // 配列の index 取得
        const index = this.items.indexOf(item);
        if(confirm('この項目を削除してもいいですか ?')) {
            // OK を押した処理
            this.items.splice(index, 1);
            this.saveToLocalStorage();
        } else {
            // NG を押した処理

        }
    },
    // 保存
    saveItem(item) {
        if(this.editedIndex > -1) {
            Object.assign(this.items[this.editedIndex], item);
        } else {
            this.items.push(item);
        }
    },
    saveToLocalStorage() {
        // JSON => 文字列に変換して、ストレージへ保存
        localStorage.setItem('Items', JSON.stringify(this.items));
    },
  },
};

</script>

<style>
.v-data-table-header {
    font-weight: bold;
}
</style>