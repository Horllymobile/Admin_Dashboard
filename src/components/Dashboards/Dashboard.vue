<template>
  <div>
    <div class="container-fluid">
      <div class>
        <div class="row">
          <div class="col-sm-1 col-md-2 col-lg-2 bg-light shadow-lg">
            <compSideNav />
          </div>
          <div class="col-lg-10">
            <div>
              <div class="row">
                <header class="col-md-12 ml-0 bg-light shadow-sm">
                  <compHeader />
                </header>
              </div>
              <div class="mt-3">
                <compHome/>
              </div>
              <footer class="row mx-auto">
                <comp-footer />
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header_Footer/Header.vue";
import Footer from "./Header_Footer/Footer.vue";
import SideNav from "./Navs/Sidenav";
import Home from "./../Views/Home.vue";
export default {
  data() {
    return {};
  },
  components: {
    compHeader: Header,
    compFooter: Footer,
    compSideNav: SideNav,
    compHome:Home,
  }
};
</script>