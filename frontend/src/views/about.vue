<template>
  <div class="aboutus-section">
    <div class="container">
      <div class="row">
        <div class="col-md-5 col-sm-6 col-xs-12">
          <div class="aboutus">
            <h1 class="text-primary">About Us</h1>
            <p class="aboutus-text">
              The best laundry service in townWe provide quality laundry
              services, quick laundry shipping. Our professional workers
              guarantee customer satisfaction
            </p>
          </div>
        </div>
        <div class="col-md-5 col-sm-6 col-xs-12">
          <div class="feature">
            <div class="feature-box">
              <div class="clearfix">
                <div class="iconset">
                  <span class="glyphicon glyphicon-cog icon"></span>
                </div>
                <div class="feature-content">
                  <h4 class="text-primary">Work with heart</h4>
                  <p>Our workers do their best to satisfy the customers.</p>
                  <br /><br /><br />
                </div>
              </div>
            </div>
            <div class="feature-box">
              <div class="clearfix">
                <div class="iconset">
                  <span class="glyphicon glyphicon-cog icon"></span>
                </div>
                <div class="feature-content">
                  <h4 class="text-primary">Reliable services</h4>
                  <p>We work willingly and on time!</p>
                  <br /><br /><br />
                </div>
              </div>
            </div>
            <div class="feature-box">
              <div class="clearfix">
                <div class="iconset">
                  <span class="glyphicon glyphicon-cog icon"></span>
                </div>
                <div class="feature-content">
                  <h4 class="text-primary">Great support</h4>
                  <p>Our support is always there for you!</p>
                  <br /><br /><br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 m-0 my-lg-5 pt-0 pt-lg-5 pr-lg-5">
            <h1 class="mb-4">Why Choose Us</h1>
            <p>
              We are a high-quality and safe laundry, we offer delivery of your
              laundry in sparkling condition
            </p>
            <div class="row">
              <div class="col-sm-6 mb-4">
                <h1 class="text-secondary" data-toggle="counter-up">Great</h1>
                <h5 class="font-weight-bold">Experience</h5>
              </div>
              <div class="col-sm-6 mb-4">
                <h1 class="text-secondary" data-toggle="counter-up">
                  Excellent
                </h1>
                <h5 class="font-weight-bold">Professional Employees</h5>
              </div>
              <div class="col-sm-6 mb-4">
                <h1 class="text-secondary" data-toggle="counter-up">Many</h1>
                <h5 class="font-weight-bold">Satisfied Clients</h5>
              </div>
              <div class="col-sm-6 mb-4">
                <h1 class="text-secondary" data-toggle="counter-up">
                  Constant
                </h1>
                <h5 class="font-weight-bold">Dry Cleaning</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div
              class="d-flex flex-column align-items-center justify-content-center bg-secondary h-100 py-5 px-3"
            >
              <i class="fa fa-5x fa-certificate text-white mb-5"></i>
              <h1 class="display-1 text-white mb-3">5+</h1>
              <h1 class="text-white m-0">Years of Experience</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.aboutus-section {
  padding: 90px 0;
}
.aboutus-title::after {
  background: #fdb801 none repeat scroll 0 0;
  bottom: 0;
  content: "";
  height: 2px;
  left: 0;
  position: absolute;
  width: 54px;
}
.aboutus-text {
  color: #606060;
  font-size: 13px;
  line-height: 22px;
  margin: 0 0 35px;
}

a:hover,
a:active {
  color: #ffb901;
  text-decoration: none;
  outline: 0;
}
.aboutus-more {
  border: 1px solid #fdb801;
  border-radius: 25px;
  color: #fdb801;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0;
  padding: 7px 20px;
  text-transform: uppercase;
}
.feature .feature-box .iconset {
  background: #fff none repeat scroll 0 0;
  float: left;
  position: relative;
  width: 18%;
}
.feature .feature-box .iconset::after {
  background: #46c6ce none repeat scroll 0 0;
  content: "";
  height: 150%;
  left: 43%;
  position: absolute;
  top: 100%;
  width: 1px;
}

.feature .feature-box .feature-content h4 {
  color: #0f0f0f;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 22px;
  margin: 0 0 5px;
}

.feature .feature-box .feature-content {
  float: left;
  padding-left: 28px;
  width: 78%;
}
.feature .feature-box .feature-content h4 {
  color: #0f0f0f;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 22px;
  margin: 0 0 5px;
}
.feature .feature-box .feature-content p {
  color: #606060;
  font-size: 13px;
  line-height: 22px;
}
.icon {
  color: #46c6ce;
  padding: 0px;
  font-size: 40px;
  border: 1px solid #46c6ce;
  border-radius: 100px;
  color: #46c6ce;
  font-size: 28px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  width: 70px;
}
</style>
