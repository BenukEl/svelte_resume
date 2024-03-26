<script>
    import fileIcon from "../assets/icons/vscode-icons-main/icons/dark/files.svg";
    import searchIcon from "../assets/icons/vscode-icons-main/icons/dark/search.svg";
    import gitIcon from "../assets/icons/vscode-icons-main/icons/dark/source-control.svg";
    import debugIcon from "../assets/icons/vscode-icons-main/icons/dark/debug-alt.svg";
    import extensionIcon from "../assets/icons/vscode-icons-main/icons/dark/extensions.svg";
    import remoteIcon from "../assets/icons/vscode-icons-main/icons/dark/remote-explorer.svg";
    import smileyIcon from "../assets/icons/vscode-icons-main/icons/dark/smiley.svg";
</script>

<div class="navbar">
    <span class="navbar-icon"><img src={fileIcon} alt="" /></span>
    <span class="navbar-icon"><img src={searchIcon} alt="" /></span>
    <span class="navbar-icon"><img src={gitIcon} alt="" /></span>
    <span class="navbar-icon"><img src={debugIcon} alt="" /></span>
    <span class="navbar-icon"><img src={extensionIcon} alt="" /></span>
    <span class="navbar-icon"><img src={remoteIcon} alt="" /></span>
    <span class="navbar-icon"><img src={smileyIcon} alt="" /></span>
</div>

<style>
    .navbar {
        width: 14mm;
        padding-top: 10px;
        background-color: #1b1b1c;
        color: #ffffff;
        display: flex;
        gap: 10px;
        flex-direction: column;
        flex-shrink: 0;
        border-right: solid 1px #252526;
    }

    .navbar-icon {
        flex-shrink: 0;
        width: 100%;
        height: 10mm;
        position: relative;
    }

    .navbar-icon>* {
      width: 8mm;
      height: 8mm;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
    }

    .navbar-icon:last-child {
      border-left: solid 3px #007ACC;
    }

    .navbar-icon:last-child>* {
      left: calc(50% - 3px);
    }
</style>
