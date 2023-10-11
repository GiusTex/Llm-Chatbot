## Llm-Chatbot
This plugin let your rpg-characters chat with you, using free local llms. The plugin is inspired by [ChatGPT_APIMZ](https://github.com/kotonoha0109/kotonoha_tkoolMZ_Plugins/blob/main/plugins/ChatGPT_APIMZ.js) by Kotonoha.
Some code parts are also inspired by [Message Plus](https://forums.rpgmakerweb.com/index.php?threads/gabe-mz-message-plus.127925/) by Gabe.

## Table of contents
[Download demo](#download-demo)

[Set up](#set-up)

[How it works](#how-it-works)

[Plugin commands](#plugin-commands)

[Credits and inspiration](#credits-and-inspiration)

## Download demo
You can find all downloadable files [here](https://github.com/GiusTex/Llm-Chatbot/releases).

There is a pre-built, non-editable demo (Windows-demo [part1](https://github.com/GiusTex/Llm-Chatbot/releases/download/1.0.0/LLM_Chatbot-Demo_Windows.part1.rar) and [part2](https://github.com/GiusTex/Llm-Chatbot/releases/download/1.0.0/LLM_Chatbot-Demo_Windows.part2.rar), Mac-demo [part1](https://github.com/GiusTex/Llm-Chatbot/releases/download/1.0.0/LLM_Chatbot-Demo_Mac.part1.rar) and [part2](https://github.com/GiusTex/Llm-Chatbot/releases/download/1.0.0/LLM_Chatbot-Demo_Mac.part2.rar)) you can test.

If otherwise you want to test the plugin editing something or studying the demo, you can download LLM_Chatbot-Demo ([part1](https://github.com/GiusTex/Llm-Chatbot/releases/download/1.0.0/LLM_Chatbot-Demo.part1.rar) and [part2](https://github.com/GiusTex/Llm-Chatbot/releases/download/1.0.0/LLM_Chatbot-Demo.part2.rar). You have to own Rpg Maker).

Inside there are already the required dependencies (if you are on Windows, otherwise they'll be automatically downloaded but it will take some time). You can also find some NPCs to test the plugin commands with. You can also see the plugin in this video:

[![Copertina-Llm Chatbot Plugin](https://github.com/GiusTex/Llm-Chatbot/assets/112352961/fb826946-ecbb-4a30-ba81-79e664bdb1d2)](https://youtu.be/9Yv6OltnOqI)

## Set up
If you don't want to download the demo, you can download the files manually following these steps:
#### If you are on Windows:
- Download the chatbot folder ([part1](https://github.com/GiusTex/Llm-Chatbot/releases/download/1.0.0/chatbot.part1.rar) and [part2](https://github.com/GiusTex/Llm-Chatbot/releases/download/1.0.0/chatbot.part2.rar)), then unzip it in your game's root directory. The path should be like this: `[Your-Game-Name]/chatbot`.
- Download the [plugin.js](https://github.com/GiusTex/Llm-Chatbot/releases/download/untagged-0ccf3a40ee2841398959/Llm_Chatbot.js) and move it into `[Your-Game-Name]/js/plugins`.
- Run `Run Windows Server", at the end you should see a link: `http://localhost:8080` (this link works only on your computer, no one can connect to it from another one).
#### If you are not on Windows:
There will be some missing dependencies, to download them run `Run Mac Server` and wait. If after a few minutes a warning tells you `You cannot run the "Make" command` and `You need to install "Command line develeloper tools"`, select Install (this will require 30 minutes).

<details>
  <summary>Make command not available</summary>
    
  <img src="https://github.com/GiusTex/Llm-Chatbot/assets/112352961/bf70b46e-88df-4542-bd86-4d4f88ed0c76" width="473" height="217" />

  </details>
    
Once `Command line develeloper tools` is installed, run again `Run Mac Server` to finish downloading the dependencies. At the end you should see a link: `http://localhost:8080` (this link works only on your computer, no one can connect to it from another one).

You are now ready to test the 6 [plugin commands](#plugin-commands)!
## How it works
- The large language model (llm) used is [Orca-mini-3b-ggml](https://huggingface.co/TheBloke/orca_mini_3B-GGML), weighs 2 gb, and although small is good in roleplay/chat. You can change the model used by dropping a new one in the chatbot folder, and then selecting it when starting the server.
- As text generator I'm using [koboldcpp](https://github.com/LostRuins/koboldcpp), for windows, mac and linux. You could use another text-generation method by changing the `Text generation Url` parameter, but the plugin may require some tweaks then.
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
