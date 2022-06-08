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
    /*param-start-hosturl*/ 'http://localhost:3000/' /*param-end-hosturl*/,
  authType: AuthType.None,
  username: 'tsadmin',
});

// Instantiate class for embedding a Liveboard
const embed = new LiveboardEmbed('#embed', {
  frameParams: { height: '100vh' },
  liveboardId:
    '33248a57-cc70-4e39-9199-fb5092283381' /*param-end-liveboardFullHeight*/ /*param-end-modifyActions*/ /*param-end-liveboardId*/ /*param-end-runtimeFilters*/,
  /*param-start-liveboardFullHeight*/
  /*param-start-modifyActions*/
  /*param-start-liveboardId*/
});

embed.render();

// document.getElementById('button').addEventListener('click', () => {
//   embed.trigger('d6b69f39-06bb-48b3-b66f-0e689a17970d-2');
// });
