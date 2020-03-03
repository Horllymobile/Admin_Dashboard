<template>
  <div>
    <div class="shadow-sm">
      <div class="container-fluid">
        <nav class="nav-vertical navbar-expand-lg navbar-light">
            <router-link to="/" class="navbar-brand">Plunex-Hub</router-link>
          <button class="navbar-toggler flex-md-right" data-toggle="collapse" data-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <hr />
          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="navbar nav ">
              <div class="nav-item">
                <router-link to="/" class="nav-link text-secondary p-3 text-center">Home</router-link>
              </div>
              <div class="nav-item">
                <router-link to="/Users" class="nav-link text-secondary p-3 text-center">Users</router-link>
              </div>
              <div class="nav-item">
                 <router-link to="/Events" class="nav-link text-secondary p-3 text-center">Events</router-link>
              </div>
              <div class="nav-item">
                <router-link to="/Team" class="nav-link text-secondary p-3 text-center">Teams</router-link>
              </div>
              <div class="nav-item">
                <router-link to="/Membership" class="nav-link text-secondary p-3 text-center">Memberships</router-link>
              </div>
              <div class="nav-item">
                <router-link to="/Purchases" class="nav-link text-secondary p-3 text-center">Purchases</router-link>
              </div>
              <div class="nav-item">
                <router-link to="/Staffs" class="nav-link text-secondary p-3 text-center">Staffs</router-link>
              </div>
              <div class="nav-item">
                <router-link to="/Attendance" class="nav-link text-secondary p-3 text-center">Attendance</router-link>
              </div>
              <div class="nav-item">
                <router-link to="/Settings" class="nav-link text-secondary p-3 text-center">Settings</router-link>
              </div>
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

<style></style>