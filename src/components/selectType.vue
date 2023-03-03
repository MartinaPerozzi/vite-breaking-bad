<script>
import { store } from "../data/store";
export default {
    data() {
        return {
            store,
            types: [
                "Effect Monster",
                "Flip Effect Monster",
                "Flip Tuner Effect Monster",
                "Gemini Monster",
                "Normal Monster",
                "Normal Tuner Monster",
                "Pendulum Effect Monster",
                "Pendulum Effect Ritual Monster",
                "Pendulum Flip Effect Monster",
                "Pendulum Normal Monster",
                "Pendulum Tuner Effect Monster",
                "Ritual Effect Monster",
                "Ritual Monster",
                "Spell Card",
                "Spirit Monster",
                "Toon Monster",
                "Trap Card",
                "Tuner Monster",
                "Union Effect Monster",
                "Fusion Monster",
                "Link Monster",
                "Pendulum Effect Fusion Monster",
                "Synchro Monster",
                "Synchro Pendulum Effect Monster",
                "Synchro Tuner Monster",
                "XYZ Monster",
                "XYZ Pendulum Effect Monster",
                "Skill Card",
                "Token",
            ],
            selectedType: "",

        }
    },
    emits: ["selected"],
    methods: {
        selectedTypeFunction() {
            this.$emit("selected", this.selectedType);
        }
    },

}

</script>

<template>
    <div class="">
        <form action="" @submit.prevent="">
            <select name="type" id="card-type" @change="if (this.selectedType) selectedTypeFunction();">
                <option :value="typology" v-for="typology in types" :key="type">{{ typology }} </option>
            </select>
        </form>

    </div>
</template>

<style lang="scss" scope></style>
