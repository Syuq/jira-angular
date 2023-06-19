# A simplified Jira clone built with Angular 9 and Akita

It is still <u>under development</u>.(Jun 2023) in my spare time.
Thanks for visiting. See you!

![Tech logos][stack]

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nx](https://img.shields.io/badge/nx-143055?style=for-the-badge&logo=nx&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Arch](https://img.shields.io/badge/Arch%20Linux-1793D1?logo=arch-linux&logoColor=fff&style=for-the-badge)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Jira](https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white)

## Features

- Proven, scalable, and easy to understand project structure
- All code are written in TypeScript
- Project setup with Angular CLI
- Use Akita state management
- Use TailwindCSS

## Setting up development environment 🛠

- `git clone https://github.com/Syuq/jira-angular-clone.git`
- `npm run install-dependencies`
- `cd frontend && npm start`
- App should now be running on `http://localhost:4200/`

## What's missing?

There are features missing from this showcase product which should exist in a real product:

### Proper backend API

I am currently using a `json` file for storing data.

### Accessibility ♿

Not all components have properly defined [aria attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA), visual focus indicators etc. Most early stage companies tend to ignore this aspect of their product but in many cases they shouldn't, especially once their userbase starts growing.

### Unit/Integration tests 🧪

I only write test for some functions and skipped the end to end testing.

## Author: Syuq ✍️

- Website: https://github.com/Syuq

## Contributing

I will not be accepting PR's on this repository. Feel free to fork and maintain your own version.

## Credits

Insprited by [oldboyxx/jira_clone][oldboyxx] and [Datlyfe/jira_clone][Datlyfe] and [trungk18/jira-clone-angular][trungk18]

## License

[MIT](https://opensource.org/licenses/MIT)

[oldboyxx]: https://github.com/oldboyxx/jira_clone
[Datlyfe]: https://github.com/Datlyfe/jira_clone
[trungk18]: https://github.com/trungk18/jira-clone-angular
[stack]: frontend/src/assets/img/jira-clone-tech-stack.png
