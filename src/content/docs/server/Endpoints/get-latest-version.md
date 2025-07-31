---
title: get-latest-version.php
---

The endpoint URL is `http://georays.puppet57.xyz/php-code/get-latest-version.php`, to the get latest version of geometry rays you will need to send a post request with the following data

| Key    | Type     | required |
| ------ | -------- | -------- |
| `fyre` | `string` | `false`  |

# Response

If post data key `fyre` is value `fyre`, the Geometry Rays Fyre version will be returned, if not, then it will return the Geometry Rays Legacy version
