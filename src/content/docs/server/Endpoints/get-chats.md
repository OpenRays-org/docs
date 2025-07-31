---
title: get-chats.php
---

The endpoint URL is `http://georays.puppet57.xyz/php-code/get-chats.php`, to fetch all chats you will need to send a get request

# Response

The response can be parsed by splitting the line by `\n` and each line will be formatted as `user: message`

A username with `(Unverified)` suffix means the username or password is incorrect and couldn't be verified
