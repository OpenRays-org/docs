---
title: login.php
---

The endpoint URL is `http://georays.puppet57.xyz/php-code/login.php`, to login to an account you will need to send a post request with the following data

| Key    | Type     |
| ------ | -------- |
| `user` | `string` |
| `pass` | `string` |

# Responses

| Response Message      | Cause/Reason                                         |
| --------------------- | ---------------------------------------------------- |
| `Logged in!`          | A correct username and password was provided         |
| `User doesnt exist!`  | Attempting to login to an account that doesn't exist |
| `Incorrect password!` | A incorrect password was provided                    |
| `invalid_request`     | A invalid request was provided                       |
