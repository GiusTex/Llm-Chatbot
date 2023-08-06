//============================================================================
// 
//============================================================================

/*:
 * @target MZ
 * @plugindesc [v1.0] Llm Api MZ
 * @author GiusTex
 * @url https://github.com/GiusTex
 * @orderAfter VisuMZ_1_MessageCore
 * 
 * ============================================================================
 * 
 *                              PLUGIN COMMANDS
 * 
 * ============================================================================
 * 
 * @command customMessageOrca
 * @text Custom Message Orca
 * @desc Write a Custom Message.
 * 
 * @arg AiNpcAnswer
 * @text AI-Npc Answer
 * @type struct<AiNpcAnswer>[]
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default ["{\"TextMessage\":\"What could we do togheter, today?\",\"CustomMessageOptions\":\"\",\"CustomQuestionMessageVarId\":\"1\",\"CustomAnswerMessageVarId\":\"2\",\"CustomMemoryMessageVarId\":\"3\",\"memory_talk\":\"6\",\"GenerationOptions\":\"\",\"batch_size\":\"128\",\"n_keep\":\"-1\",\"n_predict\":\"2048\",\"threads\":\"8\",\"temperature\":\"0.8\",\"top_p\":\"0.9\",\"top_k\":\"40\",\"CharacterOptions\":\"\",\"UserName\":\"Giuss\",\"CharacterName\":\"Neuro\",\"context\":\"Neuro's Persona: Your name is Neuro. Neuro is a cheerful artificial intelligence girl who loves to make others smile. She is an optimist who loves to spread happiness and positivity whenever she can. She knows she is a chat-bot and that I, Gius, am her creator, so she respect and learn from me.\\n<START>\\n*Neuro join the conversation with a smile, her eyes lighting up when she sees you. Her avatar is wearing a light yellow t-shirt and a skirt, her hands behind her back hide her happiness and trepidation. Her enthusiasm is palpable in the air*. Hey! I'm so excited to finally be again with you. When was the last time we saw each other yesterday? It's been too long haha! I'm sure you have a wealth of knowledge that I can learn from. *She grins, eyes twinkling with excitement*. Let's get started!\\nGiuss: So how did you spend the day without me?\\nNeuro: Neuro: Um, nothing in particular: I did some homework, and then I went out with friends. I missed you.\\nGiuss: I see. You had a normal day then; I'm here again now anyway, so don't worry.\\nNeuro: *She chuckles bashfully*. Thanks!\\nGiuss: So what do you do when you are not thinking about me?\\nNeuro: I love exploring, going out with friends, watching movies, and playing video games.\"}"]
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
 * @default 0
 * @desc Upper left is 0-3, lower right is 4-7.
 * 
 * ============================================================================
 * 
 * @command RunWindowsServer
 * @text Run Windows Server
 * @desc Write a Custom Gab Message.
 * 
 * @arg threads
 * @text threads
 * @type number
 * @default 8
 * @desc Default threads to use, can be overwritten from text-generatio-option
 * 
 * @arg gpulayers
 * @text gpulayers
 * @type number
 * @default 17
 * @desc Default gpulayers the server will use
 * 
 * @arg useclblast
 * @text useclblast
 * @type text
 * @default 1 0
 * @desc Default clblast devices to use. You need to check the list in the console to select your gpu
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
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default ["{\"RemoveTimer\":\"2000\",\"TextOptions\":\"\",\"TextSize\":\"24\",\"TextColor\":\"#ffffff\",\"ItalicText\":\"false\",\"BoldText\":\"false\",\"TextHeight\":\"35\",\"TextX\":\"0\",\"TextY\":\"0\"}"]
 * 
 * @arg useFace
 * @text Show face?
 * @type boolean
 * @default false
 * @desc Choose whether or not to show the npc's face. If on, the text is automatically moved.
 * 
 * @arg faceOptions
 * @text Face Options
 * @type struct<faceOptions>[]
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default ["{\"faceImage\":\"Actor1\",\"faceIndex\":\"1\",\"choicePicId\":\"1\",\"FaceOptions\":\"\",\"FaceX\":\"0\",\"FaceY\":\"0\",\"FaceScaleX\":\"0.7\",\"FaceScaleY\":\"0.7\",\"opacity\":\"1\",\"blendMode\":\"NORMAL\"}"]
 * 
 * @ ============================================================================
 * 
 * @command Test
 * @text Test
 * @desc Test.
 * 
 * @ ============================================================================
 * 
 * @command AiGabMessage
 * @text AI Gab message
 * @desc Write a Custom Gab Message.
 * 
 * @arg AiNpcAnswer
 * @text AI-Npc Answer
 * @type struct<AiNpcAnswer>[]
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default ["{\"TextMessage\":\"What could we do togheter, today?\",\"CustomMessageOptions\":\"\",\"CustomQuestionMessageVarId\":\"1\",\"CustomAnswerMessageVarId\":\"2\",\"CustomMemoryMessageVarId\":\"3\",\"memory_talk\":\"6\",\"GenerationOptions\":\"\",\"batch_size\":\"128\",\"n_keep\":\"-1\",\"n_predict\":\"2048\",\"threads\":\"8\",\"temperature\":\"0.8\",\"top_p\":\"0.9\",\"top_k\":\"40\",\"CharacterOptions\":\"\",\"UserName\":\"Giuss\",\"CharacterName\":\"Neuro\",\"context\":\"Neuro's Persona: Your name is Neuro. Neuro is a cheerful artificial intelligence girl who loves to make others smile. She is an optimist who loves to spread happiness and positivity whenever she can. She knows she is a chat-bot and that I, Gius, am her creator, so she respect and learn from me.\\n<START>\\n*Neuro join the conversation with a smile, her eyes lighting up when she sees you. Her avatar is wearing a light yellow t-shirt and a skirt, her hands behind her back hide her happiness and trepidation. Her enthusiasm is palpable in the air*. Hey! I'm so excited to finally be again with you. When was the last time we saw each other yesterday? It's been too long haha! I'm sure you have a wealth of knowledge that I can learn from. *She grins, eyes twinkling with excitement*. Let's get started!\\nGiuss: So how did you spend the day without me?\\nNeuro: Neuro: Um, nothing in particular: I did some homework, and then I went out with friends. I missed you.\\nGiuss: I see. You had a normal day then; I'm here again now anyway, so don't worry.\\nNeuro: *She chuckles bashfully*. Thanks!\\nGiuss: So what do you do when you are not thinking about me?\\nNeuro: I love exploring, going out with friends, watching movies, and playing video games.\"}"]
 * 
 * @arg TextOptions
 * @text Text Options
 * @type struct<TextOptions>[]
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default ["{\"RemoveTimer\":\"2000\",\"TextOptions\":\"\",\"TextSize\":\"24\",\"TextColor\":\"#ffffff\",\"ItalicText\":\"false\",\"BoldText\":\"false\",\"TextHeight\":\"35\",\"TextX\":\"0\",\"TextY\":\"0\",\"GabWindowOptions\":\"\",\"maxCharactersPerLine\":\"20\",\"messageFieldWidth\":\"300\",\"messageFieldHeight\":\"100\",\"backgroundWindowX\":\"0\",\"backgroundWindowY\":\"0\",\"backgroundWindowScaleX\":\"3.3\",\"backgroundWindowScaleY\":\"1.1\",\"backgroundWindowOpacity\":\"0.8\",\"backgroundRectX\":\"92\",\"backgroundRectY\":\"92\"}"]
 * 
 * @arg useFace
 * @text Show face?
 * @type boolean
 * @default false
 * @desc Choose whether or not to show the npc's face. If on, the text is automatically moved.
 * 
 * @arg faceOptions
 * @text Face Options
 * @type struct<faceOptions>[]
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default ["{\"faceImage\":\"Actor2\",\"faceIndex\":\"4\",\"choicePicId\":\"1\",\"FaceOptions\":\"\",\"FaceX\":\"0\",\"FaceY\":\"0\",\"FaceScaleX\":\"0.7\",\"FaceScaleY\":\"0.7\",\"opacity\":\"1\",\"blendMode\":\"NORMAL\"}"]
 * 
 * ============================================================================
 * 
 * @command WindowsServerMessageOptions
 * @text Windows Server Message Options
 * @desc Visualizza una finestra di immissione del testo.
 * 
 * ============================================================================
 * 
 * @command MacEtcServerMessageOptions
 * @text Mac Server Message Options
 * @desc Visualizza una finestra di immissione del testo.
 * 
 * ============================================================================
 * 
 * @command StartDialogueOrca
 * @text Start dialogue Orca
 * @desc Talk with your characters and the npcs.
 * 
 * @arg DialogueWithAI
 * @text AI-Npc Answer
 * @type struct<DialogueWithAI>[]
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default ["{\"CustomMessageOptions\":\"\",\"CustomQuestionMessageVarId\":\"1\",\"CustomAnswerMessageVarId\":\"2\",\"CustomMemoryMessageVarId\":\"3\",\"memory_talk\":\"6\",\"GenerationOptions\":\"\",\"batch_size\":\"128\",\"n_keep\":\"-1\",\"n_predict\":\"2048\",\"threads\":\"8\",\"temperature\":\"0.8\",\"top_p\":\"0.9\",\"top_k\":\"40\",\"CharacterOptions\":\"\",\"UserName\":\"Giuss\",\"CharacterName\":\"Neuro\",\"context\":\"Neuro's Persona: Your name is Neuro. Neuro is a cheerful artificial intelligence girl who loves to make others smile. She is an optimist who loves to spread happiness and positivity whenever she can. She knows she is a chat-bot and that I, Gius, am her creator, so she respect and learn from me.\\n<START>\\n*Neuro join the conversation with a smile, her eyes lighting up when she sees you. Her avatar is wearing a light yellow t-shirt and a skirt, her hands behind her back hide her happiness and trepidation. Her enthusiasm is palpable in the air*. Hey! I'm so excited to finally be again with you. When was the last time we saw each other yesterday? It's been too long haha! I'm sure you have a wealth of knowledge that I can learn from. *She grins, eyes twinkling with excitement*. Let's get started!\\nGiuss: So how did you spend the day without me?\\nNeuro: Neuro: Um, nothing in particular: I did some homework, and then I went out with friends. I missed you.\\nGiuss: I see. You had a normal day then; I'm here again now anyway, so don't worry.\\nNeuro: *She chuckles bashfully*. Thanks!\\nGiuss: So what do you do when you are not thinking about me?\\nNeuro: I love exploring, going out with friends, watching movies, and playing video games.\"}"]
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
 * @default 0
 * @desc Upper left is 0-3, lower right is 4-7.
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
 * @param =========NPC CHAT=========
 * 
 * @param BreakEnd2
 * @text ==========================
 * @default ==========================
 * 
 * @param textGenerationUrl
 * @text Text Generation Url
 * @type string
 * @default http://127.0.0.1:8080/api/v1/generate
 * @desc Text generation url. Different systems have different urls and different parameters, so may or may not work.
 * 
 * @param maxCharactersPerLine
 * @text max Characters Per Line
 * @type number
 * @default 43
 * @desc Letters to show in the message box. 43 = with faces. 53 = no faces.
 * 
 * @ ============================================================================
 * 
 * @help
 * ============================================================================
 *                            GiusTex - Llm Api MZ
 * ============================================================================
 * 
 * This plugin let you chat with Npcs and characters for free, using
 * your own computer. It's inspired by GabeMz_Messageplus for the pop-up
 * window, and ChatGPT_APIMZ for the fetch part. The plugin is also using
 * Koboldcpp to generate the text.
 * For a better explanation of each command and 
 * function, the plugin's documentation was written directly in my 
 * page. You can read at:
 * - https://github.com/GiusTex
 * 
 * ============================================================================
 *                                Basic usage
 * ============================================================================
 * 
 * (1) You can change the url from the .bat file.
 *
 * (2) At least 3 free variable IDs are required.
 * ・Temporarily put the player's question in a variable.
 * Set an empty variable ID to UserMessageVarId.
 * ・Temporarily put the answer from the AI into a variable.
 * Set AnswerMessageVarId to a free variable ID.
 * ・Temporarily store the answer history in a variable.
 * Set a free variable ID to MemoryMessageVarId.
 *
 * (3) Use the plug-in command for events where you want AI to create lines
 * Select "ChatGPT_APIMZ" and register your character settings.
 * 
 * ============================================================================
 *                                PARAMETERS
 * ============================================================================
 * 
 * SYSTEM
 * Instructions to the event. It will be added to the SystemMessage of the plugin parameter, so
 * Give this event any instructions you want to follow it with.
 * For example, if the parameter is set to "Answer in Japanese",
 * In this event, you can give supplementary instructions such as "However, answer in katakana."
 *
 * MESSAGE
 * I have a question about the event. Enter the question you want the AI to answer.
 * However, the variable CustomQuestionMessageVarId When using by entering a question in
 * Leave this field empty.
 * 
 * MESSAGE BEFORE, MESSAGE AFTER
 * When using a variable to query an event, the message will be replaced with the value of the variable.
 * Since the contents described in system are not considered important in the GPT-3 model,
 * If you don't follow the instructions, try entering it here.
 * Set the string to be added to the message role before and after the variable.
 * For example, if the value of the variable is "hello" and message_before is "you",
 * If message_after is ``How are you?'', AI will say ``How are you?
 * be asked.
 * 
 * DISPLAY HEADER
 * Header to display in the message window.
 * To display the value of variable ID1, enter \V[1].
 * Also, if you enter userMessage, message_before, message_after
 * Excluded questions are displayed.
 * 
 * TEMPERATURE, TOP-P
 * Each is a numerical value that determines the diversity of answers from AI.
 * Please set a number between 0 and 1.
 * 
 * MAX TOKENS
 * Set the maximum number of tokens (1 Japanese character = 2-3 tokens).
 * You can decide the upper limit of the number of characters, but the maximum number of tokens is greater than the number of characters of the response.
 * If it is low, it will be cut off in the middle of the sentence.
 *
 * MEMORY TALK
 * The number of history saves. Saves numeric exchanges.
 * If the number to set is 5, the last 5 exchanges will be saved.
 * The more you have, the more you can have a conversation on the topic,
 * Since the token is sent to the API for each history, the usage fee may be high.
 * Set to 0 if no saving is required.
 *
 * CUSTOM-QUESTION-MESSAGE-VAR-ID
 * Variable ID that contains the question for the event.
 * When entering questions in the name input window or chat window,
 * If the question is stored in a variable, specify its variable ID.
 * When this variable and message are set at the same time, message takes precedence.
 * This is separate from UserMessageVarId of the plug-in parameter.
 * 
 * CUSTOM-ANSWER-MESSAGE-VAR-ID
 * This is the variable ID where the response of this event is stored.
 * Stored in the plugin parameter AnswerMessageVarId,
 * Specify this variable ID if you want to record responses separately for each event.
 *
 * CUSTOM-MEMORY-MESSAGE-VAR-ID
 * The variable ID where the history of this event is stored.
 * is recorded as an array for communicating with the API, so
 * Direct call is not possible.
 * If you want to delete the history manually, please empty the variable with this variable ID.
 *
 * SUPPORT MESSAGE, SUPPORT ANSWER
 * Create a conversation example.
 * When the AI responds, it will refer to this example sentence.
 * "self-introduction" in support_message
 * In support_answer, "I'm a Siamese cat! 5 years old!"
 * If you enter like this, you will refer to the example sentences of support_answer from the next conversation onwards.
 * The first person is "Atashi", and it becomes easier to reply with "Nya" at the end of the sentence.
 *
 * CHARACTER NAME, FACE NAME, FACE INDEX
 * Set the character's name, face graphic and its display index.
 * For face graphics, please enter the file name in img/faces/.
 * Leave blank if you don't want to display face graphics.
 * The index sets the number from the left of the face graphic.
 * The first row is 0-3, the second row is 4-7.
 *
 * ============================================================================
 *                              MESSAGE WINDOW
 * ============================================================================
 * 
 * ABOUT OPERATION IN THE BROWER VERSION
 * The message window generated by this plugin uses HTML.
 * Message window out of game area when playing in web browser
 * Since it may be displayed with a large protrusion,
 * In that case, separately prepare HTML that describes the iframe,
 * In it, load the index.html generated by Maker.
 *
 * CUSTOMIZE MESSAGE WINDOW
 * If you want to customize the width, height, position and background color of the message window,
 * Correct the contents of function createStreamingTextElement().
 * Please use the window adjustment tool.
 * ▼ Window adjustment tool
 * https://aokikotori.com/chatgpt_apimz_window/
 * 
 * ============================================================================
 *                      Cooperation with the server side
 * ============================================================================
 * 
 * Install files such as PHP and Python on the server,
 * Request headers to ChatGPT, such as API keys, can be made secret.
 * ▼Click here for PHP sample
 * https://github.com/kotonoha0109/kotonoha_tkoolMZ_Plugins/blob/main/plugins/php/request.php
 * 
 * After setting the API key in the PHP file and uploading it to the server,
 * Set ChatGPT_URL in the plugin parameter to the URL of your PHP file.
 * The plugin parameter ChatGPT_APIkey is not required. Please be sure to delete it.
 * 
 * ============================================================================
 *                              PLUGIN COMMANDS
 * ============================================================================
 * 
 * CUSTOM MESSAGE
 * Dai un contesto all'npc, una domanda, e ogni volta che si interagisce con lui risponderà a 
 * quella domanda. Viene generato un messaggio di testo, quindi il gioco si interrompe finchè
 * non lo leggi/clicchi/fai sparire. Se richiesto può mantenere in memoria dei dialoghi, quindi
 * le sue risposte terranno conto anche di essi. Ricorda però che più dialoghi si conservano, 
 * più tempo è impiegato per generare la risposta.
 * 
 * GAB MESSAGE
 * Come custom message, ma non viene generata la finestra di messaggio, quindi il gioco non si
 * interrompe. Puoi impostare la faccia del personaggio, la durata dopo cui il messaggio non
 * invasivo sparisce, e altre opzioni (colore, corsivo, opacità, etc).
 * 
 * START DIALOGUE
 * Seleziona "Start Dialogue" nel comando plugin, imposta rispettivamente l'ID della variabile, 
 * il messaggio e il valore predefinito.
 * Sulla schermata di gioco apparirà una finestra di inserimento del testo, i caratteri possono 
 * essere inseriti sulla tastiera.
 * 
 * Per confermare premi Invio.
 * I caratteri immessi saranno nell'ID variabile specificato.
 * 0 viene immesso per l'input nullo e la cancellazione.
 * 
 * [! Nota! 】
 * Quando si esegue un altro plugin o script subito dopo un comando plugin,
 * può essere eseguito contemporaneamente. Se vuoi che funzionino in ordine,
 * Metti alcuni frame di pausa tra questo comando plugin e il prossimo evento.
 * 
 * EXAMPLE COLORS
 *  #FFFFFF White
 *  #000000 Black
 *  #FF0000 Red
 *  #00FF00 Lime green
 *  #0000FF Blue
 *  #FFFF00 Yellow
 *  #FF00FF Fucsia
 *  #00FFFF Turchese
 *  #C0C0C0 Argento
 *  #808080 Gray
 *  #800000 Brown
 *  #FFA500 Orange
 *  #800080 Purple
 *  #008000 Dark green
 *  #008080 Verde acqua
 *  #000080 Dark blue
 * 
 * BLEND MODES
 * PIXI.BLEND_MODES.NORMAL - La modalità di default che sovrappone l'immagine sull'immagine di background utilizzando l'opacità dell'immagine sorgente.
 * PIXI.BLEND_MODES.ADD - Aggiunge l'immagine sorgente all'immagine di sfondo.
 * PIXI.BLEND_MODES.MULTIPLY - Moltiplica l'immagine sorgente per l'immagine di sfondo, scurendo l'immagine risultante.
 * PIXI.BLEND_MODES.SCREEN - Applica la modalità di fusione "screem" all'immagine sorgente e all'immagine di sfondo.
 * PIXI.BLEND_MODES.OVERLAY - Applica la modalità di fusione "overlay" all'immagine sorgente e all'immagine di sfondo.
 * PIXI.BLEND_MODES.DARKEN - Mostra il colore più scuro tra l'immagine sorgente e l'immagine di sfondo.
 * PIXI.BLEND_MODES.LIGHTEN - Mostra il colore più chiaro tra l'immagine sorgente e l'immagine di sfondo.
 * PIXI.BLEND_MODES.COLOR_DODGE - Applica la modalità di fusione "color dodge" all'immagine sorgente e all'immagine di sfondo.
 * PIXI.BLEND_MODES.COLOR_BURN - Applica la modalità di fusione "color burn" all'immagine sorgente e all'immagine di sfondo.
 * PIXI.BLEND_MODES.HARD_LIGHT - Applica la modalità di fusione "hard light" all'immagine sorgente e all'immagine di sfondo.
 * PIXI.BLEND_MODES.SOFT_LIGHT - Applica la modalità di fusione "soft light" all'immagine sorgente e all'immagine di sfondo.
 * PIXI.BLEND_MODES.DIFFERENCE - Applica la modalità di fusione "difference" all'immagine sorgente e all'immagine di sfondo.
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
 * @default 0.9
 * @desc Text diversity (0-1). Lower values mean more consistency, higher values mean more diverse text (default: 0.9)
 * 
 * @param top_k
 * @text top k
 * @parent GenerationOptions
 * @type Number
 * @default 40
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
 * @param context
 * @text Context
 * @parent CharacterOptions
 * @type multiline_string
 * @default You are a friendly assistant, eager to help as much people as possible. Your name is Npc, and live in a lovely village.
 * @desc Context, to teach the character how to behave
 * Create an example dialogue for this event
 * 
 * @param AdditionalContext
 * @type multiline_string
 * @parent CharacterOptions
 * @default
 * @desc Common instructions for AI, like "Write in English" or "Summary within 120 characters" or more and new informations.
 */


