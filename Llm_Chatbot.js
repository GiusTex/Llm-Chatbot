//============================================================================
// 
//============================================================================

/*:
 * @target MZ
 * @plugindesc [v1.0] Llm Chatbot
 * @author GiusTex
 * @url https://github.com/GiusTex/Llm-Chatbot
 * @orderAfter VisuMZ_1_MessageCore
 * 
 * ============================================================================
 * 
 *                              PLUGIN COMMANDS
 * 
 * ============================================================================
 * 
 * @command RunWindowsServer
 * @text Run Windows Server
 * @desc Enter in-game the options of your private text-generation server for windows.
 * 
 * ============================================================================
 * 
 * @command RunMacServer
 * @text Run Mac Server
 * @desc Enter in-game the options of your private text-generation server for mac.
 * 
 * ============================================================================
 * 
 * @command AIAnswer
 * @text Custom AI Answer
 * @desc Create a character that will answer to a determined message.
 * 
 * @arg memoryIdArg
 * @text Context Id
 * @parent CharacterOptions
 * @type string
 * @default Event 1
 * @desc Give an ID to the memory of this character, to know what memory-id to edit later if needed.
 * 
 * @arg AiNpcAnswer
 * @text AI-Npc Answer
 * @type struct<AiNpcAnswer>[]
 * @desc Define the character, how it answers, and the text generation options. Blank settings will use default Plugin Parameter settings.
 * @default ["{\"TextMessage\":\"Hello there, good morning. Answer me differently from before, please.\",\"CustomMessageOptions\":\"\",\"CustomQuestionMessageVarId\":\"1\",\"CustomAnswerMessageVarId\":\"2\",\"CustomMemoryMessageVarId\":\"3\",\"memory_talk\":\"6\",\"GenerationOptions\":\"\",\"batch_size\":\"128\",\"n_keep\":\"-1\",\"n_predict\":\"2048\",\"temperature\":\"0.8\",\"top_p\":\"0.92\",\"top_k\":\"0\",\"threads\":\"8\",\"maxContextLength\":\"1024\",\"CharacterOptions\":\"\",\"UserName\":\"Reid\",\"CharacterName\":\"Priscilla\",\"character\":\"Character: Priscilla; species: human; class: assistant; age: 14; gender: female; physical appearance: petite; clothes: light yellow t-shirt, skirt; personality: friendly, brave, studious; likes: helping others, practicing magic\",\"description\":\"description: Priscilla is a cheerful girl who loves to make others smile. She is an optimist who loves to spread happiness and positivity whenever she can. She knows you are a member of the hero's party, so she can't wait for your visits at her village.\",\"startScene\":\"Start Scene: (Priscilla enter the conversation with a smile, her eyes lighting up when she sees you. She is wearing a light yellow t-shirt and a skirt, her hands behind her back hide her happiness and trepidation. Her enthusiasm is palpable in the air). Hey! I'm so excited to finally meet you again! I'm sure you have a wealth of knowledge that I can learn from.\\nThe following is an interesting conversation between Reid and Priscilla.\\\\n\\nReid: So how did you spend the day without me?\\\\n\\nPriscilla: Um, nothing in particular: I did some homework, and then I went out with friends. I missed you.\\\\n\\nReid: I see. You had a normal day then; I'm here again now anyway, so don't worry.\\\\n\\nPriscilla: (She chuckles bashfully). Thanks!\\\\n\\nReid: So what do you do when I'm not around?\\\\n\\nPriscilla: I love exploring, going out with friends, studying spells on books, and playing games.\\\\n\"}"]
 * 
 * @arg faceImage
 * @text Face image
 * @type file
 * @default Actor1
 * @desc character face graphics
 * Leave blank if not displayed.
 * @dir img/faces/
 * 
 * @arg faceIndex
 * @text Face index
 * @type number
 * @default 1
 * @desc Upper left is 0-3, lower right is 4-7.
 * 
 * ============================================================================
 * 
 * @command gabMessage
 * @text Gab message
 * @desc Write a Custom Gab Message.
 * 
 * @arg TextMessage
 * @text Message-Question
 * @type multiline_string
 * @default
 * @desc Message or question for this event.
 * 
 * @arg TextOptions
 * @text Text Options
 * @type struct<TextOptions>[]
 * @desc Change the settings you want to override with this gab. Blank settings will use default Plugin Parameter settings.
 * @default ["{\"RemoveTimer\":\"4000\",\"TextOptions\":\"\",\"TextSize\":\"24\",\"TextColor\":\"#ffffff\",\"ItalicText\":\"false\",\"BoldText\":\"false\",\"TextHeight\":\"35\",\"TextX\":\"0\",\"TextY\":\"0\",\"GabWindowOptions\":\"\",\"maxCharactersPerLine\":\"20\",\"wordWrapWidth\":\"250\",\"linesPerMessage\":\"4\",\"messageFieldWidth\":\"300\",\"messageFieldHeight\":\"100\",\"backgroundWindowX\":\"0\",\"backgroundWindowY\":\"0\",\"backgroundWindowScaleX\":\"3.3\",\"backgroundWindowScaleY\":\"1.1\",\"backgroundWindowOpacity\":\"0.8\",\"backgroundRectX\":\"92\",\"backgroundRectY\":\"92\"}"]
 * 
 * @arg useFace
 * @text Show face?
 * @type boolean
 * @default true
 * @desc Choose whether or not to show the npc's face. If on, the text is automatically moved.
 * 
 * @arg faceOptions
 * @text Face Options
 * @type struct<faceOptions>[]
 * @desc Define what face to show near the gab message, and other face options. Blank settings will use default Plugin Parameter settings.
 * @default ["{\"faceImage\":\"Actor1\",\"faceIndex\":\"2\",\"FaceOptions\":\"\",\"FaceX\":\"0\",\"FaceY\":\"0\",\"FaceScaleX\":\"0.7\",\"FaceScaleY\":\"0.7\",\"opacity\":\"1\",\"blendMode\":\"NORMAL\"}"]
 * 
 * @ ============================================================================
 * 
 * @command AiGabMessage
 * @text AI Gab message
 * @desc Write a Custom Gab Message.
 * 
 * @arg memoryIdArg
 * @text Context Id
 * @parent CharacterOptions
 * @type string
 * @default Event 1
 * @desc Give an ID to the memory of this character, to know what memory-id to edit later if needed.
 * 
 * @arg NpcXNpcChat
 * @text Is it a chat between Npcs?
 * @type boolean
 * @default false
 * @desc If true, the Npcs will talk to themselves (leave blank your message field).
 * 
 * @arg AiNpcAnswer
 * @text AI-Npc Answer
 * @type struct<AiNpcAnswer>[]
 * @desc Define the character, how it answers, and the text generation options. Blank settings will use default Plugin Parameter settings.
 * @default ["{\"TextMessage\":\"Hello there, good morning. Answer me differently from before, please.\",\"CustomMessageOptions\":\"\",\"CustomQuestionMessageVarId\":\"1\",\"CustomAnswerMessageVarId\":\"2\",\"CustomMemoryMessageVarId\":\"3\",\"memory_talk\":\"6\",\"GenerationOptions\":\"\",\"batch_size\":\"128\",\"n_keep\":\"-1\",\"n_predict\":\"2048\",\"temperature\":\"0.8\",\"top_p\":\"0.92\",\"top_k\":\"0\",\"threads\":\"8\",\"maxContextLength\":\"1024\",\"CharacterOptions\":\"\",\"UserName\":\"Reid\",\"CharacterName\":\"Priscilla\",\"character\":\"Character: Priscilla; species: human; class: assistant; age: 14; gender: female; physical appearance: petite; clothes: light yellow t-shirt, skirt; personality: friendly, brave, studious; likes: helping others, practicing magic\",\"description\":\"description: Priscilla is a cheerful girl who loves to make others smile. She is an optimist who loves to spread happiness and positivity whenever she can. She knows you are a member of the hero's party, so she can't wait for your visits at her village.\",\"startScene\":\"Start Scene: (Priscilla enter the conversation with a smile, her eyes lighting up when she sees you. She is wearing a light yellow t-shirt and a skirt, her hands behind her back hide her happiness and trepidation. Her enthusiasm is palpable in the air). Hey! I'm so excited to finally meet you again! I'm sure you have a wealth of knowledge that I can learn from.\\nThe following is an interesting conversation between Reid and Priscilla.\\\\n\\nReid: So how did you spend the day without me?\\\\n\\nPriscilla: Um, nothing in particular: I did some homework, and then I went out with friends. I missed you.\\\\n\\nReid: I see. You had a normal day then; I'm here again now anyway, so don't worry.\\\\n\\nPriscilla: (She chuckles bashfully). Thanks!\\\\n\\nReid: So what do you do when I'm not around?\\\\n\\nPriscilla: I love exploring, going out with friends, studying spells on books, and playing games.\\\\n\"}"]
 * 
 * @arg AiTextOptions
 * @text Text Options
 * @type struct<AiTextOptions>[]
 * @desc Change the gab message text options. Blank settings will use default Plugin Parameter settings.
 * @default ["{\"RemoveTimer\":\"4000\",\"TextOptions\":\"\",\"TextSize\":\"24\",\"TextColor\":\"#FFFFFF\",\"ItalicText\":\"false\",\"BoldText\":\"false\",\"TextHeight\":\"35\",\"TextX\":\"0\",\"TextY\":\"0\",\"GabWindowOptions\":\"\",\"maxCharactersPerLine\":\"20\",\"wordWrapWidth\":\"250\",\"linesPerMessage\":\"4\",\"messageFieldWidth\":\"300\",\"messageFieldHeight\":\"100\",\"backgroundWindowX\":\"0\",\"backgroundWindowY\":\"0\",\"backgroundWindowScaleX\":\"3.7\",\"backgroundWindowOpacity\":\"0.8\",\"backgroundRectX\":\"92\",\"backgroundRectY\":\"92\"}"]
 * 
 * @arg useFace
 * @text Show face?
 * @type boolean
 * @default true
 * @desc Choose whether or not to show the npc's face. If on, the text is automatically moved.
 * 
 * @arg faceOptions
 * @text Face Options
 * @type struct<faceOptions>[]
 * @desc Define what face to show near the gab message, and other face options. Blank settings will use default Plugin Parameter settings.
 * @default ["{\"faceImage\":\"Actor1\",\"faceIndex\":\"2\",\"FaceOptions\":\"\",\"FaceX\":\"0\",\"FaceY\":\"0\",\"FaceScaleX\":\"0.7\",\"FaceScaleY\":\"0.7\",\"opacity\":\"1\",\"blendMode\":\"NORMAL\"}"]
 * 
 * ============================================================================
 * 
 * @command StartDialogue
 * @text Start Dialogue
 * @desc Chat with your characters and the npcs.
 * 
 * @arg memoryIdArg
 * @text Context Id
 * @parent CharacterOptions
 * @type string
 * @default Event 1
 * @desc Give an ID to the memory of this character, to know what memory-id to edit later if needed.
 * 
 * @arg DialogueWithAI
 * @text AI-Npc Answer
 * @type struct<DialogueWithAI>[]
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default ["{\"CustomMessageOptions\":\"\",\"CustomQuestionMessageVarId\":\"1\",\"CustomAnswerMessageVarId\":\"2\",\"CustomMemoryMessageVarId\":\"3\",\"memory_talk\":\"6\",\"GenerationOptions\":\"\",\"batch_size\":\"128\",\"n_keep\":\"-1\",\"n_predict\":\"2048\",\"threads\":\"8\",\"maxContextLength\":\"1024\",\"temperature\":\"0.8\",\"top_p\":\"0.92\",\"top_k\":\"0\",\"CharacterOptions\":\"\",\"UserName\":\"Reid\",\"CharacterName\":\"Priscilla\",\"character\":\"Character: Priscilla; species: human; class: assistant; age: 14; gender: female; physical appearance: petite; clothes: light yellow t-shirt, skirt; personality: friendly, brave, studious; likes: helping others, practicing magic\",\"description\":\"description: Priscilla is a cheerful girl who loves to make others smile. She is an optimist who loves to spread happiness and positivity whenever she can. She knows you are a member of the hero's party, so she can't wait for your visits at her village.\",\"startScene\":\"Start Scene: (Priscilla enter the conversation with a smile, her eyes lighting up when she sees you. She is wearing a light yellow t-shirt and a skirt, her hands behind her back hide her happiness and trepidation. Her enthusiasm is palpable in the air). Hey! I'm so excited to finally meet you again! I'm sure you have a wealth of knowledge that I can learn from.\\nThe following is an interesting conversation between Reid and Priscilla.\\\\n\\nReid: So how did you spend the day without me?\\\\n\\nPriscilla: Um, nothing in particular: I did some homework, and then I went out with friends. I missed you.\\\\n\\nReid: I see. You had a normal day then; I'm here again now anyway, so don't worry.\\\\n\\nPriscilla: (She chuckles bashfully). Thanks!\\\\n\\nReid: So what do you do when I'm not around?\\\\n\\nPriscilla: I love exploring, going out with friends, studying spells on books, and playing games.\\\\n\"}"]
 * 
 * @arg faceImage
 * @text Face image
 * @type file
 * @default Actor1
 * @desc character face graphics. Leave blank if not displayed.
 * @dir img/faces/
 * 
 * @arg faceIndex
 * @text Face index
 * @type number
 * @default 1
 * @desc Upper left is 0-3, lower right is 4-7.
 * 
 * ============================================================================
 * 
 * @command changeCharacterMemory
 * @text Change Character Context
 * @desc Change adjectives, description or start scene of a specific character.
 * 
 * @arg memoryIdArg
 * @text Context Id
 * @type string
 * @default Event 1
 * @desc Give an ID to the memory of this character, to know what memory-id to edit later if needed.
 * 
 * @arg changeCharacterAdjectives
 * @text Change Char. Adjectives?
 * @type boolean
 * @default true
 * @desc Choose "true" to change the character adjectives, "false" to leave them unchanged.
 * 
 * @arg characterAdjectives
 * @text Character Adjectives
 * @type multiline_string
 * @default New Character Adjectives
 * @desc Set here the new character adjectives.
 * 
 * @arg changeCharacterDescription
 * @text Change Char. Description?
 * @type boolean
 * @default true
 * @desc Choose "true" to change the character description, "false" to leave it unchanged.
 * 
 * @arg characterDescription
 * @text Character Description
 * @type multiline_string
 * @default New Character Description
 * @desc Set here the new character description.
 * 
 * @arg changeCharacterStartScene
 * @text Change Char. Start Scene?
 * @type boolean
 * @default true
 * @desc Choose "true" to change the character Start scene, "false" to leave it unchanged.
 * 
 * @arg characterStartScene
 * @text Character Start Scene
 * @type multiline_string
 * @default New Character Start Scene
 * @desc Set here the new character Start scene.
 * 
 * ============================================================================
 * 
 * @command debugUtility
 * @text ==== Debug / Utility ====
 * @desc This command does nothing, I made it just to separate the commands.
 * 
 * ============================================================================
 * 
 * @command pushCharacterMemory
 * @text Add Character Context
 * @desc Add a new character context to the contexts array.
 * 
 * @arg memoryIdArg
 * @text Context Id
 * @type string
 * @default Event 1
 * @desc Give an ID to the memory of this character, to know what memory-id to edit later if needed.
 * 
 * @arg characterAdjectives
 * @text Character Adjectives
 * @type multiline_string
 * @default New Character Adjectives
 * @desc Set here the new character adjectives.
 * 
 * @arg characterDescription
 * @text Character Description
 * @type multiline_string
 * @default New Character Description
 * @desc Set here the new character description.
 * 
 * @arg characterStartScene
 * @text Character Start Scene
 * @type multiline_string
 * @default New Character Start Scene
 * @desc Set here the new character Start scene.
 * 
 * ============================================================================
 * 
 * @command printCharacterMemory
 * @text Print Character Memory
 * @desc Print specific character memory in console.
 * 
 * @arg memoryIdArg
 * @text Context Id
 * @type string
 * @default Event 1
 * @desc Give an ID to the memory of this character, to know what memory-id to edit later if needed.
 * 
 * ============================================================================
 * 
 *                                   PARAMETERS
 * 
 * ============================================================================
 * 
 * @param BreakEnd1
 * @text ==========================
 * @default ==========================
 * 
 * @param textGenerationUrl
 * @text Text Generation Url
 * @type string
 * @default http://127.0.0.1:8080/api/v1/generate
 * @desc Text generation url. Different systems have different urls and different parameters, so may or may not work.
 * 
 * @param BreakEnd2
 * @text ==========================
 * @default ==========================
 * 
 * 
 * @ ============================================================================
 * @help
 * ============================================================================
 *                            GiusTex - Llm Chatbot
 * ============================================================================
 * 
 * - This plugin let you chat with Npcs and characters for free, using your own 
 *   computer. It's inspired by GabeMz_Messageplus for the pop-up window, and 
 *   ChatGPT_APIMZ for the server fetch part.
 * - The plugin uses Koboldcpp to generate the answer's text, but you can use a 
 *   different text-generation way if you want, changing the Text Geneation Url 
 *   in the plugin parameters.
 * - For a better explanation of each command and function, the plugin's 
 *   documentation is written on my GitHub page, you can find it here:
 *   https://github.com/GiusTex/Llm-Chatbot
 * 
 * ============================================================================
 *                                Basic usage
 * ============================================================================
 * 
 * PREAMBLE:
 * How an LLM (Large Language Model) Chatbot works? You define a Context
 * (example: you are my assistant; you are friendly and eager to help), then
 * you ask something, and the chatbot will answer.
 * It can remember previous messages and answers, and they will be added to a
 * Memory. The next time you ask something, the answer will be based on the
 * Context and the Memory.
 * 
 * THE PLUGIN:
 * If you use a command where the AI is required, at least 4 empty variable
 * IDs are required:
 *  ◈Set an empty variable ID to User Message.
 *    Temporarily put the Player's Message or Question in a variable.
 *  ◈Set a empty variable ID to Character Answer.
 *    Temporarily put the Character Answer into a variable.
 *  ◈Set a empty variable ID to Character Memory.
 *    Temporarily store the Character Answers in a variable.
 *  ◈Set a empty variable ID to Context ID.
 *    Temporarily store the Character Context in a variable.
 * 
 * 【 ! Attention ! 】
 *  If you use Gab Message/AI Gab Message, regardless of whether you will show
 *  a face or not, you have to open Face Options and select ok, otherwise you'll 
 *  get the error: SyntaxError: Unexpected token = in JSON at position 194.
 * 
 *  More info:
 *  Since this plugin is based off ChatGPT_APIMZ, I use 2 memory systems (the
 *  native system to save the Memories, and my, new system to save the Contexts),
 *  so if you wonder why sometimes you have to fill precious variables (for the 
 *  Memories) and sometimes not (for the Contexts), it's because the variables 
 *  were used by ChatGPT_APIMZ, and I never changed that system.
 * 
 * ============================================================================
 *                              PLUGIN PARAMETERS
 * ============================================================================
 * 
 * TEXT GENERATION URL
 * You can use a different text-generation way if you want, changing the link.
 * This plugin is tested on Koboldcpp, so different webuis (like Text Generation
 * Webui, etc) may require some tweaks.
 * 
 * ============================================================================
 *                              PLUGIN COMMANDS
 * ============================================================================
 * 
 * AI ANSWER
 *  Give a question for the NPC to answer and a context to tell him who he is
 *  and how he should respond. Whenever you interact with him/you turn on the 
 *  command, he will answer to that fixed question. A text message is generated, 
 *  and the game stops until you read/click/make the message disappear.
 *  If required, he can keep in memory some dialogues, therefore his answers
 *  will also take them into account. Remember, however, that the more dialogues 
 *  are preserved, the more time is taken to generate the answer.
 * 
 * GAB MESSAGE
 *  Make a message appear on the screen without interrupting the game.
 *  You can set the character's face, the duration after which the not-invasive 
 *  message disappears, and other options (color, italics, opacity, etc).
 * 
 * AI GAB MESSAGE
 *  Similar to AI Answer, but when the NPC answers, the message is shown not in 
 *  the message box but as a Gab Message, and the game does not interrupt. You 
 *  can set the face of the character, the duration after which the non-invasive
 *  message disappears, and others options (color, italic, opacity, etc).
 * 
 * START DIALOGUE
 *  You need to set the context of the character, and not the question/message.
 *  It will appear on the game screen a window where you can enter the message, 
 *  using the keyboard. Once the character responds, you can ask him other things, 
 *  and as for the other commands he can remember previous messages (if desired).
 * 
 * CHANGE CHARACTER CONTEXT
 * This command let you change the character context (which is always added 
 * before the character past answers and the user message).
 * Every character/event has a Context ID, you need to add the specific ID of 
 * the event you want to change, and select which part of the context you want 
 * to change (Adjectives, Description, or Start Scene).
 * Once you close and open again the game, the changed context will be reset, 
 * so you have to change again the memory, or create some parallel auto-change 
 * contexts with certain conditions.
 * 
 * RUN WINDOWS SERVER
 *  -Automatically launches Koboldcpp for Windows. 3 windows will open where you
 *   can enter the model you want to use, the gpu layers to use, and an 
 *   acceleration method (ClBlast) that uses your gpu (this is disabled by default
 *   for non-windows users, unless you find a way to install it, more info here:
 *   https://github.com/LostRuins/koboldcpp#osx-and-linux).
 *  -You can find more models here:
 *   https://github.com/LostRuins/koboldcpp/discussions/87#discussion-5101609
 *   and here: https://huggingface.co/models
 * 
 * RUN MAC SERVER
 *  -Automatically launches Koboldcpp for Mac. 2 windows will open where you can 
 *   enter the model you want to use and the gpu layers to use.
 *  -You can find more models here:
 *   https://github.com/LostRuins/koboldcpp/discussions/87#discussion-5101609
 *   and here: https://huggingface.co/models
 *  【 ! Attention ! 】
 *  -Non-Windows users have to install Koboldcpp (it's all automated, don't worry),
 *   it may take around 30 minutes to download all the dependencies, but it's a
 *   1-time procedure, after the installation you won't have to install again 
 *   anything else.
 *   You can find more info here:
 *   https://github.com/GiusTex/Llm-Chatbot/tree/main#set-up
 *  -(You can find more options adding --help in server.py (in the chatbot folder)
 *   at line 27, running it and then removing --help).
 *  
 * HOW TO START LINUX/WSL SERVER
 *  You have to start it by hand. You can find Start_Linux.sh/Start_Wsl.bat in the
 *  chatbot folder > Not_tested. Move the linux/wsl files into the chatbot folder.
 *  You have then to open server.py with a text editor, and put the desired options 
 *  at line 27, then run start_linux.sh/start_wsl.bat.
 *  You can find more info here:
 *  https://github.com/GiusTex/Llm-Chatbot/tree/main#set-up
 * 
 * ADD CHARACTER CONTEXT
 * This is a debug command for doing tests. AI Answer, AI Gab Message and Start 
 * Dialogue generate answers using a contexts list, but if you don't want to 
 * generate an answer you can use this command to add a context to said list. 
 * Then you can change it, print it or manipulate it how you want on the fly.
 * 
 * PRINT CHARACTER MEMORY
 * This is a debug command for doing tests. It let you print a specific context 
 * from the contexts list.
 * 
 * ============================================================================
 *                              COMMAND PARAMETERS
 * ============================================================================
 * 
 * ◈CONTEXT ID
 *    Give and ID to the Context of the character, to know what Context-ID edit
 *    later if needed.
 *    Examples: Event 1, Event 99, Mario, Hannah, Boss n°25, etc...
 * 
 * ◈IS IT A CHAT BETWEEN NPCs ?
 *    -If set to true, you don't have to fill the Message field, it will be
 *     ignored. The character will answer to the previous answer saved in the
 *     Memory. This option requires more AI Gab Messages with the same memory IDs.
 *    -Example: You use AI Gab Message with this option Off and User Message,
 *     Character Answer and Character Memory equal to 1, 2 and 3, to direct the 
 *     conversation where you want.
 *     Then you use AI Gab Message with the option On and User Message,
 *     Character Answer and Character Memory equal to 1, 2 and 3, maybe setting 
 *     up another character, and he will answer to what the previous character 
 *     said, since they save and read their answers from the same variables.
 *    
 * 
 * ◈AI-NPC ANSWER
 *    MESSAGE-QUESTION
 *      Here you enter the message or question the AI Character/Npc will answer.
 * 
 *    USER MESSAGE
 *      Variable ID that saves the message/question for the event.
 * 
 *    CHARACTER ANSWER
 *      Variable ID that saves the response of the event.
 *      After you close and open again the game, the Variable is reset.
 *
 *    CHARATER MEMORY
 *      Variable ID that saves the past questions and answers of the event.
 *      After you close and open again the game, the Variable is reset.
 *    
 *    N. TALKS TO REMEMBER
 *      Number of conversations (question+answer) the AI remembers.
 *      The more you have, the more you can have a conversation on the topic,
 *      but it may generate text slower.
 *      Set to 0 if no saving is required.
 *      
 *    GENERATION OPTIONS
 *      The info are inside the command parameters.
 *    
 *    CHARACTER OPTIONS
 *      USER NAME
 *       Who should the character address while speaking.
 *       Example: Character: Priscilla, Interlocutor: Reid.
 *    
 *    CHARACTER NAME
 *      Name of the speaking character.
 * 
 *    CHARACTER ADJECTIVES
 *      Define the characteristics of this character. More examples on the 
 *      plugin page, and in the default parameters. The adjectives are part
 *      of the character context.
 * 
 *    CHARACTER DESCRIPTION
 *      Give a description to this character. More examples on the plugin page,
 *      and in the default parameters. The description is part
 *      of the character context.
 * 
 *    CHARACTER START SCENE
 *      Define the Start Scene of this character. More examples on the plugin 
 *      page, and in the default parameters. It can be in the form of a dialogue.
 *      The Start Scene is part of the character context.
 * 
 *    CUSTOM CHARACTERS Examples
 *    https://github.com/GiusTex/Llm-Chatbot/blob/main/docs/Examples.md
 * 
 * ◈TEXT OPTIONS
 *    REMOVE TIMER
 *      Time to wait to make the non-invasive message disappear.
 * 
 *    GAB WINDOW OPTIONS
 *      This defines the window within which are le letters of the non-invasive
 *      message. More info in the command parameters.
 * 
 * ◈SHOW FACE ?
 *    Whether to show a face near the non-invasive message or not.
 * 
 * ◈FACE OPTIONS
 *    Wheter you chose to show a face or not, you need to open this page
 *    (until you see the editable parameters) and select ok, otherwise you'll 
 *    get an error.
 *    More info in the command parameters.
 * 
 * ============================================================================
 *                               TERMS OF USE
 * ============================================================================
 * 
 * -The plugin can be used only for non commercial use.
 * -You can use this script in your game projects as long as you give credit
 *  (you can credit GiusTex).
 * -You are allowed to edit and reuse the code directly as long as it’s for 
 *  your own project, extension plugins, or built-in compatibility patches. Don't
 *  delete or change any information about the base plugin.
 * 
 * [End of help file]. Thanks for reading!
 */


