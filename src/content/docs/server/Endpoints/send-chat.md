---
title: send-chat.php
---

The endpoint URL is `http://georays.puppet57.xyz/php-code/send-chat.php`, to upload a chat message you will need to send a post request with the following data

| Key    | Type     |
| ------ | -------- |
| `user` | `string` |
| `pass` | `string` |
| `msg`  | `string` |

# Responses

| Response Message  | Cause/Reason                    |
| ----------------- | ------------------------------- |
| `message sent`    | A message was sent successfully |
| `invalid message` | Invalid data provided           |
| `invalid request` | A invalid request was provided  |
