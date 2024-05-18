class Contact extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="w-100 row pe-0 m-0">
            <div class="col-sm-7 col-12 p-5 d-flex flex-column gap-3 overflow--hidden">
                <h2 class="text-uppercase" data-aos="fade-down">Contact Me!</h2>
                <p data-aos="fade">I am looking for a position where I can help solve real user problems and create delightful and accessible products. I want to work with people that challenge each other to think of innovative and creative solutions, and build intuitive, problem-solving applications.
                </p>
                <div class="mt-2 d-flex flex-row align-items-center" data-aos="fade">
                    <a href="mailto:shannontlee96@gmail.com">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_52_400" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <rect width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_52_400)">
                        <path d="M4 16.6154C3.71923 16.5128 3.48237 16.3362 3.28942 16.0856C3.09647 15.8349 3 15.55 3 15.2308V7.57307C3 7.39999 3.04519 7.24069 3.13557 7.09518C3.22596 6.94968 3.35769 6.82948 3.53078 6.7346L11 3L18.3192 6.7346C18.4679 6.79615 18.5843 6.90321 18.6683 7.05578C18.7522 7.20833 18.8128 7.36922 18.85 7.53845H17.7135L11 4.13463L4 7.60963V16.6154ZM7.38463 20C6.92436 20 6.54006 19.8458 6.23172 19.5375C5.92339 19.2292 5.76922 18.8449 5.76922 18.3846V10.9231C5.76922 10.4628 5.92339 10.0785 6.23172 9.77018C6.54006 9.46184 6.92436 9.30768 7.38463 9.30768H19.3846C19.8449 9.30768 20.2292 9.46184 20.5375 9.77018C20.8458 10.0785 21 10.4628 21 10.9231V18.3846C21 18.8449 20.8458 19.2292 20.5375 19.5375C20.2292 19.8458 19.8449 20 19.3846 20H7.38463ZM13.3846 14.7346L6.76923 11.3846V18.3846C6.76923 18.5641 6.82692 18.7115 6.9423 18.8269C7.05768 18.9423 7.20513 19 7.38463 19H19.3846C19.5641 19 19.7115 18.9423 19.8269 18.8269C19.9423 18.7115 20 18.5641 20 18.3846V11.3846L13.3846 14.7346ZM13.3846 13.6577L19.7692 10.4231C19.7051 10.3846 19.6442 10.3558 19.5865 10.3365C19.5289 10.3173 19.4615 10.3077 19.3846 10.3077H7.38463C7.32051 10.3077 7.2564 10.3173 7.1923 10.3365C7.1282 10.3558 7.0641 10.3846 7 10.4231L13.3846 13.6577Z" fill="#1C1B1F"/>
                        </g>
                        </svg>
                        <span class="text-decoration-underline ps-2">shannontlee96@gmail.com</span>
                    </a>
                </div>
                <div class="d-flex flex-row align-items-center gap-2" data-aos="fade">
                    <a href="/assets/ShannonLee.pdf" target="_blank">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_52_406" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <rect width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_52_406)">
                        <path d="M17 15.6346C16.359 15.6346 15.8141 15.4103 15.3654 14.9616C14.9167 14.5128 14.6923 13.9679 14.6923 13.3269C14.6923 12.6859 14.9167 12.141 15.3654 11.6923C15.8141 11.2436 16.359 11.0192 17 11.0192C17.641 11.0192 18.1859 11.2436 18.6346 11.6923C19.0833 12.141 19.3077 12.6859 19.3077 13.3269C19.3077 13.9679 19.0833 14.5128 18.6346 14.9616C18.1859 15.4103 17.641 15.6346 17 15.6346ZM17 14.6346C17.3603 14.6346 17.6683 14.5067 17.924 14.2509C18.1798 13.9952 18.3077 13.6872 18.3077 13.3269C18.3077 12.9667 18.1798 12.6586 17.924 12.4029C17.6683 12.1471 17.3603 12.0192 17 12.0192C16.6397 12.0192 16.3317 12.1471 16.076 12.4029C15.8202 12.6586 15.6923 12.9667 15.6923 13.3269C15.6923 13.6872 15.8202 13.9952 16.076 14.2509C16.3317 14.5067 16.6397 14.6346 17 14.6346ZM11.6923 21.5385V19.3308C11.6923 19.1017 11.747 18.8863 11.8563 18.6846C11.9656 18.4828 12.1186 18.3219 12.3154 18.2019C12.7784 17.9242 13.2667 17.694 13.7803 17.5113C14.294 17.3286 14.8185 17.1935 15.3539 17.1058L17 19.25L18.6269 17.1058C19.1685 17.1935 19.6955 17.3286 20.2078 17.5113C20.7201 17.694 21.2104 17.9242 21.6789 18.2019C21.8763 18.3212 22.0272 18.4805 22.1317 18.6798C22.2362 18.8792 22.2949 19.0898 22.3077 19.3116V21.5385H11.6923ZM12.6673 20.5385H16.7231L14.9692 18.2346C14.5627 18.3302 14.1675 18.4544 13.7836 18.6072C13.3997 18.7601 13.0276 18.9372 12.6673 19.1385V20.5385ZM17.2769 20.5385H21.3077V19.1385C20.9513 18.9333 20.5811 18.7587 20.1972 18.6144C19.8133 18.4702 19.418 18.35 19.0115 18.2538L17.2769 20.5385ZM5.62455 20C5.171 20 4.78685 19.8418 4.4721 19.5255C4.15737 19.2091 4 18.8289 4 18.3846V5.61537C4 5.17114 4.15818 4.79086 4.47453 4.47453C4.79086 4.15818 5.17114 4 5.61538 4H18.3846C18.8289 4 19.2091 4.15818 19.5255 4.47453C19.8418 4.79086 20 5.17114 20 5.61537V9.3077C19.8487 9.16667 19.6949 9.0391 19.5385 8.925C19.3821 8.8109 19.2026 8.72308 19 8.66153V5.61537C19 5.43589 18.9423 5.28846 18.8269 5.17307C18.7115 5.05769 18.5641 5 18.3846 5H5.61538C5.43589 5 5.28846 5.05769 5.17308 5.17307C5.05769 5.28846 5 5.43589 5 5.61537V18.3846C5 18.5641 5.05769 18.7115 5.17308 18.8269C5.28846 18.9423 5.43589 19 5.61538 19H8.9577C8.94615 19.0551 8.93749 19.1103 8.93173 19.1654C8.92596 19.2205 8.92308 19.2756 8.92308 19.3308V20H5.62455ZM7.5 8.73078H14.9231C15.1641 8.58974 15.4179 8.48717 15.6846 8.42307C15.9513 8.35897 16.2231 8.3141 16.5 8.28845V7.73078H7.5V8.73078ZM7.5 12.5H12.0192C12.0449 12.3167 12.0792 12.1449 12.1221 11.9846C12.1651 11.8244 12.2148 11.6628 12.2712 11.5H7.5V12.5ZM7.5 16.2692H10.2962C10.4667 16.1321 10.6433 16.0019 10.826 15.8788C11.0087 15.7558 11.1955 15.6506 11.3866 15.5635V15.2692H7.5V16.2692ZM5 19V5V8.65578V8.25V19Z" fill="#1C1B1F"/>
                        </g>
                        </svg>
                        <span class="text-decoration-underline ps-2">view my resume</span>
                    </a>
                </div>
                <!-- socials -->
                <div class="mt-2 d-flex flex-row gap-2" data-aos="fade">
                    <!-- linkedin -->
                    <a href="https://www.linkedin.com/in/shannon-lee-9108a3105/" target="_blank" aria-label="View my professional profile at LinkedIn">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.16719 17.5001H1.53906V5.8165H5.16719V17.5001ZM3.35117 4.22275C2.19102 4.22275 1.25 3.26182 1.25 2.10166C1.25 1.54439 1.47137 1.00995 1.86542 0.615907C2.25947 0.221861 2.79391 0.000488281 3.35117 0.000488281C3.90844 0.000488281 4.44288 0.221861 4.83692 0.615907C5.23097 1.00995 5.45234 1.54439 5.45234 2.10166C5.45234 3.26182 4.51094 4.22275 3.35117 4.22275ZM18.7461 17.5001H15.1258V11.8126C15.1258 10.4571 15.0984 8.71885 13.2395 8.71885C11.3531 8.71885 11.0641 10.1915 11.0641 11.7149V17.5001H7.43984V5.8165H10.9195V7.41025H10.9703C11.4547 6.49228 12.6379 5.52353 14.4031 5.52353C18.075 5.52353 18.75 7.9415 18.75 11.0821V17.5001H18.7461Z" fill="black"/>
                        </svg>
                    </a>
                    <!-- github -->
                    <a href="https://github.com/Leest1/" target="_blank" aria-label="View my Github coding projects">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_38_140)">
                        <path d="M6.79297 15.5234C6.79297 15.6016 6.70312 15.6641 6.58984 15.6641C6.46094 15.6758 6.37109 15.6133 6.37109 15.5234C6.37109 15.4453 6.46094 15.3828 6.57422 15.3828C6.69141 15.3711 6.79297 15.4336 6.79297 15.5234ZM5.57812 15.3477C5.55078 15.4258 5.62891 15.5156 5.74609 15.5391C5.84766 15.5781 5.96484 15.5391 5.98828 15.4609C6.01172 15.3828 5.9375 15.293 5.82031 15.2578C5.71875 15.2305 5.60547 15.2695 5.57812 15.3477ZM7.30469 15.2812C7.19141 15.3086 7.11328 15.3828 7.125 15.4727C7.13672 15.5508 7.23828 15.6016 7.35547 15.5742C7.46875 15.5469 7.54688 15.4727 7.53516 15.3945C7.52344 15.3203 7.41797 15.2695 7.30469 15.2812ZM9.875 0.3125C4.45703 0.3125 0.3125 4.42578 0.3125 9.84375C0.3125 14.1758 3.03906 17.8828 6.93359 19.1875C7.43359 19.2773 7.60938 18.9688 7.60938 18.7148C7.60938 18.4727 7.59766 17.1367 7.59766 16.3164C7.59766 16.3164 4.86328 16.9023 4.28906 15.1523C4.28906 15.1523 3.84375 14.0156 3.20312 13.7227C3.20312 13.7227 2.30859 13.1094 3.26562 13.1211C3.26562 13.1211 4.23828 13.1992 4.77344 14.1289C5.62891 15.6367 7.0625 15.2031 7.62109 14.9453C7.71094 14.3203 7.96484 13.8867 8.24609 13.6289C6.0625 13.3867 3.85938 13.0703 3.85938 9.3125C3.85938 8.23828 4.15625 7.69922 4.78125 7.01172C4.67969 6.75781 4.34766 5.71094 4.88281 4.35938C5.69922 4.10547 7.57812 5.41406 7.57812 5.41406C8.35938 5.19531 9.19922 5.08203 10.0312 5.08203C10.8633 5.08203 11.7031 5.19531 12.4844 5.41406C12.4844 5.41406 14.3633 4.10156 15.1797 4.35938C15.7148 5.71484 15.3828 6.75781 15.2812 7.01172C15.9062 7.70312 16.2891 8.24219 16.2891 9.3125C16.2891 13.082 13.9883 13.3828 11.8047 13.6289C12.1641 13.9375 12.4688 14.5234 12.4688 15.4414C12.4688 16.7578 12.457 18.3867 12.457 18.707C12.457 18.9609 12.6367 19.2695 13.1328 19.1797C17.0391 17.8828 19.6875 14.1758 19.6875 9.84375C19.6875 4.42578 15.293 0.3125 9.875 0.3125ZM4.10938 13.7852C4.05859 13.8242 4.07031 13.9141 4.13672 13.9883C4.19922 14.0508 4.28906 14.0781 4.33984 14.0273C4.39062 13.9883 4.37891 13.8984 4.3125 13.8242C4.25 13.7617 4.16016 13.7344 4.10938 13.7852ZM3.6875 13.4688C3.66016 13.5195 3.69922 13.582 3.77734 13.6211C3.83984 13.6602 3.91797 13.6484 3.94531 13.5938C3.97266 13.543 3.93359 13.4805 3.85547 13.4414C3.77734 13.418 3.71484 13.4297 3.6875 13.4688ZM4.95312 14.8594C4.89062 14.9102 4.91406 15.0273 5.00391 15.1016C5.09375 15.1914 5.20703 15.2031 5.25781 15.1406C5.30859 15.0898 5.28516 14.9727 5.20703 14.8984C5.12109 14.8086 5.00391 14.7969 4.95312 14.8594ZM4.50781 14.2852C4.44531 14.3242 4.44531 14.4258 4.50781 14.5156C4.57031 14.6055 4.67578 14.6445 4.72656 14.6055C4.78906 14.5547 4.78906 14.4531 4.72656 14.3633C4.67188 14.2734 4.57031 14.2344 4.50781 14.2852Z" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_38_140">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </a>
                    <!-- dribbble -->
                    <a href="https://dribbble.com/Shannonigans" target="_blank" aria-label="View my design portfolio at Dribbble">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_38_144)">
                        <path d="M10 0.3125C4.65828 0.3125 0.3125 4.65828 0.3125 10C0.3125 15.3417 4.65828 19.6875 10 19.6875C15.3417 19.6875 19.6875 15.3417 19.6875 10C19.6875 4.65828 15.3417 0.3125 10 0.3125ZM16.4051 4.77992C17.5575 6.18797 18.2554 7.98137 18.2736 9.93441C18.0008 9.87672 15.2651 9.32184 12.5118 9.66809C12.2871 9.11961 12.0751 8.63711 11.7846 8.04254C14.844 6.79344 16.2306 5.0159 16.4051 4.77992ZM15.4852 3.82305C15.3364 4.03504 14.0908 5.70922 11.1484 6.81207C9.7925 4.32082 8.28965 2.27426 8.06094 1.96801C10.685 1.33547 13.4502 2.01762 15.4852 3.82305ZM6.48207 2.52422C6.70023 2.8234 8.17887 4.8725 9.54992 7.30973C5.67934 8.33758 2.27023 8.32277 1.90016 8.31789C2.43672 5.7502 4.16711 3.61613 6.48207 2.52422ZM1.72539 10.0126C1.72539 9.92801 1.72707 9.84379 1.72961 9.75977C2.09164 9.76719 6.10148 9.81887 10.2338 8.58219C10.4706 9.04578 10.6969 9.51637 10.9046 9.98645C7.91246 10.8292 5.19391 13.2492 3.85262 15.5453C2.53102 14.0783 1.72539 12.1379 1.72539 10.0126ZM4.92098 16.5405C5.78531 14.7736 8.13105 12.4927 11.467 11.3547C12.6287 14.3736 13.1092 16.9036 13.2322 17.6296C10.5716 18.7629 7.37227 18.452 4.92098 16.5405ZM14.6233 16.8721C14.5385 16.3687 14.0981 13.9464 13.0158 10.9723C15.6088 10.5573 17.8869 11.2367 18.17 11.3261C17.8012 13.6284 16.4796 15.6168 14.6233 16.8721Z" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_38_144">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="col-sm-5 col-12 pe-0">
                <img src="/assets/contactMe2.webp" id="contactMeImg" class="w-100 h-100 object-fit-cover" alt="Me smiling at the camera with a coffee in hand."/>
            </div>
        </div>
        `
    }
}

customElements.define('contact-component', Contact);