<template>
    <div>
    <button @click="$emit('changeOperator', '+')">
        Adición(+)
    </button>
    <button @click="$emit('changeOperator', '-')">
        Sustracción(-)
    </button>
    <button @click="$emit('changeOperator', '/')">
        División(÷)
    </button>
    <button @click="$emit('changeOperator', '*')">
        Multiplicación(*)
    </button>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
