---
title: upload-level.php
---

The endpoint URL is `http://georays.puppet57.xyz/php-code/upload-level.php`, to upload a level you will need to send a post request with the following data

| Key       | Type     |
| --------- | -------- |
| `name`    | `string` |
| `desc`    | `string` |
| `data`    | `string` |
| `creator` | `string` |
| `pass`    | `string` |
| `diff`    | `string` |

# Responses

| Response Message     | Cause/Reason                      |
| -------------------- | --------------------------------- |
| `Level too big!`     | Level data over 1mb was provided  |
| `Level Uploaded!`    | Level uploaded successfully       |
| `Password Invalid`   | A incorrect password was provided |
| `User doesn't exist` | Creator user doesn't exist        |
| `invalid_request`    | A invalid request was provided    |
