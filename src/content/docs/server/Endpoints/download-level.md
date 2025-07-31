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

This is the official method for parsing data in Geometry Rays Fyre 1.1.3, a cleaner method to parsing will be added here eventually.

```rust
pub fn parse_level_download_response(
    level_download_result: String,
    online_level_name: &mut String,
    online_level_desc: &mut String,
    online_level_diff: &mut u8,
    online_level_rated: &mut bool,
    online_level_creator: &mut String,
    online_level_data: &mut String
) {
    let level_download_result_parts: Vec<&str> = level_download_result.split(";;;;;").collect();
    let level_download_result_parts_empty_user: Vec<&str> = level_download_result.split(";;;;;;").collect();
    let name_desc: Vec<&str> = level_download_result_parts[0].split(";").collect();

    *online_level_name = name_desc[0].to_string();
    *online_level_desc = name_desc[1].to_string();
    *online_level_diff = name_desc[2].parse().unwrap();
    if name_desc.len() > 4 {
        *online_level_creator = name_desc[4].parse().unwrap();
    } else {
        *online_level_creator = "".to_string();
    }

    if name_desc.len() > 4 {
        *online_level_data = level_download_result_parts[1].to_string();
    } else {
        *online_level_data = level_download_result_parts_empty_user[1].to_string();
    }

    if name_desc[3] == "0" {
        *online_level_rated = false
    } else {
        *online_level_rated = true
    }
}
```
