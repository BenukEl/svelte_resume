<script>
  import WindowBar from "./lib/WindowBar.svelte";
  import NavBar from "./lib/NavBar.svelte";
  import SideBar from "./SideBar.svelte";
  import TabBar from "./lib/TabBar.svelte";
    import Timeline from "./Timeline.svelte";
</script>

<div class="container">
  <WindowBar title="Benoit ROUXEL - Lead Dev" />

  <div class="content">
    <nav>
      <NavBar />
      <SideBar />
    </nav>
    
    <main>
      <TabBar />
      <Timeline />
    </main>
  </div>
</div>

<style>
  nav {
    display: flex;
    flex-direction: row;
  }

  .content {
    display: flex;
    overflow: hidden;
    height: 100%;
  }

  main {
    flex-grow: 1;
  }
</style>
