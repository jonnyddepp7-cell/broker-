* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Inter", sans-serif;
    background: #ffffff;
    color: #111827;
}


/* =========================
   NAVBAR
========================= */

.navbar {
    height: 78px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 6%;

    background: rgba(255,255,255,0.97);

    border-bottom: 1px solid #eeeeee;

    position: sticky;
    top: 0;

    z-index: 100;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;

    font-size: 21px;
    font-weight: 800;
}

.logo-icon {
    width: 39px;
    height: 39px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;

    background: #2563eb;
    color: white;

    font-weight: 800;
}

.logo > span > span {
    color: #2563eb;
}

nav {
    display: flex;
    gap: 30px;
}

nav a {
    text-decoration: none;

    color: #4b5563;

    font-size: 14px;
    font-weight: 500;

    transition: 0.2s;
}

nav a:hover {
    color: #2563eb;
}

.nav-buttons {
    display: flex;
    gap: 10px;
}

.login-nav,
.signup-nav {
    border: none;

    padding: 11px 18px;

    border-radius: 9px;

    font-weight: 600;

    cursor: pointer;
}

.login-nav {
    background: transparent;
    color: #111827;
}

.signup-nav {
    background: #2563eb;
    color: white;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 620px;

    display: grid;

    grid-template-columns: 1fr 1fr;

    align-items: center;

    gap: 60px;

    padding: 70px 7%;

    background:
        radial-gradient(
            circle at 80% 20%,
            #eef5ff 0%,
            transparent 35%
        ),
        #ffffff;
}

.hero-content {
    max-width: 650px;
}

.badge {
    display: inline-flex;

    align-items: center;

    gap: 7px;

    background: #eff6ff;

    color: #2563eb;

    padding: 9px 14px;

    border-radius: 30px;

    font-size: 13px;

    font-weight: 600;

    margin-bottom: 22px;
}

.dot {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: #22c55e;
}

.hero h1 {
    font-size: clamp(42px, 5vw, 70px);

    line-height: 1.05;

    letter-spacing: -3px;

    margin-bottom: 24px;
}

.hero h1 span {
    color: #2563eb;
}

.hero p {
    color: #64748b;

    font-size: 17px;

    line-height: 1.8;

    max-width: 580px;
}

.hero-buttons {
    display: flex;

    gap: 13px;

    margin-top: 32px;
}

.primary-btn,
.secondary-btn {
    padding: 15px 22px;

    border-radius: 10px;

    font-weight: 700;

    font-size: 14px;

    cursor: pointer;
}

.primary-btn {
    border: none;

    color: white;

    background: #2563eb;
}

.primary-btn span {
    margin-left: 10px;
}

.secondary-btn {
    background: white;

    border: 1px solid #dbe1e8;

    color: #111827;
}

.stats {
    display: flex;

    gap: 50px;

    margin-top: 45px;
}

.stats div {
    display: flex;

    flex-direction: column;

    gap: 5px;
}

.stats strong {
    font-size: 22px;
}

.stats small {
    color: #64748b;
}


/* =========================
   HERO IMAGE
========================= */

.hero-visual {
    display: flex;

    justify-content: center;
}

.image-card {
    width: 100%;

    max-width: 570px;

    position: relative;
}

.image-card img {
    width: 100%;

    height: 430px;

    object-fit: cover;

    border-radius: 22px;

    box-shadow:
        0 25px 70px rgba(0,0,0,0.15);
}

.market-card {
    position: absolute;

    bottom: -35px;
    left: -35px;

    width: 310px;

    padding: 20px;

    background: rgba(255,255,255,0.98);

    border-radius: 15px;

    box-shadow:
        0 15px 45px rgba(0,0,0,0.13);
}

.market-title {
    display: flex;

    justify-content: space-between;

    margin-bottom: 16px;

    font-weight: 700;
}

.live {
    font-size: 10px;

    color: #16a34a;

    background: #dcfce7;

    padding: 5px 8px;

    border-radius: 20px;
}

.market-row {
    display: grid;

    grid-template-columns:
        1fr auto auto;

    gap: 12px;

    padding: 10px 0;

    border-top: 1px solid #eeeeee;

    font-size: 12px;
}

.market-row b {
    color: #16a34a;
}


/* =========================
   FEATURES
========================= */

