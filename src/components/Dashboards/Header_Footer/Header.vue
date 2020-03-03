<template>
  <div>
    <div>
      <div class="row container">
        <div class="col-lg-9 col-md-12 col-sm-9">
          <form method="get" action class="mt-3 mr-5">
            <div class="form-group">
              <input
                type="text"
                class="form-control col-lg-12 col-md-6 col-sm-3"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12">
          <div class="row">
            <div class="col-sm-1 col-lg-2 ml-0">
              <button class="btn btn-info mt-3">
                <i class="far fa-bell"></i>
              </button>
            </div>
            <div class="col-sm-1 col-lg-1 mt-3 ml-4">
              <div class="dropdown">
                <button class="btn btn-light dropdown-toggle" data-toggle="dropdown">
                  <img src alt="NO image yet" />
                </button>
                <div class="dropdown-menu">
                  <router-link to="/Users" class="dropdown-item ">Profile</router-link>
                  <router-link to="/Settings" class="dropdown-item">Settings</router-link>
                  <router-link to="/" class="dropdown-item">Logout</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>