An example site built with the [MHP](https://github.com/mtti/mhp) static site generator.

Apart from being a full example of how to build a site with MHP, this project is also used as a kind of integration test to verify MHP is working properly. Run `npm run test:backend` to generate the site with default settings and compare the generated file's checksums against the approved ones in `/test/checksums.json`.

Includes 200 posts generated with MHP's own random post generator:

```
./node_modules/.bin/mhp generate-posts bacon --field category=bacon
./node_modules/.bin/mhp generate-posts eggs --field category=eggs
```
