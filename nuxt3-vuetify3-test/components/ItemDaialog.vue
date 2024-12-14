<template>
    <v-dialog v-model="localDialog" max-width="500px">
        <v-card>
            <v-card-title>
                <spna class="headline">{{ formTitle }}</spna>
            </v-card-title>

            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">

                            <v-text-field
                                v-model="localEditedItem.name"
                                label="Item name"
                                ></v-text-field>

                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="blue darken-1" text @click="closeDialog">キャンセル</v-btn>
                <v-btn color="blue darken-1" text @click="save">保存</v-btn>

            </v-card-actions>

        </v-card>
    </v-dialog>
</template>

<script>

export default {
    props: {
        modelValue: Boolean,
        editedItem: Object,
        formTitle: String,
    },
    data() {
        return {
            localDialog: this.modelValue,
            localEditedItem: Object.assign({}, this.editedItem),
        };
    },
    watch: {
        modelValue(value) {
            this.localDialog = value;
        },
        localDialog(value) {
            this.$emit('更新完了', value);
        },
        editedItem: {
            handler(newItem) {
                this.localEditedItem = Object.assign({}, newItem);
            },
            deep:true,
        },
    },

    methods: {
        closeDialog() {
            this.localDialog = false;
        },

        save() {
            this.$emit('保存完了', this.localEditedItem);
            this.closeDialog();
        },
    },
};

</script>

