const html =
    document.documentElement;

const body =
    document.body;


const themeToggle =
    document.getElementById(
        "themeToggle"
    );


const menuToggle =
    document.getElementById(
        "menuToggle"
    );


const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );


const floatingNav =
    document.getElementById(
        "floatingNav"
    );


const dashboardButton =
    document.getElementById(
        "dashboardButton"
    );


const aboutSection =
    document.getElementById(
        "about"
    );


const cursorDot =
    document.querySelector(
        ".cursor-dot"
    );


const cursorOutline =
    document.querySelector(
        ".cursor-outline"
    );


const backgroundShapes =
    document.querySelectorAll(
        ".background-shape"
    );


const portraitFrame =
    document.querySelector(
        ".portrait-frame"
    );


const portrait =
    document.querySelector(
        ".portrait"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


const mobileNavLinks =
    document.querySelectorAll(
        ".mobile-nav-link"
    );

const savedTheme =
    localStorage.getItem(
        "portfolio-theme"
    );


if (
    savedTheme === "dark" ||
    savedTheme === "light"
) {

    html.setAttribute(
        "data-theme",
        savedTheme
    );

}

else {

    const prefersDark =
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;


    html.setAttribute(
        "data-theme",
        prefersDark
            ? "dark"
            : "light"
    );

}


themeToggle?.addEventListener(
    "click",
    () => {

        const current =
            html.getAttribute(
                "data-theme"
            );


        const next =
            current === "dark"
                ? "light"
                : "dark";


        html.setAttribute(
            "data-theme",
            next
        );


        localStorage.setItem(
            "portfolio-theme",
            next
        );

    }
);

const isTouchDevice =
    window.matchMedia(
        "(pointer: coarse)"
    ).matches;

if (!isTouchDevice) {

    let mouseX =
        window.innerWidth / 2;


    let mouseY =
        window.innerHeight / 2;


    let outlineX =
        mouseX;


    let outlineY =
        mouseY;


    window.addEventListener(
        "mousemove",
        event => {

            mouseX =
                event.clientX;


            mouseY =
                event.clientY;


            if (cursorDot) {

                cursorDot.style.left =
                    `${mouseX}px`;


                cursorDot.style.top =
                    `${mouseY}px`;

            }

        }
    );


    function animateCursor() {

        outlineX +=
            (mouseX - outlineX)
            * .15;


        outlineY +=
            (mouseY - outlineY)
            * .15;


        if (cursorOutline) {

            cursorOutline.style.left =
                `${outlineX}px`;


            cursorOutline.style.top =
                `${outlineY}px`;

        }


        requestAnimationFrame(
            animateCursor
        );

    }


    animateCursor();


    const interactive =
        document.querySelectorAll(
            `
            a,
            button,
            .arsenal-card,
            .project-card,
            .portrait-frame,
            .tech-marquee-track span,
            .contact-card,
            .contact-message-button
            `
        );


    interactive.forEach(
        element => {

            element.addEventListener(
                "mouseenter",
                () => {

                    body.classList.add(
                        "cursor-hover"
                    );

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    body.classList.remove(
                        "cursor-hover"
                    );

                }
            );

        }
    );

}

if (!isTouchDevice) {

    window.addEventListener(
        "mousemove",
        event => {

            const x =
                (
                    event.clientX /
                    window.innerWidth -
                    .5
                ) * 2;


            const y =
                (
                    event.clientY /
                    window.innerHeight -
                    .5
                ) * 2;


            backgroundShapes.forEach(
                (shape,index) => {

                    const intensity =
                        (index + 1) * 12;


                    shape.style.transform =
                        `
                        translate(
                            ${x * intensity}px,
                            ${y * intensity}px
                        )
                        `;

                }
            );

        }
    );

}

if (
    portraitFrame &&
    portrait &&
    !isTouchDevice
) {

    portraitFrame.addEventListener(
        "mousemove",
        event => {

            const rect =
                portraitFrame
                    .getBoundingClientRect();


            const x =
                (
                    event.clientX -
                    rect.left
                ) /
                rect.width -
                .5;


            const y =
                (
                    event.clientY -
                    rect.top
                ) /
                rect.height -
                .5;


            portrait.style.transform =
                `
                scale(1.025)
                translate(
                    ${x * 8}px,
                    ${y * 8}px
                )
                `;

        }
    );


    portraitFrame.addEventListener(
        "mouseleave",
        () => {

            portrait.style.transform =
                "scale(1) translate(0,0)";

        }
    );

}

if (!isTouchDevice) {

    const heroContent =
        document.querySelector(
            ".hero-content"
        );


    const heroVisual =
        document.querySelector(
            ".hero-visual"
        );


    const heroTitle =
        document.querySelector(
            ".hero-title"
        );


    window.addEventListener(
        "mousemove",
        event => {

            const x =
                event.clientX /
                window.innerWidth -
                .5;


            const y =
                event.clientY /
                window.innerHeight -
                .5;


            if (heroContent) {

                heroContent.style.transform =
                    `
                    translate(
                        ${x * 5}px,
                        ${y * 5}px
                    )
                    `;

            }


            if (heroVisual) {

                heroVisual.style.transform =
                    `
                    translate(
                        ${x * -5}px,
                        ${y * -5}px
                    )
                    `;

            }


            if (heroTitle) {

                heroTitle.style.transform =
                    `
                    translate(
                        ${x * -8}px,
                        ${y * -5}px
                    )
                    `;

            }

        }
    );

}

if (!isTouchDevice) {

    const githubButton =
        document.querySelector(
            ".github-button"
        );


    const linkedinButton =
        document.querySelector(
            ".linkedin-button"
        );


    function magneticButton(
        button,
        strength = .18
    ) {

        if (!button)
            return;


        button.addEventListener(
            "mousemove",
            event => {

                const rect =
                    button.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left -
                    rect.width / 2;


                const y =
                    event.clientY -
                    rect.top -
                    rect.height / 2;


                button.style.transform =
                    `
                    translate(
                        ${x * strength}px,
                        ${y * strength}px
                    )
                    `;

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "";

            }
        );

    }


    magneticButton(
        githubButton
    );


    magneticButton(
        linkedinButton
    );

}

if (!isTouchDevice) {

    const github =
        document.querySelector(
            ".github-button"
        );


    const linkedin =
        document.querySelector(
            ".linkedin-button"
        );


    window.addEventListener(
        "mousemove",
        event => {

            const cursorX =
                event.clientX;


            const cursorY =
                event.clientY;


            function checkDistance(
                element
            ) {

                if (!element)
                    return;


                const rect =
                    element.getBoundingClientRect();


                const centerX =
                    rect.left +
                    rect.width / 2;


                const centerY =
                    rect.top +
                    rect.height / 2;


                const distance =
                    Math.sqrt(

                        Math.pow(
                            cursorX -
                            centerX,
                            2
                        )

                        +

                        Math.pow(
                            cursorY -
                            centerY,
                            2
                        )

                    );


                if (distance < 110) {

                    element.classList.add(
                        "magnetic-active"
                    );

                }

                else {

                    element.classList.remove(
                        "magnetic-active"
                    );

                }

            }


            checkDistance(github);

            checkDistance(linkedin);

        }
    );

}

menuToggle?.addEventListener(
    "click",
    () => {

        mobileMenu.classList.toggle(
            "open"
        );


        body.classList.toggle(
            "menu-open"
        );

    }
);


mobileNavLinks.forEach(
    link => {

        link.addEventListener(
            "click",
            () => {

                mobileMenu.classList.remove(
                    "open"
                );


                body.classList.remove(
                    "menu-open"
                );

            }
        );

    }
);

let lastScroll =
    window.scrollY;


window.addEventListener(
    "scroll",
    () => {

        const current =
            window.scrollY;


        if (
            current > lastScroll &&
            current > 150
        ) {

            floatingNav.style.transform =
                "translate(-50%,-120px)";

        }

        else {

            floatingNav.style.transform =
                "translate(-50%,0)";

        }


        lastScroll =
            current;

    },
    {
        passive: true
    }
);

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        !entry.isIntersecting
                    )
                        return;


                    const id =
                        entry.target
                            .getAttribute(
                                "id"
                            );


                    navLinks.forEach(
                        link => {

                            link.classList.remove(
                                "active"
                            );


                            if (
                                link.getAttribute(
                                    "href"
                                ) === `#${id}`
                            ) {

                                link.classList.add(
                                    "active"
                                );

                            }

                        }
                    );

                }
            );

        },
        {
            rootMargin:
                "-35% 0px -55% 0px"
        }
    );


