<script>
    export let title;
</script>

<div class="window-bar">
    <div class="title">{title}</div>
    <div class="window-controls">
        <button class="minimize">─</button>
        <button class="maximize">□</button>
        <button class="close">X</button>
    </div>
</div>

<style>
    .window-bar {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #2C2C2C;
      padding: 10px;
      color: white;
      font-weight: bold;
      position: relative;
      font-size: 1.2em;
    }

    .window-controls {
      margin: 0 5px;
      position: absolute;
      right: 0;
    }

    .window-controls button {
      background-color: #555;
      border: none;
      color: white;
      width: 25px;
      height: 25px;
      font-weight: bold;
      margin-left: 5px;
      border-radius: 100%;
    }

    .minimize,
    .maximize {
      display: inline-block;
      width: 20px;
      text-align: center;
    }

    .close {
      display: inline-block;
      width: 20px;
      text-align: center;
    }
</style>
