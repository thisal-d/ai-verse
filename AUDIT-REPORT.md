# AI-Verse tool list audit — v4.0.0 (2026-11-25)

Scope: all 147 entries in `src/data/tools.json` (v3.0.0) were audited; the rewrite produced **163** entries (20 removed, 36 added; the five Reka cards became one).

## Method & honesty notes

- **Every URL** was fetched with redirects followed (status, final URL, `<title>`, meta description recorded). Sites that block bots (Cloudflare 403 etc.) were re-checked via a reader proxy and web search.
- **Product liveness** for renamed/acquired/pivoted tools was confirmed by web search against news and vendor posts (Tabnine, Windsurf, NotebookLM, Sora, Udio, Pi, Character.AI, Clipdrop, Reka Clip).
- **Not everything could be independently re-verified.** Entries marked ⚠ in KEPT could not be fetched by an automated client (403/bot-wall) and were kept on prior data + search evidence only. Pricing tiers of surviving entries were *not* re-verified plan-by-plan unless listed in CHANGED; new entries' pricing is based on what the official pages/search results showed (or the conservative `Paid` when no free tier could be demonstrated).
- Descriptions for changed entries were written only from text on the vendor's own site/meta tags or vendor announcements.
- **IDs were renumbered 1..163** as requested. Side effect: favourites / recently-viewed / usage counters saved in users' localStorage refer to the old ids and will point at different tools after this release.

## Leads from the brief — outcomes

