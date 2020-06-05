<template>
    <div>
        <div class="cover"></div>
        <h1>404 Not Found</h1>
    </div>  
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .cover {
        position: absolute;
        opacity: 0.2;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='80px' width='140px'><text x='0' y='55' font-size='80'>404</text></svg>");
    }
</style>