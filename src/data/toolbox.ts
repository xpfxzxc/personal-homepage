import type { LinkItem, AIToolCategory } from '../types'

export const websites: LinkItem[] = [
  { name: 'Bilibili', link: 'https://www.bilibili.com' },
  { name: '知乎', link: 'https://www.zhihu.com' },
  { name: 'GitHub', link: 'https://github.com' },
  { name: 'OiiOii.ai', link: 'https://oiioii.ai' },
  { name: 'Lovart', link: 'https://lovart.ai' },
  { name: 'LiblibAI', link: 'https://www.liblib.art' },
  { name: 'X', link: 'https://x.com' },
]

export const tools: LinkItem[] = [
  { name: 'CMD', link: 'https://docs.microsoft.com/windows-server/administration/windows-commands/cmd' },
  { name: 'PowerShell', link: 'https://docs.microsoft.com/powershell/' },
  { name: 'VS Code', link: 'https://code.visualstudio.com' },
  { name: 'Git', link: 'https://git-scm.com' },
  { name: 'CC-Switch', link: '#' },
  { name: 'v2RayN', link: 'https://github.com/2dust/v2rayN' },
  { name: 'Edge', link: 'https://www.microsoft.com/edge' },
]

export const aiTools: AIToolCategory[] = [
  { category: '文本', items: [
    { name: 'DeepSeek', link: 'https://chat.deepseek.com' },
    { name: 'Gemini', link: 'https://gemini.google.com' },
    { name: 'Qwen', link: 'https://tongyi.aliyun.com' },
  ]},
  { category: '代码', items: [
    { name: 'Claude Code', link: 'https://claude.ai' },
    { name: 'Codex', link: 'https://openai.com/codex' },
    { name: 'Gemini', link: 'https://gemini.google.com' },
    { name: 'GLM', link: 'https://chatglm.cn' },
    { name: 'Minimax', link: 'https://www.minimaxi.com' },
  ]},
  { category: '图像', items: [
    { name: 'Nano Banana Pro', link: '#' },
    { name: 'Seedream 4.5', link: '#' },
  ]},
  { category: '视频', items: [
    { name: 'Seedance 3.0 Fast', link: '#' },
  ]},
  { category: '搜索', items: [
    { name: 'MiroThinker', link: '#' },
    { name: 'Kagi Search', link: 'https://kagi.com' },
    { name: 'Perplexity', link: 'https://perplexity.ai' },
  ]},
  { category: '播客', items: [
    { name: 'ListenHub', link: '#' },
  ]},
  { category: 'PPT', items: [
    { name: 'ListenHub', link: '#' },
  ]},
  { category: '工作流', items: [
    { name: 'ComfyUI', link: 'https://github.com/comfyanonymous/ComfyUI' },
  ]},
]
