## Llm-Chatbot
An RPG Maker MZ plugin

## Table of contents
[Description](#description)

[Download demo](#download-demo)

[Set up](#set-up)

[Features](#features)

[How it works](#how-it-works)

[Plugin commands](#plugin-commands)

[Credits and inspiration](#credits-and-inspiration)

## Description
This plugin let your rpg-characters chat with you, using free local llms. The plugin is heavy inspired by [ChatGPT_APIMZ](https://github.com/kotonoha0109/kotonoha_tkoolMZ_Plugins/blob/main/plugins/ChatGPT_APIMZ.js) by Kotonoha.
Some code parts are also inspired by [Message Plus](https://forums.rpgmakerweb.com/index.php?threads/gabe-mz-message-plus.127925/) by Gabe.

## Download demo
There is a pre-built demo you can test; you can download it from [here](https://github.com/GiusTex/Llm-Chatbot/releases). Inside there are already `orca-mini-3b-ggml` and `koboldcpp.exe`. You can also find some NPCs to test the 4 plugin commands with. You can also see a test video:

[![Watch the video](https://img.youtube.com/vi/5d2SO-kegT0/hqdefault.jpg)](https://www.youtube.com/embed/5d2SO-kegT0)

## Set up
If you don't want to download the [demo](https://github.com/GiusTex/Llm-Chatbot/releases), you can download the files manually following these steps:
- Download [Llm_chatbot.zip](https://github.com/GiusTex/Llm-Chatbot/archive/refs/heads/main.zip), then unzip it and move github's `chatbot` folder in your game's root directory. The path should be like this: `[Your-Game-Name]/chatbot`.
- Download [koboldcpp.exe](https://github.com/LostRuins/koboldcpp/releases) if you are on windows. If you are not on windows the script will download automatically the koboldcpp dependencies (inside the chatbot folder).
- Download the [model](https://huggingface.co/TheBloke/orca_mini_3B-GGML/resolve/main/orca-mini-3b.ggmlv3.q5_0.bin) and put it in the `chatbot` folder.
- Move `Llm_chatbot.js` from github's `plugin` folder to `[Your-Game-Name]\js\plugins` one. 
- Start the game. The plugin offers 4 [plugin commands](#plugin-commands).

## How it works
- The large language model (llm) used is [Orca-mini-3b-ggml](https://huggingface.co/TheBloke/orca_mini_3B-GGML), weighs 2 gb, and although small is good in roleplay/chat.
- As text generator I'm using [koboldcpp](https://github.com/LostRuins/koboldcpp), for windows, mac and linux.
- You can customize koboldcpp options depending on your computer strenght and run it directly in-game.
- Characters can remember previous messages in an amount chosen by the user, to not create a memory too heavy.

## Plugin commands
- There are 6 plugin commands available:
  - `Run Windows Server` (starts koboldcpp with your desired options directly in-game (only on windows and mac);
  - `Run Mac Server` (starts koboldcpp with your desired options directly in-game (only on windows and mac);
  - `Custom AI Answer` (the character replies to a fixed message in the text box);
  - `Gab Message` (message box that doesn't block the user's commands, so you can keep moving);
  - `AI Gab Message` (the character replies to a fixed message in a message box that doesn't block the user's commands, so he can keep moving);
  - `Start Dialogue` (you can chat with the character/npc and he answers you).

You can choose the faces of the characters next to the messages, and the [character's context](https://github.com/GiusTex/Llm-Chatbot/blob/main/docs/Examples.md#custom-characters).

## Credits and inspiration
- [ChatGPT_APIMZ](https://github.com/kotonoha0109/kotonoha_tkoolMZ_Plugins/blob/main/plugins/ChatGPT_APIMZ.js) by Kotonoha
- [Message Plus](https://forums.rpgmakerweb.com/index.php?threads/gabe-mz-message-plus.127925/) by Gabe
