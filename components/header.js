class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="sticky-top p-4">
            <nav class="d-flex flex-lg-column gap-4">
                <div class="d-flex flex-lg-column gap-lg-3 flex-row gap-5 textNavigation">
                    <div>
                        <a class="text-uppercase fs-5 text-link d-inline-block" href="/index.html">Shannon L.</a>
                    </div>
                    <div class="navLink">
                        <a class="text-uppercase fs-6 text-link d-inline-block" href="/about.html">About</a>
                    </div>
                    <div class="navLink">
                        <a class="text-uppercase text-link d-inline-block fs-6" href="/websiteDesign.html">Website Design</a>
                    </div>
                    <div class="navLink">
                        <a class="text-uppercase text-link d-inline-block fs-6" href="/projects.html">UI/UX Projects</a>
                    </div>
                    <div class="navLink">
                    <a class="text-uppercase text-link d-inline-block fs-6" href="/logo.html">Logo Design</a>
                    </div>
                </div>
                <!-- right side -->
                <div class="navIcons">
                <div class="d-flex flex-row gap-2">
                    <div class="relative tooltip--container">
                    <div class="tooltip--bottom-right tooltip--bottom-left-m">
                        Email Me!
                    </div>
                    <a aria-label="Email Shannon Lee" href="mailto:shannontlee96@gmail.com">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_52_400" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <rect width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_52_400)">
                        <path d="M4 16.6154C3.71923 16.5128 3.48237 16.3362 3.28942 16.0856C3.09647 15.8349 3 15.55 3 15.2308V7.57307C3 7.39999 3.04519 7.24069 3.13557 7.09518C3.22596 6.94968 3.35769 6.82948 3.53078 6.7346L11 3L18.3192 6.7346C18.4679 6.79615 18.5843 6.90321 18.6683 7.05578C18.7522 7.20833 18.8128 7.36922 18.85 7.53845H17.7135L11 4.13463L4 7.60963V16.6154ZM7.38463 20C6.92436 20 6.54006 19.8458 6.23172 19.5375C5.92339 19.2292 5.76922 18.8449 5.76922 18.3846V10.9231C5.76922 10.4628 5.92339 10.0785 6.23172 9.77018C6.54006 9.46184 6.92436 9.30768 7.38463 9.30768H19.3846C19.8449 9.30768 20.2292 9.46184 20.5375 9.77018C20.8458 10.0785 21 10.4628 21 10.9231V18.3846C21 18.8449 20.8458 19.2292 20.5375 19.5375C20.2292 19.8458 19.8449 20 19.3846 20H7.38463ZM13.3846 14.7346L6.76923 11.3846V18.3846C6.76923 18.5641 6.82692 18.7115 6.9423 18.8269C7.05768 18.9423 7.20513 19 7.38463 19H19.3846C19.5641 19 19.7115 18.9423 19.8269 18.8269C19.9423 18.7115 20 18.5641 20 18.3846V11.3846L13.3846 14.7346ZM13.3846 13.6577L19.7692 10.4231C19.7051 10.3846 19.6442 10.3558 19.5865 10.3365C19.5289 10.3173 19.4615 10.3077 19.3846 10.3077H7.38463C7.32051 10.3077 7.2564 10.3173 7.1923 10.3365C7.1282 10.3558 7.0641 10.3846 7 10.4231L13.3846 13.6577Z" fill="#1C1B1F"/>
                        </g>
                        </svg>
                    </a>
                    </div>
                    <div class="relative tooltip--container">
                    <div class="tooltip--bottom-right tooltip--bottom-left-m">
                        View my Resume
                    </div>
                    <a aria-label="View Shannon's Resume PDF file" href="/assets/ShannonLee.pdf" target="_blank">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_52_406" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <rect width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_52_406)">
                        <path d="M17 15.6346C16.359 15.6346 15.8141 15.4103 15.3654 14.9616C14.9167 14.5128 14.6923 13.9679 14.6923 13.3269C14.6923 12.6859 14.9167 12.141 15.3654 11.6923C15.8141 11.2436 16.359 11.0192 17 11.0192C17.641 11.0192 18.1859 11.2436 18.6346 11.6923C19.0833 12.141 19.3077 12.6859 19.3077 13.3269C19.3077 13.9679 19.0833 14.5128 18.6346 14.9616C18.1859 15.4103 17.641 15.6346 17 15.6346ZM17 14.6346C17.3603 14.6346 17.6683 14.5067 17.924 14.2509C18.1798 13.9952 18.3077 13.6872 18.3077 13.3269C18.3077 12.9667 18.1798 12.6586 17.924 12.4029C17.6683 12.1471 17.3603 12.0192 17 12.0192C16.6397 12.0192 16.3317 12.1471 16.076 12.4029C15.8202 12.6586 15.6923 12.9667 15.6923 13.3269C15.6923 13.6872 15.8202 13.9952 16.076 14.2509C16.3317 14.5067 16.6397 14.6346 17 14.6346ZM11.6923 21.5385V19.3308C11.6923 19.1017 11.747 18.8863 11.8563 18.6846C11.9656 18.4828 12.1186 18.3219 12.3154 18.2019C12.7784 17.9242 13.2667 17.694 13.7803 17.5113C14.294 17.3286 14.8185 17.1935 15.3539 17.1058L17 19.25L18.6269 17.1058C19.1685 17.1935 19.6955 17.3286 20.2078 17.5113C20.7201 17.694 21.2104 17.9242 21.6789 18.2019C21.8763 18.3212 22.0272 18.4805 22.1317 18.6798C22.2362 18.8792 22.2949 19.0898 22.3077 19.3116V21.5385H11.6923ZM12.6673 20.5385H16.7231L14.9692 18.2346C14.5627 18.3302 14.1675 18.4544 13.7836 18.6072C13.3997 18.7601 13.0276 18.9372 12.6673 19.1385V20.5385ZM17.2769 20.5385H21.3077V19.1385C20.9513 18.9333 20.5811 18.7587 20.1972 18.6144C19.8133 18.4702 19.418 18.35 19.0115 18.2538L17.2769 20.5385ZM5.62455 20C5.171 20 4.78685 19.8418 4.4721 19.5255C4.15737 19.2091 4 18.8289 4 18.3846V5.61537C4 5.17114 4.15818 4.79086 4.47453 4.47453C4.79086 4.15818 5.17114 4 5.61538 4H18.3846C18.8289 4 19.2091 4.15818 19.5255 4.47453C19.8418 4.79086 20 5.17114 20 5.61537V9.3077C19.8487 9.16667 19.6949 9.0391 19.5385 8.925C19.3821 8.8109 19.2026 8.72308 19 8.66153V5.61537C19 5.43589 18.9423 5.28846 18.8269 5.17307C18.7115 5.05769 18.5641 5 18.3846 5H5.61538C5.43589 5 5.28846 5.05769 5.17308 5.17307C5.05769 5.28846 5 5.43589 5 5.61537V18.3846C5 18.5641 5.05769 18.7115 5.17308 18.8269C5.28846 18.9423 5.43589 19 5.61538 19H8.9577C8.94615 19.0551 8.93749 19.1103 8.93173 19.1654C8.92596 19.2205 8.92308 19.2756 8.92308 19.3308V20H5.62455ZM7.5 8.73078H14.9231C15.1641 8.58974 15.4179 8.48717 15.6846 8.42307C15.9513 8.35897 16.2231 8.3141 16.5 8.28845V7.73078H7.5V8.73078ZM7.5 12.5H12.0192C12.0449 12.3167 12.0792 12.1449 12.1221 11.9846C12.1651 11.8244 12.2148 11.6628 12.2712 11.5H7.5V12.5ZM7.5 16.2692H10.2962C10.4667 16.1321 10.6433 16.0019 10.826 15.8788C11.0087 15.7558 11.1955 15.6506 11.3866 15.5635V15.2692H7.5V16.2692ZM5 19V5V8.65578V8.25V19Z" fill="#1C1B1F"/>
                        </g>
                        </svg>
                    </a>
                    </div>
                </div>
                </div>

                <!-- mobile menu -->
                <div class="mobileMenuIcon">
                <a class="pointer" data-bs-toggle="offcanvas" data-bs-target="#mobileNavMenu" aria-controls="mobileNavMenu" >
                    <div class="icon-md">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_121_65" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <rect width="24" height="24" transform="matrix(-1 0 0 1 24 0)" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_121_65)">
                        <path d="M20 17V16H15.25V17H20ZM20 12.5V11.5H9.6346V12.5H20ZM20 8V7H4V8H20Z" fill="#1C1B1F"/>
                        </g>
                    </svg>
                    </div>
                </a>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="mobileNavMenu" aria-labelledby="mobileNavMenu">
                    <div class="offcanvas-header justify-content-end">
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body mt-4 align-items-end d-flex flex-column gap-4">
                    <div>
                        <a class="text-uppercase fs-6 text-link d-inline-block" href="/index.html">Home</a>
                    </div>
                    <div>
                        <a class="text-uppercase fs-6 text-link d-inline-block" href="/about.html">About</a>
                    </div>
                    <div>
                        <a class="text-uppercase text-link d-inline-block fs-6" href="/websiteDesign.html">Website Design</a>
                    </div>
                    <div>
                        <a class="text-uppercase text-link d-inline-block fs-6" href="/projects.html">UI/UX Projects</a>
                    </div>
                    <div>
                        <a class="text-uppercase text-link d-inline-block fs-6" href="/logo.html">Logo Design</a>
                    </div>
                    <div class="d-flex flex-row gap-4 mt-2">
                        <a href="mailto:shannontlee96@gmail.com" style="width:32px">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_52_400" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <rect width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_52_400)">
                        <path d="M4 16.6154C3.71923 16.5128 3.48237 16.3362 3.28942 16.0856C3.09647 15.8349 3 15.55 3 15.2308V7.57307C3 7.39999 3.04519 7.24069 3.13557 7.09518C3.22596 6.94968 3.35769 6.82948 3.53078 6.7346L11 3L18.3192 6.7346C18.4679 6.79615 18.5843 6.90321 18.6683 7.05578C18.7522 7.20833 18.8128 7.36922 18.85 7.53845H17.7135L11 4.13463L4 7.60963V16.6154ZM7.38463 20C6.92436 20 6.54006 19.8458 6.23172 19.5375C5.92339 19.2292 5.76922 18.8449 5.76922 18.3846V10.9231C5.76922 10.4628 5.92339 10.0785 6.23172 9.77018C6.54006 9.46184 6.92436 9.30768 7.38463 9.30768H19.3846C19.8449 9.30768 20.2292 9.46184 20.5375 9.77018C20.8458 10.0785 21 10.4628 21 10.9231V18.3846C21 18.8449 20.8458 19.2292 20.5375 19.5375C20.2292 19.8458 19.8449 20 19.3846 20H7.38463ZM13.3846 14.7346L6.76923 11.3846V18.3846C6.76923 18.5641 6.82692 18.7115 6.9423 18.8269C7.05768 18.9423 7.20513 19 7.38463 19H19.3846C19.5641 19 19.7115 18.9423 19.8269 18.8269C19.9423 18.7115 20 18.5641 20 18.3846V11.3846L13.3846 14.7346ZM13.3846 13.6577L19.7692 10.4231C19.7051 10.3846 19.6442 10.3558 19.5865 10.3365C19.5289 10.3173 19.4615 10.3077 19.3846 10.3077H7.38463C7.32051 10.3077 7.2564 10.3173 7.1923 10.3365C7.1282 10.3558 7.0641 10.3846 7 10.4231L13.3846 13.6577Z" fill="#1C1B1F"/>
                        </g>
                        </svg>
                        </a>
                        <a href="/assets/ShannonLee.pdf" target="_blank" style="width:32px">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_52_406" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <rect width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_52_406)">
                        <path d="M17 15.6346C16.359 15.6346 15.8141 15.4103 15.3654 14.9616C14.9167 14.5128 14.6923 13.9679 14.6923 13.3269C14.6923 12.6859 14.9167 12.141 15.3654 11.6923C15.8141 11.2436 16.359 11.0192 17 11.0192C17.641 11.0192 18.1859 11.2436 18.6346 11.6923C19.0833 12.141 19.3077 12.6859 19.3077 13.3269C19.3077 13.9679 19.0833 14.5128 18.6346 14.9616C18.1859 15.4103 17.641 15.6346 17 15.6346ZM17 14.6346C17.3603 14.6346 17.6683 14.5067 17.924 14.2509C18.1798 13.9952 18.3077 13.6872 18.3077 13.3269C18.3077 12.9667 18.1798 12.6586 17.924 12.4029C17.6683 12.1471 17.3603 12.0192 17 12.0192C16.6397 12.0192 16.3317 12.1471 16.076 12.4029C15.8202 12.6586 15.6923 12.9667 15.6923 13.3269C15.6923 13.6872 15.8202 13.9952 16.076 14.2509C16.3317 14.5067 16.6397 14.6346 17 14.6346ZM11.6923 21.5385V19.3308C11.6923 19.1017 11.747 18.8863 11.8563 18.6846C11.9656 18.4828 12.1186 18.3219 12.3154 18.2019C12.7784 17.9242 13.2667 17.694 13.7803 17.5113C14.294 17.3286 14.8185 17.1935 15.3539 17.1058L17 19.25L18.6269 17.1058C19.1685 17.1935 19.6955 17.3286 20.2078 17.5113C20.7201 17.694 21.2104 17.9242 21.6789 18.2019C21.8763 18.3212 22.0272 18.4805 22.1317 18.6798C22.2362 18.8792 22.2949 19.0898 22.3077 19.3116V21.5385H11.6923ZM12.6673 20.5385H16.7231L14.9692 18.2346C14.5627 18.3302 14.1675 18.4544 13.7836 18.6072C13.3997 18.7601 13.0276 18.9372 12.6673 19.1385V20.5385ZM17.2769 20.5385H21.3077V19.1385C20.9513 18.9333 20.5811 18.7587 20.1972 18.6144C19.8133 18.4702 19.418 18.35 19.0115 18.2538L17.2769 20.5385ZM5.62455 20C5.171 20 4.78685 19.8418 4.4721 19.5255C4.15737 19.2091 4 18.8289 4 18.3846V5.61537C4 5.17114 4.15818 4.79086 4.47453 4.47453C4.79086 4.15818 5.17114 4 5.61538 4H18.3846C18.8289 4 19.2091 4.15818 19.5255 4.47453C19.8418 4.79086 20 5.17114 20 5.61537V9.3077C19.8487 9.16667 19.6949 9.0391 19.5385 8.925C19.3821 8.8109 19.2026 8.72308 19 8.66153V5.61537C19 5.43589 18.9423 5.28846 18.8269 5.17307C18.7115 5.05769 18.5641 5 18.3846 5H5.61538C5.43589 5 5.28846 5.05769 5.17308 5.17307C5.05769 5.28846 5 5.43589 5 5.61537V18.3846C5 18.5641 5.05769 18.7115 5.17308 18.8269C5.28846 18.9423 5.43589 19 5.61538 19H8.9577C8.94615 19.0551 8.93749 19.1103 8.93173 19.1654C8.92596 19.2205 8.92308 19.2756 8.92308 19.3308V20H5.62455ZM7.5 8.73078H14.9231C15.1641 8.58974 15.4179 8.48717 15.6846 8.42307C15.9513 8.35897 16.2231 8.3141 16.5 8.28845V7.73078H7.5V8.73078ZM7.5 12.5H12.0192C12.0449 12.3167 12.0792 12.1449 12.1221 11.9846C12.1651 11.8244 12.2148 11.6628 12.2712 11.5H7.5V12.5ZM7.5 16.2692H10.2962C10.4667 16.1321 10.6433 16.0019 10.826 15.8788C11.0087 15.7558 11.1955 15.6506 11.3866 15.5635V15.2692H7.5V16.2692ZM5 19V5V8.65578V8.25V19Z" fill="#1C1B1F"/>
                        </g>
                        </svg>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </nav>
        </div>
        `
    }
}

customElements.define('header-component', Header);