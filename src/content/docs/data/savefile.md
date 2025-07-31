---
title: Savefile Format
---

As of Geometry Rays Fyre 1.1.3, the default savefile format is

```
stars:0;user:0;pass:0;;;0:0;1:0;2:0;3:0;4:0;;;0
```

Save data is loaded by doing

```rust
let values_levels: Vec<&str> = save_file.split(";;;").collect();
let save_pairs: Vec<&str> = values_levels[0].split(";").collect();
let levels_completed: Vec<&str> = values_levels[1].split(";").collect();
let online_levels_completed: Vec<&str> = values_levels[2].split(";").collect();
for pair in save_pairs {
    let key_value: Vec<&str> = pair.split(":").collect();

    if key_value[0] == "stars" {
        stars = key_value[1].parse::<u32>().unwrap();
    }

    if key_value[0] == "user" {
        if key_value[1] != "0" {
            username = key_value[1].to_string();
        }
    }

    if key_value[0] == "pass" {
        if key_value[1] != "0" {
            password = key_value[1].to_string();
        }
    }
}

// This is for checking what main levels you have completed
let mut level_index: u8 = 0;
for level in levels_completed {
    let key_value: Vec<&str> = level.split(":").collect();
    if key_value[1] == "1" {
        main_levels[level_index as usize].completed = true
    }

    level_index += 1;
}

// This is for checking what online levels you have completed
for level in online_levels_completed {
    online_levels_beaten.push(level.parse().unwrap());
}
```

More info will be added here soon
