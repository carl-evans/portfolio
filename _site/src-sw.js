  
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

import {registerRoute} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies';

registerRoute(
  ({url}) => url.origin === 'https://s3.eu-west-1.amazonaws.com/carl-evans-craft-images' ||
  new StaleWhileRevalidate(),
);