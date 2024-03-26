<script>
    import gitIcon from "../assets/icons/icon_git.png";
</script>

<div class="tab-bar">
    <div class="tab active">
        <img src={gitIcon} alt="" />
        <span class="tab-title">Expérience professionnelle</span>
        <span class="close-tab">&times;</span>
    </div>
</div>

<style>
    .tab-bar {
        display: flex;
        background-color: #1b1b1c;
        height: 40px;
    }

    .tab {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #252526;
        margin-right: 5px;
        padding: 5px;
        cursor: pointer;
    }

    .tab > img {
        height: 20px;
        width: auto;
        margin-right: 5px;
    }

    .active {
        border-top: solid 1px #007acc;
        color: white;
    }

    .tab-title {
        margin-right: 10px;
    }

    .close-tab {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
    }
</style>