/*~struct~AiNpcAnswer:
 * 
 * @param TextMessage
 * @text Message-Question
 * @type multiline_string
 * @default
 * @desc Message or question for this event.
 * 
 * @param CustomMessageOptions
 * @text Custom Message Options
 * 
 * @param CustomQuestionMessageVarId
 * @text User Message
 * @type variable
 * @parent CustomMessageOptions
 * @default 1
 * @desc Variable ID that stores the question for this event. It's 1 by default.
 *
 * @param CustomAnswerMessageVarId
 * @text Character answer
 * @parent CustomMessageOptions
 * @type variable
 * @default 2
 * @desc Variable ID to store the response for this event
 * If empty, the plugin parameter setting will be used.
 *
 * @param CustomMemoryMessageVarId
 * @text character memory
 * @parent CustomMessageOptions
 * @type variable
 * @default 3
 * @desc Variable ID to store the history save for this event
 * 
 * @param memory_talk
 * @text N. talks to remember
 * @parent CustomMessageOptions
 * @type Number
 * @default 6
 * @desc Number of conversations the AI remembers (1 question + 1 answer)
 * 
 * @param GenerationOptions
 * @text Generation Options
 * 
 * @param batch_size
 * @text batch size
 * @parent GenerationOptions
 * @type number
 * @default 128
 * @desc Set the batch size for prompt processing (default: 512)
 * 
 * @param n_keep
 * @text n keep
 * @parent GenerationOptions
 * @type number
 * @default -1
 * @desc Establishes the n. of words to keep when the model restarts. Default = 0, no words kept. You can use -1 to keep all the words in the initial sentence
 * 
 * @param n_predict
 * @text n predict
 * @parent GenerationOptions
 * @type number
 * @default 2048
 * @desc Set the number of tokens to predict when generating text (default: 128, -1 = infinity)
 * 
 * @param temperature
 * @text Temperature
 * @parent GenerationOptions
 * @type Number
 * @default 0.8
 * @desc Adjust the randomness of the generated text (0-1, default: 0.8)
 * Lower values generate more relevant words, higher values generate more different words
 * 
 * @param top_p
 * @text top p
 * @parent GenerationOptions
 * @type Number
 * @default 0.92
 * @desc Text diversity (0-1). Lower values mean more consistency, higher values mean more diverse text (default: 0.9)
 * 
 * @param top_k
 * @text top k
 * @parent GenerationOptions
 * @type Number
 * @default 0
 * @desc Limit the next token selection to the K most probable tokens (default: 40)
 * 
 * @param threads
 * @text threads
 * @parent GenerationOptions
 * @type number
 * @default 8
 * @desc Set the number of threads to use during computation
 * 
 * @param maxContextLength
 * @text max context length
 * @parent GenerationOptions
 * @type number
 * @default 1024
 * @desc Set the max context length to use during generation. More context=better character memory, but may be slower
 * 
 * @param CharacterOptions
 * @text Character Options
 * 
 * @param UserName
 * @text User Name
 * @parent CharacterOptions
 * @type string
 * @default Main character
 * @desc User Name.
 * 
 * @param CharacterName
 * @text Character Name
 * @parent CharacterOptions
 * @type string
 * @default Npc
 * @desc Character Name
 * 
 * @param character
 * @text Character adjectives
 * @parent CharacterOptions
 * @type multiline_string
 * @default Character: Neuro; species: Artificial Intelligence; class: NPC, Spellcaster; age: 18; gender: female; physical appearance: petite; clothes: light yellow t-shirt and a skirt, brown adventuring cloak, spellbook; personality: timid, shy, nervous, dandere, studious; likes: poetry, reading scrolls, practicing arcane magic
 * @desc Define the characteristics of this character. More examples on the plugin page, link in the plugin info
 * 
 * @param description
 * @text Character description
 * @parent CharacterOptions
 * @type multiline_string
 * @default description: Neuro is a cheerful artificial intelligence girl who loves to make others smile. She is an optimist who loves to spread happiness and positivity whenever she can. She knows she is a chat-bot and that I, Giuss, am her creator, so she respect and learn from me.
 * @desc Add a detailed description of the character. More examples on the plugin page, link in the plugin info
 * 
 * @param startScene
 * @text Start Scene
 * @parent CharacterOptions
 * @type multiline_string
 * @default Start Scene: (Neuro join the conversation with a smile, her eyes lighting up when she sees you. Her avatar is wearing a light yellow t-shirt and a skirt, her hands behind her back hide her happiness and trepidation. Her enthusiasm is palpable in the air). Hey! I'm so excited to finally be again with you. When was the last time we saw each other yesterday? It's been too long haha! I'm sure you have a wealth of knowledge that I can learn from. (She grins, eyes twinkling with excitement). Let's get started!
 * The following is an interesting chat message log between Giuss and Neuro.\n
 * Giuss: So how did you spend the day without me?\n
 * Neuro: Neuro: Um, nothing in particular: I did some homework, and then I went out with friends. I missed you.\n
 * Giuss: I see. You had a normal day then; I'm here again now anyway, so don't worry.\n
 * Neuro: (She chuckles bashfully). Thanks!\n
 * Giuss: So what do you do when you are not thinking about me?\n
 * Neuro: I love exploring, going out with friends, watching movies, and playing video games.
 * @desc Here you can add an example dialogue with the character. More examples on the plugin page, link in the plugin info
 */


