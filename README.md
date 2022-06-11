# verto

> A multi-currency cross-blockchain peer-to-peer wallet


Verto is being built as a multi-currency wallet for integrating sovereign services into one, user controlled and managed, anonymous, and decentralized tool. The focus of Verto is to simplify the usage of blockchain technology in a way that is intuative for those unfamiliar with the technology.

## Table of Contents

<!-- toc -->

- [Before You Begin](#before-you-begin)
- [Install](#install)
- [Usage](#usage)
  * [Web](#web)
  * [Electron](#electron)
  * [Android](#android)
  * [IOS](#ios)
- [Maintainers](#maintainers)
- [Contribute](#contribute)
- [License](#license)

<!-- tocstop -->

## Before You Begin

If you are unfamiliar with the Volentix repository management strategy, [please read this guide.](https://github.com/Volentix/documentation/blob/master/REPO_MANAGEMENT_GUIDE.md)

To know more about Verto architecture, [please read this guide.](https://vertohowto.readthedocs.io/en/latest/architecture/index.html)

## Install

To install Verto you will need to have the following installed on your system:

1. **Yarn:**
2. **Node:** v14.18.0
3. **Quasar:** v1.0.0 [Install Quasar Docs](https://quasar.dev/quasar-cli/installation). 

```
Note that other version of Node and NPM may work, however, these are the versions our team is using.
```

If you are looking to simply try running Verto, but do not wish to contribute, you can simply clone the repository
```
git clone https://github.com/Volentix/verto.git
```

If you are looking to make contributions, you will need to fork the repository. Please refer to the [Contributing Guide for details](.github/CONTRIBUTING.md)

Once you have a copy locally, cd into the cloned directory:
```
cd verto/app
```

No install the dependancies:
```
yarn
```

Thats it! Happy hacking!

## Usage

You can run Verto on the following platforms:

### Web

Only a browser is required to run on web.

```
QENV=development quasar dev
```

### Tauri

No additional tooling is required to run Verto as an electron app.

```
QENV=development quasar dev -m tauri
```

### Electron

No additional tooling is required to run Verto as an electron app.

```
QENV=development quasar dev -m electron
```

### Android

You must install the android development environment for your platform. This is considered out of scope for this guide. Please refer to online documentation from official sources.

```
QENV=development quasar dev -m android
```

### IOS

You must install the android development environment for your platform. This is considered out of scope for this guide. Please refer to online documentation from official sources.

```
QENV=development quasar dev -m ios
```

## License

MIT © 2019 Volentix
