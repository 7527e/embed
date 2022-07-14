// Import stylesheets
import './style.css';

// Import ThoughtSpot SDK
import {
  init,
  LiveboardEmbed,
  Action,
  RuntimeFilterOp,
  EmbedEvent,
  AuthType,
  logout,
  HostEvent,
} from '@thoughtspot/visual-embed-sdk';

// Initialize embed configuration
init({
  thoughtSpotHost:
    /*param-start-hosturl*/
    // 'https://172.19.174.234:8443/',
  'http://localhost:3000/',
  /*param-end-hosturl*/ authType: AuthType.None,
  username: 'tsadmin',
});

// Instantiate class for embedding a Liveboard
const embed = new LiveboardEmbed('#embed', {
  frameParams: { height: '100vh' },
  disabledActions: [Action.ShowUnderlyingData],
  liveboardId:
    '33248a57-cc70-4e39-9199-fb5092283381' /*param-end-liveboardFullHeight*/ /*param-end-modifyActions*/ /*param-end-liveboardId*/ /*param-end-runtimeFilters*/,
  liveboardV2: true,
  /*param-start-liveboardFullHeight*/
  /*param-start-modifyActions*/
  /*param-start-liveboardId*/
  // vizId: "1e99d70f-c1dc-4a52-9980-cfd4d14ba6d6",
});

embed.render();

document.getElementById('button1').addEventListener('click', () => {
  embed.trigger(HostEvent.CopyLink);
});


document.getElementById('button2').addEventListener('click', () => {
  embed.trigger(HostEvent.CopyLink, {vizId: 'c89fda22-329f-492c-a027-2256cc3e6933'});
});


document.getElementById('button3').addEventListener('click', () => {
  embed.trigger(HostEvent.CopyLink, {vizId: 'c89fda22-32cdfsd9f-492c-a027-2256cc3e6933'});
});
