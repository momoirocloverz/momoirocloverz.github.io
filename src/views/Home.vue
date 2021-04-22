<template>
  <div class="home">
    <div class="sideBar">
      <div class="inner">
        <nav id="menu">
          <header class="major">
            <h2>Menu</h2>
          </header>
          <ul>
            <li><a>Articles</a></li> 
            <li><a>Others</a></li>               
          </ul>
        </nav>
        <footer id="footer">
          <p class="copyright">&copy; Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
        </footer>
      </div>
    </div>
    <div class="main">
        <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
});
</script>
<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  #menu {
    text-align: left;
    & ul {
      user-select: none;
      color: #3d4449;
      font-weight: 400;
      letter-spacing: 0.075em;
      list-style: none;
      margin-bottom: 0;
      padding: 0;
      text-transform: uppercase;
      & li {
        font-weight: 500;
        border-top: solid 1px rgba(210, 215, 217, 0.75);
        margin: 0.5em 0 0 0;
        padding: 0.5em 0 0 0;
        &:first-child {
          border-top: 0;
          margin-top: 0;
          padding-top: 0;
        }
      }
      & a {
        border-bottom: 0;
        color: inherit;
        cursor: pointer;
        display: block;
        font-size: 0.9em;
        padding: 0.625em 0;
        &:hover {
          color: #f56a6a;
        }
      }
    }
  }

  .sideBar {
    flex-grow: 0;
    flex-shrink: 0;
    width: 370px;
    .inner {
      padding: 2.22222em 2.22222em 2.44444em 2.22222em;
      position: relative;
      & > * {
        border-bottom: solid 2px rgba(210, 215, 217, 0.75);
        margin: 0 0 3.5em 0;
        padding: 0 0 3.5em 0;
      }
      & > * > :last-child {
        margin-bottom: 0;
      }
      & > *:last-child {
        border-bottom: 0;
        margin-bottom: 0;
        padding-bottom: 0;
      }
    }
  }
  header.major > :last-child {
    border-bottom: solid 3px #f56a6a;
    display: inline-block;
    margin: 0 0 2em 0;
    padding: 0 0.75em 0.5em 0;
  }
  ol,
  ul {
    list-style: none;
  }
  .main {
    flex-grow: 1;
    flex-shrink: 1;

  }
  #footer {
    text-align: left;
    .copyright {
      color: #9fa3a6;
      font-size: 0.9em;
      & a {
        color: inherit;
      }
    }
  }
}
</style>
