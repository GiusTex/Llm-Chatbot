# Llm-Chatbot
An RPG Maker MZ plugin

# Table of contents
[Description](#description)

[Set up](#set-up)

[Features](#features)

[How it works](#how-it-works)

[Credits and inspiration](#credits-and-inspiration)

#### Description
This plugin let your rpg-characters chat with you, using local llms. The plugin is heavy inspired by [ChatGPT_APIMZ](https://github.com/kotonoha0109/kotonoha_tkoolMZ_Plugins/blob/main/plugins/ChatGPT_APIMZ.js) by Kotonoha.
Some code parts are also inspired by [Message Plus](https://forums.rpgmakerweb.com/index.php?threads/gabe-mz-message-plus.127925/) by Gabe.

#### Set up
With this plugin you won't need to install stuff or download big models, or pay for online text-generation services, just start the game.

#### How it works
- The large language model (llm) used is [Orca-mini-3b](https://huggingface.co/TheBloke/orca_mini_3B-GGML), weighs 2 gb, and although small is good in roleplay/chat.
- As text generator I'm using [koboldcpp](https://github.com/LostRuins/koboldcpp), for windows, mac and linux.
- You can customize koboldcpp options and run it directly in-game, depending on your computer.
- Characters can remember previous messages in an amount chosen by the user, to not create a memory too heavy.
- There are 4 plugin commands available: `start windows server` (starts koboldcpp with your desired options directly in-game, for now only on windows, but I'm studying how to add mac too), `custom chat` (the character replies to a fixed message in the text box), `AI gab message` (the character replies to a fixed message in a message box that doesn't block the user's commands, so he can keep moving) , and `AI-Dialogue` (you can write to the character and he answers you).
- You can choose the faces of the characters next to the message, and customize the text of the gab message (size, color, bold, etc)
- [Edit options](https://github.com/GiusTex/Llm-Chatbot/blob/main/docs/Examples.md).

#### Credits and inspiration
- [ChatGPT_APIMZ](https://github.com/kotonoha0109/kotonoha_tkoolMZ_Plugins/blob/main/plugins/ChatGPT_APIMZ.js) by Kotonoha
- [Message Plus](https://forums.rpgmakerweb.com/index.php?threads/gabe-mz-message-plus.127925/) by Gabe
