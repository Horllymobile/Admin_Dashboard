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
                <header class="col-md-12 ml-0 bg-light shadow-lg">
                  <compHeader />
                </header>
              </div>
              <div>
                <p class="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Impedit, saepe possimus quaerat eligendi dolores hic,
                  harum nihil explicabo eius ad quo mollitia blanditiis. Atque
                  rerum officiis reiciendis porro inventore voluptate vero incidunt
                  distinctio iusto aperiam pariatur repudiandae, beatae eveniet nemo
                  labore fugit expedita a laudantium voluptates at esse.
                  Molestias, veritatis?
                </p>
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
export default {
  data() {
    return {};
  },
  components: {
    compHeader: Header,
    compFooter: Footer,
    compSideNav: SideNav
  }
};
</script>