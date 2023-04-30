<div align="center">

# block2discord

![](https://img.shields.io/github/license/wusteven815/block2discord)
![](https://img.shields.io/github/last-commit/wusteven815/block2discord)
![](https://img.shields.io/badge/for-DeerHacks-blue)

</div>

# Table of Contents

- [block2discord](#block2discord)
- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Installation/Usage](#installationusage)
  - [Editor](#editor)
  - [Translator](#translator)


# Features

Use `block2discord` to create Discord bots in a block-like programming language. To run the code, a program will translate it into Python using `discord.py`.


# Installation/Usage

## Editor

1. Clone this repository with `git clone`
2. Install npm dependencies with `npm install`
3. Start the server with `npx pxt serve`

## Translator

All steps take place within the `translator/` folder

1. Install pip dependencies with `pip install -r requirements.txt`
2. Create a file called `block2discord.in` and add your Python code from the editor
3. Run the translator with `python translator.py` or `python3 translator.py`
