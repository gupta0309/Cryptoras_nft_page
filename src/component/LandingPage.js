import React, {useEffect} from "react";
import useState from "react-usestateref";

import {Button} from "@material-ui/core";
import {Link,NavLink,useNavigate} from "react-router-dom";
import Header from "../component/Header";
import Countdown from "react-countdown";
import Footer from "./Footer";
import {postMethod} from "../service/api";
import {getMethod} from "../service/api";
import apiService from "../service/serviceUrl";
import { checkAuth } from "../service/axios";

import group_1 from "../image/newimg/group-15627@2x.png"
import grectangle_18 from "../image/newimg/rectangle-185@2x.png"
import fluent_people from "../image/newimg/fluent_people-community-24-filled.png"
import section_33 from "../image/newimg/section_33.png"
import Star1 from "../image/newimg/Star1.png"
import mask_group from "../image/newimg/mask-group@2x.png"
import notethanungz from "../image/newimg/notethanungz-ovddpvd0unsplash-9@2x.png"
import line_frame from "../image/newimg/line1.png"
import ic_baseline from "../image/newimg/ic_baseline-discord.png"
import cib_telegram from "../image/newimg/cib_telegram-plane.png"
import symbols_brightness from "../image/newimg/material-symbols_brightness-medium.png"
import mdi_twitter from "../image/newimg/mdi_twitter.png"
 

import vision from "../image/newimg/about2.png";
import startted from "../image/startted.png";
import roadmap from "../image/roadmap11.png";
// import img1 from "../image/newimg/home.jpg";
// import img2 from "../image/newimg/home.jpg";
import img3 from "../image/newimg/home.jpg";




const Completionist = () => <span></span>;

// Renderer callback with condition
const renderer = ({hours, minutes, seconds, completed}) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="timer-sect">
        <span>{hours}h</span> :<span>{minutes}m</span> :<span>{seconds}s</span>
      </div>
    );
  }
};
function LandingPage() {
  const [Artists, setArtists, Artistsref] = useState("");
  const [Collections, setCollections, Collectionsref] = useState("");
  const [authToken, setAuthToken] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAuthToken(checkAuth());
    homedashboard();
  }, []);

  const homedashboard = async () => {
    try {
      var data = {
        apiUrl: apiService.getdashboard,
      };
      var resp = await getMethod(data);
      if (resp.status) {
        setCollections(resp.collections);
        setArtists(resp.users);
        // console.log(resp.users, "landpage");

        // console.log(resp.collections, "landpage");
      } else {
      }
    } catch (error) {}
  };

  const navPage = async () => {
    navigate("/register");
  };

  return (
    <>
      <Header />
      <main className="pading-landin">



   <section className="home_first_section">
    <img src="https://wowtheme7.com/tf/cryptmeme/cryptmeme/assets/images/profit/dollar.png" className="floating-icon icon-left-top" alt="dollar" />
  <img src="https://wowtheme7.com/tf/cryptmeme/cryptmeme/assets/images/profit/btc.png" className="floating-icon icon-right-top" alt="btc" />
  <img src="https://wowtheme7.com/tf/cryptmeme/cryptmeme/assets/images/profit/eth.png" className="floating-icon icon-right-bottom" alt="eth" />


  <div className="container">
    <div className="row align-items-center">
      {/* LEFT TEXT */}
      <div className="col-lg-6">
        <div className="landing_content" data-aos="fade-up">
          <h1>
            <span style={{color: '#f8a13c'}}>Create</span>, Collect And <br />
            <span style={{color: '#f8a13c'}}>Sell</span> Digital Items.
          </h1>
          <p>
            Digital Marketplace For Crypto Collectibles And Non-Fungible Tokens. 
            Buy, Sell, And Discover Exclusive Digital Assets.
          </p>
          
          <div className="btn_group">
            <button className="explore_btn" onClick={navPage}>Explore</button>
            <button className="create_btn">Create</button>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE STACK */}
      <div className="col-lg-6">
        <div className="image_stack">
          {/* Ensure these images have a dark background/border like the "Black Cat" card */}
          <img src="" className="stack_img img1" alt="" />
          <img src="" className="stack_img img2" alt="" />
          <img src={img3} className="stack_img img3" alt="NFT 3" />
        </div>
      </div>
    </div>
  </div>
</section>





        











        
        <section className="sectionne button_looff">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb-5">
                <div
                  className="title_conten"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-easing="ease-out-cubic"
                >
                  <h2 className="headeing_boreder">ABOUT US</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="contanddd_ff"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <img
                    src={vision}
                    alt=""
                    className="vision_img"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="contnetee_d"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <p>
                  Welcome to Cryptora NFT, a dynamic digital marketplace where art, technology, and blockchain innovation come together. Cryptora NFT is built to empower creators and collectors by providing a secure, transparent, and user-friendly platform to explore, buy, sell, and trade unique digital assets.

