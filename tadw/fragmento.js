class MiComponenteOffline extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
        <p>Esto no está en Github.io</p>
        `;
    }
}

customElements.define("team-off", MiComponenteOffline);