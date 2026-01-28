import type { LinkItem, AIToolCategory } from '../types'

export const websites: LinkItem[] = [
  { name: 'Bilibili', link: 'https://www.bilibili.com', icon: 'images/tools/bilibili.com.ico' },
  { name: '知乎', link: 'https://www.zhihu.com', icon: 'images/tools/zhihu.com.png' },
  { name: 'GitHub', link: 'https://github.com', icon: 'images/tools/github.com.png' },
  { name: 'OiiOii.ai', link: 'https://oiioii.ai', icon: 'images/tools/oiioii.ai.ico' },
  { name: 'Lovart', link: 'https://lovart.ai', icon: 'images/tools/lovart.ai.ico' },
  { name: 'LiblibAI', link: 'https://www.liblib.art', icon: 'images/tools/liblib.art.ico' },
  { name: 'X', link: 'https://x.com', icon: 'images/tools/x.com.png' },
]

export const tools: LinkItem[] = [
  { name: 'CMD', link: 'https://docs.microsoft.com/windows-server/administration/windows-commands/cmd', icon: 'images/tools/cmd.ico' },
  { name: 'PowerShell', link: 'https://docs.microsoft.com/powershell/', icon: 'images/tools/powershell.ico' },
  { name: 'VS Code', link: 'https://code.visualstudio.com', icon: 'images/tools/code.visualstudio.com.ico' },
  { name: 'Git', link: 'https://git-scm.com', icon: 'images/tools/git-scm.com.ico' },
  { name: 'CC-Switch', link: 'https://github.com/farion1231/cc-switch', icon: 'images/tools/cc-switch.ico' },
  { name: 'v2RayN', link: 'https://github.com/2dust/v2rayN', icon: 'images/tools/en.v2rayn.com.png' },
  { name: 'Edge', link: 'https://www.microsoft.com/edge', icon: 'images/tools/microsoft.com.png' },
]

export const aiTools: AIToolCategory[] = [
  { category: '文本', items: [
    { name: 'DeepSeek', link: 'https://chat.deepseek.com', icon: 'images/tools/deepseek.com.ico' },
    { name: 'Gemini', link: 'https://gemini.google.com', icon: 'images/tools/gemini.google.com.svg' },
    { name: 'Qwen', link: 'https://tongyi.aliyun.com', icon: 'images/tools/tongyi.aliyun.com.svg' },
  ]},
  { category: '代码', items: [
    { name: 'Claude Code', link: 'https://claude.ai', icon: 'images/tools/claude.ai.ico' },
    { name: 'Codex', link: 'https://chatgpt.com', icon: 'images/tools/chatgpt.com.ico' },
    { name: 'Gemini', link: 'https://gemini.google.com', icon: 'images/tools/gemini.google.com.svg' },
    { name: 'GLM', link: 'https://chatglm.cn', icon: 'images/tools/chatglm.cn.svg' },
    { name: 'Minimax', link: 'https://www.minimaxi.com', icon: 'images/tools/minimaxi.com.ico' },
  ]},
  { category: '图像', items: [
    { name: 'Nano Banana Pro', link: 'https://gemini.google.com/app', icon: 'images/tools/nano-banana-pro.io.ico' },
    { name: 'Seedream 4.5', link: 'https://jimeng.jianying.com/ai-tool/home/?type=image', icon: 'images/tools/seed.bytedance.com.ico' },
  ]},
  { category: '视频', items: [
    { name: 'Seedance 3.0 Fast', link: 'https://jimeng.jianying.com/ai-tool/home/?type=video', icon: 'images/tools/seedance.io.ico' },
  ]},
  { category: '搜索', items: [
    { name: 'MiroThinker', link: 'https://dr.miromind.ai', icon: 'images/tools/dr.miromind.ai.svg' },
    { name: 'Kagi Search', link: 'https://kagi.com', icon: 'images/tools/kagi.com.png' },
    { name: 'Perplexity', link: 'https://perplexity.ai', icon: 'images/tools/perplexity.ai.ico' },
  ]},
  { category: '播客', items: [
    { name: 'ListenHub', link: 'https://listenhub.ai', icon: 'images/tools/listenhub.ai.svg' },
  ]},
  { category: 'PPT', items: [
    { name: 'ListenHub', link: 'https://listenhub.ai', icon: 'images/tools/listenhub.ai.svg' },
  ]},
  { category: '工作流', items: [
    { name: 'ComfyUI', link: 'https://github.com/comfyanonymous/ComfyUI', icon: 'images/tools/comfy.org.png' },
  ]},
]