| Lead | Finding |
|---|---|
| ChatGPT → chatgpt.com | Confirmed (chat.openai.com redirects). Updated. |
| v0.dev → v0.app | Confirmed (redirects). Renamed "v0", URL updated. |
| "Arena" should be LMArena (lmarena.ai) | **Not confirmed — the opposite.** lmarena.ai now redirects to arena.ai, which calls itself "Arena AI". The URL was already right; entry renamed "Arena (formerly LMArena)" with LMArena keywords. |
| Luma Labs AI vs Luma AI are the same company | **Not confirmed.** luma.ai says it is operated by Luma AI Ltd and "not affiliated with Luma Labs, Inc."; it is also geo-blocked. luma.ai removed; lumalabs.ai kept as "Luma". |
| Five Reka cards | reka.ai no longer lists chat/vision/research/speech products (app.reka.ai/* redirect to home) and Reka Clip is shut down. Consolidated into one "Reka" card. |
| Udio | Alive, but since 29 Oct 2025 (UMG settlement) downloads are disabled on all plans; free plan exists. Description now says streaming-only. |
| Stable Diffusion → stability.ai homepage | Now points to the product page stability.ai/stable-image. |
| Khanmigo URL | khanacademy.org/khan-labs redirects to khanmigo.ai — updated. |
| Suspect entries | See REMOVED; AutoClaw (official Z.ai agent), OpenClaw (open-source assistant), Turbolearn (10M+ learners), Studley AI (4M+ students) and Playabl (live game-creation product with a public gallery) were kept. |
| Stale keywords | GPT-3/4/4o, Bard, gemini 1.5/2.0, plugins, 1 million tokens, Claude 3/3.5, DeepSeek V2, SDXL, v6 purged; replaced with verified current terms (e.g. Nano Banana, Veo, Claude Code, GPT, Gemini Live). |

## Other findings beyond the brief

- **Windsurf → Devin Desktop** (renamed 2 Jun 2026; windsurf.com redirects). Entry renamed, Windsurf kept as keyword.
- **NotebookLM → Gemini Notebook** (renamed 16 Jul 2026, notebook.google).
- **Magnific = formerly Freepik** — so Freepik AI was *not* added as a separate tool.
- **Rytr** is now an "AI relationship manager & follow-up assistant", no longer a writing tool; **Copy.ai** is now a GTM platform; **Writesonic** is now an AI-search-visibility (GEO/AEO) platform. Descriptions/categories/keywords rewritten.
- **Tabnine** closed to new customers; **Sora** dead.
- ⚠ **Character.AI** filed for Chapter 11 in Oct 2026 and is operating under a court-supervised sale — kept (site is live) but at risk; re-check next audit.
- Clipdrop was sold by Stability AI to Jasper (site still live) — kept.
- Microsoft Copilot → copilot.com, Runway → runway.com, Notion → notion.com, Durable → durable.com, Relume → relume.ai, Stitch → stitch.google.com (all canonical redirects) — URLs updated.

### Candidates deliberately NOT added

| Candidate | Reason |
|---|---|
| PlayHT | play.ht no longer resolves (domain gone). |
| Freepik AI | Freepik is now Magnific (already listed). |
| Roo Code | roocode.com now redirects to "Roomote" (cloud coding agent) — product pivoted. |
| Meta AI | meta.ai only returned "not available in your country" from the audit location; could not verify. |
| Duolingo Max | duolingo.com/max redirects to the home page; no verifiable Max page. |
| Gemini CLI | geminicli.com says it was replaced by Antigravity CLI for unpaid/Google One users (Antigravity already listed). |
| Hedra, Warp | Sites have pivoted away from the product described; not verified as current. |

## REMOVED

| id | name | reason |
|---|---|---|
| 26 | Luma AI | luma.ai is operated by "Luma AI Ltd", which states it is NOT affiliated with Luma Labs (lumalabs.ai); it is geo-blocked ("not available in your region") and unverifiable. Not a duplicate of Luma Labs, so removed rather than merged. |
| 27 | Luna AI | lunaai.video returns Cloudflare 403 to every request; could not be verified as a working product. |
| 28 | Reka Vision | Consolidated into single "Reka" card — app.reka.ai/vision now redirects to reka.ai; product page no longer exists. |
| 29 | Reka Research | Consolidated into single "Reka" card — app.reka.ai/research now redirects to reka.ai. |
| 30 | Reka Speech | Consolidated into single "Reka" card — app.reka.ai/speech now redirects to reka.ai. |
| 31 | Reka Clip | Reka Clip has shut down (creator.reka.ai redirects to a "Service closed" page; closed 13 Nov). |
| 36 | Nova AI | Nova (chat.novaapp.ai) is a reseller wrapper over GPT/Claude/Gemini/Grok; not an original or notable product. |
| 62 | Tabnine | Tabnine was acquired by Tricentis (announced 30 Jul 2026); tabnine.com now redirects to tricentis.com and is closed to new customers. |
| 90 | ChatEdu | ChatEDU — small, undifferentiated study-guide generator that duplicates better-known entries (Studley AI, Turbolearn). |
| 91 | FrameNet AI | FrameNet AI — small motion-graphics wrapper site; no evidence of notability. |
| 96 | PDP AI | PDP AI — a campus-specific "Personal Development Plan" questionnaire hosted on a vercel.app subdomain (asks for student IT numbers); not a general AI tool. |
| 99 | Sora | Sora web/app shut down 26 Apr 2026 and the API on 24 Sep 2026 (OpenAI discontinuation notice). |
| 129 | Viral Sky | Viral Sky — small social-post generator/scheduler; not notable. |
| 132 | Sky Snail | Sky Snail — small YouTube-thumbnail wrapper over third-party image models; not notable. |
| 142 | AI Potha | AI Potha — hobby project for Sri Lankan school textbooks hosted on pages.dev; not a notable or general tool. |
| 145 | VoiceEnhancer | VoiceEnhancer — generic audio-cleanup utility site; not notable. |
| 148 | Rao Edits | Rao Edits — .top-domain wrapper around Google's "Nano Banana Pro"; unofficial. |
| 149 | Ashna AI | Ashna AI — small chatbot/no-code agent site; no evidence of notability. |
| 150 | TryVeo3 | TryVeo3 — unofficial reseller of Google Veo access; not the official product (Veo lives in Google Flow / Gemini). |
| 152 | Magic Eraser | Magic Eraser (magiceraser.org) — small object-remover site that now points users to a new brand ("LinoCut AI"); unofficial/unstable. |

## ADDED (36)

| new id | name | url |
|---|---|---|
| 128 | Claude Code | https://claude.com/product/claude-code |
| 129 | OpenAI Codex | https://openai.com/codex/ |
| 130 | Jules | https://jules.google/ |
| 131 | OpenRouter | https://openrouter.ai/ |
| 132 | Replicate | https://replicate.com/ |
| 133 | fal.ai | https://fal.ai/ |
| 134 | Black Forest Labs | https://bfl.ai/ |
| 135 | Google AI Studio | https://aistudio.google.com/ |
| 136 | Microsoft Designer | https://designer.microsoft.com/ |
| 137 | Grok Imagine | https://grok.com/imagine |
| 138 | Google Flow | https://flow.google.com/ |
| 139 | LTX Studio | https://ltx.io/studio |
| 140 | Vidu | https://www.vidu.com/ |
| 141 | Segmind | https://www.segmind.com/ |
| 142 | Civitai | https://civitai.com/ |
| 143 | Hume AI | https://www.hume.ai/ |
| 144 | Cartesia | https://cartesia.ai/ |
| 145 | tl;dv | https://tldv.io/ |
| 146 | Fathom | https://fathom.ai/ |
| 147 | Figma Make | https://www.figma.com/make/ |
| 148 | Zed | https://zed.dev/ |
| 149 | Cline | https://cline.bot/ |
| 150 | Aider | https://aider.chat/ |
| 151 | Dify | https://dify.ai/ |
| 152 | Gumloop | https://www.gumloop.com/ |
| 153 | Semantic Scholar | https://www.semanticscholar.org/ |
| 154 | Connected Papers | https://www.connectedpapers.com/ |
| 155 | Abacus.AI | https://abacus.ai/ |
| 156 | ERNIE | https://ernie.baidu.com/ |
| 157 | Tencent Hunyuan | https://hunyuan.tencent.com/ |
| 158 | Cohere | https://cohere.com/ |
| 159 | MagicSchool | https://www.magicschool.ai/ |
| 160 | Kiro | https://kiro.dev/ |
| 161 | Higgsfield | https://higgsfield.ai/ |
| 162 | Ollama | https://ollama.com/ |
| 163 | Perplexity Comet | https://www.perplexity.ai/comet |

## CHANGED

Ids are old → new. Keyword changes are summarised (purged stale terms, added terms, final count).

| id | field | old → new |
|---|---|---|
| 1→1 | url | https://chat.openai.com/ → https://chatgpt.com/ |
| 1→1 | description | AI chatbot for writing, coding, learning, and creative conversations. → AI assistant from OpenAI for writing, coding, research, image creation, and everyday questions. |
| 1→1 | keywords | 22 → 24; removed: GPT-4, GPT-4o, GPT-3, DALL-E, gpt4, gpt 4, plugins; added 9: GPT, custom GPTs, ChatGPT Pro, chatgpt.com, deep research, voice mode, Codex, OpenAI assistant … |
| 2→2 | description | Google AI for text, images, video, and code reasoning. → Google's AI assistant for chat, writing, coding, research, and image and video generation. |
| 2→2 | keywords | 18 → 22; removed: Bard, Google Bard, gemini 1.5, gemini 2.0, 1 million tokens; added 9: Google Gemini, Gemini app, Nano Banana, Veo, Deep Research, Gemini Live, Google AI Pro, Google assistant … |
| 3→3 | description | AI coding assistant for automation, development, and debugging. → Z.ai's chatbot and agent, powered by Zhipu's GLM models, for chat, coding, and automation. |
| 3→3 | keywords | 10 → 17; removed: —; added 7: Zhipu, GLM, Z.ai, z ai chat, chat.z.ai, Zhipu AI, chatzai |
| 4→4 | keywords | 18 → 23; removed: Claude 3, Claude 3.5; added 7: Claude Code, Opus, Sonnet, Haiku, claude.ai, Claude Pro, Claude |
| 5→5 | keywords | 13 → 14; removed: —; added 1: Gamma |
| 6→6 | keywords | 10 → 12; removed: —; added 2: Image.Z.ai, imagezai |
| 7→7 | keywords | 10 → 12; removed: —; added 2: Audio.Z.ai, audiozai |
| 8→8 | keywords | 16 → 18; removed: —; added 2: Canva AI, canvaai |
| 9→9 | keywords | 17 → 19; removed: v6; added 3: Midjourney AI, Discord image generator, Midjourney |
| 10→10 | url | https://runwayml.com/ → https://runway.com/ |
| 10→10 | keywords | 15 → 21; removed: —; added 6: runway.com, Runway ML, Gen-4, Runway Gen, Runway, Runway AI |
| 11→11 | keywords | 15 → 16; removed: —; added 1: Perplexity |
| 12→12 | keywords | 15 → 17; removed: —; added 2: ElevenLabs, ElevenLabs AI |
| 13→13 | keywords | 17 → 20; removed: —; added 3: GitHub Copilot, githubcopilot, GitHub Copilot AI |
| 14→14 | keywords | 15 → 16; removed: —; added 1: Suno |
| 15→15 | keywords | 15 → 17; removed: —; added 2: Leonardo.ai, leonardoai |
| 16→16 | url | https://copilot.microsoft.com/ → https://copilot.com/ |
| 16→16 | keywords | 14 → 19; removed: —; added 5: copilot.com, Bing Chat, Microsoft Copilot, microsoftcopilot, Microsoft Copilot AI |
| 17→17 | url | https://www.notion.so/product/ai → https://www.notion.com/product/ai |
| 17→17 | description | AI-powered writing and database tools integrated with Notion. → AI assistant and agents inside Notion for writing, searching, and managing your workspace. |
| 17→17 | keywords | 14 → 17; removed: —; added 3: Notion agents, notion.com, notionai |
| 18→18 | url | https://stability.ai/ → https://stability.ai/stable-image |
| 18→18 | description | Open-source text-to-image generator for customizable AI art. → Stability AI's image models, including the open-weight Stable Diffusion family, for text-to-image generation and editing. |
| 18→18 | pricing | Free, Open Source → Paid, Open Source |
| 18→18 | keywords | 18 → 12; removed: AI art, open source, SDXL, model training, Python, text-to-image, self-hosted, local AI, fine-tune, LoRA, DreamBooth, img2img …; added 8: open-weight image models, text to image, AI art generator, image editing, Stable Image, open source image generator, self-hosted image generation, image API |
| 19→19 | description | AI copywriting assistant for marketing, blogs, and SEO content. → AI marketing platform with agents that create on-brand content and campaigns. |
| 19→19 | categories | Text & Writing, Marketing → Marketing, Text & Writing |
| 19→19 | keywords | 14 → 18; removed: —; added 4: AI agents for marketing, marketing content, jasper.ai, Jasper |
| 20→20 | keywords | 17 → 20; removed: —; added 3: Hugging Face, huggingface, Hugging Face AI |
| 21→21 | keywords | 14 → 16; removed: —; added 2: Pika, Pika AI |
| 22→22 | keywords | 17 → 19; removed: —; added 2: Grammarly, Grammarly AI |
| 23→23 | name | Luma Labs AI → Luma |
| 23→23 | description | 3D generation and capture platform using NeRF technology. → Luma's creative AI platform, with agents and Dream Machine models for generating video, images, audio, and text. |
| 23→23 | categories | 3D & AR/VR, Video & Animation → Video & Animation, Image Generation |
| 23→23 | keywords | 13 → 12; removed: 3D capture, NeRF, VFX, Gaussian Splatting, scenes, video generation, text-to-video, luma dream machine, 3D reconstruction, photorealistic video, AI video; added 10: Luma, Luma Labs, Luma Agents, lumalabs.ai, AI video generator, text to video, image to video, Ray video model … |
| 24→24 | keywords | 15 → 17; removed: —; added 2: Replit AI, replitai |
| 25→25 | name | Reka Chat → Reka |
| 25→25 | url | https://app.reka.ai/chat → https://reka.ai/ |
| 25→25 | description | Advanced multimodal AI assistant for text, image, and video. → AI research lab building omni models that natively process and generate text, images, video, and audio, for the "physical AI" era. |
| 25→25 | categories | Text & Writing, Research & Analysis → Research & Analysis, Video & Animation |
| 25→25 | pricing | Freemium → Paid |
| 25→25 | keywords | 10 → 15; removed: multimodal chatbot, AI assistant, enterprise AI, visual reasoning, text chat, document analysis; added 11: Reka, Reka Vision, Reka Research, Reka Speech, Reka Edge, Reka Spark, multimodal AI, video understanding … |
| 32→26 | name | Ali Tongyi → Tongyi Qianwen |
| 32→26 | url | https://tongyi.aliyun.com/ → https://qianwen.aliyun.com/ |
| 32→26 | description | Alibaba’s versatile AI assistant for text generation, translation, and multimodal analysis. → Alibaba's AI assistant app, built on its Qwen models, for chat, writing, translation, and multimodal tasks. |
| 32→26 | keywords | 10 → 18; removed: —; added 8: Ali Tongyi, Tongyi, 千问, 通义千问, Alibaba AI, Qwen app, tongyiqianwen, Tongyi Qianwen AI |
| 33→27 | keywords | 10 → 12; removed: —; added 2: 豆包, Doubao AI |
| 34→28 | pricing | Free, Freemium, Open Source → Freemium, Open Source |
| 34→28 | keywords | 12 → 15; removed: DeepSeek V2; added 4: DeepSeek chat, DeepSeek AI, open weights, chat.deepseek.com |
| 35→29 | keywords | 10 → 13; removed: —; added 3: Tencent Yuanbao, tencentyuanbao, Tencent Yuanbao AI |
| 37→30 | pricing | Free, Freemium → Freemium |
| 37→30 | keywords | 13 → 15; removed: —; added 2: OCR.Z.ai, ocrzai |
| 38→31 | keywords | 13 → 14; removed: —; added 1: Qodo |
| 39→32 | keywords | 15 → 16; removed: —; added 1: Cursor |
| 40→33 | keywords | 13 → 14; removed: —; added 1: HeyGen |
| 41→34 | name | v0.dev → v0 |
| 41→34 | url | https://v0.dev/ → https://v0.app/ |
| 41→34 | description | Generative UI tool by Vercel creating React components from text prompts. → Vercel's AI app builder that generates full-stack web apps and React UI from text prompts. |
| 41→34 | keywords | 14 → 19; removed: —; added 5: v0.app, v0.dev, Vercel v0, Next.js app generator, v0 AI |
| 42→35 | keywords | 11 → 12; removed: —; added 1: Elicit |
| 43→36 | keywords | 12 → 13; removed: —; added 1: klingai |
| 44→37 | keywords | 11 → 12; removed: —; added 1: ChatPDF AI |
| 45→38 | keywords | 15 → 16; removed: —; added 1: Grok |
| 46→39 | name | Arena → Arena (formerly LMArena) |
| 46→39 | description | Open platform for benchmarking LLMs via blind comparisons. → Platform for comparing top AI models side by side, with a community-voted LLM leaderboard (formerly LMArena). |
| 46→39 | keywords | 14 → 19; removed: —; added 5: lmarena.ai, AI leaderboard, arena.ai, AI model rankings, Arena AI |
| 47→40 | name | NotebookLM → Gemini Notebook |
| 47→40 | url | https://notebooklm.google/ → https://notebook.google/ |
| 47→40 | description | AI research assistant, organize documents, generate summaries, and answer questions based on uploaded sources. → Google's AI research and note-taking tool (formerly NotebookLM) that answers questions grounded in your own sources, with Audio Overviews. |
| 47→40 | logo | ai-tools/logo/png/notebooklm.png → ai-tools/logo/png/gemini-notebook.png |
| 47→40 | keywords | 15 → 23; removed: —; added 8: NotebookLM, Gemini Notebook, notebook.google, Audio Overviews, podcast from documents, Google Labs, gemininotebook, Gemini Notebook AI |
| 48→41 | keywords | 14 → 15; removed: —; added 1: Poe |
| 49→42 | keywords | 11 → 12; removed: —; added 1: piai |
| 50→43 | description | AI platform for generating marketing copy, blog posts, and sales emails to automate content workflows. → AI-native go-to-market platform for prospecting, sales, and marketing workflows. |
| 50→43 | categories | Text & Writing, Marketing → Marketing, Automation & Workflows |
| 50→43 | keywords | 12 → 12; removed: Copywriting, Marketing, Blog posts, Workflows, AI copywriter, content automation, email marketing, sales copy, product descriptions; added 9: Copy.ai, copyai, go-to-market, sales automation, prospecting, marketing workflows, AI sales agents, lead research … |
| 51→44 | description | AI writing assistant that helps generate content for various use cases, known for affordability and ease of use. → AI assistant that remembers your clients and conversations across email, Slack, and calendar, and helps you write follow-ups in your own voice. |
| 51→44 | categories | Text & Writing, Marketing → Productivity, Text & Writing |
| 51→44 | keywords | 11 → 12; removed: Copywriting, Content generation, Affordable, Writing assistant, Templates, rytr AI, budget AI writer, short-form content, social captions, AI writing tool, blog ideas; added 12: Rytr, rytr.me, AI relationship manager, follow-up assistant, client follow-ups, relationship CRM, meeting prep, email follow-up … |
| 52→45 | keywords | 13 → 14; removed: —; added 1: Sudowrite AI |
| 53→46 | keywords | 12 → 13; removed: —; added 1: QuillBot AI |
| 54→47 | description | AI writer for creating SEO-optimized articles, blog posts, and landing pages with a focus on marketing content. → AI search visibility platform that helps brands get found and cited in AI-generated answers (GEO and AEO). |
| 54→47 | categories | Text & Writing, Marketing → Marketing, Text & Writing |
| 54→47 | keywords | 12 → 20; removed: —; added 8: GEO, AEO, generative engine optimization, answer engine optimization, AI search visibility, brand visibility in ChatGPT, Chatsonic, Writesonic |
| 55→48 | keywords | 13 → 15; removed: —; added 2: adobefirefly, Adobe Firefly AI |
| 56→49 | keywords | 12 → 13; removed: —; added 1: Ideogram |
| 57→50 | keywords | 12 → 13; removed: —; added 1: Synthesia |
| 58→51 | keywords | 12 → 14; removed: —; added 2: OpusClip, OpusClip AI |
| 59→52 | keywords | 12 → 13; removed: —; added 1: Descript |
| 60→53 | keywords | 12 → 13; removed: —; added 1: murfai |
| 61→54 | description | AI music generation tool allowing users to create complex, full-bodied songs with vocals and instrumentation. → AI music generator for creating songs from text prompts; streaming-only, as downloads are currently disabled. |
| 61→54 | keywords | 11 → 16; removed: —; added 5: Universal Music Group, licensed AI music, AI song generator, udio.com, Udio |
| 64→55 | keywords | 15 → 16; removed: —; added 1: Zapier |
| 65→56 | keywords | 13 → 15; removed: —; added 2: n8n, n8n AI |
| 66→57 | keywords | 11 → 13; removed: —; added 2: Intercom, Intercom AI |
| 68→58 | keywords | 11 → 12; removed: —; added 1: Consensus |
| 69→59 | keywords | 11 → 12; removed: —; added 1: SciSpace |
| 70→60 | keywords | 11 → 13; removed: —; added 2: Research Rabbit, researchrabbit |
| 71→61 | keywords | 11 → 12; removed: —; added 1: Scite |
| 72→62 | keywords | 11 → 12; removed: —; added 1: Julius |
| 73→63 | keywords | 11 → 12; removed: —; added 1: Glean |
| 74→64 | keywords | 11 → 13; removed: —; added 2: AdCreative.ai, adcreativeai |
| 76→65 | keywords | 11 → 12; removed: —; added 1: kreaai |
| 77→66 | keywords | 11 → 12; removed: —; added 1: recraftai |
| 78→67 | url | https://durable.co/ → https://durable.com/ |
| 78→67 | keywords | 11 → 14; removed: —; added 3: durable.com, AI website builder, Durable |
| 79→68 | keywords | 8 → 10; removed: —; added 2: Fireflies, Fireflies AI |
| 80→69 | keywords | 11 → 12; removed: —; added 1: Granola |
| 81→70 | keywords | 11 → 12; removed: —; added 1: Clay |
| 82→71 | keywords | 11 → 12; removed: —; added 1: Harvey |
| 83→72 | keywords | 11 → 15; removed: —; added 4: character.ai, AI roleplay, AI companions, characterai |
| 84→73 | keywords | 11 → 12; removed: —; added 1: Anyword |
| 85→74 | keywords | 11 → 12; removed: —; added 1: AIVA |
| 86→75 | keywords | 11 → 12; removed: —; added 1: kitsai |
| 87→76 | keywords | 11 → 13; removed: —; added 2: Topaz Video AI, topazvideoai |
| 88→77 | categories | Text & Writing, Coding & Dev, Research & Analysis, Image Generation, Video & Animation, Design → Text & Writing, Coding & Dev, Research & Analysis |
| 88→77 | keywords | 12 → 18; removed: —; added 6: Qwen Chat, Alibaba Qwen, chat.qwen.ai, open-weight models, Tongyi, Qwen AI |
| 89→78 | description | AI-powered platform offering automation, intelligent assistants, and productivity tools to help individuals workflows → Google's agent-first development platform for building software with AI coding agents. |
| 89→78 | categories | Productivity, Automation & Workflows → Coding & Dev, AI Agents |
| 89→78 | pricing | Freemium, Paid → Freemium |
| 89→78 | keywords | 10 → 12; removed: Artificial Intelligence, Automation, AI Assistant, Machine Learning, Productivity Tools, Google DeepMind, Workflow, antigravity AI, AI coding assistant, agentic AI; added 12: Antigravity, Google Antigravity, agentic IDE, AI coding agents, agent-first IDE, antigravity.google, Google coding agent, AI code editor … |
| 92→79 | categories | Coding & Dev, Productivity, Automation & Workflows → AI Agents, Productivity, Automation & Workflows |
| 92→79 | pricing | Freemium, Paid → Freemium |
| 92→79 | keywords | 10 → 11; removed: —; added 1: Manus |
| 93→80 | pricing | Freemium, Paid → Freemium |
| 93→80 | keywords | 10 → 12; removed: —; added 2: wisprflow, Wispr Flow AI |
| 94→81 | categories | Productivity, Coding & Dev, Automation & Workflows → AI Agents, Automation & Workflows, Productivity |
| 94→81 | pricing | Free, Paid, Open Source → Free, Open Source |
| 94→81 | keywords | 10 → 15; removed: —; added 5: Clawdbot, Moltbot, personal AI assistant, self-hosted AI assistant, OpenClaw |
| 95→82 | name | Turbo AI → Turbolearn |
| 95→82 | description | AI-powered study platform converting various contents into structured study materials & flashcards. → AI study platform that turns PDFs, videos, and recordings into interactive study materials such as flashcards and quizzes. |
| 95→82 | pricing | Freemium, Paid → Freemium |
| 95→82 | logo | ai-tools/logo/png/turbo-ai.png → ai-tools/logo/png/turbolearn.png |
| 95→82 | keywords | 10 → 16; removed: —; added 6: Turbolearn, turbo.ai, Turbo AI notetaker, lecture notes, study guide generator, Turbolearn AI |
| 97→83 | keywords | 10 → 11; removed: —; added 1: ZeroGPT AI |
| 98→84 | keywords | 10 → 12; removed: —; added 2: AndiSearch, AndiSearch AI |
| 100→85 | keywords | 12 → 14; removed: —; added 2: lechat, Le Chat AI |
| 101→86 | keywords | 12 → 15; removed: —; added 3: Bolt.new, boltnew, Bolt.new AI |
| 102→87 | keywords | 12 → 12; removed: —; added 1: Lovable |
| 103→88 | name | Windsurf → Devin Desktop |
| 103→88 | url | https://windsurf.com/ → https://devin.ai/desktop |
| 103→88 | description | AI-native code editor by Codeium with deep codebase awareness and agentic editing capabilities. → Cognition's AI code editor (formerly Windsurf) with an agent command center for running local and cloud coding agents. |
| 103→88 | categories | Coding & Dev → Coding & Dev, AI Agents |
| 103→88 | keywords | 12 → 21; removed: —; added 9: Windsurf, Windsurf editor, Windsurf IDE, Cognition, Devin Local, windsurf.com, Devin Desktop, devindesktop … |
| 104→89 | categories | Coding & Dev, Automation & Workflows → Coding & Dev, AI Agents, Automation & Workflows |
| 104→89 | keywords | 12 → 14; removed: —; added 2: autonomous software engineer, Devin |
| 105→90 | keywords | 12 → 13; removed: —; added 1: DeepL |
| 106→91 | keywords | 11 → 12; removed: —; added 1: Smartcat |
| 107→92 | keywords | 11 → 14; removed: —; added 3: Remove bg, removebg, Remove bg AI |
| 108→93 | keywords | 11 → 12; removed: —; added 1: PhotoRoom |
| 109→94 | keywords | 11 → 12; removed: —; added 1: Pixlr |
| 110→95 | name | Magnific AI → Magnific |
| 110→95 | url | https://magnific.ai/ → https://www.magnific.com/ |
| 110→95 | description | AI image upscaler and enhancer that adds creative detail to photos and artwork at higher resolutions. → AI creative platform (formerly Freepik) for image generation, editing, and upscaling. |
| 110→95 | keywords | 11 → 16; removed: —; added 5: Freepik, magnific.com, AI image upscaler, AI image generator, Magnific |
| 111→96 | keywords | 11 → 12; removed: —; added 1: Clipdrop |
| 112→97 | keywords | 11 → 12; removed: —; added 1: beautifulai |
| 114→98 | keywords | 11 → 12; removed: —; added 1: Reclaim |
| 115→99 | keywords | 11 → 12; removed: —; added 1: Motion |
| 116→100 | keywords | 11 → 13; removed: —; added 2: Otter.ai, otterai |
| 117→101 | keywords | 11 → 12; removed: —; added 1: Speechify |
| 118→102 | url | https://www.khanacademy.org/khan-labs → https://khanmigo.ai/ |
| 118→102 | keywords | 11 → 14; removed: —; added 3: khanmigo.ai, Khan Academy AI tutor, Khanmigo |
| 119→103 | keywords | 11 → 12; removed: —; added 1: quizletai |
| 120→104 | keywords | 11 → 12; removed: —; added 1: courseraai |
| 121→105 | keywords | 11 → 13; removed: —; added 2: Make, Make AI |
| 122→106 | categories | Automation & Workflows, Productivity → AI Agents, Automation & Workflows, Productivity |
| 122→106 | keywords | 11 → 12; removed: —; added 1: Lindy |
| 123→107 | keywords | 11 → 12; removed: —; added 1: meshyai |
| 124→108 | keywords | 11 → 12; removed: —; added 1: splineai |
| 125→109 | keywords | 11 → 12; removed: —; added 1: GPTZero AI |
| 126→110 | keywords | 11 → 12; removed: GPT-4 detection; added 2: Originality.ai, originalityai |
| 127→111 | keywords | 11 → 12; removed: —; added 1: Framer |
| 128→112 | url | https://labs.google/stitch → https://stitch.google.com/ |
| 128→112 | keywords | 9 → 14; removed: —; added 5: stitch.google.com, Google Stitch, UI design with AI, Stitch, Stitch AI |
| 130→113 | keywords | 8 → 10; removed: —; added 2: Hyper3D, Hyper3D AI |
| 131→114 | url | https://www.relume.io/ → https://www.relume.ai/ |
| 131→114 | description | AI site-planning tool that generates sitemaps and wireframes and exports to Figma, Webflow, and React. → AI website builder for small businesses, from the makers of Relume. |
| 131→114 | keywords | 8 → 13; removed: —; added 5: relume.ai, AI website builder, wireframes, Relume, Relume AI |
| 133→115 | categories | Video & Animation, 3D & AR/VR, Image Generation, Design → Video & Animation, 3D & AR/VR |
| 133→115 | keywords | 8 → 10; removed: —; added 2: Viggle AI, viggleai |
| 134→116 | keywords | 10 → 12; removed: —; added 2: minimaxaudio, MiniMax Audio AI |
| 135→117 | keywords | 10 → 11; removed: —; added 1: hailuoai |
| 136→118 | categories | Automation & Workflows, Productivity, Coding & Dev → AI Agents, Productivity, Coding & Dev |
| 136→118 | keywords | 10 → 12; removed: —; added 2: minimaxagent, MiniMax Agent AI |
| 137→119 | categories | Text & Writing, Marketing, Image Generation, Video & Animation, Coding & Dev, Research & Analysis, Education & Learning, AI Detection & Humanization → Text & Writing, Marketing |
| 137→119 | keywords | 49 → 25; removed: short video, AI code tools, code refactoring, code documentation, debugging, AI research paper writer, SEO tools, keyword research, education tools, lesson planner, MCQ generator, course outline …; added 0:  |
| 138→120 | keywords | 15 → 16; removed: —; added 1: studleyai |
| 140→122 | keywords | 16 → 17; removed: —; added 1: Upscayl AI |
| 141→123 | categories | Marketing, Productivity, Research & Analysis, Text & Writing → Marketing, Productivity, Research & Analysis |
| 141→123 | keywords | 16 → 16; removed: —; added 1: poppyai |
| 143→124 | keywords | 15 → 17; removed: —; added 2: Kimi AI, kimiai |
| 144→125 | keywords | 11 → 12; removed: —; added 1: Playabl AI |
| 146→126 | categories | AI Agents, Automation & Workflows, Coding & Dev, Productivity → AI Agents, Automation & Workflows, Productivity |
| 146→126 | keywords | 18 → 19; removed: —; added 1: AutoClaw AI |
| 151→127 | keywords | 10 → 11; removed: —; added 1: vizardai |

## KEPT

| id (old→new) | name | note |
|---|---|---|
| 1→1 | ChatGPT | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 2→2 | Gemini | URL bot-protected (HTTP UND_ERR_HEADERS_OVERFLOW); live per reader-proxy/search check. |
| 3→3 | Chat.Z.ai | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 4→4 | Claude | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 5→5 | Gamma | URL bot-protected (HTTP 403); live per reader-proxy/search check. |
| 6→6 | Image.Z.ai | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 7→7 | Audio.Z.ai | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 8→8 | Canva AI | URL bot-protected (HTTP 403); live per reader-proxy/search check. |
| 9→9 | Midjourney | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 10→10 | Runway | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 11→11 | Perplexity | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 12→12 | ElevenLabs | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 13→13 | GitHub Copilot | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 14→14 | Suno | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 15→15 | Leonardo.ai | URL bot-protected (HTTP 403); live per reader-proxy/search check. |
| 16→16 | Microsoft Copilot | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 17→17 | Notion AI | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 18→18 | Stable Diffusion | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 19→19 | Jasper | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 20→20 | Hugging Face | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 21→21 | Pika | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 22→22 | Grammarly | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 23→23 | Luma | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 24→24 | Replit AI | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 25→25 | Reka | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 32→26 | Tongyi Qianwen | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 33→27 | Doubao | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 34→28 | DeepSeek | ⚠ Bot-blocked (HTTP 403); not independently verified in this run — kept on prior data. |
| 35→29 | Tencent Yuanbao | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 37→30 | OCR.Z.ai | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 38→31 | Qodo | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 39→32 | Cursor | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 40→33 | HeyGen | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 41→34 | v0 | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 42→35 | Elicit | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 43→36 | Kling AI | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 44→37 | ChatPDF | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 45→38 | Grok | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 46→39 | Arena (formerly LMArena) | URL bot-protected (HTTP 403); live per reader-proxy/search check. |
| 47→40 | Gemini Notebook | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 48→41 | Poe | URL bot-protected (HTTP 403); live per reader-proxy/search check. |
| 49→42 | Pi AI | URL bot-protected (HTTP 403); live per reader-proxy/search check. |
| 50→43 | Copy.ai | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 51→44 | Rytr | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 52→45 | Sudowrite | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 53→46 | QuillBot | ⚠ Bot-blocked (HTTP 403); not independently verified in this run — kept on prior data. |
| 54→47 | Writesonic | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 55→48 | Adobe Firefly | URL bot-protected (HTTP 403); live per reader-proxy/search check. |
| 56→49 | Ideogram | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 57→50 | Synthesia | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 58→51 | OpusClip | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 59→52 | Descript | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 60→53 | Murf AI | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 61→54 | Udio | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 64→55 | Zapier | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 65→56 | n8n | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 66→57 | Intercom | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 68→58 | Consensus | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 69→59 | SciSpace | ⚠ Bot-blocked (HTTP 403); not independently verified in this run — kept on prior data. |
| 70→60 | Research Rabbit | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 71→61 | Scite | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 72→62 | Julius | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 73→63 | Glean | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 74→64 | AdCreative.ai | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 76→65 | Krea AI | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 77→66 | Recraft AI | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 78→67 | Durable | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 79→68 | Fireflies | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 80→69 | Granola | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 81→70 | Clay | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 82→71 | Harvey | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 83→72 | Character.AI | ⚠ Live, but company filed Chapter 11 in Oct 2026 (court-supervised sale). URL bot-protected (HTTP 403); live per reader-proxy/search check. |
| 84→73 | Anyword | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 85→74 | AIVA | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 86→75 | Kits AI | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 87→76 | Topaz Video AI | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 88→77 | Qwen | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 89→78 | Antigravity | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 92→79 | Manus | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 93→80 | Wispr Flow | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 94→81 | OpenClaw | Suspect list: open-source assistant, openclaw.ai live — kept. |
| 95→82 | Turbolearn | Suspect list: Turbolearn, 10M+ learners — kept; renamed. |
| 97→83 | ZeroGPT | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 98→84 | AndiSearch | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 100→85 | Le Chat | ⚠ Bot-blocked (HTTP 403); not independently verified in this run — kept on prior data. |
| 101→86 | Bolt.new | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 102→87 | Lovable | ⚠ Bot-blocked (HTTP 403); not independently verified in this run — kept on prior data. |
| 103→88 | Devin Desktop | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 104→89 | Devin | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 105→90 | DeepL | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 106→91 | Smartcat | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 107→92 | Remove bg | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 108→93 | PhotoRoom | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 109→94 | Pixlr | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 110→95 | Magnific | URL bot-protected (HTTP 403); live per reader-proxy/search check. |
| 111→96 | Clipdrop | Live (sold by Stability AI to Jasper). Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 112→97 | Beautiful AI | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 114→98 | Reclaim | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 115→99 | Motion | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 116→100 | Otter.ai | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 117→101 | Speechify | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 118→102 | Khanmigo | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 119→103 | Quizlet AI | ⚠ Bot-blocked (HTTP 403); not independently verified in this run — kept on prior data. |
| 120→104 | Coursera AI | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 121→105 | Make | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 122→106 | Lindy | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 123→107 | Meshy AI | URL bot-protected (HTTP 403); live per reader-proxy/search check. |
| 124→108 | Spline AI | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 125→109 | GPTZero | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 126→110 | Originality.ai | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 127→111 | Framer | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 128→112 | Stitch | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 130→113 | Hyper3D | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 131→114 | Relume | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 133→115 | Viggle AI | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 134→116 | MiniMax Audio | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 135→117 | Hailuo AI | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 136→118 | MiniMax Agent | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 137→119 | GravityWrite | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 138→120 | Studley AI | Suspect list: 4M+ students, apps on stores — kept. |
| 139→121 | Lummi | Official URL resolves (HTTP 200); no field changes needed beyond keyword normalisation. |
| 140→122 | Upscayl | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 141→123 | Poppy AI | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 143→124 | Kimi AI | Official URL resolves (HTTP 200); fields updated, see CHANGED. |
| 144→125 | Playabl | Suspect list: real, functional game-creation product with public gallery — kept. |
| 146→126 | AutoClaw | Suspect list: official Z.ai agent — kept. |
| 151→127 | Vizard AI | Official URL resolves (HTTP 200); fields updated, see CHANGED. |

## Housekeeping

- `meta.version` 3.0.0 → 4.0.0; `meta.lastUpdated` → 2026-11-25.
- Schema validated: exactly 8 fields, ids 1..163, 1–3 categories from the 15 allowed values, pricing from the 4 allowed values, 10–25 keywords, no duplicate names/URLs, every logo path exists on disk.
- Orphaned logo files of removed tools deleted (19): luma.png, luna-dark.png, luna-light.png, nova.png, notebooklm.png, tabnine.png, chatedu.io.webp, framenet-ai.jpg, turbo-ai.png, pdp-ai.png, sora.avif, viralsky.svg, sky-snail.png, ai-potha.png, voiceenhancer.png, rao-edits.webp, ashna-ai.jpg, tryveo3.png, magic-eraser.png.

## Final verification (run after the rewrite)

- Final URL sweep of all 163 entries: 146 answered 2xx directly; 17 are bot-walled or return oversized headers to automated clients (Gemini, Gamma, Canva AI, Leonardo.ai, Arena, Poe, Pi AI, QuillBot, Adobe Firefly, Character.AI, Le Chat, Lovable, Magnific, Quizlet AI, Meshy AI, LTX Studio, Civitai). Gemini, Gamma, Leonardo, Arena, Poe, Firefly, Character.AI, Magnific, Meshy, LTX Studio and Civitai were additionally confirmed via curl/reader-proxy content; Pi via search; QuillBot, Le Chat, Lovable and Quizlet AI remain ⚠ unverified by content.
- 12 randomly sampled URLs resolved to the expected official product (ERNIE, Scite, OpusClip, Sudowrite, Intercom, GravityWrite, Glean, Beautiful AI, Khanmigo, fal.ai, Writesonic, Chat.Z.ai).
- `npm run build` passes; `eslint .` reports the same 5 pre-existing errors before and after the UI change (no new errors).
- UI checked in headless Chromium at 1440 / 820 / 375 px, light and dark: 3 / 2 / 1 columns, no horizontal scroll, no broken images, no console errors, favourite toggle + toast + localStorage persistence working, category and pricing filters working.
