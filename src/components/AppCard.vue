<script>

export default {
    data() {
        return {

        }
    },
    // Singola card figlia della lista di cards- manda messaggio al padre tramite PROPS
    props: {
        cardName: String,
        cardType: String,
        cardImg: String,
    }
}

</script>

<template>
    <div class="col">
        <div class="card-bg">
            <div>
                <img :src="cardImg" alt="YuGiOhCards">
            </div>
            <div class="card-info d-flex flex-column">
                <h3>{{ cardName }}</h3>
                <span>{{ cardType }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scope></style>