sections.forEach(
    section => {

        sectionObserver.observe(
            section
        );

    }
);

document.querySelectorAll(
    'a[href^="#"]'
).forEach(
    anchor => {

        anchor.addEventListener(
            "click",
            event => {

                const targetID =
                    anchor.getAttribute(
                        "href"
                    );


                if (
                    !targetID ||
                    targetID === "#"
                )
                    return;


                const target =
                    document.querySelector(
                        targetID
                    );


                if (!target)
                    return;


                event.preventDefault();


                const navHeight =
                    floatingNav
                        ? floatingNav.offsetHeight
                        : 0;


                const position =
                    target
                        .getBoundingClientRect()
                        .top
                    +
                    window.scrollY
                    -
                    navHeight
                    -
                    30;


                window.scrollTo({

                    top:
                        position,

                    behavior:
                        "smooth"

                });

            }
        );

    }
);

if (
    dashboardButton &&
    aboutSection
) {

    const dashboardObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            dashboardButton.classList.add(
                                "visible"
                            );

                        }

                        else {

                            if (
                                entry.boundingClientRect.top > 0
                            ) {

                                dashboardButton.classList.remove(
                                    "visible"
                                );

                            }

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    dashboardObserver.observe(
        aboutSection
    );

}

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key.toLowerCase() === "t" &&
            !event.target.matches(
                "input,textarea"
            )
        ) {

            themeToggle?.click();

        }


        if (
            event.key === "Escape"
        ) {

            mobileMenu?.classList.remove(
                "open"
            );


            body.classList.remove(
                "menu-open"
            );

        }

    }
);