.features {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 20px;

    padding: 70px 7%;

    background: #f8fafc;
}

.feature-card {
    padding: 28px;

    background: white;

    border: 1px solid #edf0f4;

    border-radius: 15px;

    transition: 0.25s;
}

.feature-card:hover {
    transform: translateY(-4px);

    box-shadow:
        0 15px 35px rgba(0,0,0,0.07);
}

.feature-icon {
    font-size: 25px;

    margin-bottom: 18px;
}

.feature-card h3 {
    margin-bottom: 10px;
}

.feature-card p {
    color: #64748b;

    line-height: 1.6;

    font-size: 13px;
}


/* =========================
   MODALS
========================= */

.modal {
    display: none;

    position: fixed;

    inset: 0;

    background: rgba(15,23,42,0.58);

    backdrop-filter: blur(6px);

    z-index: 1000;

    align-items: center;

    justify-content: center;

    padding: 20px;
}

.modal-box {
    width: 100%;

    max-width: 430px;

    background: white;

    border-radius: 18px;

    padding: 35px;

    position: relative;

    box-shadow:
        0 25px 80px rgba(0,0,0,0.25);
}

.close {
    position: absolute;

    right: 20px;
    top: 16px;

    border: none;

    background: transparent;

    font-size: 28px;

    color: #64748b;

    cursor: pointer;
}

.modal-logo {
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #2563eb;

    color: white;

    border-radius: 10px;

    font-weight: 800;

    margin-bottom: 18px;
}

.modal-box h2 {
    font-size: 27px;

    margin-bottom: 8px;
}

.modal-subtitle {
    color: #64748b;

    font-size: 14px;

    margin-bottom: 25px;
}

.modal-box form {
    display: flex;

    flex-direction: column;
}

.modal-box label {
    font-size: 13px;

    font-weight: 600;

    margin-bottom: 7px;
}

.modal-box input {
    height: 46px;

    border: 1px solid #dbe1e8;

    border-radius: 8px;

    padding: 0 13px;

    font-family: inherit;

    margin-bottom: 17px;

    outline: none;

    transition: 0.2s;
}

.modal-box input:focus {
    border-color: #2563eb;

    box-shadow:
        0 0 0 3px rgba(37,99,235,0.1);
}

.form-options {
    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 20px;
}

.remember {
    display: flex !important;

    align-items: center;

    gap: 6px;
}

.remember input {
    width: 14px;
    height: 14px;

    margin: 0 !important;
}

.form-options a {
    color: #2563eb;

    text-decoration: none;

    font-size: 12px;
}

.form-btn {
    height: 48px;

    border: none;

    border-radius: 9px;

    background: #2563eb;

    color: white;

    font-weight: 700;

    font-size: 14px;

    cursor: pointer;

    transition: 0.2s;
}

.form-btn:hover {
    background: #1d4ed8;
}

.form-btn:disabled {
    opacity: 0.65;

    cursor: not-allowed;
}

.switch {
    text-align: center;

    color: #64748b;

    font-size: 13px;

    margin-top: 20px;
}

.switch button {
    border: none;

    background: transparent;

    color: #2563eb;

    font-weight: 700;

    cursor: pointer;
}


/* =========================
   FOOTER
========================= */

footer {
    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 30px 7%;

    border-top: 1px solid #eeeeee;

    font-size: 12px;

    color: #64748b;
}

footer a {
    color: #64748b;

    margin-left: 18px;

    text-decoration: none;
}

.footer-logo {
    font-weight: 800;

    color: #111827;

    font-size: 16px;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 900px) {

    nav {
        display: none;
    }

    .hero {
        grid-template-columns: 1fr;

        padding-top: 50px;
    }

    .features {
        grid-template-columns: 1fr 1fr;
    }

}


@media (max-width: 600px) {

    .navbar {
        padding: 0 20px;
    }

    .login-nav {
        display: none;
    }

    .hero {
        padding: 45px 20px;
    }

    .hero h1 {
        letter-spacing: -2px;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .stats {
        gap: 20px;
    }

    .image-card img {
        height: 330px;
    }

    .market-card {
        position: relative;

        left: 0;

        bottom: 20px;

        width: 100%;
    }

    .features {
        grid-template-columns: 1fr;

        padding: 50px 20px;
    }

    footer {
        flex-direction: column;

        gap: 15px;

        text-align: center;
    }

}
