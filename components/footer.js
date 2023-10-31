class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="d-flex flex-row justify-content-center mt-4">
            <span class="fs-6"><small>© 2023 SHANNON LEE, ALL RIGHTS RESERVED.</small></span>
        </footer>
        `
    }
}

customElements.define('footer-component', Footer);