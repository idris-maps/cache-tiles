#cache-tiles

Serving tiles can be costly. If you use freely accessible tiles from [OpenStreetMap](http://www.openstreetmap.org) and do not want to abuse their servers. Cache the tiles on yours.

This is not a way to scrape or to [download in bulk](http://wiki.openstreetmap.org/wiki/Tile_usage_policy#Bulk_Downloading), the server only downloads tiles when your users view them and if you do not already have them.

##Install

Clone this repository and download dependencies ([express](https://www.npmjs.com/package/express), [leaflet](https://www.npmjs.com/package/leaflet) and [request](https://www.npmjs.com/package/request))

```
git clone https://github.com/idris-maps/cache-tiles.git
npm install
```

##Config

You can change tile provider in ```lib/tileProvider.js```

Default is classical OpenStreetMap, find more [here](http://wiki.openstreetmap.org/wiki/Tile_servers) or [here](http://leaflet-extras.github.io/leaflet-providers/preview/)

Do not forget the attribution and check the license.

Reset the cache when you change provider. See below.

##Start

After installing the dependencies, start the server with

```
node server
```

##Reset

To reset your cache, just delete the ```data``` folder that was created when you started the server the first time.