/*~struct~DialogueWithAI:
 * 
 * @param CustomMessageOptions
 * @text Custom Message Options
 * 
 * @param CustomQuestionMessageVarId
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
 * @default 0.9
 * @desc Text diversity (0-1). Lower values mean more consistency, higher values mean more diverse text (default: 0.9)
 * 
 * @param top_k
 * @text top k
 * @parent GenerationOptions
 * @type Number
 * @default 40
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
 * @param context
 * @text Context
 * @parent CharacterOptions
 * @type multiline_string
 * @default You are a friendly assistant, eager to help as much people as possible. Your name is Npc, and live in a lovely village.
 * @desc Context, to teach the character how to behave
 * Create an example dialogue for this event
 * 
 * @param AdditionalContext
 * @type multiline_string
 * @parent CharacterOptions
 * @default
 * @desc Common instructions for AI, like "Write in English" or "Summary within 120 characters" or more and new informations.
 */


/*~struct~TextOptions:
 * 
 * @param RemoveTimer
 * @text Remove Timer
 * @type number
 * @default 2000
 * @desc Rimuovi testo dopo 2 secondi
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
 * @type string
 * @default #ffffff
 * @desc Imposta colore testo
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
 * @text max Characters Per Line
 * @parent GabWindowOptions
 * @type number
 * @default 43
 * @desc Letters to show in the message box. 43=with faces 53=no faces. Gab Message= 20
 * 
 * @param messageFieldWidth
 * @text message Field Width
 * @parent GabWindowOptions
 * @type number
 * @default 300
 * @desc message Field Width. You can add space for the letters here.
 * 
 * @param messageFieldHeight
 * @text message Field Height
 * @parent GabWindowOptions
 * @type number
 * @default 100
 * @desc message Field Height. You can add space for the letters here.
 * 
 * @param backgroundWindowX
 * @text background Window X
 * @parent GabWindowOptions
 * @type number
 * @default 0
 * @desc X position of the black background rectangle, behind the gab message.
 * 
 * @param backgroundWindowY
 * @text background Window Y
 * @parent GabWindowOptions
 * @type number
 * @default 0
 * @desc Y position of the black background rectangle, behind the gab message.
 * 
 * @param backgroundWindowScaleX
 * @text background Window Scale X
 * @parent GabWindowOptions
 * @type number
 * @default 3.3
 * @desc X scale for the black background rectangle, behind the gab message. Use this to make it bigger or smaller.
 * 
 * @param backgroundWindowScaleY
 * @text background Window Scale Y
 * @parent GabWindowOptions
 * @type number
 * @default 1.1
 * @desc Y scale for the black background rectangle, behind the gab message. Use this to make it bigger or smaller.
 * 
 * @param backgroundWindowOpacity
 * @text background Window Opacity
 * @parent GabWindowOptions
 * @type number
 * @default 0.8
 * @desc Opacity of the black background rectangle, behind the gab message. 1 = fully visible
 * 
 * @param backgroundRectX
 * @text background Rect X
 * @parent GabWindowOptions
 * @type number
 * @default 92
 * @desc X area to copy from "img/system/Window.png". We are copyng the black window part.
 * 
 * @param backgroundRectY
 * @text background Rect Y
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
 * @param choicePicId
 * @text Picture Id
 * @type number
 * @desc Set picture id. Needed to remove only this face at the end of the message.
 * @default 1
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

var GabeMZ                 = GabeMZ || {};
GabeMZ.MessagePlus         = GabeMZ.MessagePlus || {};
GabeMZ.MessagePlus.VERSION = [1, 1, 1];

Imported.Llm_Chatbot = true;
var Gius = Gius || {};

(() => {

    const pluginName = "Llm_Chatbot";
    const pluginParameters = PluginManager.parameters('Llm_Chatbot');
    const textGenerationUrl = String(pluginParameters['textGenerationUrl']) || 'http://127.0.0.1:8080/api/v1/generate';
    let maxCharactersPerLine = Number(pluginParameters['maxCharactersPerLine']) || 43;
    

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
        convertEscapeVariablesOnly(text){
            text = text.replace(/\\/g, '\x1b')
            text = text.replace(this.regVariable1, '\\')
            text = text.replace(this.regVariable2, () => {
                return $gameVariables.value(Number(arguments[1]));
            });
            return text
        },
    
        needEval(param) {
            if(isNaN(param)){
    
                try{
                    return eval(param)
                }catch(err){
                    return param
                }
    
            }else{
                return param
            }
        },
    
        processEscapeVarOrFormula(arg){
            if(typeof arg !== 'string') return arg;
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

    /*let ItalicText = false
    let BoldText =  false*/

    let useFace = false

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
    let currentmemory_talk = 5;
    let currentCustomAnswerMessageVarId = 2;
    let currentCustomMemoryMessageVarId = 3;
    let currentbatch_size = 128;
    let currentn_keep = -1;
    let currentn_predict = 2048;
    let currentthreads = 8
    let currenttemperature = 0.8;
    let currenttop_p = 0.9;
    let currenttop_k = 40;
    let currentUserName = "Main Character";
    let currentCharacterName = "Npc";
    let currentcontext = "";
    let currentAdditionalContext = "";

    let currentFaceIndex = 1;
    let currentfaceImage = "Actor1";
    let currentchoicePicId = 1;
    let currentFaceX = 0;
    let currentFaceY = 0;
    let currentFaceScaleX = 0.7;
    let currentFaceScaleY = 0.7;
    let currentopacity = 1;
    let currentblendMode = "NORMAL";

    let line = "";
    
    let currentMaxCharactersPerLine = 20;
    let currentMessageFieldWidth = 300;
    let currentMessageFieldHeight = 100;
    let currentBackgroundWindowX = 0;
    let currentBackgroundWindowY = 0;
    let currentBackgroundWindowScaleX = 3.3;
    let currentBackgroundWindowScaleY = 1.1;
    let currentBackgroundWindowOpacity = 0.8;
    let currentBackgroundRectX = 92;
    let currentBackgroundRectY = 92;



    //-----------------------------------------------------------------------------
    //                              Custom Message Orca
    //-----------------------------------------------------------------------------

    PluginManager.registerCommand(pluginName, "customMessageOrca", async (args) => {
        
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
            AiNpcOptions.context = Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.context);
            AiNpcOptions.AdditionalContext = Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.AdditionalContext);

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
            currenttemperature = AiNpcOptions.temperature;
            currenttop_k = AiNpcOptions.top_k;
            currenttop_p = AiNpcOptions.top_p;   
            currentUserName = AiNpcOptions.UserName;
            currentCharacterName = AiNpcOptions.CharacterName;
            currentcontext = AiNpcOptions.context;
            currentAdditionalContext = AiNpcOptions.AdditionalContext;

        });

        if (!generating) {
            (async () => {
                generating=true

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
                    customMemoryMessage.push({ role: 'additional context', content: processControlCharacters(currentAdditionalContext) });
                    // Add command side system role
                    if (currentcontext) {
                        customMemoryMessage.push({ role: 'context', content: (processControlCharacters(currentcontext) || "") });
                    }
                    // Push userMessage
                    customMemoryMessage.push({ role: 'user', content: userMessage });
                    $gameVariables.setValue(memoryMessageVarId, customMemoryMessage);
                
                } else {
                    customMemoryMessage = $gameVariables.value(customMemoryMessageVarId);

                    if (!Array.isArray(customMemoryMessage)) {
                        customMemoryMessage = [];
                        customMemoryMessage.push({ role: 'additional context', content: processControlCharacters(currentAdditionalContext) });
                        // Add command side system role
                        if (currentcontext) {
                            customMemoryMessage.push({ role: 'context', content: (processControlCharacters(currentcontext) || "") });
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

                let prompt = "";

                if (currentAdditionalContext.length === 0) {
                    prompt = `### System:\n${currentcontext}\n\n### ${currentUserName}:\n### Input:\n${testoConNuovaLinea}\n\n### ${currentCharacterName}:\n`;
                } else {
                    prompt = `### System:\n${currentcontext + " " + currentAdditionalContext}\n\n### ${currentUserName}:\n### Input:\n${testoConNuovaLinea}\n\n### ${currentCharacterName}:\n`;
                }
                
                const url = textGenerationUrl;
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        prompt,
                        batch_size: currentbatch_size,
                        temperature: currenttemperature,
                        top_k: currenttop_k,
                        top_p: currenttop_p,
                        n_keep: currentn_keep,
                        n_predict: currentn_predict,
                        stop: [`\n`],
                        exclude: [currentCharacterName],
                        threads: currentthreads,
                        interactive: true,
                    })
                });
                const responseData = await response.json();
                // Save raw ouput
                const output = responseData.results[0].text;

                // Find characters that don't end with "." or "!" or "?" or "\n", then remove unwanted words
                const matches = output.match(/(\*|\:)?\s?([^\.\?\!]*[\.\?\!]{1})\s?/g);
                const cleanedText = matches.join('');
                const cleanedText1 = cleanedText.replace(/### Output:\n/, "");
                const cleanedText2 = cleanedText1.replace(new RegExp(currentUserName + '.*'), "").replace(/[\n\r]+$/, "");
                const BetterCleanedText = cleanedText2.replace(new RegExp("\n" + currentCharacterName + '.*'), "");
                console.log(BetterCleanedText);



                const { promisify } = require('util');
                const { generate } = require('mygenerationlib');
                const runBlocking = promisify(generate);
                
                async function generateText(genParams, basicApiFlag, streamFlag) {
                    /*const params = {
                        prompt: prompt,
                        max_length: genParams.max || 50,
                        temperature: genParams.temperature || 0.8,
                        top_k: parseInt(genParams.top_k) || 120,
                        top_a: genParams.top_a || 0.0,
                        top_p: genParams.top_p || 0.85,
                        typical_p: genParams.typical || 1.0,
                        tfs: genParams.tfs || 1.0,
                        rep_pen: genParams.rep_pen || 1.1,
                        rep_pen_range: genParams.rep_pen_range || 128,
                        mirostat: genParams.mirostat || 0,
                        mirostat_tau: genParams.mirostat_tau || 5.0,
                        mirostat_eta: genParams.mirostat_eta || 0.1,
                        sampler_order: genParams.sampler_order || [6,0,1,3,4,2,5],
                        seed: genParams.sampler_seed || -1,
                        stop_sequence: genParams.stop_sequence || [],
                        stream_sse: streamFlag,
                    };*/
                    
                    const params = await fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            prompt,
                            max_length: 50,
                            batch_size: currentbatch_size,
                            temperature: currenttemperature,
                            top_k: currenttop_k,
                            top_p: currenttop_p,
                            n_keep: currentn_keep,
                            n_predict: currentn_predict,
                            stop: [`\n`],
                            stop_sequence: [`"${currentCharacterName}:`, `\n${currentCharacterName} "`],
                            exclude: [currentCharacterName],
                            threads: currentthreads,
                            interactive: true,
                        })
                    });
                    responseData = await params.json();
                    // Save raw ouput
                    output = responseData.results[0].text;

                    let recvTxt = '';
                    if (streamFlag) {
                        try {
                            recvTxt = await runBlocking(params);
                        } catch (err) {
                            console.error(`GenerateText: Error while generating: ${err}`);
                        } 
                    } else {
                        recvTxt = runBlocking(params);
                    }
                    
                    if (args.debugmode !== -1) {
                        console.log(`Output: ${recvTxt}`);
                    }
                    
                    const res = basicApiFlag ? { data: { seqs: [recvTxt] } } : { results: [{ text: recvTxt }] };
                    
                    return res;
                }


                // ----------------------------------------------------
                // Add BetterCleanedText to character memory
                // Assign answer to variable ID
                let targetAnswerVarId = customAnswerMessageVarId !== null ? customAnswerMessageVarId : currentanswerMessageVarId;
                // Add the new answer to the character role
                customMemoryMessage.push({ role: 'character', content: BetterCleanedText });
                $gameVariables.setValue(targetAnswerVarId, BetterCleanedText);

                console.log("customMemoryMessage:\n", customMemoryMessage)
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
                    args.faceindex="\"\\\\fc[" + args.faceImage + ", " + args.faceIndex + "]\""
                    $gameMessage.add(JSON.parse(args.faceindex) + line)
                }

                generating=false
            })();
        } else {
            $gameMessage.add("Thinking...");
        }
    });



    //-----------------------------------------------------------------------------
    //                              Run Windows Server
    //-----------------------------------------------------------------------------

    PluginManager.registerCommand(pluginName, "RunWindowsServer", (args) => {
        const { exec } = require('child_process');
        const path = require('path');
        let target_folder = "chatbot"; //folder with chatbot files
        let root_path = path.join(process.cwd(), target_folder);

        let model_path = `${root_path}/orca-mini-3b.ggmlv3.q5_0.bin`;
        let [clblast1, clblast2] = args.useclblast.split(" ").map(num => +num);

        exec(`start cmd.exe /K call "${root_path}/koboldcpp.exe" "${model_path}" 8080 --threads "${args.threads}" --useclblast "${clblast1}" "${clblast2}" --gpulayers "${args.gpulayers}"`, {shell: true});
        
    });



    //-----------------------------------------------------------------------------
    //                              Windows Server Message Options
    //-----------------------------------------------------------------------------

    PluginManager.registerCommand(pluginName, 'WindowsServerMessageOptions', function () {
        const { exec } = require('child_process');
        const path = require('path');
        let target_folder = "chatbot"; //folder with chatbot files
        let root_path = path.join(process.cwd(), target_folder);

        let model_name = prompt("model name (default one is: orca-mini-3b.ggmlv3.q5_0.bin)");
        let model_path = `${root_path}/${model_name}`;

        let threadsOption = ["5", "6", "7", "8"];
        let threads = prompt("Threads (CPU) to use (choose between 0-3):\n\n0) " + threadsOption[0] + "\n1) " + threadsOption[1] + "\n2) " + threadsOption[2] + "\n3) " + threadsOption[3]);
        
        let gpuLayersOption = ["12", "15", "20", "24"];
        let gpuLayers = prompt("Gpu layers (GPU) to use (choose between 0-3):\n\n0) " + gpuLayersOption[0] + "\n1) " + gpuLayersOption[1] + "\n2) " + gpuLayersOption[2] + "\n3) " + gpuLayersOption[3]);
        
        let clblast = prompt("Clblast devices to use.\n(If you don't know what numbers to use, enter \"1 0\" (without quotes) to run the console, then look in it for your gpu number\n(example:\n\"Platform:1 Device:0 - Amd-xxx\" --> \"1 0\"\n\"Platform:0 Device:2 - Rtx-xxx\" --> \"0 2\"),\nthen close the console and restart it with the right numbers)");
        let [clblast1, clblast2] = clblast.split(" ").map(num => +num);

        exec(`start cmd.exe /K call "${root_path}/koboldcpp.exe" "${model_path}" 8080 --threads "${threadsOption[threads]}" --useclblast "${clblast1}" "${clblast2}" --gpulayers "${gpuLayersOption[gpuLayers]}"`, {shell: true});
    });



    //-----------------------------------------------------------------------------
    //                              Mac etc. Server Message Options
    //-----------------------------------------------------------------------------

    PluginManager.registerCommand(pluginName, 'MacEtcServerMessageOptions', function () {
        const { exec } = require('child_process');
        const path = require('path');
        const fs = require('fs');

        let target_folder = "chatbot"; //folder with chatbot files
        let root_path = path.join(process.cwd(), target_folder);

        let model_name = prompt("model name (default one is: orca-mini-3b.ggmlv3.q5_0.bin)");
        let model_path = `${root_path}/${model_name}`;

        let threadsOption = ["4", "5", "6", "7", "8"];
        let threads = prompt("Threads (CPU) to use (choose between 0-4):\n\n0) " + threadsOption[0] + "\n1) " + threadsOption[1] + "\n2) " + threadsOption[2] + "\n3) " + threadsOption[3] + "\n4) " + threadsOption[4]);
        
        let gpuLayersOption = ["12", "15", "20", "24"];
        let gpuLayers = prompt("Gpu layers (GPU) to use (choose between 0-3):\n\n0) " + gpuLayersOption[0] + "\n1) " + gpuLayersOption[1] + "\n2) " + gpuLayersOption[2] + "\n3) " + gpuLayersOption[3]);

        // Create config file to share variables between javascript and python
        const config = {
            model_path: model_path,
            threadsOption: {
                threads: parseInt(threadsOption[threads])
            },
            gpuLayersOption: {
                gpuLayers: parseInt(gpuLayersOption[gpuLayers])
            },
        };

        // Scrivere la configurazione in un file JSON
        fs.writeFileSync(`${root_path}/config.json`, JSON.stringify(config));

                                                //start_macos.sh
        exec(`start cmd.exe /K call "${root_path}/test_macos.bat"`, {shell: true});
    });



    //-----------------------------------------------------------------------------
    //                              Test
    //-----------------------------------------------------------------------------

    PluginManager.registerCommand(pluginName, "Test", async (args) => {
        var interpreter = $gameMap._interpreter;
        var commandName = 'Test2';
        var args = {};
        PluginManager.callCommand(interpreter, pluginName, commandName, args);
    });

    PluginManager.registerCommand(pluginName, "Test2", async (args) => {
        console.log("This is the test command")
    });


    //-----------------------------------------------------------------------------
    //                              Gab Message
    //-----------------------------------------------------------------------------

    PluginManager.registerCommand(pluginName, "gabMessage", async (args) => {

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

            //Update values
            currentRemoveTimer = textOptions.RemoveTimer;
            currentTextSize = textOptions.TextSize;
            currentTextColor = textOptions.TextColor;
            currentItalicText = textOptions.ItalicText;
            currentBoldText = textOptions.BoldText;
            currentTextHeight = textOptions.TextHeight;
            currentTextX = textOptions.TextX;
            currentTextY = textOptions.TextY;

        });

        // Retrieve command face arguments from structure
        const allFaceOptions = JSON.parse(args.faceOptions);

        allFaceOptions.forEach(faceOptionsObj => {
            const faceOptions = JSON.parse(faceOptionsObj);

            faceOptions.faceIndex = Number(Gius.Utils.convertEscapeVariablesOnly(faceOptions.faceIndex));
            faceOptions.faceImage = Gius.Utils.processEscapeVarOrFormula(faceOptions.faceImage);
            faceOptions.choicePicId = Number(Gius.Utils.convertEscapeVariablesOnly(faceOptions.choicePicId));
            faceOptions.FaceX = Number(Gius.Utils.convertEscapeVariablesOnly(faceOptions.FaceX));
            faceOptions.FaceY = Number(Gius.Utils.convertEscapeVariablesOnly(faceOptions.FaceY));
            faceOptions.FaceScaleX = Number(Gius.Utils.convertEscapeVariablesOnly(faceOptions.FaceScaleX));
            faceOptions.FaceScaleY = Number(Gius.Utils.convertEscapeVariablesOnly(faceOptions.FaceScaleY));
            faceOptions.opacity = Number(Gius.Utils.convertEscapeVariablesOnly(faceOptions.opacity));
            faceOptions.blendMode = Gius.Utils.processEscapeVarOrFormula(faceOptions.blendMode);

            //Update values
            currentFaceIndex = faceOptions.faceIndex;
            currentfaceImage = faceOptions.faceImage;
            currentchoicePicId = faceOptions.choicePicId;
            currentFaceX = faceOptions.FaceX;
            currentFaceY = faceOptions.FaceY;
            currentFaceScaleX = faceOptions.FaceScaleX;
            currentFaceScaleY = faceOptions.FaceScaleY;
            currentopacity = faceOptions.opacity;
            currentblendMode = faceOptions.blendMode;

        });
        
        //============================================================================
        //GAB Message

        async function showMessage() {

            // Create messageField and add it to current scene, if it's not present
            let messageField = null;
            messageField = SceneManager._scene.children.find(child => child === messageField);
            if (!messageField) {
                messageField = new Sprite(0, 0);
                SceneManager._scene.addChild(messageField);
            }
  
            // If there aren't messages, end function
            if (showMessageRunning || messageQueue.length === 0) {
                return;
            }
            showMessageRunning = true;

            // Remove first message and options from the list 
            //const currentMessage = messageQueue.shift(currentTextMessage);
            const currentMessage = messageQueue.shift(args.TextMessage);
            const currentUseFace = messageQueue.shift(args.useFace);

            console.log("currentBoldText + currentItalicText:\n", currentBoldText, " + ", currentItalicText)
            //Salva solo il primo, le opzioni dal secondo in poi nada...

            // Text message
            const TestText = new Sprite(new Bitmap(200, currentTextHeight));
            TestText.bitmap.fontSize = currentTextSize;
            TestText.bitmap.textColor = currentTextColor;
            TestText.bitmap.fontItalic = currentItalicText;
            TestText.bitmap.fontBold = currentBoldText;
            TestText.bitmap.drawText(currentMessage, 0, 0, 200, currentTextHeight);
            TestText.x = currentTextX;
            TestText.y = currentTextY;

            if (currentUseFace === "true") {
                TestText.x += 95;
                TestText.y += 25;
            }

            // Face message
            if (currentUseFace === "true") {
                
                // Caricare l'immagine
                const originalTexture = PIXI.Texture.from("img/faces/" + currentfaceImage + ".png");

                if (currentFaceIndex === 2) {
                    rectX = 144;
                    
                } else if (currentFaceIndex === 3) {
                    rectX = 288;
                } else if (currentFaceIndex === 4) {
                    rectX = 432;
                } else if (currentFaceIndex === 5) {
                    rectY = 144;
                } else if (currentFaceIndex === 6) {
                    rectX = 144;
                    rectY = 144;
                } else if (currentFaceIndex === 7) {
                    rectX = 288;
                    rectY = 144;
                } else if (currentFaceIndex === 8) {
                    rectX = 432;
                    rectY = 144;
                }

                const texture = new PIXI.Texture(originalTexture.baseTexture, new PIXI.Rectangle(rectX, rectY, 144, 144));

                // Create Sprite
                currentImage = new PIXI.Sprite(texture);                

                // Sprite options
                currentImage.x = currentFaceX
                currentImage.y = currentFaceY
                currentImage.scale.x = currentFaceScaleX
                currentImage.scale.y =currentFaceScaleY
                currentImage.alpha = currentopacity
                currentImage.blendMode = PIXI.BLEND_MODES[currentblendMode]

                // Add sprite to scene
                messageField.addChild(currentImage);

            }
            
            // Show text
            messageField.addChild(TestText);

            // Fade effect
            let currentAlpha = 1;
            const animationDuration = currentRemoveTimer;
            const frameRate = 60;
            const frameInterval = 1000 / frameRate;
            let frames = animationDuration / frameInterval;
            let frameCount = 0;

            const fadeOutPromise = new Promise(resolve => {
                const fadeOutInterval = setInterval(() => {
                  frameCount++;
                  currentAlpha -= 1 / frames;
                  TestText.alpha = currentAlpha;
                  if (currentUseFace === "true") {
                      currentImage.alpha = currentAlpha;
                    }
                  if (frameCount === 150) {
                    clearInterval(fadeOutInterval);
                    $gameScreen.erasePicture(currentchoicePicId);
                    resolve();
                  }
                }, frameInterval);
            });
              
            // Chiamata alla funzione che aspetta la fine della dissolvenza.
            await fadeOutPromise;

            showMessageRunning = false;

            // Check if there are other messages
            await showMessage();
        }
        
        //messageQueue.push(currentTextMessage, args.useFace);
        messageQueue.push(args.TextMessage, args.useFace);
        await showMessage();

    });



    //-----------------------------------------------------------------------------
    //                              AiGabMessage
    //-----------------------------------------------------------------------------

    PluginManager.registerCommand(pluginName, "AiGabMessage", async (args) => {

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
            AiNpcOptions.context = Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.context);
            AiNpcOptions.AdditionalContext = Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.AdditionalContext);

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
            currenttemperature = AiNpcOptions.temperature;
            currenttop_p = AiNpcOptions.top_p;
            currentUserName = AiNpcOptions.UserName;
            currentCharacterName = AiNpcOptions.CharacterName;
            currentcontext = AiNpcOptions.context;
            currentAdditionalContext = AiNpcOptions.AdditionalContext;

        });

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
            currentRemoveTimer = textOptions.RemoveTimer;
            currentTextSize = textOptions.TextSize;
            currentTextColor = textOptions.TextColor;
            currentItalicText = textOptions.ItalicText;
            currentBoldText = textOptions.BoldText;
            currentTextHeight = textOptions.TextHeight;
            currentTextX = textOptions.TextX;
            currentTextY = textOptions.TextY;
            currentMaxCharactersPerLine = textOptions.maxCharactersPerLine;
            currentMessageFieldWidth = textOptions.messageFieldWidth;
            currentMessageFieldHeight = textOptions.messageFieldHeight;
            currentBackgroundWindowX = textOptions.backgroundWindowX;
            currentBackgroundWindowY = textOptions.backgroundWindowY;
            currentBackgroundWindowScaleX = textOptions.backgroundWindowScaleX;
            currentBackgroundWindowScaleY = textOptions.backgroundWindowScaleY;
            currentBackgroundWindowOpacity = textOptions.backgroundWindowOpacity;
            currentBackgroundRectX = textOptions.backgroundRectX;
            currentBackgroundRectY = textOptions.backgroundRectY;

        });

        // Retrieve command face arguments from structure
        const allFaceOptions = JSON.parse(args.faceOptions); // Error when in battle

        allFaceOptions.forEach(faceOptionsObj => {
            const faceOptions = JSON.parse(faceOptionsObj);

            faceOptions.faceIndex = Number(Gius.Utils.convertEscapeVariablesOnly(faceOptions.faceIndex));
            faceOptions.faceImage = Gius.Utils.processEscapeVarOrFormula(faceOptions.faceImage);
            faceOptions.choicePicId = Number(Gius.Utils.convertEscapeVariablesOnly(faceOptions.choicePicId));
            faceOptions.FaceX = Number(Gius.Utils.convertEscapeVariablesOnly(faceOptions.FaceX));
            faceOptions.FaceY = Number(Gius.Utils.convertEscapeVariablesOnly(faceOptions.FaceY));
            faceOptions.FaceScaleX = Number(Gius.Utils.convertEscapeVariablesOnly(faceOptions.FaceScaleX));
            faceOptions.FaceScaleY = Number(Gius.Utils.convertEscapeVariablesOnly(faceOptions.FaceScaleY));
            faceOptions.opacity = Number(Gius.Utils.convertEscapeVariablesOnly(faceOptions.opacity));
            faceOptions.blendMode = Gius.Utils.processEscapeVarOrFormula(faceOptions.blendMode);

            //Update values
            currentFaceIndex = faceOptions.faceIndex;
            currentfaceImage = faceOptions.faceImage;
            currentchoicePicId = faceOptions.choicePicId;
            currentFaceX = faceOptions.FaceX;
            currentFaceY = faceOptions.FaceY;
            currentFaceScaleX = faceOptions.FaceScaleX;
            currentFaceScaleY = faceOptions.FaceScaleY;
            currentopacity = faceOptions.opacity;
            currentblendMode = faceOptions.blendMode;

        });


        if (!generating) {
            (async () => {
                generating=true
    
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
            customMemoryMessage.push({ role: 'additional context', content: processControlCharacters(currentAdditionalContext) });
            // Add command side system role
            if (currentcontext) {
                customMemoryMessage.push({ role: 'context', content: (processControlCharacters(currentcontext) || "") });
            }
            // Push userMessage
            customMemoryMessage.push({ role: 'user', content: userMessage });
            $gameVariables.setValue(memoryMessageVarId, customMemoryMessage);
                
        } else {
            customMemoryMessage = $gameVariables.value(customMemoryMessageVarId);

            if (!Array.isArray(customMemoryMessage)) {
                customMemoryMessage = [];
                customMemoryMessage.push({ role: 'additional context', content: processControlCharacters(currentAdditionalContext) });
                // Add command side system role
                if (currentcontext) {
                    customMemoryMessage.push({ role: 'context', content: (processControlCharacters(currentcontext) || "") });
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

        let prompt = "";

        if (currentAdditionalContext.length === 0) {
            prompt = `### System:\n${currentcontext}\n\n### ${currentUserName}:\n### Input:\n${testoConNuovaLinea}\n\n### ${currentCharacterName}:\n`;
        } else {
            prompt = `### System:\n${currentcontext + " " + currentAdditionalContext}\n\n### ${currentUserName}:\n### Input:\n${testoConNuovaLinea}\n\n### ${currentCharacterName}:\n`;
        }
        
        const url = textGenerationUrl;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt,
                batch_size: currentbatch_size,
                temperature: currenttemperature,
                top_k: currenttop_k,
                top_p: currenttop_p,
                n_keep: currentn_keep,
                n_predict: currentn_predict,
                stop: [`\n`],
                exclude: [currentCharacterName],
                threads: currentthreads,
                interactive: true,
            })
        });
        const responseData = await response.json();
        // Save raw ouput
        const output = responseData.results[0].text; //Error when +2 texts (generation link unavailable)

        // Find characters that don't end with "." or "!" or "?" or "\n", then remove unwanted things words
        const matches = output.match(/(\*|\:)?\s?([^\.\?\!]*[\.\?\!]{1})\s?/g);
        const cleanedText = matches.join('');
        const cleanedText1 = cleanedText.replace(/### Output:\n/, "");
        const cleanedText2 = cleanedText1.replace(new RegExp("### " + currentUserName + '.*'), "").replace(/[\n\r]+$/, "");
        const cleanedText3 = cleanedText2.replace(new RegExp(currentUserName + '.*'), "").replace(/[\n\r]+$/, "");
        const BetterCleanedText = cleanedText3.replace(new RegExp("\n" + currentCharacterName + '.*'), "");
        console.log(BetterCleanedText);

        // ----------------------------------------------------
        // Add BetterCleanedText to character memory
        // Assign answer to variable ID
        let targetAnswerVarId = customAnswerMessageVarId !== null ? customAnswerMessageVarId : currentanswerMessageVarId;
        // Add the new answer to the character role
        customMemoryMessage.push({ role: 'character', content: BetterCleanedText });
        $gameVariables.setValue(targetAnswerVarId, BetterCleanedText);

        console.log("customMemoryMessage:\n", customMemoryMessage)
        // ----------------------------------------------------

        // Divide BetterCleanedText in different lines without cutting words
        function splitLines(BetterCleanedText) {
            const words = BetterCleanedText.split(' ');
            let lines = [];
            let currentLine = '';
            
            for (let i = 0; i < words.length; i++) {
                const word = words[i];
                if (currentLine.length + word.length <= currentMaxCharactersPerLine) {
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
        //console.log(lines)
        let linesJoined = lines.join("\n");
        console.log(linesJoined);
        messageQueue.push(linesJoined, args.useFace);

        // Output each line separately
        /*for (let i = 0; i < lines.length; i++) {
            line = lines[i];
            console.log(line)

            messageQueue.push(line, args.useFace);

            //let linesJoined = [lines[i]].join("\n");
            //messageQueue.push(linesJoined, args.useFace);
        }*/
        
        //============================================================================
        // AI GAB Message
        //============================================================================

        async function showMessage() {

            // Create messageField and add it to current scene, if it's not present
            let messageField = null;
            messageField = SceneManager._scene.children.find(child => child === messageField);

            // Assign space for letters here
            if (!messageField) {
                messageField = new Sprite(0, 0, currentMessageFieldWidth, currentMessageFieldHeight);
                SceneManager._scene.addChild(messageField);
            }
  
            // If there aren't messages, end function
            if (showMessageRunning || messageQueue.length === 0) {
                return;
            }
            showMessageRunning = true;

            // Remove first message and options from the list 
            const multiLineText = messageQueue.shift(linesJoined);
            const currentUseFace = messageQueue.shift(args.useFace);
            
            // ----------------------------------------------------------------
            // Black Background Window
            // Load image file                                       //currentfaceImage
            const originalTexture = PIXI.Texture.from("img/system/" + "Window" + ".png");
                                                                                                           //rectX,           rectY
            const backgroundTexture = new PIXI.Texture(originalTexture.baseTexture, new PIXI.Rectangle(0, 0, currentBackgroundRectX, currentBackgroundRectY));

            // Create Sprite
            backgroundWindow = new PIXI.Sprite(backgroundTexture);

            // Sprite options
            backgroundWindow.x = currentBackgroundWindowX;
            backgroundWindow.y = currentBackgroundWindowY;
            backgroundWindow.scale.x = currentBackgroundWindowScaleX;
            backgroundWindow.scale.y = currentBackgroundWindowScaleY;
            backgroundWindow.alpha = currentBackgroundWindowOpacity;

            // Add sprite to scene
            messageField.addChild(backgroundWindow);
            // ----------------------------------------------------------------

            if (currentItalicText === true) {
                currentItalicText = "italic";
            } else {
                currentItalicText = "normal";
            }

            if (currentBoldText === true) {
                currentBoldText = "bold";
            } else {
                currentBoldText = "normal";
            }

            if (currentUseFace === "true") {
                currentTextX += 100;
            }

            const style = new PIXI.TextStyle({
                fontFamily: 'Arial',
                fontSize: currentTextSize, //24
                fill: currentTextColor, //'#ffffff'
                fontStyle: currentItalicText,
                fontWeight: currentBoldText,
                wordWrap: true,
                wordWrapWidth: 200
            });
            
            const currentMessage = new PIXI.Text(multiLineText, style);
                                      //100 0
            currentMessage.position.set(currentTextX, currentTextY);
            
            // Show text
            messageField.addChild(currentMessage);
            // ----------------------------------------------------------------

            // Face message
            if (currentUseFace === "true") {
                
                // Load image
                const originalTexture = PIXI.Texture.from("img/faces/" + currentfaceImage + ".png");

                if (currentFaceIndex === 2) {
                    rectX = 144;
                    
                } else if (currentFaceIndex === 3) {
                    rectX = 288;
                } else if (currentFaceIndex === 4) {
                    rectX = 432;
                } else if (currentFaceIndex === 5) {
                    rectY = 144;
                } else if (currentFaceIndex === 6) {
                    rectX = 144;
                    rectY = 144;
                } else if (currentFaceIndex === 7) {
                    rectX = 288;
                    rectY = 144;
                } else if (currentFaceIndex === 8) {
                    rectX = 432;
                    rectY = 144;
                }

                const texture = new PIXI.Texture(originalTexture.baseTexture, new PIXI.Rectangle(rectX, rectY, 144, 144));

                // Create Sprite
                currentImage = new PIXI.Sprite(texture);                

                // Sprite options
                currentImage.x = currentFaceX
                currentImage.y = currentFaceY
                currentImage.scale.x = currentFaceScaleX
                currentImage.scale.y =currentFaceScaleY
                currentImage.alpha = currentopacity
                currentImage.blendMode = PIXI.BLEND_MODES[currentblendMode]

                // Add sprite to scene
                messageField.addChild(currentImage);

            }
            
            // Fade effect
            let currentAlpha = 1;
            const animationDuration = currentRemoveTimer;
            const frameRate = 60;
            const frameInterval = 1000 / frameRate;
            let frames = animationDuration / frameInterval;
            let frameCount = Math.round(frames);

            const fadeOutPromise = new Promise(resolve => {
                const fadeOutInterval = setInterval(() => {
                    frameCount++;
                    currentAlpha -= 1 / frames;
                    //TestText.alpha = currentAlpha;
                    backgroundWindow.alpha = currentAlpha;
                    currentMessage.alpha = currentAlpha;

                    if (currentUseFace === "true") {
                        currentImage.alpha = currentAlpha;
                    }

                    if (frameCount === frames) {
                        clearInterval(fadeOutInterval);
                        $gameScreen.erasePicture(currentchoicePicId);
                        messageField.removeChild(backgroundWindow);
                        messageField.removeChild(currentMessage);
                        resolve();
                    }
                }, frameInterval);
            });


            // Chiamata alla funzione che aspetta la fine della dissolvenza.
            await fadeOutPromise;

            showMessageRunning = false;

            // Check if there are other messages
            await showMessage();
        }
        
        //messageQueue.push(currentTextMessage, args.useFace);
        await showMessage();


        generating=false
            })()
        } else {
            $gameMessage.add("Thinking...");
            console.log("currentTextMessage:\n", currentTextMessage)
            //await showMessage();

            // Call plugin again
            var interpreter = $gameMap._interpreter;
            var commandName = 'AiGabMessage';
            var args = {};
            //PluginManager.callCommand(interpreter, pluginName, commandName, args);
        }
    });



    //-----------------------------------------------------------------------------
    //                              StartDialogueOrca
    //-----------------------------------------------------------------------------

    PluginManager.registerCommand(pluginName, "StartDialogueOrca", async (args) => {
        
        generating = true // Stops text generation from starting
        let cancel = false
        currentTextMessage = prompt("Write your message or question:");

        if (currentTextMessage && currentTextMessage.trim() !== '') {
            generating = false;

            /*const varId = Number(args.varId);
            const maxLength = args.maxLength;
            rm(varId, maxLength);*/

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
            AiNpcOptions.temperature = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.temperature));
            AiNpcOptions.top_p = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.top_p));
            AiNpcOptions.top_k = Number(Gius.Utils.convertEscapeVariablesOnly(AiNpcOptions.top_k));
            AiNpcOptions.UserName = Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.UserName);
            AiNpcOptions.CharacterName = Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.CharacterName);
            AiNpcOptions.context = Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.context);
            AiNpcOptions.AdditionalContext = Gius.Utils.processEscapeVarOrFormula(AiNpcOptions.AdditionalContext);

            //Update values
            currentCustomQuestionMessageVarId = AiNpcOptions.CustomQuestionMessageVarId;
            currentmemory_talk = AiNpcOptions.memory_talk;
            currentCustomAnswerMessageVarId = AiNpcOptions.CustomAnswerMessageVarId;
            currentCustomMemoryMessageVarId = AiNpcOptions.CustomMemoryMessageVarId;
            currentbatch_size = AiNpcOptions.batch_size;
            currentn_keep = AiNpcOptions.n_keep;
            currentn_predict = AiNpcOptions.n_predict;
            currentthreads = AiNpcOptions.threads;
            currenttemperature = AiNpcOptions.temperature;
            currenttop_k = AiNpcOptions.top_k;
            currenttop_p = AiNpcOptions.top_p;   
            currentUserName = AiNpcOptions.UserName;
            currentCharacterName = AiNpcOptions.CharacterName;
            currentcontext = AiNpcOptions.context;
            currentAdditionalContext = AiNpcOptions.AdditionalContext;

        });

        if (!generating) {
            (async () => {
                generating=true

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
                    customMemoryMessage.push({ role: 'additional context', content: processControlCharacters(currentAdditionalContext) });
                    // Add command side system role
                    if (currentcontext) {
                        customMemoryMessage.push({ role: 'context', content: (processControlCharacters(currentcontext) || "") });
                    }
                    // Push userMessage
                    customMemoryMessage.push({ role: 'user', content: userMessage });
                    $gameVariables.setValue(memoryMessageVarId, customMemoryMessage);
                
                } else {
                    customMemoryMessage = $gameVariables.value(customMemoryMessageVarId);

                    if (!Array.isArray(customMemoryMessage)) {
                        customMemoryMessage = [];
                        customMemoryMessage.push({ role: 'additional context', content: processControlCharacters(currentAdditionalContext) });
                        // Add command side system role
                        if (currentcontext) {
                            customMemoryMessage.push({ role: 'context', content: (processControlCharacters(currentcontext) || "") });
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

                let prompt = "";

                if (currentAdditionalContext.length === 0) {
                    prompt = `### System:\n${currentcontext}\n\n### ${currentUserName}:\n### Input:\n${testoConNuovaLinea}\n\n### ${currentCharacterName}:\n`;
                } else {
                    prompt = `### System:\n${currentcontext + " " + currentAdditionalContext}\n\n### ${currentUserName}:\n### Input:\n${testoConNuovaLinea}\n\n### ${currentCharacterName}:\n`;
                }
                
                const url = textGenerationUrl;
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        prompt,
                        batch_size: currentbatch_size,
                        temperature: currenttemperature,
                        top_k: currenttop_k,
                        top_p: currenttop_p,
                        n_keep: currentn_keep,
                        n_predict: currentn_predict,
                        stop: [`\n`],
                        exclude: [currentCharacterName],
                        threads: currentthreads,
                        interactive: true,
                    })
                });
                const responseData = await response.json();
                // Save raw ouput
                const output = responseData.results[0].text;

                // Find characters that don't end with "." or "!" or "?" or "\n", then remove unwanted words
                const matches = output.match(/(\*|\:)?\s?([^\.\?\!]*[\.\?\!]{1})\s?/g);
                const cleanedText = matches.join('');
                const cleanedText1 = cleanedText.replace(/### Output:\n/, "");
                const cleanedText2 = cleanedText1.replace(new RegExp(currentUserName + '.*'), "").replace(/[\n\r]+$/, "");
                const BetterCleanedText = cleanedText2.replace(new RegExp("\n" + currentCharacterName + '.*'), "");
                console.log(BetterCleanedText);

                // ----------------------------------------------------
                // Add BetterCleanedText to character memory
                // Assign answer to variable ID
                let targetAnswerVarId = customAnswerMessageVarId !== null ? customAnswerMessageVarId : currentanswerMessageVarId;
                // Add the new answer to the character role
                customMemoryMessage.push({ role: 'character', content: BetterCleanedText });
                $gameVariables.setValue(targetAnswerVarId, BetterCleanedText);

                console.log("customMemoryMessage:\n", customMemoryMessage)
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
                    args.faceindex="\"\\\\fc[" + args.faceImage + ", " + args.faceIndex + "]\""
                    $gameMessage.add(JSON.parse(args.faceindex) + line)
                }

                generating=false
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
    Window_Base.prototype.processEscapeCharacter = function(code, textState) {
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
                this.redrawFace($gameActors.actor(param).faceName(), $gameActors.actor(param).faceIndex(),  textState);
                break;
            // Change Message Face (Party Member ID)
            case "PRTFC":
                param = this.obtainEscapeParam(textState) - 1;
                this.redrawFace($gameParty.members()[param].faceName(), $gameParty.members()[param].faceIndex(),  textState);
                break;
        }
    }

    Window_Base.prototype.obtainEscapeFullParam = function(textState) {
        const regExp = /\[(.*?)\]/;
        const arr = regExp.exec(textState.text.slice(textState.index));
        if (arr) {
            textState.index += arr[0].length;
            return arr[1];
        } else {
            return "";
        }
    };

    Window_Base.prototype.redrawFace = function(faceName, faceIndex, textState) {
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