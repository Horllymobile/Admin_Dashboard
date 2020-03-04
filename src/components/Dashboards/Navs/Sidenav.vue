<template>
  <div>
    <div class="shadow-sm">
      <div class="container-fluid d-flex">
        <nav class="nav-vertical navbar-expand-lg navbar-light">
            <router-link to="/" class="navbar-brand">Plunex-Hub</router-link>
          <button class="navbar-toggler justify-content-end" data-toggle="collapse" data-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <hr class="line"/>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="navbar nav ">
              <li class="nav-item hover">
                <router-link to="/" class="nav-link text-secondary p-3 text-center">Home</router-link>
              </li>
              <li class="nav-item hover">
                <router-link to="/Users" class="nav-link text-secondary p-3 text-center">Users</router-link>
              </li>
              <li class="nav-item hover">
                 <router-link to="/Events" class="nav-link text-secondary p-3 text-center">Events</router-link>
              </li>
              <li class="nav-item hover">
                <router-link to="/Team" class="nav-link text-secondary p-3 text-center">Teams</router-link>
              </li>
              <li class="nav-item hover hover p-1">
                <router-link to="/Membership" class="nav-link text-secondary p-3 text-center">Memberships</router-link>
              </li>
              <li class="nav-item hover">
                <router-link to="/Purchases" class="nav-link text-secondary p-3 text-center">Purchases</router-link>
              </li>
              <li class="nav-item hover">
                <router-link to="/Staffs" class="nav-link text-secondary p-3 text-center">Staffs</router-link>
              </li>
              <li class="nav-item hover">
                <router-link to="/Attendance" class="nav-link text-secondary p-3 text-center">Attendance</router-link>
              </li>
              <li class="nav-item hover">
                <router-link to="/Settings" class="nav-link text-secondary p-3 text-center">Settings</router-link>
              </li>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scope>
  line{
    width: 100%;
  }
  div .hover:active{
    background: lightblue;
    color:white;
  }
</style>