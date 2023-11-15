# @emqx/shared-ui

`@emqx/shared-ui` is the central UI component library for the EMQ project, designed to provide consistent user interface elements across EMQX products such as EMQX Dashboard and EMQX Cloud. Our goal is to streamline the development process, encourage code reuse, and maintain a uniform experience for users across different EMQX platforms by fostering a shared codebase.

## 🎯 Objective

Our objective is to abstract common UI components, utilities, and theming variables for reuse across various EMQX projects, thereby reducing redundancy and facilitating a more efficient frontend development workflow.

## 📦 Usage

Components from `@emqx/shared-ui` can be easily integrated into EMQX Dashboard, EMQX Cloud, or any other EMQX web applications, ensuring a coherent look and feel while allowing customization as needed.

## 🚀 Packages

Currently, `@emqx/shared-ui` includes the following packages:

- `@emqx/i18n`: A library for internationalization and localization.
- `@emqx/utils`: A utility library offering a variety of helpful functions and tools.

These packages are located in the `packages` directory and follow this naming convention:

```json
{
  "name": "@emqx/shared-ui-xxx"
}
```

## 🛠️ Release Process

We use Changesets for managing the release process of individual packages:

```bash
# Record changes after development is completed. This can be done before the final commit, with every commit, or before releasing a version. Remember to commit to Git if not releasing.
pnpm run changeset

# Manually update the version number after recording changes, based on the Changeset information.
pnpm run version-packages
```

To release a new version, update the `npm` package version and tag it in Git, for example:

```bash
git tag 0.0.7-utils
git push origin 0.0.7-utils
```

## 📝 Development Guide

To run the development environment:

```bash
pnpm run dev
```

To build the project:

```bash
pnpm run build
```

To run tests:

```bash
pnpm run test
```

If you want to focus on developing, testing, or building a specific library, use the `--filter` parameter, For example:

```bash
pnpm run dev --filter @emqx/shared-ui-i18n
```

Remember to add corresponding test cases for your changes.

## 💡 How to Use

For example, to use the i18n library:

Install `@emqx/shared-i18n`:

```bash
npm install @emqx/shared-i18n
# or
yarn add @emqx/shared-i18n
# or
pnpm add @emqx/shared-i18n
```

To use it in your code:

```jsx
import { SQLTemplate } from '@emqx/shared-ui-i18n'
```

## 📄 License

Apache License 2.0, see [LICENSE](https://github.com/emqx/shared-ui/blob/main/LICENSE).
