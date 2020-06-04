<template>
    <div id="app">
        <router-link to="/"> Post List </router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    };
</script>

<style>
    :root {
        --base-line-height: 1.5rem; /*rounding error in lineheight if not integer*/
        --modal-scale: 1.44rem;
        --base-font-size: 112.5%; /*18px*/
        --post-background: #333;
    }

    html {
        font-size: var(--base-font-size);
    }

    body {
        font-family: 'Hind', sans-serif;
        line-height: var(--base-line-height);
        margin: var(--base-line-height);
    }


    article {
        max-width: calc(26*var(--base-line-height));
        /*padding: calc(var(--base-line-height));*/
        margin: auto;
    }

    .s-block {
        margin-bottom: var(--base-line-height);
    }

    .s-block.selected {
        background-color: #FEDA;
        box-shadow: 0px 0px 0px 4px #5AF;
    }

    textarea {
        box-shadow: 0px 0px 0px 4px red;
        white-space: normal;
        resize: none;
        overflow: hidden;
        display: block;
        width: 100%;
        padding: 0;
        border: 0;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
    }



    input[type="file"] {
        line-height: inherit;
        font: inherit;
        font-size: 0.8em;
        z-index: 10;
        box-shadow: 0px 0px 0px 4px red;
        width: 100%;
    }

    p {
        margin-top: var(--base-line-height);
    }

    h1, h2, h3, h4 {
        font-family: "Literata", serif;
        font-weight: 500;
        margin-top: calc(2*var(--base-line-height));
    }

    p + h1, p + h2, p + h3, p + h4 {
        /*margin-top: calc(2*var(--base-line-height));*/
    }

    h3 {
        line-height: var(--base-line-height);
        font-size: var(--modal-scale);
    }

    h2 {
        line-height: calc(2*var(--base-line-height));
        font-size: 2rem;
    }

    h1 {
        line-height: calc(2*var(--base-line-height));
        font-size: calc(2*var(--modal-scale));
    }

    .icon {
        height: var(--base-line-height);
    }

    .icon:hover {
        filter: invert(18%) sepia(99%) saturate(6314%) hue-rotate(1deg) brightness(103%) contrast(121%);
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .tooltip {
        visibility: hidden;
    }

    button, a.button {
        display: inline-block;
        text-decoration: none;
        color: white;
        background-color: #5b8;
        padding: calc(0.25*var(--base-line-height)) var(--base-line-height);
        border: 0;
        border-radius: var(--base-line-height);
        cursor: pointer;
        font: inherit;
    }
    
</style>