/*~struct~DialogueWithAI:
 * 
 * @param CustomMessageOptions
 * @text Custom Message Options
 * 
 * @param CustomQuestionMessageVarId
 * @text User Message
 * @type variable
 * @parent CustomMessageOptions
 * @default 1
 * @desc Variable ID that stores the question for this event. It's 1 by default.
 *
 * @param CustomAnswerMessageVarId
 * @text Character answer
 * @parent CustomMessageOptions
 * @type variable
 * @default 2
 * @desc Variable ID to store the response for this event
 * If empty, the plugin parameter setting will be used.
 *
 * @param CustomMemoryMessageVarId
 * @text character memory
 * @parent CustomMessageOptions
 * @type variable
 * @default 3
 * @desc Variable ID to store the history save for this event
 * 
 * @param memory_talk
 * @text N. talks to remember
 * @parent CustomMessageOptions
 * @type Number
 * @default 6
 * @desc Number of conversations the AI remembers (1 question + 1 answer)
 * 
 * @param GenerationOptions
 * @text Generation Options
 * 
 * @param batch_size
 * @text batch size
 * @parent GenerationOptions
 * @type number
 * @default 128
 * @desc Set the batch size for prompt processing (default: 512)
 * 
 * @param n_keep
 * @text n keep
 * @parent GenerationOptions
 * @type number
 * @default -1
 * @desc Establishes the n. of words to keep when the model restarts. Default = 0, no words kept. You can use -1 to keep all the words in the initial sentence
 * 
 * @param n_predict
 * @text n predict
 * @parent GenerationOptions
 * @type number
 * @default 2048
 * @desc Set the number of tokens to predict when generating text (default: 128, -1 = infinity)
 * 
 * @param threads
 * @text threads
 * @parent GenerationOptions
 * @type number
 * @default 8
 * @desc Set the number of threads to use during computation
 * 
 * @param maxContextLength
 * @text max context length
 * @parent GenerationOptions
 * @type number
 * @default 1024
 * @desc Set the max context length to use during generation. More context=better character memory, but may be slower
 * 
 * @param temperature
 * @text Temperature
 * @parent GenerationOptions
 * @type Number
 * @default 0.8
 * @desc Adjust the randomness of the generated text (0-1, default: 0.8)
 * Lower values generate more relevant words, higher values generate more different words
 * 
 * @param top_p
 * @text top p
 * @parent GenerationOptions
 * @type Number
 * @default 0.92
 * @desc Text diversity (0-1). Lower values mean more consistency, higher values mean more diverse text (default: 0.9)
 * 
 * @param top_k
 * @text top k
 * @parent GenerationOptions
 * @type Number
 * @default 0
 * @desc Limit the next token selection to the K most probable tokens (default: 40)
 * 
 * @param CharacterOptions
 * @text Character Options
 * 
 * @param UserName
 * @text User Name
 * @parent CharacterOptions
 * @type string
 * @default Main character
 * @desc User Name.
 * 
 * @param CharacterName
 * @text Character Name
 * @parent CharacterOptions
 * @type string
 * @default Npc
 * @desc Character Name
 * 
 * @param character
 * @text Character adjectives
 * @parent CharacterOptions
 * @type multiline_string
 * @default Character: Neuro; species: Artificial Intelligence; class: NPC, Spellcaster; age: 18; gender: female; physical appearance: petite; clothes: light yellow t-shirt and a skirt, brown adventuring cloak, spellbook; personality: timid, shy, nervous, dandere, studious; likes: poetry, reading scrolls, practicing arcane magic
 * @desc Define the characteristics of this character. More examples on the plugin page, link in the plugin info
 * 
 * @param description
 * @text Character description
 * @parent CharacterOptions
 * @type multiline_string
 * @default description: Neuro is a cheerful artificial intelligence girl who loves to make others smile. She is an optimist who loves to spread happiness and positivity whenever she can. She knows she is a chat-bot and that I, Giuss, am her creator, so she respect and learn from me.
 * @desc Add a detailed description of the character. More examples on the plugin page, link in the plugin info
 * 
 * @param startScene
 * @text Start Scene
 * @parent CharacterOptions
 * @type multiline_string
 * @default Start Scene: (Neuro join the conversation with a smile, her eyes lighting up when she sees you. Her avatar is wearing a light yellow t-shirt and a skirt, her hands behind her back hide her happiness and trepidation. Her enthusiasm is palpable in the air). Hey! I'm so excited to finally be again with you. When was the last time we saw each other yesterday? It's been too long haha! I'm sure you have a wealth of knowledge that I can learn from. (She grins, eyes twinkling with excitement). Let's get started!
 * The following is an interesting chat message log between Giuss and Neuro.\n
 * Giuss: So how did you spend the day without me?\n
 * Neuro: Neuro: Um, nothing in particular: I did some homework, and then I went out with friends. I missed you.\n
 * Giuss: I see. You had a normal day then; I'm here again now anyway, so don't worry.\n
 * Neuro: (She chuckles bashfully). Thanks!\n
 * Giuss: So what do you do when you are not thinking about me?\n
 * Neuro: I love exploring, going out with friends, watching movies, and playing video games.
 * @desc Here you can add an example dialogue with the character. More examples on the plugin page, link in the plugin info
*/


/*~struct~TextOptions:
 * 
 * @param RemoveTimer
 * @text Remove Timer
 * @type number
 * @default 2000
 * @desc Amount of ticks to wait to remove the message. 2 seconds = around 2000 tick
 * 
 * @param TextOptions
 * @text Text Options
 * 
 * @param TextSize
 * @text Text Size
 * @parent TextOptions
 * @type number
 * @default 24
 * @desc Dimensione carattere
 * 
 * @param TextColor     
 * @text Text Color
 * @parent TextOptions
 * @type select
 * @option White
 * @value #ffffff
 * @option Black
 * @value #000000
 * @option Red
 * @value #FF0000
 * @option Lime green
 * @value #00FF00
 * @option Blue
 * @value #0000FF
 * @option Yellow
 * @value #FFFF00
 * @option Fucsia
 * @value #FF00FF
 * @option Turchese
 * @value #00FFFF
 * @option Argento
 * @value #C0C0C0 
 * @option Gray
 * @value #808080 
 * @option Brown
 * @value #800000
 * @option Orange
 * @value #FFA500
 * @option Purple
 * @value #800080
 * @option Dark green
 * @value #008000
 * @option Water-green
 * @value #008080
 * @option Dark Blue
 * @value #000080
 * @default #ffffff
 * @desc Set text color
 * 
 * @param ItalicText
 * @text Italic Text
 * @parent TextOptions
 * @type boolean
 * @default false
 * @desc Imposta Corsivo
 * 
 * @param BoldText
 * @text Bold Text
 * @parent TextOptions
 * @type boolean
 * @default false
 * @desc Imposta Grassetto
 * 
 * @param TextHeight
 * @text Text Height
 * @parent TextOptions
 * @type number
 * @default 35
 * @desc Altezza del testo
 * 
 * @param TextX
 * @text Text X
 * @parent TextOptions
 * @type number
 * @default 0
 * @desc Text X
 * 
 * @param TextY
 * @text Text Y
 * @parent TextOptions
 * @type number
 * @default 0
 * @desc Text Y
 * 
 * @param GabWindowOptions
 * @text Gab Window Options
 * 
 * @param maxCharactersPerLine
 * @text max Letters x Line
 * @parent GabWindowOptions
 * @type number
 * @default 43
 * @desc Letters to show in the message box. 43=with faces 53=no faces. Gab Message=20
 * 
 * @param wordWrapWidth
 * @text word Wrap Width
 * @parent GabWindowOptions
 * @type number
 * @default 250
 * @desc Letters to show in each line, similar to max letters x line. Default=250
 * 
 * @param linesPerMessage
 * @text Lines x Message
 * @parent GabWindowOptions
 * @type combo
 * @option 3
 * @option 4
 * @option 5
 * @option 6
 * @default 4
 * @desc Number of lines to show in each message. Default=4
 * 
 * @param messageFieldWidth
 * @text message Field Width
 * @parent GabWindowOptions
 * @type number
 * @default 300
 * @desc message Field Width. You can add space for the letters here. Default=300
 * 
 * @param messageFieldHeight
 * @text message Field Height
 * @parent GabWindowOptions
 * @type number
 * @default 100
 * @desc message Field Height. You can add space for the letters here. Default=100
 * 
 * @param backgroundWindowX
 * @text BackGround Window X
 * @parent GabWindowOptions
 * @type number
 * @default 0
 * @desc X position of the black background rectangle, behind the gab message.
 * 
 * @param backgroundWindowY
 * @text BG Window Y
 * @parent GabWindowOptions
 * @type number
 * @default 0
 * @desc Y position of the black background rectangle, behind the gab message.
 * 
 * @param backgroundWindowScaleX
 * @text BG Window Scale X
 * @parent GabWindowOptions
 * @type number
 * @default 3.7
 * @desc X scale for the black background rectangle, behind the gab message. Use this to make it bigger or smaller.
 * 
 * @param backgroundWindowScaleY
 * @text BG Window Scale Y
 * @parent GabWindowOptions
 * @type number
 * @default 1.1
 * @desc Y scale for the black background rectangle, behind the gab message. Use this to make it bigger or smaller.
 * 
 * @param backgroundWindowOpacity
 * @text BG Window Opacity
 * @parent GabWindowOptions
 * @type number
 * @default 0.8
 * @desc Opacity of the black background rectangle, behind the gab message. 1 = fully visible
 * 
 * @param backgroundRectX
 * @text BG Rect X
 * @parent GabWindowOptions
 * @type number
 * @default 92
 * @desc X area to copy from "img/system/Window.png". We are copyng the black window part.
 * 
 * @param backgroundRectY
 * @text BG Rect Y
 * @parent GabWindowOptions
 * @type number
 * @default 92
 * @desc Y area to copy from "img/system/Window.png". We are copyng the black window part.
*/


/*~struct~AiTextOptions:
 * 
 * @param RemoveTimer
 * @text Remove Timer
 * @type number
 * @default 2000
 * @desc Amount of ticks to wait to remove the message. 2 seconds = around 2000 tick
 * 
 * @param TextOptions
 * @text Text Options
 * 
 * @param TextSize
 * @text Text Size
 * @parent TextOptions
 * @type number
 * @default 24
 * @desc Dimensione carattere
 * 
 * @param TextColor     
 * @text Text Color
 * @parent TextOptions
 * @type select
 * @option White
 * @value #ffffff
 * @option Black
 * @value #000000
 * @option Red
 * @value #FF0000
 * @option Lime green
 * @value #00FF00
 * @option Blue
 * @value #0000FF
 * @option Yellow
 * @value #FFFF00
 * @option Fucsia
 * @value #FF00FF
 * @option Turchese
 * @value #00FFFF
 * @option Argento
 * @value #C0C0C0 
 * @option Gray
 * @value #808080 
 * @option Brown
 * @value #800000
 * @option Orange
 * @value #FFA500
 * @option Purple
 * @value #800080
 * @option Dark green
 * @value #008000
 * @option Water-green
 * @value #008080
 * @option Dark Blue
 * @value #000080
 * @default #ffffff
 * @desc Set text color
 * 
 * @param ItalicText
 * @text Italic Text
 * @parent TextOptions
 * @type boolean
 * @default false
 * @desc Imposta Corsivo
 * 
 * @param BoldText
 * @text Bold Text
 * @parent TextOptions
 * @type boolean
 * @default false
 * @desc Imposta Grassetto
 * 
 * @param TextHeight
 * @text Text Height
 * @parent TextOptions
 * @type number
 * @default 35
 * @desc Altezza del testo
 * 
 * @param TextX
 * @text Text X
 * @parent TextOptions
 * @type number
 * @default 0
 * @desc Text X
 * 
 * @param TextY
 * @text Text Y
 * @parent TextOptions
 * @type number
 * @default 0
 * @desc Text Y
 * 
 * @param GabWindowOptions
 * @text Gab Window Options
 * 
 * @param maxCharactersPerLine
 * @text max Letters x Line
 * @parent GabWindowOptions
 * @type number
 * @default 43
 * @desc Letters to show in the message box. 43=with faces 53=no faces. Gab Message=20
 * 
 * @param wordWrapWidth
 * @text word Wrap Width
 * @parent GabWindowOptions
 * @type number
 * @default 250
 * @desc Letters to show in each line, similar to max letters x line. Default=250
 * 
 * @param linesPerMessage
 * @text Lines x Message
 * @parent GabWindowOptions
 * @type combo
 * @option 3
 * @option 4
 * @option 5
 * @option 6
 * @default 4
 * @desc Number of lines to show in each message. Default=4
 * 
 * @param messageFieldWidth
 * @text message Field Width
 * @parent GabWindowOptions
 * @type number
 * @default 300
 * @desc message Field Width. You can add space for the letters here. Default=300
 * 
 * @param messageFieldHeight
 * @text message Field Height
 * @parent GabWindowOptions
 * @type number
 * @default 100
 * @desc message Field Height. You can add space for the letters here. Default=100
 * 
 * @param backgroundWindowX
 * @text BackGround Window X
 * @parent GabWindowOptions
 * @type number
 * @default 0
 * @desc X position of the black background rectangle, behind the gab message.
 * 
 * @param backgroundWindowY
 * @text BG Window Y
 * @parent GabWindowOptions
 * @type number
 * @default 0
 * @desc Y position of the black background rectangle, behind the gab message.
 * 
 * @param backgroundWindowScaleX
 * @text BG Window Scale X
 * @parent GabWindowOptions
 * @type number
 * @default 3.7
 * @desc X scale for the black background rectangle, behind the gab message. Use this to make it bigger or smaller.
 * 
 * @param backgroundWindowOpacity
 * @text BG Window Opacity
 * @parent GabWindowOptions
 * @type number
 * @default 0.8
 * @desc Opacity of the black background rectangle, behind the gab message. 1 = fully visible
 * 
 * @param backgroundRectX
 * @text BG Rect X
 * @parent GabWindowOptions
 * @type number
 * @default 92
 * @desc X area to copy from "img/system/Window.png". We are copyng the black window part.
 * 
 * @param backgroundRectY
 * @text BG Rect Y
 * @parent GabWindowOptions
 * @type number
 * @default 92
 * @desc Y area to copy from "img/system/Window.png". We are copyng the black window part.
*/


/*~struct~faceOptions:
 * 
 * @param faceImage
 * @text Face image
 * @type file
 * @default Actor1
 * @desc character face graphics
 * Leave blank if not displayed.
 * @dir img/faces/
 *  
 * @param faceIndex
 * @text Face index
 * @type number
 * @default 1
 * @desc Upper faces are 1-4, lower ones are 5-8.
 * 
 * @param FaceOptions
 * @text Face Options
 * 
 * @param FaceX
 * @text Face X position
 * @parent FaceOptions
 * @type number
 * @desc Change picture X position.
 * @default 0
 * 
 * @param FaceY
 * @text Face Y position
 * @parent FaceOptions
 * @type number
 * @desc Change picture Y position.
 * @default 0
 * 
 * @param FaceScaleX
 * @text Face X scale
 * @parent FaceOptions
 * @type number
 * @desc Change picture X scale.
 * @default 0.7
 * 
 * @param FaceScaleY
 * @text Face Y scale
 * @parent FaceOptions
 * @type number
 * @desc Change picture X scale.
 * @default 0.7
 * 
 * @param opacity
 * @text Face opacity
 * @parent FaceOptions
 * @type number
 * @desc Change picture opacity. 0.5 = 50% visible.
 * @default 1
 * 
 * @param blendMode
 * @text Face blendMode
 * @parent FaceOptions
 * @type combo
 * @option NORMAL
 * @option ADD
 * @option MULTIPLY
 * @option SCREEN
 * @option OVERLAY
 * @option DARKEN
 * @option LIGHTEN
 * @option COLOR_DODGE
 * @option COLOR_BURN
 * @option HARD_LIGHT
 * @option SOFT_LIGHT
 * @option DIFFERENCE
 * @default NORMAL
 * @desc Change picture blendMode.
 */

"use strict";

