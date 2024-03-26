<script>
    import chevronIcon from "../assets/icons/vscode-icons-main/icons/dark/chevron-down.svg";

    export let title;
</script>

<div class="section">
    <div class="section-title">
        <img src={chevronIcon} alt="" />
        <span>{title}</span>
    </div>
    <div class="section-content">
        <slot />
    </div>
</div>

<style>
    .section {
        margin-bottom: 20px;
        padding: 0 10px 0 2px;
        border-top: solid 1px #252526;
    }

    .section-title {
        font-weight: bold;
        text-transform: uppercase;
        padding: 2px 0 10px 0;
    }

    .section-content {
      padding-left: 10px;
      display: flex;
      flex-direction: column;
    }
</style>
