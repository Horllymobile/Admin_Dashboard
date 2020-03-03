<template>
  <div>
    <div class="row container">
      <div class="mx-4">
        <p class="text-uppercase text-secondary mb-0 pb-0 text-size">Dashboard</p>
        <h3 class="mb-4 pt-0">Blog Overview</h3>
      </div>
      <div class="col-md-12 mx-4">
        <div class="row">
          <div class="col-lg-2 w-75 h-100 text-center bg-white rounded mx-1 shadow-lg">
            <h2 class="text-size mt-3 text-uppercase text-secondary">Users</h2>
            <h2 class="text-dark">2,390</h2>
            <p style="color:green">4.3%</p>
          </div>
          <div class="col-lg-2 w-75 h-100 text-center bg-white rounded mx-3 shadow-lg">
            <h2 class="text-size mt-3 text-uppercase text-secondary">Subscriptions</h2>
            <h2 class="text-dark">390</h2>
            <p style="color:green">12.3%</p>
          </div>
          <div class="col-lg-2 w-75 h-100 text-center bg-white rounded mx-3 shadow-lg">
            <h2 class="text-size mt-3 text-uppercase text-secondary">Posts</h2>
            <h2 class="text-dark">190</h2>
            <p style="color:green">2.3%</p>
          </div>
          <div class="col-lg-2 w-75 h-100 text-center bg-white rounded mx-3 shadow-lg">
            <h2 class="text-size mt-3 text-uppercase text-secondary">Events</h2>
            <h2 class="text-dark">290</h2>
            <p style="color:green">1.3%</p>
          </div>
          <div class="col-lg-2 w-75 h-100 text-center bg-white rounded mx-3 shadow-lg">
            <h2 class="text-size mt-3 text-uppercase text-secondary">Comments</h2>
            <h2 class="text-dark">490</h2>
            <p style="color:green">6.3%</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-7 mx-4 h-auto my-3">
        <div class="card rounded Users shadow-lg">
          <div class="card-head">
            <h4 class="mx-1 my-1 ml-3 mt-3">Users</h4>
          </div>
          <hr />
          <div class="card-subhead">
            <form action class="form-inline ml-3">
              <div class="form-group">
                <input type="text" class="form-control date" placeholder="Start Date"/>
                <input type="text" class="form-control left-border-none date" placeholder="End Date"/>
              </div>
            </form>
          </div>
          <hr />
          <div class="card-body">Body</div>
        </div>
      </div>

      <div class="col-md-4 my-3">
        <div class="card rounded Users-by-device shadow-lg">
          <div class="card-head">
            <h4 class="mx-1 my-1 ml-3 mt-3">Users by device</h4>
          </div>
          <hr />
          <div class="card-body h-100">This is the body</div>
          <div class="card-footer bg-light">
            <div class="row">
              <div class="col-md-6">
                <form action>
                  <select name id class="form-control col">
                    <option value="1">Today</option>
                    <option value="1">Yesterday</option>
                    <option value="1">Last Week</option>
                    <option value="1">Last Month</option>
                    <option value="1">Last Year</option>
                  </select>
                </form>
              </div>
              <div class="col-md-6">
                <p>
                  <a href class="my-link text-secondary ml-5">Full report</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-size {
  font-size: 2vh;
}
.rounded {
  border-radius: 10px !important;
}
hr {
  width: 100%;
}
h4 {
  font-size: 2.5vh;
}
.Users {
  height: 35vh;
}
.Users-by-device {
  height: 55vh;
}
.col {
  height: 4vh;
  width: 20vh;
  font-size: 1.4vh;
}
.my-link {
  color: grey !important;
  text-decoration: none !important;
  font-size: 2vh;
}
.my-link:hover {
  color: blue !important;
  text-decoration: none !important;
}
.right-border-none{
    border-left: none !important;
    border-start-start-radius: 0px !important;

}
.date{
    width: 20vh;
    height: 4vh;
    padding: none !important;
    margin: none !important;
}
</style>