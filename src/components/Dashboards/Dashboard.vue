<template>
  <div>
    <div class="container-fluid">
      <div class>
        <div class="row flex">
          <div class="col-sm-12 col-md-12 col-lg-2 bg-light shadow-lg">
            <compSideNav />
          </div>
          <div class="col-lg-10">
            <div>
              <div class="row">
                <header class="col-md-12 ml-0 bg-light shadow">
                  <compHeader />
                </header>
              </div>
              <div class="mt-3">
                <router-view></router-view>
              </div>
              <footer class="row mx-auto shadow">
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
export default {
  data() {
    return {};
  },
  components: {
    compHeader: Header,
    compFooter: Footer,
    compSideNav: SideNav,
  }
};
</script>