At Cryptora NFT, we believe in the power of decentralized technology to transform digital ownership. Every NFT on our platform is backed by blockchain technology, ensuring authenticity, security, and true ownership for users across the globe. Our marketplace is designed to support digital artists, gamers, creators, and collectors who want to be part of the future of digital collectibles.    </p>
                  <div className="our_focus">
                    <h4>Our Focus</h4>
                    <ul>
                      <li>
                        <i class="fa-regular fa-star"></i>
                        NFT Creation{" "}
                      </li>
                      <li>
                       <i class="fa-regular fa-star"></i>
                        Fan Engagement
                      </li>
                      <li>
                       <i class="fa-regular fa-star"></i>
                         Community Building{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



{/* 
        <section className="sectionne button_looffaaa">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb-5">
                <div
                  className="title_conten"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-easing="ease-out-cubic"
                >
                  <h2 className="headeing_boreder">How it works?</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="contanddd_ff"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <Link to="/register">
                  <img
                    src={startted}
                    alt=""
                    className="filterimg_ssss"
                  />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="contet_how_word"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <ul>
                    <li>
                      <h2>Create your Account</h2>
                      <p>
                        Users must register with an email address or phone
                        number, or by using a crypto wallet like Metamask or
                        Trust. Keep your niche profile always updated.
                      </p>
                    </li>
                    <li>
                      <h2>Create NFTs</h2>
                      <p>
                        Think your art needs to be celebrated and shared? Mint
                        it on the blockchain and create an NFT out of it.
                      </p>
                    </li>
                    <li>
                      <h2>Engage and Trade</h2>
                      <p>
                        We don't mint art, but we help artists like you by
                        selling them! We help creators convert their craft into
                        NFTs. Interested in selling your art? Write to us!
                      </p>
                    </li>
                  </ul>
                  {authToken === false ? (
                  <Button onClick={navPage}>Register Now</Button>
                  ) : ("")}
                </div>
              </div>
            </div>
          </div>
        </section>
 */}


<section className="minting_section">
  <div className="container">
    {/* Section Header */}
    <div className="section_header" data-aos="fade-down">
      <span className="subtitle">SIMPLE STEPS</span>
      <h2 className="title">HOW IT WORKS</h2>
    </div>

    {/* Steps Grid */}
    <div className="steps_container">
      
      {/* Step 1 */}
      <div className="step_card step_1" data-aos="fade-right" data-aos-delay="100">
        <div className="step_content">
          <h3>Connect Wallet</h3>
          <span className="emoji_icon">👋</span>
        </div>
      </div>

      {/* Step 2 */}
      <div className="step_card step_2" data-aos="fade-right" data-aos-delay="200">
        <div className="step_content">
          <h3>Select Your Quantity</h3>
          <span className="emoji_icon">👉</span>
        </div>
      </div>

      {/* Step 3 */}
      <div className="step_card step_3" data-aos="fade-right" data-aos-delay="300">
        <div className="step_content">
          <h3>Transaction Confirm</h3>
          <span className="emoji_icon">👍</span>
        </div>
      </div>

      {/* Step 4 */}
      <div className="step_card step_4" data-aos="fade-right" data-aos-delay="400">
        <div className="step_content">
          <h3>Receive Your NFTs</h3>
          <span className="emoji_icon">😊</span>
        </div>
      </div>

    </div>
  </div>
</section>






        
        <section className="sectionnee button_looffaaa bg_coloeee">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb-5">
                <div
                  className="title_conten"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-easing="ease-out-cubic"
                >
                  <h2 className="headeing_boreder">ROADMAP</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="contanddd_ff"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <img
                    src={
                      roadmap
                    }
                    alt=""
                    className="roadmap_img"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="road_map_fram d-flex"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div>
                    <img
                      src={line_frame}
                      alt=""
                      className="imag_colrr"
                    />
                  </div>
                  <div className="datat_frame">
                    <div className="contnte_dtata">
                      <h4>Phase 1</h4>
                      <ul>
                        <li>Onboarding the core team and engineers.</li>
                        <li>Designing the UI/UX of the Website</li>
                        <li>Web 3 Integration</li>
                      </ul>
                    </div>
                    <div className="contnte_dtata">
                      <h4>Phase 2</h4>
                      <ul>
                        <li>Testing the architecture of the Marketplace</li>
                        <li>Release of Fantically Litepaper</li>
                        <li>Launch of Fantically Beta in Q1 of 2023</li>
                      </ul>
                    </div>
                    <div className="contnte_dtata">
                      <h4>Phase 3</h4>
                      <ul>
                        <li>Community event in Q2 of 2023</li>
                        <li>
                          Onboarding Web 3 influencers to promote the Community
                        </li>
                        <li>Release of Fantically Whitepaper</li>
                        <li>Launch of Fantically in Q2 of 2023</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sectionnee">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb-5">
                <div className="text_ovefr_wriye">
                  <h3>_Community</h3>
                  <span>
                    Join the Fantically <br />
                    Community{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <a
                  href=""
                  target="_blank"
                  className="button_like_clss"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  {" "}
                  <img
                    src={
                      ic_baseline
                    }
                    alt=""
                    className="filterimg_ssss"
                  />
                  <div className="texts_eee">
                    <span>JOIN OUR</span>
                    <p>Discord Server</p>
                  </div>
                </a>
              </div>
              <div className="col-lg-3">
                <a
                  href=""
                  target="_blank"
                  className="button_like_clss Telegram"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  {" "}
                  <img
                    src={
                      cib_telegram
                    }
                    alt=""
                    className="filterimg_ssss"
                  />
                  <div className="texts_eee">
                    <span>JOIN OUR</span>
                    <p>Telegram Group</p>
                  </div>
                </a>
              </div>
              <div className="col-lg-3">
                <a
                  href=""
                  target="_blank"
                  className="button_like_clss Medium"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  {" "}
                  <img
                    src={
                      symbols_brightness
                    }
                    alt=""
                    className="filterimg_ssss"
                  />
                  <div className="texts_eee">
                    <span>JOIN OUR</span>
                    <p>Medium Group</p>
                  </div>
                </a>
              </div>
              <div className="col-lg-3">
                <a
                  href="https://twitter.com/Fantically__"
                  target="_blank"
                  className="button_like_clss twiter"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  {" "}
                  <img
                    src={mdi_twitter}
                    alt=""
                    className="filterimg_ssss"
                  />
                  <div className="texts_eee">
                    <span>JOIN OUR</span>
                    <p>Join Twitter</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

export default LandingPage;
