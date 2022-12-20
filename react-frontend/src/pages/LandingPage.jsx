import React  from "react";
import LOGO from './img/LOGO.png';
import VIDBANNER from './img/kambing.mp4';
import './LandingPage.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.min.js";



const LandingPage = ()=> {
    return(
         <div>
                
            <header class="header p-3 position-absolute start-0 top-0 end-0">
            <div class="d-flex justify-content-between align-items-center">
                <a href="/" class="text-decoration-none text-white fs-5 fw-bold"><img src={LOGO} width="60" height="60" alt="LOGO"/>TernakSignature</a>
            </div>
            </header>
            
            
        
            <section class="hero">
                    <div class="hero__overlay"></div>

                    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" loading="lazy" class="hero__video">
                        <source src={VIDBANNER} type="video/mp4" />
                    </video>

                    <div class="hero__content h-100 container-custom position-relative">
                        <div class="d-flex h-100 align-items-center hero__content-width">
                        <div class="text-white">
                            <h1 class="hero__heading fw-bold mb-4">Jadilah Peternak Millenial yang haus akan Ilmu.</h1>
                            <p class="lead mb-4">Website ini dibuat untuk mempermudah para peterenak dalam mengelola ternaknya.</p>
                            <a href="/web/public/index.html" class="mt-2 btn btn-lg btn-outline-light" role="button">MULAI</a>
                        </div>
                        </div>
                    </div>
            </section>

        </div>
        
    )
}

export default LandingPage;