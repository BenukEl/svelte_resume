<script>
    import chevronIcon from "../assets/icons/vscode-icons-main/icons/dark/chevron-down.svg";

    import IconLabel from "./IconLabel.svelte";

    export let icon = chevronIcon;
    export let root;
</script>

<IconLabel iconPath={icon} text={root} />
<div class="section-content">
    <slot />
</div>

<style>
    .section-content {
        padding-left: 10px;
        display: flex;
        flex-direction: column;
    }
</style>