portrait?.addEventListener(
    "error",
    () => {

        portrait.style.display =
            "none";


        if (portraitFrame) {

            portraitFrame.style.background =
                `
                linear-gradient(
                    135deg,
                    var(--terracotta),
                    var(--brown)
                )
                `;

        }

    }
);

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);

console.log(
    "%cSUJAY KULKARNI",
    `
    font-size:24px;
    font-weight:800;
    color:#A45A3D;
    `
);


console.log(
    "%cAI & Data Science Enthusiast",
    `
    font-size:14px;
    color:#6B4226;
    `
);
/* ============================================================
   SEAMLESS TECH MARQUEE
   ============================================================ */

const marqueeTrack =
    document.querySelector(".tech-marquee-track");

const marqueeGroup =
    document.querySelector(".tech-marquee-group");


function setMarqueeWidth() {

    if (!marqueeTrack || !marqueeGroup) return;

    const groupWidth =
        marqueeGroup.getBoundingClientRect().width;

    marqueeTrack.style.setProperty(
        "--marquee-distance",
        `${groupWidth}px`
    );
}


setMarqueeWidth();


window.addEventListener(
    "resize",
    setMarqueeWidth
);

/* ============================================================
   SEAMLESS TECH MARQUEE
   ============================================================ */

const techMarquee =
    document.querySelector(".tech-marquee");

const techTrack =
    document.querySelector(".tech-marquee-track");

const techGroup =
    document.querySelector(".tech-marquee-group");


if (techMarquee && techTrack && techGroup) {

    function setupTechMarquee() {

        const groupWidth =
            techGroup.getBoundingClientRect().width;

        techTrack.style.setProperty(
            "--marquee-width",
            `${groupWidth}px`
        );

    }


    setupTechMarquee();


    window.addEventListener(
        "resize",
        setupTechMarquee
    );

}