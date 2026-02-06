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
 

import vision from "../image/newimg/about-img.png";
import startted from "../image/startted.png";
import roadmap from "../image/roadmap11.png";
// import img1 from "../image/newimg/home.jpg";
// import img2 from "../image/newimg/home.jpg";
import img3 from "../image/newimg/home.jpg";
    import one from "../image/logo/one.png";
    import two from "../image/logo/two.png";
    import three from "../image/logo/three.png";
    import four from "../image/logo/four.png";
import work from "../image/newimg/work.jpg";
const cards = [
    {
      title: "Platform Launch",
      points: [
        "Launch Cryptora NFT Marketplace",

        "Wallet Integration (MetaMask, WalletConnect)",

        "Core NFT Buy, Sell & Mint Features",
"Initial NFT Collection Drops",

"Community Building & Early Access Programs"
      ],
      btnText: "Phase 1"
    },
    {
      title: "Growth & Expansion",
      points: [
       "Multi-Chain Support (Ethereum, Polygon, etc.)",

"Creator Launchpad & NFT Tools",

"Advanced Marketplace Features (Auction, Offers, Bundles)",
"Mobile App Development",

"Strategic Partnerships & Collaborations",
      ],
      btnText: "Phase 2"
    },
    {
      title: "Future Ecosystem",
      points: [
       "Metaverse NFT Integration",

"NFT Staking & Rewards System",

"DAO Governance & Community Voting",

"Global NFT Events & Virtual Experiences",
"Full Web3 Ecosystem Expansion"
      ],
      btnText: "Phase 3"
    }
  ];

    const features = [
    { title: "Connect Your Wallet", desc: "Link your crypto wallet securely (MetaMask, WalletConnect, etc.) to access the Cryptora NFT platform and manage your digital assets.", icon:<i className="fa-solid fa-wallet" style={{color: "#F28705"}}></i> },
    { title: "Discover Exclusive NFTs", desc: "Explore verified, high-quality NFT collections from top creators. Every NFT is unique, authentic, and secured on the blockchain.", icon: <i className="fa-solid fa-magnifying-glass" style={{color: "#F28705"}}></i> },
    { title: "Buy, Sell, or Mint", desc: "Purchase rare NFTs, sell your assets to global collectors, or mint your own NFTs and launch your digital collection on Cryptora.", icon:  <i className="fa-solid fa-coins" style={{color: "#F28705"}}></i> },
    { title: "Own & Trade Anytime", desc: "Your NFTs are stored safely in your wallet. Hold, trade, or resell anytime while enjoying access to future Cryptora ecosystem benefits.", icon:  <i className="fa-solid fa-shield-halved" style={{color: "#F28705"}}></i> }
  ];

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


<section className="hero-container">
      <div className="hero-content">
        {/* Left Side: Text and Search */}
        <div className="hero-left">
          <h1 className="hero-title">
            <span className="purple-gradient">NFT</span> <br />
            For The <span className="text-white">NEXT</span> <br />
            Generation
          </h1>
          <p className="hero-description">
            NFTs Are Currently Taking The Digital Art And Collectibles World By Storm. 
            Digital Artists Are Seeing Their Lives Change Thanks To Huge Sales To A 
            New Crypto Audience.
          </p>

          <div className="search-container">
            <button className="btn-explore btn-pulse">EXPLORE</button>
            <div className="search-bar">
              <input type="text" placeholder="Search Here..." />
              <button className="btn-search btn-shimmer">Search</button>
            </div>
          </div>
        </div>

        {/* Right Side: Image and Stats */}
        <div className="hero-right">
          <div className="image-wrapper">
            <img 
              src={img3} 
              alt="NFT Artwork" 
              className="main-nft-img" 
            />
            <div className="stat-badge badge-top">
              <span className="stat-number">800K</span>
              <span className="stat-label">Active Artworks</span>
            </div>
            <div className="stat-badge badge-bottom">
              <span className="stat-number">+90k</span>
              <span className="stat-label">Active Artist</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Brands */}
   <div className="marquee-container">
  {/* The fixed label on the left */}
 
  <div className="marquee-wrapper">
    <div className="marquee-content">
      {/* Group 1 */}
      <div className="brand-group">
        <div className="brand-logo"><img src={one} alt="Cardano" /></div>
        <div className="brand-logo"><img src={two} alt="Coinbase" /></div>
        <div className="brand-logo"><img src={three} alt="Binance" /></div>
        <div className="brand-logo"><img src={four} alt="Solana" /></div>
      </div>
      
      {/* Group 2 (Exact Duplicate) */}
      <div className="brand-group">
        <div className="brand-logo"><img src={one} alt="Cardano" /></div>
        <div className="brand-logo"><img src={two} alt="Coinbase" /></div>
        <div className="brand-logo"><img src={three} alt="Binance" /></div>
        <div className="brand-logo"><img src={four} alt="Solana" /></div>
      </div>
    </div>
  </div>
</div>

    </section>



        











        <section className="car-section" id="about-section">
      <div className="car-container">
        {/* Left Side: Image with Reflection */}
        <div className="car-image-side">
          <img 
            src={vision} 
            alt="Yellow Brand Car" 
            className="car-main-img" 
          />
          <div className="car-reflection"></div>
        </div>

        {/* Right Side: Text Content */}
        <div className="car-text-side">
          <h2 className="car-title">
            Hight <span className="highlight-yellow">Quality</span>  <br />
            NFT Collection
          </h2>
          <p className="car-description">
           Step into the future of digital ownership with Cryptora NFT. Discover exclusive, high-value NFT assets crafted for collectors, investors, and creators. Our limited collections combine cutting-edge blockchain technology with premium digital artistry.
          </p>
          
          <button className="btn-get-started">
            Get Started
          </button>
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

<section className="defi-container">
      <div className="defi-content">
        {/* Left Side: Info */}
        <div className="defi-info">
          <h2 className="defi-heading">
            How <span className="text-gray">Cryptora NFT </span> 
              Works
          </h2>
          <p className="defi-subtext">
           Cryptora makes NFT ownership easy and secure. Connect your wallet, explore exclusive NFTs, and buy, sell, or mint digital assets — all powered by blockchain technology.  </p>

          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-texts">
                <div className="feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: 3D Circles */}
        <div className="defi-visual">
          {/* <div className="circle-stack">
            <div className="circle main-circle">90%</div>
            <div className="circle floating-circle top-left">60%</div>
            <div className="circle floating-circle top-right">50%</div>
            <div className="circle floating-circle bottom-right">40%</div>
          </div> */}
          <img src={work} alt="3D Circles" className="defi-3d-img" />
        </div>
      </div>
    </section>





        
      <section className="finance-section">
  <div className="finance-header">
    <h2 className="finance-title" id="roadmap-section">Roadmap</h2>
  </div>

  <div className="finance-grid">
    {cards.map((card, index) => (
      <div key={index} className="finance-card">
        <div className="card-bg-glow"></div>
        <div className="card-content">
          {/* Phase Button at the top */}
          <button className="card-btn">{card.btnText}</button>
          
          <h3 className="card-title">{card.title}</h3>
          
          {/* Context List instead of a single paragraph */}
          <ul className="card-list">
            {card.points.map((point, i) => (
              <li key={i} className="list-item">{point}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
</section>




        <section className="sectionnee">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb-5">
                <div className="text_ovefr_wriye">
                  <h3> ____</h3>
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
