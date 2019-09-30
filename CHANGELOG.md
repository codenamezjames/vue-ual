# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.1] - 2019-09-30
### Added
- Some simple documentation

## [0.3.0] - 2019-09-30
### Added
- `authenticators` can now have options. If you make an authenticator an object you can pass netChainIds and options.
- Scatter is now in the demo as one of the options


## [0.2.0] - 2019-09-30
### Changed
- The net option is now an array named nets
### Added
- `authenticators` to the options object. authenticators is an array of services to authenticate to.

## [0.1.4] - 2019-09-30
### Changed
- Fixed mock auth errors
- Moving options out in to the component level
### Added
- Options object to the component that accepts `name` and `net`
- @login event to the component that expects a function that gets called with an array of users as the parameter

## [0.1.3] - 2019-09-29
### Added
- ULA Library
- ULA UI Library
- ULA Ledger Library
- Mock auth provider
### Changed
- Basic UI code just to show the button and modal
- Updated Vue version

## [0.1.2] - 2019-09-29
### Changed
- Cleaning up docks

## [0.1.1] - 2019-09-29
### Added
- Version number references package.json now
- Version number export

## [0.1.0] - 2019-09-29
### Added
- Project scaffolding
- Preliminary trigger component (may change)


[0.1.0]: https://github.com/olivierlacan/keep-a-changelog/releases/tag/v0.0.1