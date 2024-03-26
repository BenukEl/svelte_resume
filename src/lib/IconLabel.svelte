<script>
    export let iconPath;
    export let text;
</script>

<div class="icon-label">
    <img src={iconPath} alt="" />
    <span>{text}</span>
</div>

<style>
    .icon-label {
        display: flex;
        flex-direction: row;
        gap: 5px;

        & > span {
            font-size: 0.9em;
        }

        & > * {
            align-self: baseline;
        }
    }
</style>
