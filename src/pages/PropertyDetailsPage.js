import Header from "../components/Header";
import Images from "../components/Images";
import Options1 from "../components/Options1";
import Newsletter from "../components/Newsletter";
import Left from "../components/Left";
import BottomBar from "../components/BottomBar";
import "./PropertyDetailsPage.css";

const PropertyDetailsPage = () => {
  return (
    <div className="property-details-page">
      <Header />
      <main className="content">
        <section className="images-parent">
          <Images />
          <div className="rectangle-parent">
            <div className="frame-child" />
            <div className="third-separator" />
            <div className="details-container">
              <div className="accommodation-capacity">
                <div className="accommodation-capacity-child" />
                <div className="accommodation-labels">
                  <div className="capacity-label-parent">
                    <div className="capacity-label">
                      <h3 className="accomodates">Accomodates</h3>
                    </div>
                    <div className="layout-icons-parent">
                      <div className="layout-icons">
                        <img
                          className="lets-iconsbed"
                          loading="lazy"
                          alt=""
                          src="/letsiconsbed.svg"
                        />
                        <div className="capacity-label-parent">
                          <img
                            className="mdisofa-icon"
                            alt=""
                            src="/mdisofa.svg"
                          />
                          <img
                            className="pepicons-poppeople"
                            loading="lazy"
                            alt=""
                            src="/pepiconspoppeople.svg"
                          />
                        </div>
                        <img
                          className="lets-iconsbed"
                          loading="lazy"
                          alt=""
                          src="/mdipen.svg"
                        />
                      </div>
                      <div className="table-info">
                        <h3 className="all-tables">All tables</h3>
                        <h3 className="in-lounges">In Lounges</h3>
                        <a className="maximum-total">Maximum Total</a>
                        <h3 className="sq-ft">Sq ft.</h3>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent">
                    <div className="weekday-hours-wrapper">
                      <div className="weekday-hours">
                        <div className="weekday-placeholder">
                          <div className="space">12</div>
                        </div>
                        <div className="time-range">
                          <div className="weekday-time">
                            <div className="hour-delimiter">7</div>
                            <div className="hour-delimiter1">16</div>
                          </div>
                        </div>
                        <div className="weekday-hours1">925</div>
                      </div>
                    </div>
                    <div className="weekend-details">
                      <h3 className="accomodates">Opening hours</h3>
                      <div className="weekend-days">
                        <div className="weekday-name">
                          <h3 className="mon-fri">Mon-Fri</h3>
                        </div>
                        <h3 className="sat">Sat</h3>
                        <h3 className="sun">Sun</h3>
                      </div>
                    </div>
                    <div className="divider">
                      <div className="weekend-time-range">
                        <div className="closing-hour">8:00-9:00</div>
                        <div className="table-info">
                          <div className="closing-hour">8:00-9:00</div>
                          <div className="closing-hour">8:00-9:00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="amenities-divider" />
            </div>
            <div className="amenities-container">
              <div className="amenities-title">
                <div className="amenities-list">
                  <div className="ammenities-wrapper">
                    <h3 className="ammenities">Ammenities</h3>
                  </div>
                  <div className="climate-control">
                    <div className="climate-control-inner">
                      <div className="climate-icon-pair-parent">
                        <div className="climate-icon-pair">
                          <div className="a-c-icon">
                            <img
                              className="icbaseline-ac-unit-icon"
                              alt=""
                              src="/icbaselineacunit.svg"
                            />
                          </div>
                          <img
                            className="lets-iconssunlight"
                            loading="lazy"
                            alt=""
                            src="/letsiconssunlight.svg"
                          />
                        </div>
                        <div className="climate-labels">
                          <div className="capacity">
                            <h3 className="ac">AC</h3>
                            <h3 className="skylight">Skylight</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="entertainment">
                      <div className="kitchen-feature-icons">
                        <img
                          className="material-symbolstv-icon"
                          alt=""
                          src="/materialsymbolstv.svg"
                        />
                        <img
                          className="mingcuteboard-line-icon"
                          loading="lazy"
                          alt=""
                          src="/mingcuteboardline.svg"
                        />
                      </div>
                      <div className="t-v-feature">
                        <div className="t-v-feature-label">
                          <h3 className="tv">TV</h3>
                          <h3 className="accomodates">Whiteboards</h3>
                        </div>
                      </div>
                    </div>
                    <div className="kitchen-feature-container">
                      <div className="kitchen-feature-icons-wrapper">
                        <div className="kitchen-feature-icons">
                          <img
                            className="material-symbolstv-icon"
                            alt=""
                            src="/materialsymbolstv.svg"
                          />
                          <img
                            className="mingcuteboard-line-icon"
                            loading="lazy"
                            alt=""
                            src="/materialsymbolskitchen.svg"
                          />
                        </div>
                      </div>
                      <div className="kitchen-feature-label">
                        <h3 className="widescreen-tv">Widescreen Tv</h3>
                        <h3 className="accomodates">Ensuite Kitchen</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="additional-services">
                <div className="additional-services-content">
                  <div className="services-divider" />
                  <div className="additional-in-room-services-wrapper">
                    <h3 className="additional-in-room-services">
                      Additional In-room Services
                    </h3>
                  </div>
                </div>
                <div className="lorem-ipsum-dolor-sit-amet-con-wrapper">
                  <h3 className="additional-in-room-services">
                    Lorem ipsum dolor sit amet consectetur. Lacus et integer
                    enim vitae odio sed. Aliquam volutpat neque accumsan
                    tincidunt velit quam. Condimentum integer sed in scelerisque
                    sit in quis et.
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <Options1 />
        </section>
        <footer className="footer">
          <Newsletter />
          <Left />
          <div className="menus">
            <div className="menu">
              <b className="about">About</b>
              <div className="items">
                <div className="about">About us</div>
                <div className="about">Blog</div>
                <div className="about">Careers</div>
                <div className="about">Jobs</div>
                <div className="about">In Press</div>
              </div>
            </div>
            <div className="menu">
              <b className="about">Support</b>
              <div className="items">
                <div className="about">Contact us</div>
                <div className="about">Online Chat</div>
                <div className="about">Whatsapp</div>
                <div className="about">Telegram</div>
                <div className="about">Ticketing</div>
              </div>
            </div>
            <div className="menu">
              <b className="about">FAQ</b>
              <div className="items">
                <div className="about">Account</div>
                <div className="manage-deliveries">Manage Deliveries</div>
                <div className="about">Orders</div>
                <div className="about">Payments</div>
                <div className="about">Returns</div>
              </div>
            </div>
            <div className="menu">
              <b className="about">About</b>
              <div className="items">
                <div className="about">About us</div>
                <div className="about">Blog</div>
                <div className="about">Careers</div>
                <div className="about">Jobs</div>
                <div className="about">In Press</div>
              </div>
            </div>
            <div className="menu">
              <b className="about">Support</b>
              <div className="items">
                <div className="about">Contact us</div>
                <div className="about">Online Chat</div>
                <div className="about">Whatsapp</div>
                <div className="about">Telegram</div>
                <div className="about">Ticketing</div>
              </div>
            </div>
            <div className="menu">
              <b className="about">FAQ</b>
              <div className="items">
                <div className="about">Account</div>
                <div className="manage-deliveries">Manage Deliveries</div>
                <div className="about">Orders</div>
                <div className="about">Payments</div>
                <div className="about">Returns</div>
              </div>
            </div>
          </div>
          <BottomBar />
        </footer>
      </main>
    </div>
  );
};

export default PropertyDetailsPage;
