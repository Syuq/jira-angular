# A simplified Jira clone built with Angular 16 and Akita

It is still <u>under development</u>.(Jun 2023) in my spare time.
Thanks for visiting. See you!

![Tech logos][stack]

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

Insprited by [oldboyxx/jira_clone][oldboyxx] and [Datlyfe/jira_clone][Datlyfe]

## License

[MIT](https://opensource.org/licenses/MIT)

[oldboyxx]: https://github.com/oldboyxx/jira_clone
[Datlyfe]: https://github.com/Datlyfe/jira_clone
[stack]: frontend/src/assets/img/jira-clone-tech-stack.png