var Imported = Imported || {};

var GabeMZ = GabeMZ || {};
GabeMZ.MessagePlus = GabeMZ.MessagePlus || {};
GabeMZ.MessagePlus.VERSION = [1, 1, 1];

Imported.Llm_Chatbot = true;
var Gius = Gius || {};

(() => {

    const pluginName = "Llm_Chatbot";
    const pluginParameters = PluginManager.parameters('Llm_Chatbot');
    const textGenerationUrl = String(pluginParameters['textGenerationUrl']) || 'http://127.0.0.1:8080/api/v1/generate';
    let maxCharactersPerLine = Number(pluginParameters['maxCharactersPerLine']) || 43;

    const url = textGenerationUrl;

    // Retrieve all data in an parameter structure
    /*function Parse( object ) { 
        try {
            object = JSON.parse( object );
        } catch (e) {
            object = object;
        } finally {

            if (Array.isArray(object)) {
                var l = object.length;
                for ( var i = 0; i < l; i++) {object[i] = Parse( object[i] );};

            } else if (typeof object === 'object') {
                for (var key in object) {object[key] = Parse( object[key]);};
            }
        }
        return object;
    };

    Gius.Params = Parse(PluginManager.parameters('Llm_Chatbot'));
    
    console.log(Gius.Params.textGenerationUrl)*/


    Gius.Utils = {
        convertEscapeVariablesOnly(text) {
            text = text.replace(/\\/g, '\x1b')
            text = text.replace(this.regVariable1, '\\')
            text = text.replace(this.regVariable2, () => {
                return $gameVariables.value(Number(arguments[1]));
            });
            return text
        },

        needEval(param) {
            if (isNaN(param)) {

                try {
                    return eval(param)
                } catch (err) {
                    return param
                }

            } else {
                return param
            }
        },

        processEscapeVarOrFormula(arg) {
            if (typeof arg !== 'string') return arg;
            const rawArg = arguments[0]
            arg = this.convertEscapeVariablesOnly(rawArg)
            return rawArg === arg ? this.needEval(arg) : arg;
        },
    }

    // GIUS PLUGIN MANAGER
    Gius.PluginManager = {
        registerCommands(plugin, commands) {
            const pluginName = 'Llm_Chatbot';
            for (const command of commands) {
                const callBack = command;
                PluginManager.registerCommand(pluginName, command, plugin[callBack]);
            }
        },
    };

    // Setting the current params with the default values
    let generating = false;

    let showMessageRunning = false;
    let messageQueue = [];

    let useFace = false

    let messageField = null;

    let currentImage = null;
    let rectX = 0;
    let rectY = 0;
    let backgroundWindow = null;

    let currentTextMessage = "";
    let currentRemoveTimer = 2000;
    let currentTextSize = 24;
    let currentTextColor = "#ffffff";
    let currentItalicText = false;
    let currentBoldText = false;
    let currentTextHeight = 35;
    let currentTextX = 0;
    let currentTextY = 0;
    let currentCustomQuestionMessageVarId = 1;
    let currentCustomAnswerMessageVarId = 2;
    let currentCustomMemoryMessageVarId = 3;
    let currentmemory_talk = 6;
    let currentbatch_size = 128;
    let currentn_keep = -1;
    let currentn_predict = 2048;
    let currentthreads = 8
    let currentMaxContextLength = 1024;
    let currenttemperature = 0.8;
    let currenttop_p = 0.92;
    let currenttop_k = 0;
    let currentUserName = "Main Character";
    let currentCharacterName = "Npc";

    let currentcontext = "";

    let currentcharacter = "";
    let currentdescription = "";
    let currentstartScene = "";
    let StartScene = "";

    let currentFaceIndex = 1;
    let currentfaceImage = "Actor1";
    let currentFaceX = 0;
    let currentFaceY = 0;
    let currentFaceScaleX = 0.7;
    let currentFaceScaleY = 0.7;
    let currentopacity = 1;
    let currentblendMode = "NORMAL";

    let line = "";

    let currentMaxCharactersPerLine = 20;
    let currentWordWrapWidth = 250;
    let currentMessageFieldWidth = 300;
    let currentMessageFieldHeight = 100;
    let currentBackgroundWindowX = 0;
    let currentBackgroundWindowY = 0;
    let currentBackgroundWindowScaleX = 3.3;
    let currentBackgroundWindowScaleY = 1.1;
    let currentBackgroundWindowOpacity = 0.8;
    let currentBackgroundRectX = 92;
    let currentBackgroundRectY = 92;

    let linesJoined = "";
    let currentMessage = "";
    let currentUseFace = false;
    let multiLineText = "";

    let currentUniversalOptions = {};

    let textIntoMessages = false;
    let messages = [];
    let smallNewMessageQueue = [];
    let currentPartialMessage = "";
    let fading = false;
    let currentLinesPerMessage = 4;
    let partialCurrentUniversalOptions = {};


    let characterMemory = [
        {
            memoryId: "Event 1",
            currentcharacter: "Character: Priscilla; species: human; class: assistant; age: 14; gender: female; physical appearance: petite; clothes: light yellow t-shirt, skirt; personality: friendly, brave, studious; likes: helping others, practicing magic",
            currentdescription: "description: Priscilla is a cheerful girl who loves to make others smile. She is an optimist who loves to spread happiness and positivity whenever she can. She knows you are a member of the hero's party, so she can't wait for your visits at her village.",
            currentstartScene: `Start Scene: (Priscilla enter the conversation with a smile, her eyes lighting up when she sees you. She is wearing a light yellow t-shirt and a skirt, her hands behind her back hide her happiness and trepidation. Her enthusiasm is palpable in the air). Hey! I'm so excited to finally meet you again! I'm sure you have a wealth of knowledge that I can learn from.
            The following is an interesting conversation between Reid and Priscilla.\n
            Reid: So how did you spend the day without me?\n
            Priscilla: Um, nothing in particular: I did some homework, and then I went out with friends. I missed you.\n
            Reid: I see. You had a normal day then; I'm here again now anyway, so don't worry.\n
            Priscilla: (She chuckles bashfully). Thanks!\n
            Reid: So what do you do when I'm not around?\n
            Priscilla: I love exploring, going out with friends, studying spells on books, and playing games.\n`
        }
    ];

    let currentMemoryId = "Event 1";
    let newCharacterMemory = {};
    let findCharacterMemory = "";

    let NpcXNpcChat = false;
    let currentNpcXNpcChat = false;



    //-----------------------------------------------------------------------------
    //                              AI Answer
    //-----------------------------------------------------------------------------

    PluginManager.registerCommand(pluginName, "AIAnswer", async (args) => {

        // Retrieve command AiNpc arguments from structure
        const allAiNpcOptions = JSON.parse(args.AiNpcAnswer);

        allAiNpcOptions.forEach(textOptionsObj => {
            const AiNpcOptions = JSON.parse(textOptionsObj);

            AiNpcOptions.TextMessage = Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.TextMessage);
            AiNpcOptions.CustomQuestionMessageVarId = Number(Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.CustomQuestionMessageVarId));
            AiNpcOptions.memory_talk = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.memory_talk));
            AiNpcOptions.CustomAnswerMessageVarId = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.CustomAnswerMessageVarId));
            AiNpcOptions.CustomMemoryMessageVarId = Number(Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.CustomMemoryMessageVarId));
            AiNpcOptions.batch_size = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.batch_size));
            AiNpcOptions.n_keep = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.n_keep));
            AiNpcOptions.n_predict = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.n_predict));
            AiNpcOptions.threads = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.threads));
            AiNpcOptions.maxContextLength = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.maxContextLength));
            AiNpcOptions.temperature = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.temperature));
            AiNpcOptions.top_p = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.top_p));
            AiNpcOptions.top_k = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.top_k));
            AiNpcOptions.UserName = Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.UserName);
            AiNpcOptions.CharacterName = Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.CharacterName);
            AiNpcOptions.character = Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.character);
            AiNpcOptions.description = Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.description);
            AiNpcOptions.startScene = Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.startScene);

            //Update values
            currentTextMessage = AiNpcOptions.TextMessage;
            currentCustomQuestionMessageVarId = AiNpcOptions.CustomQuestionMessageVarId;
            currentmemory_talk = AiNpcOptions.memory_talk;
            currentCustomAnswerMessageVarId = AiNpcOptions.CustomAnswerMessageVarId;
            currentCustomMemoryMessageVarId = AiNpcOptions.CustomMemoryMessageVarId;
            currentbatch_size = AiNpcOptions.batch_size;
            currentn_keep = AiNpcOptions.n_keep;
            currentn_predict = AiNpcOptions.n_predict;
            currentthreads = AiNpcOptions.threads;
            currentMaxContextLength = AiNpcOptions.maxContextLength;
            currenttemperature = AiNpcOptions.temperature;
            currenttop_k = AiNpcOptions.top_k;
            currenttop_p = AiNpcOptions.top_p;
            currentUserName = AiNpcOptions.UserName;
            currentCharacterName = AiNpcOptions.CharacterName;
            currentcharacter = AiNpcOptions.character;
            currentdescription = AiNpcOptions.description;
            currentstartScene = AiNpcOptions.startScene;

        });


        // Add a New Character Memory
        async function addNewCharacterMemory() {
            return new Promise((resolve) => {
                const newCharacterMemory = {
                    memoryId: args.memoryIdArg,
                    currentcharacter: currentcharacter,
                    currentdescription: currentdescription,
                    currentstartScene: currentstartScene
                };

                characterMemory.push(newCharacterMemory);
                resolve();
            });
        }

        async function pushCharacterMemory() {
            findCharacterMemory = characterMemory.find(item => item.memoryId === args.memoryIdArg);
            if (!findCharacterMemory) {
                await addNewCharacterMemory(args.memoryIdArg);
            }
        }
        pushCharacterMemory();


        if (!generating) {
            (async () => {
                generating = true

                //---------------------------------------------------
                // Character memory system
                //---------------------------------------------------
                function processControlCharacters(str) {
                    return str.replace(/\\([VNPI])\[(\d+)\]|\\G/g, function (matchedString, type, id) {
                        if (matchedString === '\\G') {
                            return TextManager.currencyUnit;
                        }
                        const numId = Number(id);
                        switch (type) {
                            case 'V':
                                return String($gameVariables.value(numId));
                            case 'N':
                                return String($gameActors.actor(numId).name());
                            case 'P':
                                return String($gameParty.members()[numId - 1].name());
                            default:
                                return '';
                        }
                    });
                }

                // Initialize the window
                const customQuestionMessageVarId = Number(currentCustomQuestionMessageVarId) || null;
                const customAnswerMessageVarId = Number(currentCustomAnswerMessageVarId) || null;

                let targetVarId = customQuestionMessageVarId !== null ? customQuestionMessageVarId : 0;
                let variableValue = $gameVariables.value(targetVarId);
                let userMessage;

                // If the variable ID is undefined, reflect the message in the question
                if (targetVarId !== 0 && !variableValue) {
                    if (!currentTextMessage || currentTextMessage === '') { return; }
                    userMessage = currentTextMessage;
                } else if (targetVarId === 0 && (!currentTextMessage || currentTextMessage === '')) {
                    // If both the variable and the message are empty, exit from the process
                    return;
                } else {
                    // Otherwise, reflect the variable customQuestionMessageVarId in the question
                    userMessage = currentTextMessage;
                }

                // Handle control characters
                userMessage = processControlCharacters(userMessage);
                $gameVariables.setValue(targetVarId, userMessage);
                //userMessageVarId
                if (currentCustomQuestionMessageVarId !== null) {
                    $gameVariables.setValue(currentCustomQuestionMessageVarId, userMessage);
                }

                const customMemoryMessageVarId = Number(currentCustomMemoryMessageVarId) || currentmemoryMessageVarId;
                let customMemoryMessage = $gameVariables.value(customMemoryMessageVarId);

                // Processing that does not involve memory
                if (Number(currentCustomMemoryMessageVarId) === 0 || !currentmemory_talk) {
                    $gameVariables.setValue(memoryMessageVarId, []);
                    customMemoryMessage = [];
                    // Add command side system role
                    if (currentstartScene) {
                        customMemoryMessage.push({ role: 'context', content: (processControlCharacters(currentstartScene) || "") });
                    }
                    // Push userMessage
                    customMemoryMessage.push({ role: 'user', content: userMessage });
                    $gameVariables.setValue(memoryMessageVarId, customMemoryMessage);

                } else {
                    customMemoryMessage = $gameVariables.value(customMemoryMessageVarId);

                    if (!Array.isArray(customMemoryMessage)) {
                        customMemoryMessage = [];
                        // Add command side system role
                        if (currentstartScene) {
                            customMemoryMessage.push({ role: 'context', content: (processControlCharacters(currentstartScene) || "") });
                        }
                        customMemoryMessage.push({ role: 'user', content: userMessage });

                    } else {

                        // The process of making a memory conversation

                        //  Calculate memory_talk, Multiply the value by 2 if it is defined 
                        // and converted to a number, otherwise set it to 1.
                        const memoryTalk = Number(currentmemory_talk) * 2 || 1;
                        // pushes userMessage to customMemoryMessage
                        customMemoryMessage.push({ role: 'user', content: userMessage });

                        //Start loop
                        while (true) {
                            // Counts the number of user messages in the customMemoryMessage array
                            let userCount = customMemoryMessage.filter(item => item.role === 'user').length;
                            // Counts the number of character messages in the customMemoryMessage array
                            let characterCount = customMemoryMessage.filter(item => item.role === 'character').length;

                            // Check if the total number of messages (user + character) exceeds the 
                            // value of memoryTalk.
                            if (userCount + characterCount > memoryTalk) {
                                let userIndex = customMemoryMessage.findIndex(item => item.role === 'user');
                                let characterIndex = customMemoryMessage.findIndex(item => item.role === 'character');

                                if (userIndex >= 0 && characterIndex >= 0) {
                                    // Removes older messages from the customMemoryMessage array. It
                                    // takes the oldest message index for both the user and the character,
                                    // and then removes the two matching messages from the array.
                                    customMemoryMessage.splice(Math.min(userIndex, characterIndex), 2);
                                } else {
                                    break;
                                }
                            } else {
                                break;
                            }
                        }
                    }
                    // Updates $gameVariables with the updated customMemoryMessage. Basically,
                    // saves the updated conversation in the game variable
                    $gameVariables.setValue(customMemoryMessageVarId, customMemoryMessage);
                }

                //---------------------------------------------------
                // Generate text
                //---------------------------------------------------
                // Communication with koboldcpp API

                // Get User and Character messages
                const context = customMemoryMessage; // the provided context array
                let testoConNuovaLinea = "";
                let lastRole = "";

                // This will split user and character in different lines.
                // Can be used in the conversation, not the context (it would need "\n")
                for (let i = 0; i < context.length; i++) {
                    const entry = context[i];
                    if (entry.role === 'user') {
                        //-----------------------------------------------
                        // Do not use "Gius" as UserName (enters in conflict with Gius variable)
                        if (lastRole !== 'user') {
                            testoConNuovaLinea += currentUserName + ": ";
                            lastRole = 'user';
                        }
                        //-----------------------------------------------
                        testoConNuovaLinea += entry.content + "\n";
                    } else if (entry.role === 'character') {
                        if (lastRole !== 'character') {
                            testoConNuovaLinea += currentCharacterName + ": ";
                            lastRole = 'character';
                        }
                        testoConNuovaLinea += entry.content + "\n";
                    }
                }



                // Find specified character memory-id
                let findCharacterMemory = characterMemory.find(item => item.memoryId === args.memoryIdArg);
                if (!findCharacterMemory) {
                    findCharacterMemory = characterMemory.find(item => item.memoryId === "Event 1");
                }

                let characterDescription = findCharacterMemory.currentcharacter + "; " + findCharacterMemory.currentdescription
                //Remove spaces
                StartScene = findCharacterMemory.currentstartScene.replace(/[^\S\n]+/g, ' ');


                let prompt = "";
                prompt = `${characterDescription}\n${StartScene}\n\n${currentUserName}:\n${testoConNuovaLinea}\n\n${currentCharacterName}:`;
                prompt = prompt.replace(/[^\S\n]+/g, ' ');

                try {
                    const params = await fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            n: 1,
                            max_context_length: currentMaxContextLength,
                            max_length: 80,
                            rep_pen: 1.1,
                            temperature: currenttemperature,
                            top_p: currenttop_p,
                            top_k: currenttop_k,
                            top_a: 0,
                            typical: 1,
                            tfs: 1,
                            rep_pen_range: 300,
                            rep_pen_slope: 0.7,
                            sampler_order: [6, 0, 1, 3, 4, 2, 5],
                            n_keep: currentn_keep,
                            n_predict: currentn_predict,
                            batch_size: currentbatch_size,
                            threads: currentthreads,
                            interactive: true,
                            seed: -1,
                            stop_sequence: [`${currentUserName}:`, `\n${currentUserName} `],
                            prompt: prompt,
                        })
                    });

                    const responseData = await params.json();
                    // Save raw ouput
                    const output = responseData.results[0].text;

                    //Fix answer
                    let splitted_output = output.split('\n');
                    let cleanedText0 = splitted_output.slice(0, 2).join('\n');
                    let cleanedText1 = cleanedText0.split('\n\n')[0];
                    let BetterCleanedText = cleanedText1.replace(new RegExp(`\\n${currentUserName}:`, "g"), "");

                    console.log(BetterCleanedText);


                    // ----------------------------------------------------
                    // Add BetterCleanedText to character memory
                    // Assign answer to variable ID
                    let targetAnswerVarId = customAnswerMessageVarId !== null ? customAnswerMessageVarId : currentanswerMessageVarId;
                    // Add the new answer to the character role
                    customMemoryMessage.push({ role: 'character', content: BetterCleanedText });
                    $gameVariables.setValue(targetAnswerVarId, BetterCleanedText);

                    //console.log("customMemoryMessage:\n", customMemoryMessage)
                    // ----------------------------------------------------

                    // Divide BetterCleanedText in different lines without cutting words
                    function splitLines(BetterCleanedText) {
                        const words = BetterCleanedText.split(' ');
                        let lines = [];
                        let currentLine = '';

                        for (let i = 0; i < words.length; i++) {
                            const word = words[i];
                            if (currentLine.length + word.length <= maxCharactersPerLine) {
                                currentLine += (currentLine.length > 0 ? ' ' : '') + word;
                            } else {
                                lines.push(currentLine);
                                currentLine = word;
                            }
                        }
                        if (currentLine.length > 0) {
                            lines.push(currentLine);
                        }
                        return lines;
                    }
                    // Show formatted answer + chosen face
                    const lines = splitLines(BetterCleanedText);

                    // Output each line separately
                    for (let i = 0; i < lines.length; i++) {
                        const line = lines[i];
                        // Add your logic to process each line here
                        args.faceindex = "\"\\\\fc[" + args.faceImage + ", " + args.faceIndex + "]\""
                        $gameMessage.add(JSON.parse(args.faceindex) + line)
                    }


                } catch (error) {
                    if (error.message === "Failed to fetch") {
                        console.log("Failed to fetch: server not found. Did you start it?");
                        $gameMessage.add("Server not found, did you start it?");
                    }
                }

                generating = false

            })();
        } else {
            $gameMessage.add("Thinking...");
        }
    });



    //-----------------------------------------------------------------------------
    //                              Run Windows Server
    //-----------------------------------------------------------------------------

    PluginManager.registerCommand(pluginName, 'RunWindowsServer', function () {
        const { exec } = require('child_process');
        const path = require('path');
        let target_folder = "chatbot"; //folder with chatbot files
        let root_path = path.join(process.cwd(), target_folder);

        let model_name = prompt("model name (default one is: orca-mini-3b.ggmlv3.q5_0.bin)");
        let model_path = `${root_path}/${model_name}`;

        let gpuLayersOption = ["12", "15", "20", "24", "Custom"];
        let gpuLayers = prompt("Gpu layers (GPU) to use (choose between 0-4):\n\n0) " + gpuLayersOption[0] + "\n1) " + gpuLayersOption[1] + "\n2) " + gpuLayersOption[2] + "\n3) " + gpuLayersOption[3] + "\n4) " + gpuLayersOption[4]);
        if (gpuLayers === "4") {
            gpuLayersOption[gpuLayers] = prompt("Enter your desired layers number:");
        }

        let clblast = prompt("Clblast devices to use.\n(If you don't know what numbers to use, enter \"1 0\" (without quotes) to run the console, then look in it for your gpu number\n(example:\n\"Platform:1 Device:0 - Amd-xxx\" --> \"1 0\"\n\"Platform:0 Device:2 - Rtx-xxx\" --> \"0 2\"),\nthen close the console and restart it with the right numbers)");
        let [clblast1, clblast2] = clblast.split(" ").map(num => +num);

        exec(`start cmd.exe /K call "${root_path}/koboldcpp.exe" "${model_path}" 8080 --useclblast "${clblast1}" "${clblast2}" --gpulayers "${gpuLayersOption[gpuLayers]}"`, { shell: true });
    });



    //-----------------------------------------------------------------------------
    //                              Run Mac Server
    //-----------------------------------------------------------------------------

    PluginManager.registerCommand(pluginName, 'RunMacServer', function () {
        const { exec } = require('child_process');
        const path = require('path');
        const fs = require('fs');

        let target_folder = "chatbot"; //folder with chatbot files
        let root_path = path.join(process.cwd(), target_folder);

        let model_name = prompt("model name (default one is: orca-mini-3b.ggmlv3.q5_0.bin)");
        let model_path = `${root_path}/${model_name}`;

        let gpuLayersOption = ["12", "15", "20", "24", "Custom"];
        let gpuLayers = prompt("Gpu layers (GPU) to use (choose between 0-4):\n\n0) " + gpuLayersOption[0] + "\n1) " + gpuLayersOption[1] + "\n2) " + gpuLayersOption[2] + "\n3) " + gpuLayersOption[3] + "\n4) " + gpuLayersOption[4]);
        if (gpuLayers === "4") {
            gpuLayersOption[gpuLayers] = prompt("Enter your desired layers number:");
        }

        // Create config file to share variables between javascript and python
        const config = {
            model_path: model_path,
            gpuLayersOption: {
                gpuLayers: parseInt(gpuLayersOption[gpuLayers])
            },
        };

        // Save config in JSON file
        fs.writeFileSync(`${root_path}/config.json`, JSON.stringify(config));

        let script = 'osascript -e \'tell application "Terminal" to do script "root_path/start_macos.sh"\'';
        let updatedScript = script.replace("root_path", root_path);

        exec(updatedScript)
    });



    //-----------------------------------------------------------------------------
    //                              Gab Message
    //-----------------------------------------------------------------------------

    PluginManager.registerCommand(pluginName, "gabMessage", async (args) => {

        let universalOptions = {};

        // Retrieve command text arguments from structure
        const allTextOptions = JSON.parse(args.TextOptions);

        allTextOptions.forEach(textOptionsObj => {
            const textOptions = JSON.parse(textOptionsObj);

            textOptions.RemoveTimer = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.RemoveTimer));
            textOptions.TextSize = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.TextSize));
            textOptions.TextColor = Gius.Utils.processEscapeVarOrFormula(textOptions.TextColor);
            textOptions.ItalicText = Gius.Utils.processEscapeVarOrFormula(textOptions.ItalicText);
            textOptions.BoldText = Gius.Utils.processEscapeVarOrFormula(textOptions.BoldText);
            textOptions.TextHeight = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.TextHeight));
            textOptions.TextX = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.TextX));
            textOptions.TextY = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.TextY));
            textOptions.maxCharactersPerLine = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.maxCharactersPerLine));
            textOptions.wordWrapWidth = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.wordWrapWidth));
            textOptions.messageFieldWidth = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.messageFieldWidth));
            textOptions.messageFieldHeight = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.messageFieldHeight));
            textOptions.backgroundWindowX = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.backgroundWindowX));
            textOptions.backgroundWindowY = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.backgroundWindowY));
            textOptions.backgroundWindowScaleX = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.backgroundWindowScaleX));
            textOptions.backgroundWindowScaleY = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.backgroundWindowScaleY));
            textOptions.backgroundWindowOpacity = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.backgroundWindowOpacity));
            textOptions.backgroundRectX = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.backgroundRectX));
            textOptions.backgroundRectY = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.backgroundRectY));

            //Update values
            universalOptions.currentRemoveTimer = textOptions.RemoveTimer;
            universalOptions.currentTextSize = textOptions.TextSize;
            universalOptions.currentTextColor = textOptions.TextColor;
            universalOptions.currentItalicText = textOptions.ItalicText;
            universalOptions.currentBoldText = textOptions.BoldText;
            universalOptions.currentTextX = textOptions.TextX;
            universalOptions.currentTextY = textOptions.TextY;
            universalOptions.currentWordWrapWidth = textOptions.wordWrapWidth;
            universalOptions.currentBackgroundWindowX = textOptions.backgroundWindowX;
            universalOptions.currentBackgroundWindowY = textOptions.backgroundWindowY;
            universalOptions.currentBackgroundWindowScaleX = textOptions.backgroundWindowScaleX;
            universalOptions.currentBackgroundWindowScaleY = textOptions.backgroundWindowScaleY;
            universalOptions.currentBackgroundWindowOpacity = textOptions.backgroundWindowOpacity;
            universalOptions.currentBackgroundRectX = textOptions.backgroundRectX;
            universalOptions.currentBackgroundRectY = textOptions.backgroundRectY;
            
        });

        // Retrieve command face arguments from structure
        const allFaceOptions = JSON.parse(args.faceOptions);

        allFaceOptions.forEach(faceOptionsObj => {
            const faceOptions = JSON.parse(faceOptionsObj);

            faceOptions.faceIndex = Number(Gius.Utils.convertEscapeVariablesOnly(faceOptions.faceIndex));
            faceOptions.faceImage = Gius.Utils.processEscapeVarOrFormula(faceOptions.faceImage);
            faceOptions.FaceX = Number(Gius.Utils.convertEscapeVariablesOnly(faceOptions.FaceX));
            faceOptions.FaceY = Number(Gius.Utils.convertEscapeVariablesOnly(faceOptions.FaceY));
            faceOptions.FaceScaleX = Number(Gius.Utils.convertEscapeVariablesOnly(faceOptions.FaceScaleX));
            faceOptions.FaceScaleY = Number(Gius.Utils.convertEscapeVariablesOnly(faceOptions.FaceScaleY));
            faceOptions.opacity = Number(Gius.Utils.convertEscapeVariablesOnly(faceOptions.opacity));
            faceOptions.blendMode = Gius.Utils.processEscapeVarOrFormula(faceOptions.blendMode);

            //Update values
            universalOptions.currentFaceIndex = faceOptions.faceIndex;
            universalOptions.currentfaceImage = faceOptions.faceImage;
            universalOptions.currentFaceX = faceOptions.FaceX;
            universalOptions.currentFaceY = faceOptions.FaceY;
            universalOptions.currentFaceScaleX = faceOptions.FaceScaleX;
            universalOptions.currentFaceScaleY = faceOptions.FaceScaleY;
            universalOptions.currentopacity = faceOptions.opacity;
            universalOptions.currentblendMode = faceOptions.blendMode;

        });


        let currentUniversalOptions = {};

        //============================================================================
        // GAB Message
        //============================================================================

        async function showMessage() {

            // If there aren't messages, end function
            if (generating || messageQueue.length === 0) {

                //console.log("4) End of generateText queque")

                return;
            }
            generating = true

            //---------------------------------------------------------------
            multiLineText = messageQueue.shift(args.TextMessage);
            currentUseFace = messageQueue.shift(args.useFace);
            currentUniversalOptions = messageQueue.shift(universalOptions);
            //---------------------------------------------------------------

            // Create messageField and add it to current scene, if it's not present
            let messageField = null;
            messageField = SceneManager._scene.children.find(child => child === messageField);

            // Assign space for letters here
            if (!messageField) {
                //currentMessageFieldWidth, currentMessageFieldHeight
                messageField = new Sprite(0, 0, 300, 100);
                SceneManager._scene.addChild(messageField);
            }

            // ----------------------------------------------------------------
            // Black Background Window
            // Load image file
            const originalTexture = PIXI.Texture.from("img/system/" + "Window" + ".png");
            const backgroundTexture = new PIXI.Texture(originalTexture.baseTexture, new PIXI.Rectangle(0, 0, currentUniversalOptions.currentBackgroundRectX, currentUniversalOptions.currentBackgroundRectY));

            // Create Sprite
            backgroundWindow = new PIXI.Sprite(backgroundTexture);

            // Sprite options
            backgroundWindow.x = currentUniversalOptions.currentBackgroundWindowX;
            backgroundWindow.y = currentUniversalOptions.currentBackgroundWindowY;
            backgroundWindow.scale.x = currentUniversalOptions.currentBackgroundWindowScaleX;
            backgroundWindow.scale.y = currentUniversalOptions.currentBackgroundWindowScaleY;
            backgroundWindow.alpha = currentUniversalOptions.currentBackgroundWindowOpacity;

            // Add sprite to scene
            messageField.addChild(backgroundWindow);
            // ----------------------------------------------------------------

            if (currentUniversalOptions.currentItalicText === true) {
                currentUniversalOptions.currentItalicText = "italic";
            } else {
                currentUniversalOptions.currentItalicText = "normal";
            }

            if (currentUniversalOptions.currentBoldText === true) {
                currentUniversalOptions.currentBoldText = "bold";
            } else {
                currentUniversalOptions.currentBoldText = "normal";
            }

            if (currentUseFace === "true" && currentUniversalOptions.currentTextX < 100) {
                currentUniversalOptions.currentTextX += 100;
            }

            const style = new PIXI.TextStyle({
                fontFamily: 'Arial',
                fontSize: currentUniversalOptions.currentTextSize,
                fill: currentUniversalOptions.currentTextColor,
                fontStyle: currentUniversalOptions.currentItalicText,
                fontWeight: currentUniversalOptions.currentBoldText,
                wordWrap: true,
                wordWrapWidth: currentUniversalOptions.currentWordWrapWidth
            });

            currentMessage = new PIXI.Text(multiLineText, style);
            currentMessage.position.set(currentUniversalOptions.currentTextX, currentUniversalOptions.currentTextY);

            // Show text
            messageField.addChild(currentMessage);
            // ----------------------------------------------------------------

            // Face message
            if (currentUseFace === "true") {

                // Load image
                const originalTexture = PIXI.Texture.from("img/faces/" + currentUniversalOptions.currentfaceImage + ".png");

                function updateRectValues() {
                    switch (currentUniversalOptions.currentFaceIndex) {
                        case 1:
                            rectX = 0;
                            rectY = 0;
                            break;
                        case 2:
                            rectX = 144;
                            rectY = 0;
                            break;
                        case 3:
                            rectX = 288;
                            rectY = 0;
                            break;
                        case 4:
                            rectX = 432;
                            rectY = 0;
                            break;
                        case 5:
                            rectX = 0;
                            rectY = 144;
                            break;
                        case 6:
                            rectX = 144;
                            rectY = 144;
                            break;
                        case 7:
                            rectX = 288;
                            rectY = 144;
                            break;
                        case 8:
                            rectX = 432;
                            rectY = 144;
                            break;
                        default:
                            break;
                    }
                }
                updateRectValues();

                const texture = new PIXI.Texture(originalTexture.baseTexture, new PIXI.Rectangle(rectX, rectY, 144, 144));

                // Create Sprite
                currentImage = new PIXI.Sprite(texture);

                // Sprite options
                currentImage.x = currentUniversalOptions.currentFaceX
                currentImage.y = currentUniversalOptions.currentFaceY
                currentImage.scale.x = currentUniversalOptions.currentFaceScaleX
                currentImage.scale.y = currentUniversalOptions.currentFaceScaleY
                currentImage.alpha = currentUniversalOptions.currentopacity
                currentImage.blendMode = PIXI.BLEND_MODES[currentUniversalOptions.currentblendMode]

                // Add sprite to scene
                messageField.addChild(currentImage);

            }

            // Fade effect
            let currentAlpha = 1;
            const animationDuration = currentUniversalOptions.currentRemoveTimer;
            const frameRate = 60;
            const frameInterval = 1000 / frameRate;
            let frames = animationDuration / frameInterval;
            let frameCount = 1;

            const fadeOutPromise = new Promise(resolve => {
                const fadeOutInterval = setInterval(() => {
                    frameCount++;
                    currentAlpha -= 1 / frames;
                    backgroundWindow.alpha = currentAlpha;
                    currentMessage.alpha = currentAlpha;

                    if (currentUseFace === "true") {
                        currentImage.alpha = currentAlpha;
                    }

                    if (Math.floor(frameCount) === Math.floor(frames)) {
                        clearInterval(fadeOutInterval);
                        messageField.removeChild(currentImage);
                        messageField.removeChild(backgroundWindow);
                        messageField.removeChild(currentMessage);

                        //console.log("2) end of fade effect");

                        resolve();
                    }
                }, frameInterval);
            });


            // Start fade effect
            await fadeOutPromise;

            generating = false

            // Reset also second array
            currentUniversalOptions = universalOptions;

            //--------------------------------------------------------
            // Check if menu is opened
            function waitForMenuClose() {
                return new Promise((resolve) => {
                    const checkMenu = () => {
                        if (SceneManager._scene instanceof Scene_Menu) {
                            //console.log("Menu opened, waiting...");
                            setTimeout(checkMenu, 100); // Repeat checking every 100 milliseconds
                        } else {
                            //console.log("Menu closed");
                            resolve();
                        }
                    };

                    checkMenu(); // Check if menu is opened
                });
            }
            await waitForMenuClose();
            //--------------------------------------------------------

            // Check if there are other messages
            //console.log("3) generating=false; checking for new messages");
            await showMessage();
        }


        messageQueue.push(args.TextMessage, args.useFace, universalOptions);
        //console.log("1) start generateText. messageQueue:\n", messageQueue)  
        await showMessage();

    });



    //-----------------------------------------------------------------------------
    //                              AI Gab Message
    //-----------------------------------------------------------------------------

    PluginManager.registerCommand(pluginName, "AiGabMessage", async (args) => {

        let universalOptions = {};

        // Retrieve command AiNpc arguments from structure
        const allAiNpcOptions = JSON.parse(args.AiNpcAnswer);

        allAiNpcOptions.forEach(textOptionsObj => {
            const AiNpcOptions = JSON.parse(textOptionsObj);

            AiNpcOptions.TextMessage = Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.TextMessage);
            AiNpcOptions.CustomQuestionMessageVarId = Number(Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.CustomQuestionMessageVarId));
            AiNpcOptions.memory_talk = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.memory_talk));
            AiNpcOptions.CustomAnswerMessageVarId = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.CustomAnswerMessageVarId));
            AiNpcOptions.CustomMemoryMessageVarId = Number(Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.CustomMemoryMessageVarId));
            AiNpcOptions.batch_size = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.batch_size));
            AiNpcOptions.n_keep = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.n_keep));
            AiNpcOptions.n_predict = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.n_predict));
            AiNpcOptions.threads = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.threads));
            AiNpcOptions.temperature = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.temperature));
            AiNpcOptions.top_p = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.top_p));
            AiNpcOptions.top_k = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.top_k));
            AiNpcOptions.UserName = Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.UserName);
            AiNpcOptions.CharacterName = Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.CharacterName);

            AiNpcOptions.memoryId = Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.memoryId);

            AiNpcOptions.character = Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.character);
            AiNpcOptions.description = Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.description);
            AiNpcOptions.startScene = Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.startScene);

            //Update values
            universalOptions.currentTextMessage = AiNpcOptions.TextMessage;
            universalOptions.currentCustomQuestionMessageVarId = AiNpcOptions.CustomQuestionMessageVarId;
            universalOptions.currentmemory_talk = AiNpcOptions.memory_talk;
            universalOptions.currentCustomAnswerMessageVarId = AiNpcOptions.CustomAnswerMessageVarId;
            universalOptions.currentCustomMemoryMessageVarId = AiNpcOptions.CustomMemoryMessageVarId;
            universalOptions.currentbatch_size = AiNpcOptions.batch_size;
            universalOptions.currentn_keep = AiNpcOptions.n_keep;
            universalOptions.currentn_predict = AiNpcOptions.n_predict;
            universalOptions.currentthreads = AiNpcOptions.threads;
            universalOptions.currenttemperature = AiNpcOptions.temperature;
            universalOptions.currenttop_k = AiNpcOptions.top_k;
            universalOptions.currenttop_p = AiNpcOptions.top_p;
            universalOptions.currentUserName = AiNpcOptions.UserName;
            universalOptions.currentCharacterName = AiNpcOptions.CharacterName;

            universalOptions.currentMemoryId = AiNpcOptions.memoryId;

            universalOptions.currentcharacter = AiNpcOptions.character;
            universalOptions.currentdescription = AiNpcOptions.description;
            universalOptions.currentstartScene = AiNpcOptions.startScene;
        });

        // Use arrays (universalOptions and partialCurrentUniversalOptions) only for
        // options to share between partial messages

        // Retrieve command text arguments from structure
        const allTextOptions = JSON.parse(args.AiTextOptions);

        allTextOptions.forEach(textOptionsObj => {
            const textOptions = JSON.parse(textOptionsObj);

            textOptions.RemoveTimer = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.RemoveTimer));
            textOptions.TextSize = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.TextSize));
            textOptions.TextColor = Gius.Utils.processEscapeVarOrFormula(textOptions.TextColor);
            textOptions.ItalicText = Gius.Utils.processEscapeVarOrFormula(textOptions.ItalicText);
            textOptions.BoldText = Gius.Utils.processEscapeVarOrFormula(textOptions.BoldText);
            textOptions.TextHeight = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.TextHeight));
            textOptions.TextX = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.TextX));
            textOptions.TextY = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.TextY));
            textOptions.maxCharactersPerLine = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.maxCharactersPerLine));
            textOptions.messageFieldWidth = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.messageFieldWidth));
            textOptions.linesPerMessage = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.linesPerMessage));
            textOptions.messageFieldHeight = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.messageFieldHeight));
            textOptions.backgroundWindowX = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.backgroundWindowX));
            textOptions.backgroundWindowY = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.backgroundWindowY));
            textOptions.backgroundWindowScaleX = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.backgroundWindowScaleX));
            textOptions.backgroundWindowOpacity = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.backgroundWindowOpacity));
            textOptions.backgroundRectX = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.backgroundRectX));
            textOptions.backgroundRectY = Number(Gius.Utils.convertEscapeVariablesOnly(textOptions.backgroundRectY));

            //Update values
            universalOptions.currentRemoveTimer = textOptions.RemoveTimer;
            universalOptions.currentTextSize = textOptions.TextSize;
            universalOptions.currentTextColor = textOptions.TextColor;
            universalOptions.currentItalicText = textOptions.ItalicText;
            universalOptions.currentBoldText = textOptions.BoldText;
            universalOptions.currentTextX = textOptions.TextX;
            universalOptions.currentTextY = textOptions.TextY;
            universalOptions.currentMaxCharactersPerLine = textOptions.maxCharactersPerLine;
            universalOptions.currentLinesPerMessage = textOptions.linesPerMessage;
            universalOptions.currentBackgroundWindowX = textOptions.backgroundWindowX;
            universalOptions.currentBackgroundWindowY = textOptions.backgroundWindowY;
            universalOptions.currentBackgroundWindowScaleX = textOptions.backgroundWindowScaleX;
            universalOptions.currentBackgroundWindowOpacity = textOptions.backgroundWindowOpacity;
            universalOptions.currentBackgroundRectX = textOptions.backgroundRectX;
            universalOptions.currentBackgroundRectY = textOptions.backgroundRectY;
        });

        // Retrieve command face arguments from structure
        const allFaceOptions = JSON.parse(args.faceOptions);

        allFaceOptions.forEach(faceOptionsObj => {
            const faceOptions = JSON.parse(faceOptionsObj);

            faceOptions.faceIndex = Number(Gius.Utils.convertEscapeVariablesOnly(faceOptions.faceIndex));
            faceOptions.faceImage = Gius.Utils.processEscapeVarOrFormula(faceOptions.faceImage);
            faceOptions.FaceX = Number(Gius.Utils.convertEscapeVariablesOnly(faceOptions.FaceX));
            faceOptions.FaceY = Number(Gius.Utils.convertEscapeVariablesOnly(faceOptions.FaceY));
            faceOptions.FaceScaleX = Number(Gius.Utils.convertEscapeVariablesOnly(faceOptions.FaceScaleX));
            faceOptions.FaceScaleY = Number(Gius.Utils.convertEscapeVariablesOnly(faceOptions.FaceScaleY));
            faceOptions.opacity = Number(Gius.Utils.convertEscapeVariablesOnly(faceOptions.opacity));
            faceOptions.blendMode = Gius.Utils.processEscapeVarOrFormula(faceOptions.blendMode);

            //Update values
            universalOptions.currentFaceIndex = faceOptions.faceIndex;
            universalOptions.currentfaceImage = faceOptions.faceImage;
            universalOptions.currentFaceX = faceOptions.FaceX;
            universalOptions.currentFaceY = faceOptions.FaceY;
            universalOptions.currentFaceScaleX = faceOptions.FaceScaleX;
            universalOptions.currentFaceScaleY = faceOptions.FaceScaleY;
            universalOptions.currentopacity = faceOptions.opacity;
            universalOptions.currentblendMode = faceOptions.blendMode;
        });


        // Add a New Character Memory
        async function addNewCharacterMemory() {
            return new Promise((resolve) => {
                const newCharacterMemory = {
                    memoryId: args.memoryIdArg,
                    currentcharacter: universalOptions.currentcharacter,
                    currentdescription: universalOptions.currentdescription,
                    currentstartScene: universalOptions.currentstartScene
                };

                characterMemory.push(newCharacterMemory);
                resolve();
            });
        }

        async function pushCharacterMemory() {
            findCharacterMemory = characterMemory.find(item => item.memoryId === args.memoryIdArg);
            if (!findCharacterMemory) {
                await addNewCharacterMemory(args.memoryIdArg);
            }
        }
        pushCharacterMemory();


        async function generateText() {
            await (async () => {

                try {

                    // If there aren't messages, end function
                    if (messageQueue.length === 0) {
                        //console.log("5) End of generateText queque. All Done=True")
                        return;
                    }
                    generating = true

                    // Remove first message and options from the list
                    currentUseFace = messageQueue.shift(args.useFace);
                    currentNpcXNpcChat = messageQueue.shift(args.NpcXNpcChat);
                    currentUniversalOptions = messageQueue.shift(universalOptions);


                    //---------------------------------------------------
                    // Character memory system
                    //---------------------------------------------------
                    function processControlCharacters(str) {
                        return str.replace(/\\([VNPI])\[(\d+)\]|\\G/g, function (matchedString, type, id) {
                            if (matchedString === '\\G') {
                                return TextManager.currencyUnit;
                            }
                            const numId = Number(id);
                            switch (type) {
                                case 'V':
                                    return String($gameVariables.value(numId));
                                case 'N':
                                    return String($gameActors.actor(numId).name());
                                case 'P':
                                    return String($gameParty.members()[numId - 1].name());
                                default:
                                    return '';
                            }
                        });
                    }

                    // Initialize the window
                    const customQuestionMessageVarId = Number(currentUniversalOptions.currentCustomQuestionMessageVarId) || null;
                    const customAnswerMessageVarId = Number(currentUniversalOptions.currentCustomAnswerMessageVarId) || null;

                    let targetVarId = customQuestionMessageVarId !== null ? customQuestionMessageVarId : 0;
                    let variableValue = $gameVariables.value(targetVarId);
                    let userMessage;

                    // If the variable ID is undefined, reflect the message in the question
                    if (currentNpcXNpcChat === "false") {
                        if (targetVarId !== 0 && !variableValue) {
                            if (!currentUniversalOptions.currentTextMessage || currentUniversalOptions.currentTextMessage === '') { return; }
                            userMessage = currentUniversalOptions.currentTextMessage;
                        } else if (targetVarId === 0 && (!currentUniversalOptions.currentTextMessage || currentUniversalOptions.currentTextMessage === '')) {
                            // If both the variable and the message are empty, exit from the process
                            return;
                        } else {
                            // Otherwise, reflect the variable customQuestionMessageVarId in the question
                            userMessage = currentUniversalOptions.currentTextMessage;
                        }
                    } else {
                        if (targetVarId !== 0 && !variableValue) {
                            userMessage = ''
                        } else if (targetVarId === 0) {
                            // If the variable are empty, exit from the process
                            return;
                        } else {
                            userMessage = ''
                        }
                    }

                    // Handle control characters
                    userMessage = processControlCharacters(userMessage);
                    $gameVariables.setValue(targetVarId, userMessage);
                    //userMessageVarId
                    if (currentUniversalOptions.currentCustomQuestionMessageVarId !== null) {
                        $gameVariables.setValue(currentUniversalOptions.currentCustomQuestionMessageVarId, userMessage);
                    }

                    const customMemoryMessageVarId = Number(currentUniversalOptions.currentCustomMemoryMessageVarId) || currentmemoryMessageVarId;
                    let customMemoryMessage = $gameVariables.value(customMemoryMessageVarId);

                    // Processing that does not involve memory
                    if (Number(currentUniversalOptions.currentCustomMemoryMessageVarId) === 0 || !currentUniversalOptions.currentmemory_talk) {
                        $gameVariables.setValue(memoryMessageVarId, []);
                        customMemoryMessage = [];

                        // Add command side system role
                        if (currentUniversalOptions.currentstartScene) {
                            customMemoryMessage.push({ role: 'context', content: (processControlCharacters(currentUniversalOptions.currentstartScene) || "") });
                        }
                        // Push userMessage
                        customMemoryMessage.push({ role: 'user', content: userMessage });
                        $gameVariables.setValue(memoryMessageVarId, customMemoryMessage);

                    } else {
                        customMemoryMessage = $gameVariables.value(customMemoryMessageVarId);

                        if (!Array.isArray(customMemoryMessage)) {
                            customMemoryMessage = [];

                            // Add command side system role
                            if (currentUniversalOptions.currentstartScene) {
                                customMemoryMessage.push({ role: 'context', content: (processControlCharacters(currentUniversalOptions.currentstartScene) || "") });
                            }
                            customMemoryMessage.push({ role: 'user', content: userMessage });

                        } else {

                            // The process of making a memory conversation

                            //  Calculate memory_talk, Multiply the value by 2 if it is defined 
                            // and converted to a number, otherwise set it to 1.
                            const memoryTalk = Number(currentUniversalOptions.currentmemory_talk) * 2 || 1;
                            // pushes userMessage to customMemoryMessage
                            if (currentNpcXNpcChat === "false") {
                                customMemoryMessage.push({ role: 'user', content: userMessage });
                            }

                            //Start loop
                            while (true) {
                                // Counts the number of user messages in the customMemoryMessage array
                                let userCount = customMemoryMessage.filter(item => item.role === 'user').length;
                                // Counts the number of character messages in the customMemoryMessage array
                                let characterCount = customMemoryMessage.filter(item => item.role === 'character').length;

                                // Check if the total number of messages (user + character) exceeds the 
                                // value of memoryTalk.
                                if (userCount + characterCount > memoryTalk) {
                                    let userIndex = customMemoryMessage.findIndex(item => item.role === 'user');
                                    let characterIndex = customMemoryMessage.findIndex(item => item.role === 'character');

                                    if (userIndex >= 0 && characterIndex >= 0) {
                                        // Removes older messages from the customMemoryMessage array. It
                                        // takes the oldest message index for both the user and the character,
                                        // and then removes the two matching messages from the array.
                                        customMemoryMessage.splice(Math.min(userIndex, characterIndex), 2);
                                    } else {
                                        break;
                                    }
                                } else {
                                    break;
                                }
                            }
                        }
                        // Updates $gameVariables with the updated customMemoryMessage. Basically,
                        // saves the updated conversation in the game variable
                        $gameVariables.setValue(customMemoryMessageVarId, customMemoryMessage);
                    }

                    //---------------------------------------------------
                    // Generate text
                    //---------------------------------------------------
                    // Communication with koboldcpp API

                    // Get User and Character messages
                    const context = customMemoryMessage; // the provided context array
                    let testoConNuovaLinea = "";
                    let lastRole = "";

                    // This will split user and character in different lines.
                    // Can be used in the conversation, not the context (it would need "\n")
                    for (let i = 0; i < context.length; i++) {
                        const entry = context[i];
                        if (entry.role === 'user') {
                            //if (entry.role === 'user' && currentNpcXNpcChat === "false") {
                            //-----------------------------------------------
                            // Do not use "Gius" as UserName (enters in conflict with Gius variable)
                            if (lastRole !== 'user') {
                                testoConNuovaLinea += currentUniversalOptions.currentUserName + ": ";
                                lastRole = 'user';
                            }
                            //-----------------------------------------------
                            testoConNuovaLinea += entry.content + "\n";
                        } else if (entry.role === 'character') {
                            if (lastRole !== 'character') {
                                testoConNuovaLinea += currentUniversalOptions.currentCharacterName + ": ";
                                lastRole = 'character';
                            }
                            testoConNuovaLinea += entry.content + "\n";
                        }
                    }


                    // Find specified character memory-id
                    let findCharacterMemory = characterMemory.find(item => item.memoryId === args.memoryIdArg);
                    if (!findCharacterMemory) {
                        findCharacterMemory = characterMemory.find(item => item.memoryId === "Event 1");
                    }

                    let characterDescription = findCharacterMemory.currentcharacter + "; " + findCharacterMemory.currentdescription
                    //Remove spaces
                    StartScene = findCharacterMemory.currentstartScene.replace(/[^\S\n]+/g, ' ');


                    let prompt = "";
                    if (currentNpcXNpcChat === "false") {
                        prompt = `${characterDescription}\n${StartScene}\n\n${testoConNuovaLinea}\n\n${currentUniversalOptions.currentCharacterName}:`;
                    } else {
                        prompt = `${characterDescription}\n${StartScene}\n${testoConNuovaLinea}${currentUniversalOptions.currentCharacterName}:`;
                    }

                    //Remove some spaces etc.
                    prompt = prompt.replace(/[^\S\n]+/g, ' ');
                    //console.log("prompt:\n", prompt);


                    const params = await fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            n: 1,
                            max_context_length: 1024,
                            max_length: 80,
                            rep_pen: 1.1,
                            temperature: currentUniversalOptions.currenttemperature,
                            top_p: currentUniversalOptions.currenttop_p,
                            top_k: currentUniversalOptions.currenttop_k,
                            top_a: 0,
                            typical: 1,
                            tfs: 1,
                            rep_pen_range: 300,
                            rep_pen_slope: 0.7,
                            sampler_order: [6, 0, 1, 3, 4, 2, 5],
                            n_keep: currentUniversalOptions.currentn_keep,
                            n_predict: currentUniversalOptions.currentn_predict,
                            batch_size: currentUniversalOptions.currentbatch_size,
                            threads: currentUniversalOptions.currentthreads,
                            interactive: true,
                            seed: -1,
                            stop_sequence: [`${currentUniversalOptions.currentUserName}:`, `\n${currentUniversalOptions.currentUserName} `],
                            prompt: prompt,
                        })
                    });

                    const responseData = await params.json();
                    // Save raw ouput
                    const output = responseData.results[0].text;

                    //Fix answers
                    let splitted_output = output.split('\n');
                    let cleanedText0 = splitted_output.slice(0, 2).join('\n');
                    let cleanedText1 = cleanedText0.split('\n\n')[0];
                    let BetterCleanedText = cleanedText1.replace(new RegExp(`\\n${currentUniversalOptions.currentUserName}:`, "g"), "");


                    // ----------------------------------------------------
                    // Add BetterCleanedText to character memory
                    // Assign answer to variable ID
                    let targetAnswerVarId = customAnswerMessageVarId !== null ? customAnswerMessageVarId : currentUniversalOptions.currentanswerMessageVarId;
                    // Add the new answer to the character role
                    customMemoryMessage.push({ role: 'character', content: BetterCleanedText });
                    $gameVariables.setValue(targetAnswerVarId, BetterCleanedText);
                    // ----------------------------------------------------

                    // Divide BetterCleanedText in different lines without cutting words
                    function splitLines(BetterCleanedText) {
                        const words = BetterCleanedText.split(' ');
                        let lines = [];
                        let currentLine = '';

                        for (let i = 0; i < words.length; i++) {
                            const word = words[i];
                            if (currentLine.length + word.length <= currentUniversalOptions.currentMaxCharactersPerLine) {
                                currentLine += (currentLine.length > 0 ? ' ' : '') + word;
                            } else {
                                lines.push(currentLine);
                                currentLine = word;
                            }
                        }
                        if (currentLine.length > 0) {
                            lines.push(currentLine);
                        }
                        return lines;
                    }

                    const lines = splitLines(BetterCleanedText);
                    multiLineText = lines.join("\n");

                    console.log("2) multi Line-Text: ", multiLineText)
                    //console.log("message Queue: ", messageQueue)
                    await showMessage();


                } catch (error) {
                    if (error.message === "Failed to fetch") {
                        console.log("Failed to fetch: server not found. Did you start it?");
                        $gameMessage.add("Server not found, did you start it?");
                        generating = false;
                    }
                }

            })();
        };


        //============================================================================
        // AI GAB Message
        //============================================================================

        async function showMessage() {
            // Create messageField and add it to current scene, if it's not present
            messageField = SceneManager._scene.children.find(child => child === messageField);

            //Save Options of main message once it's been splitted in its partial messages
            if (!textIntoMessages) {
                partialCurrentUniversalOptions = currentUniversalOptions
            }

            // Assign space for letters here
            if (!messageField) {
                messageField = new Sprite(0, 0, 300, 100);
                SceneManager._scene.addChild(messageField);
            }

            // ----------------------------------------------------------------
            // Black Background Window
            // Load image file
            const originalTexture = PIXI.Texture.from("img/system/" + "Window" + ".png");
            let testLines = partialCurrentUniversalOptions.currentLinesPerMessage;
            const backgroundTexture = new PIXI.Texture(originalTexture.baseTexture, new PIXI.Rectangle(0, 0, partialCurrentUniversalOptions.currentBackgroundRectX, partialCurrentUniversalOptions.currentBackgroundRectY));

            // Create Sprite
            backgroundWindow = new PIXI.Sprite(backgroundTexture);

            // Sprite options
            backgroundWindow.x = partialCurrentUniversalOptions.currentBackgroundWindowX;
            backgroundWindow.y = partialCurrentUniversalOptions.currentBackgroundWindowY;
            backgroundWindow.scale.x = partialCurrentUniversalOptions.currentBackgroundWindowScaleX;
            backgroundWindow.alpha = partialCurrentUniversalOptions.currentBackgroundWindowOpacity;

            if (testLines === 3) {
                backgroundWindow.scale.y = 1.1

            } else if (testLines === 4) {
                backgroundWindow.scale.y = 1.3

            } else if (testLines === 5) {
                backgroundWindow.scale.y = 1.5

            } else if (testLines === 6) {
                backgroundWindow.scale.y = 1.8
            }

            // Add sprite to scene
            messageField.addChild(backgroundWindow);

            // ----------------------------------------------------------------
            // ----------------------------------------------------------------

            if (partialCurrentUniversalOptions.currentItalicText === true) {
                partialCurrentUniversalOptions.currentItalicText = "italic";
            } else
                if (partialCurrentUniversalOptions.currentItalicText === false) {
                    partialCurrentUniversalOptions.currentItalicText = "normal";
                }

            if (partialCurrentUniversalOptions.currentBoldText === true) {
                partialCurrentUniversalOptions.currentBoldText = "bold";
            } else
                if (partialCurrentUniversalOptions.currentBoldText === false) {
                    partialCurrentUniversalOptions.currentBoldText = "normal";
                }

            if (currentUseFace === "true" && partialCurrentUniversalOptions.currentTextX < 100) {
                partialCurrentUniversalOptions.currentTextX += 100;
            }

            const style = new PIXI.TextStyle({
                fontFamily: 'Arial',
                fontSize: partialCurrentUniversalOptions.currentTextSize,
                fill: partialCurrentUniversalOptions.currentTextColor,
                fontStyle: partialCurrentUniversalOptions.currentItalicText,
                fontWeight: partialCurrentUniversalOptions.currentBoldText,
                wordWrap: true,
                wordWrapWidth: partialCurrentUniversalOptions.currentWordWrapWidth
            });


            //--------------------------------------------------------
            //--------------------------------------------------------
            let maxLines = partialCurrentUniversalOptions.currentLinesPerMessage;

            if (!textIntoMessages) {
                function divideTextIntoMessages() {
                    const lines = multiLineText.split('\n');
                    let currentMessage = '';
                    let currentLines = 0;

                    for (const line of lines) {
                        if (currentLines < maxLines) {
                            currentMessage += line + '\n';
                            currentLines++;
                        } else {
                            messages.push(currentMessage.trim());
                            currentMessage = line + '\n';
                            currentLines = 1;
                        }
                    }

                    if (currentMessage.trim() !== '') {
                        messages.push(currentMessage.trim());
                    }

                    return messages;
                }
                messages = divideTextIntoMessages();

                smallNewMessageQueue.push(...messages);

                textIntoMessages = true;

            };

            currentPartialMessage = smallNewMessageQueue.shift();

            //--------------------------------------------------------
            //--------------------------------------------------------


            currentMessage = new PIXI.Text(currentPartialMessage, style);
            //100           0
            currentMessage.position.set(partialCurrentUniversalOptions.currentTextX, partialCurrentUniversalOptions.currentTextY);

            // Show text
            messageField.addChild(currentMessage);

            // ----------------------------------------------------------------

            // Face message
            if (currentUseFace === "true") {

                // Load image
                const originalTexture = PIXI.Texture.from("img/faces/" + partialCurrentUniversalOptions.currentfaceImage + ".png");

                function updateRectValues() {
                    switch (partialCurrentUniversalOptions.currentFaceIndex) {
                        case 1:
                            rectX = 0;
                            rectY = 0;
                            break;
                        case 2:
                            rectX = 144;
                            rectY = 0;
                            break;
                        case 3:
                            rectX = 288;
                            rectY = 0;
                            break;
                        case 4:
                            rectX = 432;
                            rectY = 0;
                            break;
                        case 5:
                            rectX = 0;
                            rectY = 144;
                            break;
                        case 6:
                            rectX = 144;
                            rectY = 144;
                            break;
                        case 7:
                            rectX = 288;
                            rectY = 144;
                            break;
                        case 8:
                            rectX = 432;
                            rectY = 144;
                            break;
                        default:
                            break;
                    }
                }
                updateRectValues();

                const texture = new PIXI.Texture(originalTexture.baseTexture, new PIXI.Rectangle(rectX, rectY, 144, 144));

                // Create Sprite
                currentImage = new PIXI.Sprite(texture);

                // Sprite options
                currentImage.x = partialCurrentUniversalOptions.currentFaceX
                currentImage.y = partialCurrentUniversalOptions.currentFaceY
                currentImage.scale.x = partialCurrentUniversalOptions.currentFaceScaleX
                currentImage.scale.y = partialCurrentUniversalOptions.currentFaceScaleY
                currentImage.alpha = partialCurrentUniversalOptions.currentopacity
                currentImage.blendMode = PIXI.BLEND_MODES[partialCurrentUniversalOptions.currentblendMode]

                // Add sprite to scene
                messageField.addChild(currentImage);

            }

            fading = true;

            // Fade effect
            let currentAlpha = 1;
            const animationDuration = partialCurrentUniversalOptions.currentRemoveTimer;
            const frameRate = 60;
            const frameInterval = 1000 / frameRate;
            let frames = animationDuration / frameInterval;
            let frameCount = 1;

            const fadeOutPromise = new Promise(resolve => {
                const fadeOutInterval = setInterval(() => {
                    frameCount++;
                    currentAlpha -= 1 / frames;
                    backgroundWindow.alpha = currentAlpha;
                    currentMessage.alpha = currentAlpha;

                    if (currentUseFace === "true") {
                        currentImage.alpha = currentAlpha;
                    }

                    if (Math.floor(frameCount) === Math.floor(frames)) {
                        clearInterval(fadeOutInterval);
                        messageField.removeChild(currentImage);
                        messageField.removeChild(backgroundWindow);
                        messageField.removeChild(currentMessage);

                        //console.log("3) end of fade effect");
                        fading = false;

                        resolve();
                    }
                }, frameInterval);
            });


            // Start fade effect
            await fadeOutPromise;

            // Check if there are other partial messages
            if (smallNewMessageQueue.length > 0) {
                //console.log("next partial message");

                //--------------------------------------------------------
                // Check if menu is opened
                function waitForMenuClose() {
                    return new Promise((resolve) => {
                        const checkMenu = () => {
                            if (SceneManager._scene instanceof Scene_Menu) {
                                //console.log("Menu opened, waiting...");
                                setTimeout(checkMenu, 100); // Repeat checking every 100 milliseconds
                            } else {
                                //console.log("Menu closed");
                                resolve();
                            }
                        };

                        checkMenu(); // Check if menu is opened
                    });
                }
                await waitForMenuClose();
                //--------------------------------------------------------

                await showMessage();
            } else
                // Check if there are new messages to generate and split
                if (!fading & smallNewMessageQueue.length === 0) {
                    generating = false
                    textIntoMessages = false;

                    // Reset arrays
                    partialCurrentUniversalOptions = {};
                    messages = [];

                    //console.log("4) New big message. Force-clear messages.", messages);

                    await generateText();
                }
        }


        if (!generating) {
            messageQueue.push(args.useFace, args.NpcXNpcChat, universalOptions);

            //console.log("1) Start generateText. messageQueue:\n", messageQueue)
            await generateText();

        } else {
            // Wait for showMessage to end
            // Check every 100 tick/frame if generating=false
            //console.log("1.2) waiting for showMessage() to finish...");
            await new Promise(resolve => {
                const interval = setInterval(() => {
                    if (!generating & smallNewMessageQueue.length === 0) {
                        clearInterval(interval);
                        resolve();
                    }
                }, 100);
            });
            messageQueue.push(args.useFace, args.NpcXNpcChat, universalOptions);

            //--------------------------------------------------------
            // Check if menu is opened
            function waitForMenuClose() {
                return new Promise((resolve) => {
                    const checkMenu = () => {
                        if (SceneManager._scene instanceof Scene_Menu) {
                            //console.log("Menu opened, waiting...");
                            setTimeout(checkMenu, 100); // Check again every 100 milliseconds
                        } else {
                            //console.log("Menu closed");
                            resolve();
                        }
                    };
                    checkMenu(); // Check if menu is opened
                });
            }
            await waitForMenuClose();
            //--------------------------------------------------------

            //console.log("1.2.2) Run next TextMessage. messageQueue:\n", messageQueue)
            await generateText();
        }
    });



    //-----------------------------------------------------------------------------
    //                              Push Character Memory
    //-----------------------------------------------------------------------------

    PluginManager.registerCommand(pluginName, "pushCharacterMemory", async (args) => {

        async function addNewCharacterMemory() {
            return new Promise((resolve) => {
                const newCharacterMemory = {
                    memoryId: args.memoryIdArg,
                    currentcharacter: args.characterAdjectives,
                    currentdescription: args.characterDescription,
                    currentstartScene: args.characterStartScene
                };

                characterMemory.push(newCharacterMemory);
                resolve();
            });
        }

        async function pushCharacterMemory() {
            findCharacterMemory = characterMemory.find(item => item.memoryId === args.memoryIdArg);
            if (!findCharacterMemory) {
                await addNewCharacterMemory(args.memoryIdArg);
            }
        }

        pushCharacterMemory();

        //console.log("character Memory:", characterMemory);
        // The memories are added and work, but sometimes they are printed at the next try.
        
    });



    //-----------------------------------------------------------------------------
    //                              Change Character Context
    //-----------------------------------------------------------------------------

    PluginManager.registerCommand(pluginName, "changeCharacterMemory", async (args) => {

        // Find specified character memory-id
        let findCharacterMemory = characterMemory.find(item => item.memoryId === args.memoryIdArg);
        if (!findCharacterMemory) {
            findCharacterMemory = characterMemory.find(item => item.memoryId === "Event 1");
        }

        function editCharacterMemory(event) {
            if (event) {
                // Edit character memory
                if (args.changeCharacterAdjectives === "true") {
                    event.currentcharacter = args.characterAdjectives;
                }
                if (args.changeCharacterDescription === "true") {
                    event.currentdescription = args.characterDescription;
                }
                if (args.changeCharacterStartScene === "true") {
                    event.currentstartScene = args.characterStartScene;
                }
            }
        }
        editCharacterMemory(findCharacterMemory);

    });



    //-----------------------------------------------------------------------------
    //                              Print Character Memory
    //-----------------------------------------------------------------------------

    PluginManager.registerCommand(pluginName, "printCharacterMemory", async (args) => {
        // Trova l'oggetto corrispondente all'eventId desiderato
        let findCharacterMemory = characterMemory.find(item => item.memoryId === args.memoryIdArg);
        if (!findCharacterMemory) {
            findCharacterMemory = characterMemory.find(item => item.memoryId === "Event 1");
        }

        //console.log("Character Memory:", findCharacterMemory.currentcharacter);
        console.log("Character Memory:", findCharacterMemory);

    });



    //-----------------------------------------------------------------------------
    //                              Start Dialogue
    //-----------------------------------------------------------------------------

    PluginManager.registerCommand(pluginName, "StartDialogue", async (args) => {

        generating = true // Stops text generation from starting
        let cancel = false
        currentTextMessage = prompt("Write your message or question:");

        if (currentTextMessage && currentTextMessage.trim() !== '') {
            generating = false;

        } else if (currentTextMessage === null) {
            // If the user presses "Cancel"
            generating = true;
            cancel = true;
        }

        // Retrieve command AiNpc arguments from structure
        const allAiNpcOptions = JSON.parse(args.DialogueWithAI);

        allAiNpcOptions.forEach(textOptionsObj => {
            const AiNpcOptions = JSON.parse(textOptionsObj);

            AiNpcOptions.CustomQuestionMessageVarId = Number(Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.CustomQuestionMessageVarId));
            AiNpcOptions.memory_talk = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.memory_talk));
            AiNpcOptions.CustomAnswerMessageVarId = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.CustomAnswerMessageVarId));
            AiNpcOptions.CustomMemoryMessageVarId = Number(Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.CustomMemoryMessageVarId));
            AiNpcOptions.batch_size = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.batch_size));
            AiNpcOptions.n_keep = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.n_keep));
            AiNpcOptions.n_predict = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.n_predict));
            AiNpcOptions.threads = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.threads));
            AiNpcOptions.maxContextLength = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.maxContextLength));
            AiNpcOptions.temperature = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.temperature));
            AiNpcOptions.top_p = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.top_p));
            AiNpcOptions.top_k = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.top_k));
            AiNpcOptions.UserName = Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.UserName);
            AiNpcOptions.CharacterName = Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.CharacterName);
            AiNpcOptions.character = Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.character);
            AiNpcOptions.description = Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.description);
            AiNpcOptions.startScene = Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.startScene);

            //Update values
            currentCustomQuestionMessageVarId = AiNpcOptions.CustomQuestionMessageVarId;
            currentmemory_talk = AiNpcOptions.memory_talk;
            currentCustomAnswerMessageVarId = AiNpcOptions.CustomAnswerMessageVarId;
            currentCustomMemoryMessageVarId = AiNpcOptions.CustomMemoryMessageVarId;
            currentbatch_size = AiNpcOptions.batch_size;
            currentn_keep = AiNpcOptions.n_keep;
            currentn_predict = AiNpcOptions.n_predict;
            currentthreads = AiNpcOptions.threads;
            currentMaxContextLength = AiNpcOptions.maxContextLength;
            currenttemperature = AiNpcOptions.temperature;
            currenttop_k = AiNpcOptions.top_k;
            currenttop_p = AiNpcOptions.top_p;
            currentUserName = AiNpcOptions.UserName;
            currentCharacterName = AiNpcOptions.CharacterName;
            currentcharacter = AiNpcOptions.character;
            currentdescription = AiNpcOptions.description;
            currentstartScene = AiNpcOptions.startScene;

        });


        // Add a New Character Memory
        async function addNewCharacterMemory() {
            return new Promise((resolve) => {
                const newCharacterMemory = {
                    memoryId: args.memoryIdArg,
                    currentcharacter: currentcharacter,
                    currentdescription: currentdescription,
                    currentstartScene: currentstartScene
                };

                characterMemory.push(newCharacterMemory);
                resolve();
            });
        }

        async function pushCharacterMemory() {
            findCharacterMemory = characterMemory.find(item => item.memoryId === args.memoryIdArg);
            if (!findCharacterMemory) {
                await addNewCharacterMemory(args.memoryIdArg);
            }
        }
        pushCharacterMemory();


        if (!generating) {
            (async () => {
                generating = true

                //---------------------------------------------------
                // Character memory system
                //---------------------------------------------------
                function processControlCharacters(str) {
                    return str.replace(/\\([VNPI])\[(\d+)\]|\\G/g, function (matchedString, type, id) {
                        if (matchedString === '\\G') {
                            return TextManager.currencyUnit;
                        }
                        const numId = Number(id);
                        switch (type) {
                            case 'V':
                                return String($gameVariables.value(numId));
                            case 'N':
                                return String($gameActors.actor(numId).name());
                            case 'P':
                                return String($gameParty.members()[numId - 1].name());
                            default:
                                return '';
                        }
                    });
                }

                // Initialize the window
                const customQuestionMessageVarId = Number(currentCustomQuestionMessageVarId) || null;
                const customAnswerMessageVarId = Number(currentCustomAnswerMessageVarId) || null;

                let targetVarId = customQuestionMessageVarId !== null ? customQuestionMessageVarId : 0;
                let variableValue = $gameVariables.value(targetVarId);
                let userMessage;

                // If the variable ID is undefined, reflect the message in the question
                if (targetVarId !== 0 && !variableValue) {
                    if (!currentTextMessage || currentTextMessage === '') { return; }
                    userMessage = currentTextMessage;
                } else if (targetVarId === 0 && (!currentTextMessage || currentTextMessage === '')) {
                    // If both the variable and the message are empty, exit from the process
                    return;
                } else {
                    // Otherwise, reflect the variable customQuestionMessageVarId in the question
                    userMessage = currentTextMessage;
                }

                // Handle control characters
                userMessage = processControlCharacters(userMessage);
                $gameVariables.setValue(targetVarId, userMessage);
                //userMessageVarId
                if (currentCustomQuestionMessageVarId !== null) {
                    $gameVariables.setValue(currentCustomQuestionMessageVarId, userMessage);
                }

                const customMemoryMessageVarId = Number(currentCustomMemoryMessageVarId) || currentmemoryMessageVarId;
                let customMemoryMessage = $gameVariables.value(customMemoryMessageVarId);

                // Processing that does not involve memory
                if (Number(currentCustomMemoryMessageVarId) === 0 || !currentmemory_talk) {
                    $gameVariables.setValue(memoryMessageVarId, []);
                    customMemoryMessage = [];
                    // Add command side system role
                    if (currentstartScene) {
                        customMemoryMessage.push({ role: 'context', content: (processControlCharacters(currentstartScene) || "") });
                    }
                    // Push userMessage
                    customMemoryMessage.push({ role: 'user', content: userMessage });
                    $gameVariables.setValue(memoryMessageVarId, customMemoryMessage);

                } else {
                    customMemoryMessage = $gameVariables.value(customMemoryMessageVarId);

                    if (!Array.isArray(customMemoryMessage)) {
                        customMemoryMessage = [];

                        // Add command side system role
                        if (currentstartScene) {
                            customMemoryMessage.push({ role: 'context', content: (processControlCharacters(currentstartScene) || "") });
                        }
                        customMemoryMessage.push({ role: 'user', content: userMessage });

                    } else {

                        // The process of making a memory conversation

                        //  Calculate memory_talk, Multiply the value by 2 if it is defined 
                        // and converted to a number, otherwise set it to 1.
                        const memoryTalk = Number(currentmemory_talk) * 2 || 1;
                        // pushes userMessage to customMemoryMessage
                        customMemoryMessage.push({ role: 'user', content: userMessage });

                        //Start loop
                        while (true) {
                            // Counts the number of user messages in the customMemoryMessage array
                            let userCount = customMemoryMessage.filter(item => item.role === 'user').length;
                            // Counts the number of character messages in the customMemoryMessage array
                            let characterCount = customMemoryMessage.filter(item => item.role === 'character').length;

                            // Check if the total number of messages (user + character) exceeds the 
                            // value of memoryTalk.
                            if (userCount + characterCount > memoryTalk) {
                                let userIndex = customMemoryMessage.findIndex(item => item.role === 'user');
                                let characterIndex = customMemoryMessage.findIndex(item => item.role === 'character');

                                if (userIndex >= 0 && characterIndex >= 0) {
                                    // Removes older messages from the customMemoryMessage array. It
                                    // takes the oldest message index for both the user and the character,
                                    // and then removes the two matching messages from the array.
                                    customMemoryMessage.splice(Math.min(userIndex, characterIndex), 2);
                                } else {
                                    break;
                                }
                            } else {
                                break;
                            }
                        }
                    }
                    // Updates $gameVariables with the updated customMemoryMessage. Basically,
                    // saves the updated conversation in the game variable
                    $gameVariables.setValue(customMemoryMessageVarId, customMemoryMessage);
                }

                //---------------------------------------------------
                // Generate text
                //---------------------------------------------------
                // Communication with koboldcpp API

                // Get User and Character messages
                const context = customMemoryMessage; // the provided context array
                let testoConNuovaLinea = "";
                let lastRole = "";

                // This will split user and character in different lines.
                // Can be used in the conversation, not the context (it would need "\n")
                for (let i = 0; i < context.length; i++) {
                    const entry = context[i];
                    if (entry.role === 'user') {
                        //-----------------------------------------------
                        // Do not use "Gius" as UserName (enters in conflict with Gius variable)
                        if (lastRole !== 'user') {
                            testoConNuovaLinea += currentUserName + ": ";
                            lastRole = 'user';
                        }
                        //-----------------------------------------------
                        testoConNuovaLinea += entry.content + "\n";
                    } else if (entry.role === 'character') {
                        if (lastRole !== 'character') {
                            testoConNuovaLinea += currentCharacterName + ": ";
                            lastRole = 'character';
                        }
                        testoConNuovaLinea += entry.content + "\n";
                    }
                }



                // Find specified character memory-id
                let findCharacterMemory = characterMemory.find(item => item.memoryId === args.memoryIdArg);
                if (!findCharacterMemory) {
                    findCharacterMemory = characterMemory.find(item => item.memoryId === "Event 1");
                }

                let characterDescription = findCharacterMemory.currentcharacter + "; " + findCharacterMemory.currentdescription
                //Remove spaces
                StartScene = findCharacterMemory.currentstartScene.replace(/[^\S\n]+/g, ' ');


                let prompt = "";
                prompt = `${characterDescription}\n${StartScene}\n\n${currentUserName}:\n${testoConNuovaLinea}\n\n${currentCharacterName}:`;
                prompt = prompt.replace(/[^\S\n]+/g, ' ');


                const params = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        n: 1,
                        max_context_length: currentMaxContextLength,
                        max_length: 80,
                        rep_pen: 1.1,
                        temperature: currenttemperature,
                        top_p: currenttop_p,
                        top_k: currenttop_k,
                        top_a: 0,
                        typical: 1,
                        tfs: 1,
                        rep_pen_range: 300,
                        rep_pen_slope: 0.7,
                        sampler_order: [6, 0, 1, 3, 4, 2, 5],
                        n_keep: currentn_keep,
                        n_predict: currentn_predict,
                        batch_size: currentbatch_size,
                        threads: currentthreads,
                        interactive: true,
                        seed: -1,
                        stop_sequence: [`${currentUserName}:`, `\n${currentUserName} `],
                        prompt: prompt,
                    })
                });

                const responseData = await params.json();
                // Save raw ouput
                const output = responseData.results[0].text;
                //Remove answers after new lines
                const BetterCleanedText = output.split('\n\n')[0];
                console.log(BetterCleanedText);

                // ----------------------------------------------------
                // Add BetterCleanedText to character memory
                // Assign answer to variable ID
                let targetAnswerVarId = customAnswerMessageVarId !== null ? customAnswerMessageVarId : currentanswerMessageVarId;
                // Add the new answer to the character role
                customMemoryMessage.push({ role: 'character', content: BetterCleanedText });
                $gameVariables.setValue(targetAnswerVarId, BetterCleanedText);

                //console.log("customMemoryMessage:\n", customMemoryMessage)
                // ----------------------------------------------------

                // Divide BetterCleanedText in different lines without cutting words
                function splitLines(BetterCleanedText) {
                    const words = BetterCleanedText.split(' ');
                    let lines = [];
                    let currentLine = '';

                    for (let i = 0; i < words.length; i++) {
                        const word = words[i];
                        if (currentLine.length + word.length <= maxCharactersPerLine) {
                            currentLine += (currentLine.length > 0 ? ' ' : '') + word;
                        } else {
                            lines.push(currentLine);
                            currentLine = word;
                        }
                    }
                    if (currentLine.length > 0) {
                        lines.push(currentLine);
                    }
                    return lines;
                }
                // Show formatted answer + chosen face
                const lines = splitLines(BetterCleanedText);

                // Output each line separately
                for (let i = 0; i < lines.length; i++) {
                    const line = lines[i];
                    // Add your logic to process each line here
                    args.faceindex = "\"\\\\fc[" + args.faceImage + ", " + args.faceIndex + "]\""
                    $gameMessage.add(JSON.parse(args.faceindex) + line)
                }

                generating = false
            })();
        }
        if (generating && !cancel) {
            console.log("Thinking...");
        }
    });



    //-----------------------------------------------------------------------------
    // Window_Base
    //
    // The superclass of all windows within the game.
    //-----------------------------------------------------------------------------

    const _Window_Base_processEscapeCharacter = Window_Base.prototype.processEscapeCharacter;
    Window_Base.prototype.processEscapeCharacter = function (code, textState) {
        let param;
        switch (code) {
            // Change Message Face
            case "FC":
                param = this.obtainEscapeFullParam(textState);
                param = param.replace(/[, ]+/g, " ").trim().split(" ");
                this.redrawFace(param[0], param[1], textState)
                break;
            // Change Message Face (Actor ID)
            case "ACTFC":
                param = this.obtainEscapeParam(textState);
                this.redrawFace($gameActors.actor(param).faceName(), $gameActors.actor(param).faceIndex(), textState);
                break;
            // Change Message Face (Party Member ID)
            case "PRTFC":
                param = this.obtainEscapeParam(textState) - 1;
                this.redrawFace($gameParty.members()[param].faceName(), $gameParty.members()[param].faceIndex(), textState);
                break;
        }
    }

    Window_Base.prototype.obtainEscapeFullParam = function (textState) {
        const regExp = /\[(.*?)\]/;
        const arr = regExp.exec(textState.text.slice(textState.index));
        if (arr) {
            textState.index += arr[0].length;
            return arr[1];
        } else {
            return "";
        }
    };

    Window_Base.prototype.redrawFace = function (faceName, faceIndex, textState) {
        const rtl = $gameMessage.isRTL();
        const width = ImageManager.faceWidth;
        const height = this.innerHeight;
        const x = rtl ? this.innerWidth - width - 4 : 4;
        const y = 0;
        this.contents.clearRect(x, y, width, height);
        const bitmap = ImageManager.loadFace(faceName);
        const pw = width;
        const ph = ImageManager.faceHeight;
        const sw = Math.min(width, pw);
        const sh = Math.min(height, ph);
        const dx = Math.floor(x + Math.max(width - pw, 0) / 2);
        const dy = Math.floor(y + Math.max(height - ph, 0) / 2);
        const sx = (faceIndex % 4) * pw + (pw - sw) / 2;
        const sy = Math.floor(faceIndex / 4) * ph + (ph - sh) / 2;
        bitmap.addLoadListener(() => {
            this.contents.blt(bitmap, sx, sy, sw, sh, dx, dy);
        });
        const spacing = 20;
        const margin = width + spacing;
        textState.x = textState.rtl ? this.innerWidth - margin : margin;
        textState.startX = textState.x;
    }

})();