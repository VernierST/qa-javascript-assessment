import { LitElement, html, css } from 'lit';
import { until } from 'lit/directives/until.js';

export class VernierApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        background-color: var(--vernier-app-background-color);
      }

      main {
        flex-grow: 1;
      }

      .logo {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    `;
  }

  /**
   * List of recent natural events from NASA's EONET
   *
   * @return  {Element}
   */
  static async makeNaturalEventsList() {
    const eventsData = await (await fetch('https://eonet.gsfc.nasa.gov/api/v3/events?limit=15')).json();
    const events = eventsData.events.map(event => html`
      <li>${event.title}</li>
    `);

    return html`
      <ol id="trends-list">
        ${events}
      </ol>
      <p>Thanks, <a href="https://eonet.gsfc.nasa.gov/what-is-eonet">EONET</a>!</p>
    `;
  }

  constructor() {
    super();
    this.title = 'Natural Events';
  }

  render() {
    return html`
      <main>
        <h1>${this.title}</h1>
        ${until(VernierApp.makeNaturalEventsList(), html`Loading...`)}
      </main>
    `;
  }
}
