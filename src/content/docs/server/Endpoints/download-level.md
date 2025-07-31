---
title: download-level.php
---

The endpoint URL is `http://georays.puppet57.xyz/php-code/download-level.php`, to download a level you will need to send a get request with the param `id` set to the level id you want to download

# Response

| Response Message       | Cause/Reason                                     |
| ---------------------- | ------------------------------------------------ |
| `[level data]`         | The level data with a prefix added by the server |
| `Level doesn't exist!` | The level ID doesn't exist                       |
| `invalid_request`      | A invalid request was provided                   |
