// ==UserScript==
// @name         Quantum Quarry 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.1
// @description  网页游戏 Quantum Quarry (https://quantumquarry.cbrugger.com/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game Quantum Quarry.
// @author       好阳光的小锅巴 & 麦子、人民当家做主
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://quantumquarry.cbrugger.com/assets/images/logos/singleQlogoV2transparent48x48.png
// @license      MIT
// @include      *https://quantumquarry.cbrugger.com/*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/quantum-quarry-AI2-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/quantum-quarry-AI2-chs.user.js
// ==/UserScript==

(function() {
    'use strict';

    // ============================================================
    // 内置默认配置（仅当页面未提供时生效）
    // ============================================================
    // 匹配配置
    if (!window.cnConfig || Object.keys(window.cnConfig).length === 0) {
        window.cnConfig = {
            //是否忽视大小写
            ignoreCase: true,
            //是否忽视首尾空格
            trimSpaces: true,

        };
    }

    // 分类名称注册表（供编辑器工具使用）
    window.cnCategoriesList = window.cnCategoriesList || [
        "resource",
        "item",
    ];

    // 主要翻译词条
    if (!window.cnItems || Object.keys(window.cnItems).length === 0) {
        window.cnItems = {
            // --- 静态匹配 ---
            "Welcome": "欢迎",
            "Score": "分数",
            "Health Potion": "生命药水",
            "Hello World": "你好世界",

            // --- 分类词条 [译文, 分类名] ---
            "gold": ["金币", "resource"],
            "wood": ["木材", "resource"],
            "stone": ["石头", "resource"],
            "iron": ["铁", "resource"],
            "sword": ["剑", "item"],
            "shield": ["盾牌", "item"],
            "helmet": ["头盔", "item"],

            // --- 模板 ({{0}} / {{1}}) ---
            "Auto Charge Step +{{0}}/s": "自动充能进度 +{{0}}/秒",
            "Pickaxe XP Gain +{{0}}": "镐子经验获取 +{{0}}",
            "Commission Rewards +{{0}}": "委托奖励 +{{0}}",
            "Chromaticite Ore Breaking Power +{{0}}": "彩晶矿开采破坏力 +{{0}}",
            "Quartz Gain +{{0}}": "石英产出 +{{0}}",
            "Slate Gain +{{0}}": "石灰板产出 +{{0}}",
            "Gold Ore Gain +{{0}}": "金矿产出 +{{0}}",
            "Pickaxe Mastery Gain +{{0}}": "镐子精通产出 +{{0}}",
            "Nickel Ore Breaking Power +{{0}}": "镍矿开采破坏力 +{{0}}",
            "Chlorophyte Ore Breaking Power +{{0}}": "叶绿矿开采破坏力 +{{0}}",
            "Silver Ore Breaking Power +{{0}}": "银矿石破碎力 +{{0}}",
            "Ore Mine Gain +{{0}}": "矿石开采增益 +{{0}}",
            "Chlorophyte Ore Gain +{{0}}": "叶绿矿石产出 +{{0}}",
            "Lapis Lazuli Breaking Power +{{0}}": "青金石开采破坏力 +{{0}}",
            "Gold Ore Breaking Power +{{0}}": "金矿石开采破坏力 +{{0}}",
            "Tin Ore Breaking Power +{{0}}": "锡矿石开采破坏力 +{{0}}",
            "Crystal Cave Gain +{{0}}": "水晶洞穴产出 +{{0}}",
            "Coal Gain +{{0}}": "煤炭产出+{{0}}",
            "Copper Ore Breaking Power +{{0}}": "铜矿开采破坏力 +{{0}}",
            "Aether Gain Multiplier +{{0}}": "以太微粒获取倍率 +{{0}}",
            "Chromaticite Ore Gain +{{0}}": "彩晶矿产出 +{{0}}",
            "Ore Mine Gain +{{0}}": "矿石矿场产出 +{{0}}",
            "Pickaxe Breaking Power +{{0}}": "镐子破坏力 +{{0}}",
            "Processing Output +{{0}}": "加工产出 +{{0}}",
            "Tin Ore Gain +{{0}}": "锡矿产出 +{{0}}",
            "Copper Ore Gain +{{0}}": "铜矿石产出 +{{0}}",
            "Coal Gain +{{0}}": "煤炭获取量 +{{0}}",
            "Ore Mine Gain +{{0}}": "矿石矿场产出 +{{0}}",
            "Processing Speed +{{0}}": "加工速度 +{{0}}",
            "Stone Gain +{{0}}": "石头获取量 +{{0}}",
            "Ore Mine Breaking Power +{{0}}": "矿石矿场破坏力 +{{0}}",
            "Coal Breaking Power +{{0}}": "煤炭开采破坏力 +{{0}}",
            "Stone Breaking Power +{{0}}": "石头开采破坏力 +{{0}}",
            "Silver Ore Gain +{{0}}": "银矿石产出 +{{0}}",
            "Nickel Ore Gain +{{0}}": "镍矿石产出 +{{0}}",
            "Iron Ore Gain +{{0}}": "铁矿石产出 +{{0}}",
            "Lapis Lazuli Gain +{{0}}": "青金石产出 +{{0}}",
            "All Mastery Gain +{{0}}": "所有精通增益 +{{0}}",
            "Pickaxe Crit Chance +{{0}}": "镐子暴击率 +{{0}}",
            " Completed {{0}} commissions ": "完成 {{0}} 次委托",
            "Cost: {{0}}": "消耗：{{0}}",
            " Level {{0}} ": " 等级 {{0}} ",
            "Upgrade to Level {{0}}": "升级到等级 {{0}}",
            "Next Improvement: {{0}}": "下次提升：{{0}}",
            " REFRESH ({{0}}) ": " 刷新 ({{0}}) ",
            "Cracking {{0}} image by upklyak on Freepik (adjusted)": "由 upklyak 在 Freepik 上上传的 {{0}} 图片（已调整）",
            "Level {{0}}": "等级{{0}}",
            "Complete {{0}} commissions to unlock this upgrade": "完成 {{0}} 次委托解锁此升级",
            "Complete {{0}} commissions to unlock this upgrade.": "完成 {{0}} 次委托解锁此升级.",
            "Tier up your tools {{0}} time to unlock this upgrade.": "升级你的工具 {{0}} 次解锁此升级。",
            "Tier up your tools {{0}} times to unlock this upgrade.": "升级你的工具 {{0}} 次解锁此升级。",
            "{{0}} m": "{{0}} m",
            "+ {{0}} Aether Particle Mastery": "+ {{0}} 以太粒子精通",
            "Pickaxe Gain +{{0}}%": "镐子增益 +{{0}}%",
            "-{{0}} ms": "-{{0}} ms",
            "{{0}} ms": "{{0}} ms",
            "{{0}} s": "{{0}} 秒",
            "{{0}} h": "{{0}} 小时",
            "+{{0}}/s": "+{{0}}/秒",
            "+{{0}} More": "+{{0}} 更多",
            "(+{{0}}/s)": "(+{{0}}/秒)",
            "(-{{0}}/s)": "(-{{0}}/秒)",
            " {{0}}/s ": " {{0}}/秒 ",
            "×{{0}}": "×{{0}}",
            "{{0}}x": "{{0}}x",
            "{{0}} K": "{{0}} K",
            " {{0}} unclaimed ": " {{0}} 未领取 ",
            " {{0}} m": " {{0}} m",
            " {{0}} m ": " {{0}} m ",
            " {{0}} h ": " {{0}} 小时 ",
            "+{{0}} Refresh:": "+{{0}} 刷新:",
            " + {{0}} more ": " + {{0}} 更多",
            "Coal ({{0}} - {{1}}%)": "煤 ({{0}} - {{1}}%)",
            "Slate ({{0}} - {{1}}%)": "石灰板 ({{0}} - {{1}}%)",
            "Common Coin ({{0}} - {{1}}%)": "普通硬币 ({{0}} - {{1}}%)",
            "Stone ({{0}} - {{1}}%)": "石头 ({{0}} - {{1}}%)",
            "(Tier {{0}} - Stone)": "(层级 {{0}} - 石头)",
            "{{0}} x {{1}}": "{{0}} × {{1}}",
            "{{0}}h - {{1}}h": "{{0}} 小时 - {{1}} 小时",
            "{{0}}/{{1}} K ": "{{0}}/{{1}} K ",
            "{{0}} / {{1}} slots used": "{{0}} / {{1}} 槽位已使用",
            "\n{{0}}x{{1}}\n{{2}}": "\n{{0}}x{{1}}\n{{2}}",
            " Not enough Chromaticite Ore. Need {{0}}, have {{1}}. ": "彩晶矿不足，所需{{0}}，当前持有{{1}}。",
            " Not enough Gold Ore. Need {{0}}, have {{1}}. ": "金矿不足，所需{{0}}，当前持有{{1}}。",
            "??? — {{0}} Aether Mastery ({{1}})": "??? — {{0}} 以太精通 ({{1}})",

            // --- 模板 ({{分类名}} + {{%d}}) ---
            "{{resource}}: {{0}}": "{{resource}}：{{0}}",

            // --- 模板 ({{分类名*}} 仅分类) ---
            "Get {{0}} {{resource*}}": "获得 {{0}} {{resource*}}",

            // --- 模板 ({{分类名*|sep|join}} 分类列表) ---
            "Craft {{item*|,|和}}": "制作{{item*|,|和}}",

            // --- 通用列表 {{*}} / {{*|sep|join}} ---
            "Items: {{*}}": "物品：{{*}}",
            "Mats: {{*|, |、}}": "材料：{{*|, |、}}",

            // --- 数字占位符 {{%d}} ---
            "{{%d}}": "{{%d}}",
            "Phase {{%d}}": "阶段 {{%d}}",
            " {{%d}} s ": " {{%d}} 秒 ",
            " {{%d}} K ": " {{%d}} K ",
            " {{%d}} T ": " {{%d}} T ",
            "x{{%d}}": "x{{%d}}",
            "HP: {{%d}}": "生命值：{{%d}}",
            "DMG: {{%d}}": "伤害：{{%d}}",
            
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            "": "",
            " Copper Bar ": "铜锭",
            " Diamonds ": "钻石",
            " Emeralds ": "祖母绿",
            " Manufactured": "加工制品",
            " Opal ": "欧泊",
            " Peridot ": "橄榄石",
            " Pyrite ": "黄铁矿",
            " Recipes ": "配方列表",
            " Sapphire ": "蓝宝石",
            " Silver Bar ": "银锭",
            " Tourmaline ": "碧玺",
            "- Unlock Processing and Smelti": "- 解锁矿石加工与冶炼功能",
            " Unlocked recipes: Copper, Silver, Smooth Stone, Tin and Iron": "已解锁配方：铜、银、平滑石材、锡、铁",
            "Diamonds": "钻石",
            "Diamonds Gain +10%": "钻石产出量+10%",
            "Emeralds": "祖母绿",
            "Emeralds Gain +10%": "祖母绿产出量+10%",
            "Fool's gold — a glittering iron sulfide mineral": "愚人金——金光闪闪的硫化铁矿物",
            "Global Breaking Power +5%": "全局开采威力+5%",
            "Instant Break Chance +1%": "瞬时破矿概率+1%",
            "Mesmerizing gemstone that diffracts light into rainbows": "能折射出七彩光晕的迷人宝石",
            "Multi-colored crystal prized by collectors worldwide": "收藏界追捧的多色晶体",
            "Olive-green gemstone formed deep in the earth's mantle": "产自地幔深处的橄榄绿色宝石",
            "Opal": "欧泊",
            "Opal Gain +10%": "欧泊产出量+10%",
            "Peridot": "橄榄石",
            "Peridot Breaking Power +10%": "橄榄石开采威力+10%",
            "Pink banded mineral with a glassy luster": "带有玻璃光泽的层状粉色矿物",
            "Precious green beryl — brittle and fragile despite its value": "珍贵绿色绿柱石，价值不菲却质地脆嫩",
            "Processing": "矿石加工台",
            "Pyrite": "黄铁矿",
            "Pyrite Breaking Power +10%": "黄铁矿开采威力+10%",
            "Pyrite Gain +10%": "黄铁矿产出量+10%",
            "Rhodochrosite Breaking Power +10%": "菱锰矿开采威力+10%",
            "Rhodochrosite Gain +10%": "菱锰矿产出量+10%",
            "Royal blue corundum, second hardest natural gemstone": "名贵蓝色刚玉，硬度仅次于钻石",
            "Sapphire": "蓝宝石",
            "Sapphire Breaking Power +10%": "蓝宝石开采威力+10%",
            "Sapphire Gain +10%": "蓝宝石产出量+10%",
            "Slate Mastery Gain +15%": "板岩精通产出+15%",
            "Smelter": "冶炼炉",
            "Smelts ores into bars and melts various materials": "将矿石熔铸成金属锭，熔炼各类原料",
            "The hardest natural substance — nearly indestructible": "自然界硬度最高的物质，近乎坚不可摧",
            "Tourmaline": "碧玺",
            "Tourmaline Gain +10%": "碧玺产出量+10%",
            "Upgrade to Copper Furnace": "升级为铜制熔炉",
            "": "",
            "": "",
            " Completed 1 commission ": "已完成1个委托",
            " Displays the block costs for each upgrade in the upgrade view. ": "在升级界面显示每项升级所需方块消耗。",
            " Displays upgrades that have already been maxed out. ": "显示已升至满级的升级项目。",
            " Not enough Lapis Lazuli. Need 10.00, have 3.18. ": "青金石不足，所需10.00，当前持有3.18。",
            " Shows resources that are currently locked and cannot be mined yet. ": "展示当前尚未解锁、无法开采的资源。",
            " When disabled, AI-generated images are replaced with colored placeholders. ": "关闭后，AI生成图片将替换为彩色占位图。",
            "Aether Gain Base +1": "以太基础获取量+1",
            "Max Tier Reached": "已达最高等级",
            " Max level reached ": " 已满级 ",
            "Rhodochrosite": "红柱石",
            " Quartz Crystals ": "石英晶体",
            "Clear crystalline mineral found in cave veins": "产于矿脉中的通透晶质矿物",
            "Layered metamorphic rock that splits into smooth sheets": "层状变质岩，可剥离成平滑薄片",
            "Resource(Gem)": "资源（宝石类）",
            "Resource(Stone)": "资源（石材类）",
            "Unlock Pyrite": "解锁黄铁矿",
            "Unlock Quartz Crystals": "解锁石英晶体",
            "Unlock Rhodochrosite": "解锁菱锰矿",
            "Quartz Crystals": "石英晶体",
            " You just unlocked Location Crystal Cave ": "你解锁了位置 水晶洞穴",
            "Crystal Cave": "水晶洞穴",
            "About": "关于",
            "Mine 25 blocks to unlock this upgrade.": "需要25个方块才能解锁此升级。",
            " Cannot move the rightmost view container further right ": "无法将最右侧视图容器继续向右拖动",
            "Unlock Enchanted Forest": "解锁附魔森林",
            "Unlock Crystal Cave": "解锁水晶洞穴",
            " Ad boost is already active! It will be applied on your next reset. ": "广告增益已处于激活状态，将在你下次重置时生效。",
            "- Keep Construction view unlocked after Aether Metamorphosis\n- Unlocks the \"Next\" button in Construction": "- 以太蜕变后保留建造界面解锁状态\n- 在建造系统中解锁“下一个”按钮",
            "Progress further to unlock this construction.": "推进进度即可解锁该建造项目。",
            "Unlock the Enchanted Forest location to unlock this level.": "解锁附魔森林区域后解锁此等级。",
            "Upgrade to Artisan Workbench": "升级为工匠工作台",
            " Construction \"Apprentice Workbench\" completed! ": "建造「学徒工作台」完成！",
            " Construction \"Mining Ledger\" completed! ": "建造「采矿台账」完成！",
            " Leaves ": "树叶",
            " Moss ": "苔藓",
            " Oak Logs ": "橡树原木",
            "- Commission rewards ×1.5 (stacks with Mining Ledger)": "- 委托奖励×1.5（可与采矿台账效果叠加）",
            "Upgrade to Forest Ledger": "升级为森林台账",
            " Aether Particles. ": "以太微粒。",
            " You will gain ": "你将获得",
            "Perform Aether Reset?": "是否执行以太蜕变重置？",
            " +20% Active": "在线收益加成+20%",
            " Ad boost activated! +20% Aether Particles on next reset ": "广告增益已激活！下次重置以太微粒收益提升20%",
            " OK, I guess? ": "行吧，就这样？",
            " Quantum Ad Uncertain": "量子广告不确定性",
            " \0x200b​The ad both exists and doesn't exist. You definitely exist though, so here's your reward!\n": "这则广告同时存在又不存在。但你是真实存在的，这份奖励请收下！\n",
            "Ad Boost": "广告提升",
            "Advertisement": "广告",
            " Construction \"Basic Aether Portal\" completed! ": "建造「基础以太传送门」完成！",
            " You unlocked the Aether Monolith! Build it for a permanent global resource gain bonus. ": "你解锁了以太独石柱！建造它可获得永久全局资源产出加成。",
            "Aether Meta": "以太蜕变",
            "Aether Metamorphosis improvements:\n- Reset cooldown: 30 min\n- Aether Particles gain: ×2": "以太蜕变强化效果:\n- 重置冷却时间：30分钟\n- 以太微粒获取量：×2",
            "Finish Construction": "完成建造",
            "Selected: ": "已选择：",
            "Upgrade to Stabilized Aether Portal": "升级为稳定以太传送门",
            "Actions": "操作",
            "Reset Construction": "重置建筑",
            "Select Resource": "选择资源",
            "- Global Resource Gain Base +1\n- Requires Aether Metamorphosis to unlock": "- 全局基础资源产出+1\n- 需要完成以太蜕变才可解锁",
            " Recommended ": "推荐",
            " Smooth Stone ": "平滑石头",
            "- Commission rewards ×1.5": "- 委托奖励 ×1.5",
            "- Global Resource Gain Base ": "- 全局资源基础产量提升",
            " Requires Aether Metamorphosis to unlock": "需以太蜕变解锁",
            "- Keep Construction view unlocked after Aether Metamorphosis": "- 以太蜕变后保留建造界面解锁状态",
            "- Keep commissions view unlocked after Aether Metamorphosis\n- Commission rewards ×1.5\n- Max commissions +1": "- 以太蜕变后保留委托界面解锁状态\n- 委托奖励 ×1.5\n- 委托上限+1",
            "- Keep tool upgrade view unlocked after Aether Metamorphosis\n- Unlock new tool: Axe": "- 以太蜕变后保留工具强化界面解锁状态\n- 解锁新工具：斧头",
            "- Unlock Processing and Smelting\n- Unlocked recipes: Copper, Silver, Smooth Stone": "- 解锁加工与熔炼\n- 解锁配方：铜、银、平滑石头",
            "- Unlock tool experience and enchanting\n- Apply powerful enchantments to your tools for permanent bonuses": "- 解锁工具经验与附魔\n- 给工具施加强力附魔，获得永久加成",
            "Aether Monolith": "以太独石柱",
            "Apprentice Workbench": "学徒工作台",
            "Basic Aether Portal": "基础以太传送门",
            "Basic Tool Forge": "基础工具锻造台",
            "Build Requirements:": "建造所需材料：",
            "Earned by performing an Aether Metamorphosis reset after building the Aether Portal.": "建造以太传送门后完成一次以太蜕变重置解锁。",
            "Experience Bottle": "经验瓶",
            "Gather Smooth Stone to build this.": "收集平滑石头来建造。",
            "Glue Requirements:": "粘合材料需求：",
            "Mining Ledger": "采矿台账",
            "Perform your first Aether Metamorphosis to unlock this construction.": "完成首次以太蜕变解锁该建造。",
            "Prestige": "声望",
            "Smelting": "熔炼",
            "Special Currency": "特殊货币",
            "Stone Commission Board": "石料委托公告板",
            "Stone Furnace": "石熔炉",
            "Unlocks Aether Metamorphosis:\n- Reset your current progress for Aether Particles\n- Reset cooldown: 1 hour": "解锁以太蜕变：\n- 重置现有进度换取以太微粒- 重置冷却：1小时",
            "Unlock the construction feature to build various structures and utilities that survive Aether Metamorphosis resets.": "解锁建造功能，可建造各类建筑与设施，这类建筑在以太蜕变重置后不会消失。",
            "The softest precious metal — rare to find, easy to mine": "最柔软的贵金属——稀有可得，易于开采",
            " Gold Ore ": " 金矿石 ",
            "Stats": "统计",
            " Chlorophyte Ore ": "叶绿矿",
            " No commissions can be completed ": "暂无可完成的委托",
            "Aether Gain Base +2": "以太微粒基础产出+2",
            "Chlorophyte Ore": "叶绿矿",
            "Verdant crystalline ore infused with nature energy": "蕴含自然能量的翠绿色结晶矿石",
            " Chromaticite Ore ": "彩晶矿",
            "Chromaticite Ore": "彩晶矿",
            "Iridescent ore that shifts colors under light": "一种在光线照射下会变换斑斓色泽的矿石",
            "Unlocks a detailed Stats panel showing breakdowns of your resource gains, tools, and more.": "解锁一个详细的统计面板，显示你的资源获取、工具等各项数据的详细分解。",
            "(Tier 2 - Bronze)": "(层级 2 - 青铜)",
            "(Tier 3 - Iron)": "(层级 3 - 铁)",
            "(Tier 4 - Silver)": "(层级 4 - 银)",
            "(Tier 5 - Steel)": "(层级 4 - 钢)",
            "(Tier 6 - Sunstone)": "(层级 4 - 太阳石)",
            "(Tier 7 - Chromaticite)": "(层级 4 - 彩晶矿)",
            " COMPLETE ALL ": "一键全部完成",
            "Amber": "琥珀色",
            "Blue": "蓝色",
            "Choose Your Favorite Color": "选择你喜爱的配色",
            "Complete All — Included Rarities": "一键全完成——包含全部品质",
            "Cyan": "青色",
            "Emerald": "翠绿色",
            "Epic": "史诗级",
            "Eternal": "永恒级",
            "Fuchsia": "玫红色",
            "Green": "绿色",
            "Indigo": "靛蓝色",
            "Keep Current Theme": "保留当前主题",
            "Legendary": "传说级",
            "Lime": "酸橙绿",
            "Neutral": "中性色",
            "Orange": "橙色",
            "Pink": "粉色",
            "Purple": "紫色",
            "Recommended aether particle amount on first reset": "首次重置推荐以太微粒数量",
            "Red": "红色",
            "Rose": "玫瑰红",
            "Select a theme that matches your style. You can change this later in Settings.": "挑选契合你风格的主题，后续可在设置中随时更换",
            "Sky": "天蓝色",
            "Slate": "石板灰",
            "Teal": "青绿色",
            "Theme: ": "主题：",
            "Unlock rarity filter toggles for the Complete All button": "解锁一键完成按钮的品质筛选开关",
            "Violet": "紫罗兰色",
            "Yellow": "黄色",
            "Zinc": "锌矿",
            " level(s) on each upgrade.": " 级对于每个升级。",
            "Keeps up to ": "最多保留",
            "Each level keeps 1 additional tool upgrade level when you tier up your tool.": "每次工具进阶时，每级可保留1级工具强化等级。",
            "Show detailed information about resources when hovering or tapping them.": "鼠标悬停/点击资源时，显示该资源详细信息。",
            "Unlock a button to complete all completable commissions at once": "解锁一键完成所有可交付委托的按钮。",
            "Unlock the ability to change the color theme of the game in the settings under \"General Settings\".": "解锁功能，可在通用设置内更换游戏色彩主题。",
            "Unlock Chromaticite Ore": "解锁彩晶矿",
            "Unlock Gold Ore": "解锁金矿",
            " Game saved successfully ": "游戏存档保存成功",
            "Nickel Ore": "镍矿石",
            " Nickel Ore ": "镍矿石",
            "Tough corrosion-resistant ore used in stainless alloys": "质地坚硬、耐腐蚀的矿石，用于炼制不锈钢合金",
            "Max Reached": "已达上限",
            " Lapis Lazuli ": "青金石",
            " Save slot imported successfully ": "存档导入成功",
            "Autobuyer Bulk Actions": "自动批量购买功能",
            "Automatically purchase upgrades based on priority when you have enough resources.": "资源充足时，会按优先级自动购买升级道具",
            "Deep blue metamorphic rock prized since antiquity": "自古备受珍视的深蓝色变质岩",
            "Dense metallic ore, the backbone of industry": "高密度金属矿石，工业发展的核心原料",
            "Disable all": "全部关闭",
            "Enable all": "全部开启",
            "Further increase how fast you mine while holding down on a block.": "长按方块时，进一步提升开采速度",
            "Higher levels increase both costs and rewards.": "等级越高，刷新委托的消耗与奖励同步提升",
            "Increase the effect of the manual commission refresh reducer button": "提升手动缩短委托刷新冷却按钮的效果",
            "Increases how many upgrades the Autobuyer purchases each time it activates.": "提升自动购买单次可购入的升级数量",
            "Lapis Lazuli": "青金石",
            "Max level is based on unlocked resource types.": "等级上限由已解锁矿石种类决定",
            "Max upgrade level: ": "最大升级等级：",
            "Only affects new commissions after refresh.": "仅对刷新后新生成的委托生效",
            "Reduces the delay between each Autobuyer purchase.": "缩短自动购买的间隔冷却",
            "Reset priorities": "重置优先级",
            "TIER UP": "进阶",
            "Tier Up": "进阶",
            "Tier Up Pickaxe?": "是否进阶镐子？",
            "Unlock Chlorophyte Ore": "解锁叶绿矿石",
            "reset to level 0": "重置到等级 0",
            "(Tier 1 - Copper)": "(层级 1 - 铜)",
            " Rare": " 稀有",
            "Autobuyer": "自动购买者",
            "In Ore Mine": "铁矿石开采",
            "Mining Coal": "开采煤",
            "Iron Ore": "铁矿石",
            " Too many pinned views may break the UI on small screens ": "固定视角数量过多，小屏幕下可能造成界面显示异常",
            "Lustrous white metal, valued for jewelry and currency": "光泽银白色金属，常用于打造首饰与货币",
            "Unlock Nickel Ore": "解锁镍矿石",
            " Silver Ore ": " 银矿石 ",
            "Decrease the time it takes for commissions to refresh by 5%": "减少5%的委托刷新时间",
            " Cannot move the leftmost view container further left ": "无法将最左侧的视图容器向左移动",
            "MAXED": "已满级",
            " Resource Scaling Level ": "资源扩容等级",
            "Automatically mine blocks using your stored charge. Each level adds +1 auto-mine/s and uses 5 energy/s.": "消耗储存的能量自动开采方块。每提升一级每秒自动开采+1，每秒消耗5点能量。",
            "Increase how much charge is generated automatically each second.": "提升每秒自动产生的能量值。",
            "Increase how much charge you gain per action when using the Charging Bar.": "提升使用充能条时，每次操作获得的能量。",
            "Increase how quickly the Charging Bar fills when you hold it.": "长按充能条时，加快充能条积蓄速度。",
            "Multiply the maximum amount of charge you can store.": "提升能量储存上限倍率。",
            "Unlock a button to manually reduce the time until the next commission refresh.": "解锁按钮，可手动缩短委托刷新冷却时间。",
            "Unlock the ability to adjust commission difficulty and rewards. Higher scaling levels increase both costs and rewards for new commissions.": "解锁调整委托难度与奖励的功能。资源扩容等级越高，新委托的消耗与奖励同步提升。",
            "Unlock the charging bar to start charging. Charge can be used to automatically mine resources": "解锁充能条功能以开启充能机制，能量可用于自动采集资源。",
            "Reward": "奖励",
            "(Full)": "(已满)",
            " Not enough resources ": "资源不足",
            " Tin Ore ": "锡矿",
            "Click to claim rewards": "点击领取奖励",
            "Manual Charge Step +2": "手动充能层数+2",
            "Soft silvery metal, essential for bronze alloys": "质地柔软的银白色金属，是炼制青铜合金的核心原料",
            "Tin Ore": "锡矿",
            "Unlock Iron Ore": "解锁铁矿",
            "Unlock Lapis Lazuli": "解锁青金石",
            " Holding down the mouse button is just as effective as rapid clicking. Save your energy and avoid carpal tunnel syndrome! ": "长按鼠标左键与快速点击效果完全一致，省力操作，预防鼠标手！",
            " Copper Ore ": "铜矿石",
            " Crit ": "暴击 ",
            " Instant Break ": "一键击碎",
            " Uncommon": "精良品质",
            "1h - 8h": "1小时 - 8小时",
            "Copper Ore": "铜矿",
            "Reddish ore prized for its conductivity and malleability": "呈红棕色矿石，凭借优良导电性与延展性广受珍视",
            "max": "最大",
            " Reset": "重置",
            " Perform Reset": "执行重置",
            " Show less ": "显示更少",
            "Move view to the left": "视角左移",
            "Unlock Copper Ore": "解锁铜矿石",
            "Unlock Silver Ore": "解锁银矿石",
            "Unlock Tin Ore": "解锁锡矿石",
            "Currency": "货币",
            "Increase chance to crit": "提升暴击概率",
            "Increase chance to instantly break a block": "提升一键击碎方块的几率",
            "Increase damage multiplier on crit": "提升暴击伤害倍率",
            "Increase tool power": "提升工具威力",
            "Increase tool resource gain": "提升工具资源获取量",
            "Tiering up resets upgrades and increases max level": "进阶重置所有升级，并提升等级上限",
            "Tool Upgrades": "工具升级",
            " Displays how much of each resource you currently own next to its cost (e.g. 120 / 500), everywhere costs are shown. ": "在所有显示消耗资源的位置，同步展示你当前拥有的对应资源数量（格式示例：120 / 500）。",
            " Ore Mine": "矿石矿场",
            " Shows locations that are currently locked and cannot be accessed yet. ": "显示当前尚未解锁、无法进入的区域。",
            " The game also saves automatically when you refresh or close the game. This is just an additional step to help prevent data loss. ": "刷新或关闭游戏时，游戏会自动存档，此操作仅为额外备份手段，防止数据丢失。",
            " This setting controls the amount of particles shown when mining resources. ": "该设置控制采集资源时画面粒子特效的显示数量。",
            " Toggles the visibility of floating texts that appear when mining blocks, completing commissions, gaining resources, and more. ": "切换采集方块、完成委托、获取资源等场景弹出浮动文字的显示开关。",
            "Base Currency:": "基础货币：",
            "Basic sedimentary rock, the foundation of any quarry": "普通沉积岩，所有采掘场的基础原料",
            "Breaking Power": "破坏力度",
            "Combustible black rock formed from ancient plant matter": "远古植物遗骸形成的可燃黑色矿石",
            "Commissions": "委托任务",
            "Common Coin": "普通硬币",
            "Density": "密度",
            "Move view to the right": "视角右移",
            "Reach 1.00 K of any resource to unlock Aether Particles. Closest": "任意资源累计达到1千即可解锁以太微粒，优先显示就近资源",
            "Remove pinned view": "取消固定视角",
            "Resource(Ore)": "资源（矿石）",
            "Set as main view": "设为主视角",
            "Switch to the \"Constructions\" view to choose a blueprint to build!": "切换至「建造」界面，选择蓝图进行建造！",
            " Common": " 普通",
            "Chance": "几率",
            "Gain": "增益",
            "Locations": "位置",
            "Mastery": "精通",
            "Gityx游戏": "Gityx游戏",
            "Tools": "工具",
            "Rarity:\xa0": "稀有度:",
            "Tool:\xa0": "工具:",
            "Type:\xa0": "类型:",
            "ACTION BAR": "行动条",
            "Coal": "煤",
            "Pickaxe": "镐子",
            "Playtime": "游戏时长",
            "Resources": "资源",
            "Save Game Now": "立即保存游戏",
            "Settings": "设置",
            "Upgrade Options": "升级选项",
            "Upgrades": "升级",
            "VERSION": "版本",
            "from ": "从 ",
            "Sort by...": "排序方式...",
            " (Main)": " (主要)",
            " Failed to import save slot. The data might be corrupted or invalid. ": "无法导入保存槽。数据可能已损坏或无效。",
            "AI-generated assets (recommended to keep on)": "AI生成素材（建议保持开启）",
            "Applied to newly created save slots, can be changed later in settings.": "将应用于新建存档位，后续可在设置中修改。",
            "Create New Slot": "新建存档位",
            "Create your first save slot to start playing": "创建首个存档位开始游戏",
            "Delete All": "全部删除",
            "Early Development": "早期开发版本",
            "I don't care, take me to the game": "无所谓，直接进入游戏",
            "Import from Clipboard": "从剪贴板导入",
            "Import from File": "从文件导入",
            "Mute all audio": "静音全部音效",
            "New Save": "新建存档",
            "No Save Slots": "暂无存档位",
            "Quick Settings": "快速设置",
            "Save Slots": "存档位",
            "Cancel": "取消",
            "Create": "创建",
            "Create New Save Slot": "新建存档位",
            "Created:": "创建时间：",
            "Last Played:": "上次游玩：",
            "Location:": "存档位置：",
            "None": "无",
            "Play": "开始游戏",
            "Play Time:": "游玩时长：",
            "Slot Name": "存档名称",
            "Version:": "游戏版本：",
            " Quantum Quarry is in active development. Save data, game balance, and features may change or break at any time without notice. Progress loss can happen. I'm just a solo dev that does this in his freetime, nothing is guaranteed. ": "量子采石场正在积极开发中。数据、游戏平衡和功能可能随时更改或出现故障，恕不另行通知。进度可能会丢失。我只是一个业余开发者，在空闲时间进行开发，一切结果无法保证。",
            "$": "$",
            "???": "???",
            "Gityx": "Gityx",
            "G8hh": "G8hh",
            "edt.im": "edt.im",
            "Witdhawaty": "Witdhawaty",
            "designvector10": "designvector10",
            "incrementaldb_verification": "incrementaldb_verification",
            "juicy_fish": "juicy_fish",
            "kimmerrycraft": "kimmerrycraft",
            "mim_studio": "mim_studio",
            "sbhgraphics": "sbhgraphics",
            "smashingstocks": "smashingstocks",
            "twentyfour": "twentyfour",
            "www.flaticon.com": "www.flaticon.com",
            "Ruslancorel": "Ruslancorel",
            "Nueng_wana": "Nueng_wana",
            "@CbruggerDev": "@CbruggerDev",
            "4b04af86-3415-435b-83ad-3fd25cc33223": "4b04af86-3415-435b-83ad-3fd25cc33223",
            "#": "#",
            "/": "/",
            "]": "]",
            "[": "[",
            ">>": ">>",
            ">": ">",
            "<<": "<<",
            "<": "<",
            "%": "%",
            "+": "+",
            "━": "━",
            "✕": "✕",
            "⟳": "⟳",
            ".": ".",
            "…": "…",
            ":": ":",
            "-": "-",
            "|": "|",
            "(": "(",
            ")": ")",
            'Git游戏': 'Git游戏',
            'QQ群号': 'QQ群号',
            'x': 'x',
            'QQ群号:': 'QQ群号:',
            '* 启用后台游戏': '* 启用后台游戏',
            '更多同类游戏:': '更多同类游戏:',
            'i': 'i',
            'I': 'I',
            'II': 'II',
            'III': 'III',
            'IV': 'IV',
            'V': 'V',
            'VI': 'VI',
            'VII': 'VII',
            'VIII': 'VIII',
            'X': 'X',
            'XI': 'XI',
            'XII': 'XII',
            'XIII': 'XIII',
            'XIV': 'XIV',
            'XV': 'XV',
            'XVI': 'XVI',
            'A': 'A',
            'B': 'B',
            'C': 'C',
            'D': 'D',
            'E': 'E',
            'F': 'F',
            'G': 'G',
            'H': 'H',
            'I': 'I',
            'J': 'J',
            'K': 'K',
            'L': 'L',
            'M': 'M',
            'N': 'N',
            'O': 'O',
            'P': 'P',
            'Q': 'Q',
            'R': 'R',
            'S': 'S',
            'T': 'T',
            'U': 'U',
            'V': 'V',
            'W': 'W',
            'X': 'X',
            'Y': 'Y',
            'Z': 'Z',
            'a': 'a',
            'b': 'b',
            'c': 'c',
            'd': 'd',
            'e': 'e',
            'f': 'f',
            'g': 'g',
            'h': 'h',
            'i': 'i',
            'j': 'j',
            'k': 'k',
            'l': 'l',
            'm': 'm',
            'n': 'n',
            'o': 'o',
            'p': 'p',
            'q': 'q',
            'r': 'r',
            's': 's',
            't': 't',
            'u': 'u',
            'v': 'v',
            'w': 'w',
            'x': 'x',
            'y': 'y',
            'z': 'z',
            '<': '<',
            '<<': '<<',
            '>': '>',
            '>>': '>>',
            'Jan': '1月',
            'Feb': '2月',
            'Mar': '3月',
            'Apr': '4月',
            'May': '5月',
            'Jun': '6月',
            'Jul': '7月',
            'Aug': '8月',
            'Sep': '9月',
            'Oct': '10月',
            'Nov': '11月',
            'Dec': '12月',
            // === Quantum Quarry 翻译词条 ===
            " Attunement Slots ": " 调谐槽位 ",
            " Click & Hold to Mine ": " 点击并按住以开采 ",
            " charging (auto)": "充能（自动）",
            " charging (manual)": "充能（手动）",
            " layers": "层数",
            " storage (max)": "存储（上限）",
            " usage": "用量",
            "Accept": "接受",
            "Aether Particles": "以太粒子",
            "Aether Particles on Reset": "重置时获得以太粒子",
            "Aether reset cooldown": "以太重置冷却",
            "Animation Settings": "动画设置",
            "Artifacts earned": "获得神器",
            "Artifacts earned (This AM-Reset)": "获得神器（本次AM重置）",
            "Audio Settings": "音频设置",
            "Auto Save": "自动保存",
            "Autominer count": "自动采矿机数量",
            "Autosave": "自动保存",
            "Autosave interval: ": "自动保存间隔：",
            "Background music: ": "背景音乐：",
            "Base Bonus: ": "基础加成：",
            "Base Currency": "基础货币",
            "Block Stats": "方块统计",
            "Block breaking: ": "方块破坏：",
            "Build": "建造",
            "Calculation Details": "计算详情",
            "Cllick & hold mining": "点击并按住采矿",
            "Commission Milestones": "委托里程碑",
            "Commission Progress": "委托进度",
            "Commission refresh duration": "委托刷新持续时间",
            "Commission request multiplier": "委托请求倍率",
            "Commission reward multiplier": "委托奖励倍率",
            "Commissions per refresh (max)": "每次刷新委托数（上限）",
            "Constructions": "建筑",
            "Culmbio": "库姆比奥",
            "Currencies": "货币",
            "Current": "当前",
            "Current Milestones: ": "当前里程碑：",
            "Current Multiplier: ": "当前倍率：",
            "Custom": "自定义",
            "DIGICON": "DIGICON",
            "Darius Dan": "达里乌斯·丹",
            "Debug Item": "调试物品",
            "Delete Mode": "删除模式",
            "Display Options": "显示选项",
            "Dissolve your current resources and your progress into malleable Aether Particles": "将你当前的资源和进度溶解为可塑的以太粒子",
            "Drag items here to activate their effects": "将物品拖放到此处以激活其效果",
            "EVERYTHING AFTER RESETTING IS HEAVILY WORK IN PROGRESS": "重置后的所有内容仍在重度开发中",
            "Emblem of Trading": "交易徽章",
            "Freepik": "Freepik",
            "Gameplay effects: ": "游戏效果：",
            "General Settings": "通用设置",
            "Good Ware": "Good Ware",
            "Gregor Cresnar Premium": "Gregor Cresnar Premium",
            "Insults, appreciation letters and support you can send to dev@cbrugger.com": "辱骂、感谢信和支持邮件请发送至 dev@cbrugger.com",
            "Last AM reset ": "上次AM重置 ",
            "Locations unlocked": "已解锁地点",
            "Manage Save Slots": "管理存档位",
            "Master: ": "大师：",
            "Masteries": "精通",
            "Max all to tier up": "全部升满以提升层级",
            "Mehwish": "Mehwish",
            "Mining": "采矿",
            "Mining particle amount: ": "采矿粒子数量：",
            "More sacrifices = more Aether Particles!": "更多献祭 = 更多以太粒子！",
            "Most assets are generated with AI. I don't have money to hire a designer, give me a break....": "大部分素材由AI生成。我没钱请设计师，饶了我吧……",
            "Multiplier: ": "倍率：",
            "Mute sounds when game is in background": "游戏在后台时静音",
            "Next at ": "下次于",
            "No autominers available. Progress further to unlock one.": "没有可用的自动采矿机。继续推进以解锁。",
            "No construction blueprint selected": "未选择建筑蓝图",
            "No processors unlocked yet. Unlock processors to start processing materials!": "尚未解锁处理器。解锁处理器以开始加工材料！",
            "Number Notation: ": "数字记法：",
            "Other Stats": "其他统计",
            "Other images:": "其他图片：",
            "PIXARTIST": "PIXARTIST",
            "QOL Visibility": "便利性显示",
            "Quantum Quarry": "量子采石场",
            "Reset Information": "重置信息",
            "Reset available in ": "后可重置",
            "Select Blueprint": "选择蓝图",
            "Show AI-generated images": "显示AI生成图片",
            "Show block gain notifications": "显示方块获得通知",
            "Show block mining animation": "显示方块开采动画",
            "Show floating texts": "显示浮动文本",
            "Show locked locations": "显示已锁定地点",
            "Show locked resources": "显示已锁定资源",
            "Show maxed upgrades": "显示已满级升级",
            "Show owned amount on costs": "在消耗上显示拥有数量",
            "Show toast notifications": "显示弹窗通知",
            "Show upgrade block costs": "显示升级方块消耗",
            "Smashicons": "Smashicons",
            "Some icons are made by:": "部分图标作者：",
            "Standard": "标准",
            "Stat Bonuses": "属性加成",
            "Stockio": "Stockio",
            "Stored commission refreshes (max)": "存储的委托刷新次数（上限）",
            "Switch to the \\\"Constructions\\\" view to choose a blueprint to build!": "切换到\"建筑\"视图选择要建造的蓝图！",
            "Those Icons": "Those Icons",
            "Time Bonus": "时间加成",
            "Time Multiplier ": "时间倍率 ",
            "Tool tier ups": "工具层级提升",
            "Tool tier ups (This AM-Reset)": "工具层级提升（本次AM重置）",
            "Total AM Resets": "AM重置总计",
            "Total Multiplier": "总倍率",
            "Total mined blocks": "开采方块总计",
            "Total mined blocks (This AM-Reset)": "开采方块总计（本次AM重置）",
            "Total upgrades bought": "购买升级总计",
            "Total upgrades bought (This AM-Reset)": "购买升级总计（本次AM重置）",
            "UI sound effects: ": "UI音效：",
            "Uniconlabs": "Uniconlabs",
            "Will be Kept": "将保留",
            "Will be Reset": "将重置",
            // === 升级系统翻译词条 ===
            "Advanced Features": "高级功能",
            "Auto Mining Speed": "自动采矿速度",
            "Autobuyer Batch Size": "自动购买批量大小",
            "Autobuyer Speed": "自动购买速度",
            "Automate various aspects of the game to progress faster.": "自动化游戏的各个方面以更快推进进度。",
            "Automation": "自动化",
            "Buy 50 upgrades (all time) to unlock the autobuyer.": "累计购买50次升级以解锁自动购买器。",
            "Carry-Over": "继承",
            "Charge per Action": "每次行动充能",
            "Charge per Second": "每秒充能",
            "Charging": "充能中",
            "Charging Bar": "充能条",
            "Commission Difficulty Scaling": "委托难度缩放",
            "Complete All - Rarity Filter": "全部完成 - 稀有度筛选",
            "Complete All Button": "全部完成按钮",
            "Construction": "建筑",
            "Debug Locked & Maxed Upgrades": "调试锁定和满级升级",
            "Hold to Mine": "按住采矿",
            "Hold to Mine II": "按住采矿 II",
            "Improve your commissions and their rewards.": "提升你的委托及其奖励。",
            "Increase how fast you mine while holding down on a block.": "提升按住方块时的采矿速度。",
            "Increase the chances to find more valuable blocks": "提升发现更有价值方块的几率",
            "Increase the max amount of commissions available at once": "提升同时可进行的委托最大数量",
            "Keep Tool Upgrades on Tier Up": "进阶时保留工具升级",
            "Keep more of your progress through reset layers.": "通过重置层级保留更多进度。",
            "Locked": "已锁定",
            "Manual Charge Speed": "手动充能速度",
            "Manual Refresh Button": "手动刷新按钮",
            "Max Charge Storage": "最大充能容量",
            "Max Commissions": "最大委托数",
            "Max out the Refresh Duration upgrade to unlock this upgrade.": "将刷新持续时间升级升至满级以解锁此升级。",
            "Mine 1,000 blocks to unlock this upgrade.": "挖1000个方块以解锁此升级。",
            "Multiply the rewards you get from commissions": "倍增你从委托获得的奖励",
            "New mechanics and features to progress further in the game.": "新机制和新功能以进一步推进游戏进度。",
            "Normal Upgrades": "普通升级",
            "Quality of Life": "便利性",
            "Refresh Duration": "刷新持续时间",
            "Refresh Reduction Efficiency": "刷新减少效率",
            "Refresh Storage": "刷新存储",
            "Resource Filters": "资源筛选",
            "Resource Tooltips": "资源提示",
            "Reward Multiplier": "奖励倍率",
            "Spawn Chance": "生成几率",
            "Stats Panel": "属性面板",
            "Tab Pinning": "标签页固定",
            "Theme Customization": "主题自定义",
            "Unlock 2 locations to unlock this upgrade.": "解锁2个地点以解锁此升级。",
            "Unlock Locations": "解锁地点",
            "Unlock and upgrade a powerful charging system to automate your mining process": "解锁并升级一个强大的充能系统来自动化你的采矿过程",
            "Unlock new locations to gather new types of resources and progress further.": "解锁新地点以收集新类型的资源并进一步推进。",
            "Unlock the Autobuyer first.": "先解锁自动购买器。",
            "Unlock the Charging Bar first.": "先解锁充能条。",
            "Unlock the Complete All Button to unlock this upgrade": "解锁全部完成按钮以解锁此升级",
            "Unlock the ability to pin tabs in the sidebar. Drag the divider to resize them, and use the arrows to reorder.": "解锁在侧边栏固定标签页的功能。拖动分隔条可调整大小，使用箭头重新排序。",
            "Unlock the refresh duration reducer button to unlock this upgrade": "解锁刷新持续时间减少按钮以解锁此升级",
            "Unlocked": "已解锁",
            "Upgrade Autobuyer": "升级自动购买器",
            "Upgrade Hold to Mine to level 5 to unlock this upgrade.": "将按住采矿升级升至5级以解锁此升级。",
            "Various quality of life improvements to enhance your gameplay experience.": "各种便利性改进以提升你的游戏体验。",
        };
    }

    // 资源名词翻译（备用）
    window.cnResourceNames = window.cnResourceNames || {};
    // 正则替换（备用）
    window.cnRegReplace = window.cnRegReplace || new Map();
    // 前缀/后缀（备用）
    window.cnPrefix = window.cnPrefix || {};
    window.cnPostfix = window.cnPostfix || {};
    // 排除规则（备用）
    window.cnExcludeWhole = window.cnExcludeWhole || [];
    window.cnExcludePostfix = window.cnExcludePostfix || [];
    // 分类详细数据（由 cnItems 数组值自动构建，此处仅声明）
    window.cnCategories = window.cnCategories || {};

    // ============================================================
    // 汉化核心逻辑（与之前版本一致，略作优化）
    // ============================================================
    var cnConfig = window.cnConfig;

    function normalizeForMatching(str) {
        if (typeof str !== 'string') return str;
        let result = str;
        if (cnConfig.trimSpaces) result = result.trim();
        return result.split(/\s+/).map(word => {
            if (word.length === 0) return word;
            if (cnConfig.ignoreCase) return word.toLowerCase();
            return word[0].toLowerCase() + word.slice(1);
        }).join(' ');
    }

    function ignoreFirstLetterCaseEqual(a, b) {
        if (a === b) return true;
        return normalizeForMatching(a) === normalizeForMatching(b);
    }

    function addIgnoreCaseFlag(regex) {
        if (!cnConfig.ignoreCase) return regex;
        if (!(regex instanceof RegExp)) return regex;
        if (regex.flags.includes('i')) return regex;
        return new RegExp(regex.source, regex.flags + 'i');
    }

    var _categoryIndex = {};
    function rebuildCategoryIndex() {
        _categoryIndex = {};
        if (window.cnCategories) {
            for (let catName in window.cnCategories) {
                let dict = window.cnCategories[catName];
                if (typeof dict !== 'object') continue;
                let catMap = new Map();
                for (let original in dict) {
                    let chinese = dict[original];
                    if (typeof chinese !== 'string') continue;
                    catMap.set(normalizeForMatching(original), chinese);
                }
                _categoryIndex[catName] = catMap;
            }
        }
        if (window.cnItems) {
            for (let key in window.cnItems) {
                if (!key) continue; // 忽略空键
                let val = window.cnItems[key];
                if (Array.isArray(val) && val.length >= 2) {
                    let chinese = val[0];
                    let category = val[1];
                    if (typeof chinese === 'string' && typeof category === 'string') {
                        if (!_categoryIndex[category]) _categoryIndex[category] = new Map();
                        _categoryIndex[category].set(normalizeForMatching(key), chinese);
                    }
                }
            }
        }
    }

    function getCategoryTranslation(categoryName, rawValue) {
        if (!_categoryIndex[categoryName]) return null;
        let trimmed = rawValue.trim();
        let normValue = normalizeForMatching(trimmed);
        let catMap = _categoryIndex[categoryName];
        if (catMap.has(normValue)) return catMap.get(normValue);
        if (trimmed.endsWith('s')) {
            let singular = trimmed.slice(0, -1);
            if (catMap.has(normalizeForMatching(singular))) return catMap.get(normalizeForMatching(singular));
        }
        return null;
    }

    function isNumberString(str) {
        str = str.trim();
        if (str === '') return false;
        return /^[+-]?\d+(?:\.\d+)?$/.test(str);
    }

    var _staticIndex = {};
    var _templateList = [];
    var _resourceNameIndex = {};
    var _transCache = {};
    var _tagTargets = [];

    function rebuildIndices() {
        _staticIndex = {};
        _templateList = [];
        _tagTargets = [];
        _transCache = {};
        for (let key in window.cnItems) {
            if (!key) continue; // 跳过空键
            let val = window.cnItems[key];
            if (Array.isArray(val)) {
                if (typeof val[0] === 'string') {
                    _staticIndex[normalizeForMatching(key)] = val[0];
                }
                continue;
            }
            if (typeof val !== 'string') continue;
            if (key.indexOf('{{') !== -1) {
                let { regex, varNames } = templateToRegex(key);
                _templateList.push({ srcTemplate: key, translation: val, regex, varNames });
            } else {
                _staticIndex[normalizeForMatching(key)] = val;
            }
        }
        _templateList.sort((a, b) => {
            let aPre = a.srcTemplate.indexOf('{{');
            let bPre = b.srcTemplate.indexOf('{{');
            if (aPre === -1) aPre = a.srcTemplate.length;
            if (bPre === -1) bPre = b.srcTemplate.length;
            return bPre - aPre;
        });
        for (let key in window.cnItems) {
            if (typeof window.cnItems[key] === "object" && !Array.isArray(window.cnItems[key])) {
                _tagTargets.push({ key, val: window.cnItems[key] });
            }
        }
        _resourceNameIndex = {};
        if (window.cnResourceNames) {
            for (let key in window.cnResourceNames) {
                _resourceNameIndex[normalizeForMatching(key)] = window.cnResourceNames[key];
            }
        }
        rebuildCategoryIndex();
    }

    function templateToRegex(template) {
        let varNames = [];
        let escaped = '';
        let lastIndex = 0;
        while (true) {
            let start = template.indexOf('{{', lastIndex);
            if (start === -1) {
                escaped += template.slice(lastIndex).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                break;
            }
            let end = template.indexOf('}}', start);
            if (end === -1) break;
            escaped += template.slice(lastIndex, start).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            let varName = template.slice(start+2, end);
            varNames.push(varName);
            if (varName === '*' || varName.startsWith('*|') || varName.includes('*|')) {
                escaped += '(.+)';
            } else {
                escaped += '(.+?)';
            }
            lastIndex = end + 2;
        }
        return { regex: new RegExp('^' + escaped + '$', cnConfig.ignoreCase ? 'i' : ''), varNames: varNames };
    }

    function parseListPlaceholder(varName) {
        let sepRegex = /\s*,\s*/;
        let joinStr = '、';
        if (varName === '*') return { sepRegex, joinStr };
        if (varName.startsWith('*|')) {
            let parts = varName.slice(2).split('|');
            let sepPart = parts[0] !== undefined ? parts[0] : '';
            let joinPart = parts[1] !== undefined ? parts[1] : '';
            if (sepPart !== '') {
                let regexMatch = sepPart.match(/^\/(.+)\/([gimuy]*)$/);
                if (regexMatch) {
                    try { sepRegex = new RegExp(regexMatch[1], regexMatch[2]); } catch(e) {
                        sepRegex = new RegExp('\\s*' + sepPart.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*');
                    }
                } else {
                    sepRegex = new RegExp('\\s*' + sepPart.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*');
                }
            }
            if (joinPart !== '') joinStr = joinPart;
        }
        return { sepRegex, joinStr };
    }

    function applyTemplateTranslation(sourceText, srcTemplate, tgtTemplate, node, precompiledRegex, precompiledVarNames) {
        let regex = precompiledRegex, varNames = precompiledVarNames;
        if (!regex) {
            let result = templateToRegex(srcTemplate);
            regex = result.regex;
            varNames = result.varNames;
        }
        let match = sourceText.match(regex);
        if (!match) return null;
        let values = {};
        for (let i = 0; i < varNames.length; i++) {
            let varName = varNames[i];
            let rawValue = match[i+1] || '';
            if (varName === '*' || varName.startsWith('*|')) {
                let { sepRegex, joinStr } = parseListPlaceholder(varName);
                let items = rawValue.split(sepRegex).map(s => s.trim()).filter(s => s);
                let translatedItems = items.map(item => cnItem(item, node));
                values[varName] = translatedItems.join(joinStr);
            } else if (varName === '%d') {
                if (!isNumberString(rawValue)) return null;
                values[varName] = rawValue.trim();
            } else {
                let catName = varName;
                let categoryOnly = false;
                let listMode = false;
                let sepRegex = /\s*,\s*/;
                let joinStr = '、';
                let starIdx = catName.indexOf('*');
                if (starIdx !== -1) {
                    categoryOnly = true;
                    let suffix = catName.slice(starIdx);
                    catName = catName.slice(0, starIdx);
                    if (suffix.startsWith('*|')) {
                        listMode = true;
                        let parsed = parseListPlaceholder(suffix);
                        sepRegex = parsed.sepRegex;
                        joinStr = parsed.joinStr;
                    }
                }
                if (listMode) {
                    let items = rawValue.split(sepRegex).map(s => s.trim()).filter(s => s);
                    let translatedItems = items.map(item => {
                        let t = getCategoryTranslation(catName, item);
                        return t !== null ? t : item.trim();
                    });
                    values[varName] = translatedItems.join(joinStr);
                } else {
                    let translated = getCategoryTranslation(catName, rawValue);
                    if (translated !== null) {
                        values[varName] = translated;
                    } else if (categoryOnly) {
                        values[varName] = rawValue.trim();
                    } else {
                        values[varName] = cnItem(rawValue ? rawValue.trim() : '', node);
                    }
                }
            }
        }
        let result = tgtTemplate.replace(/\{\{([^}]+)\}\}/g, (_, varName) => {
            if (values[varName] !== undefined) return values[varName];
            let idx = varNames.indexOf(varName);
            if (idx !== -1 && match[idx+1]) return match[idx+1].trim();
            return '';
        });
        return result;
    }

    function translateNoun(text) {
        if (!window.cnResourceNames) return null;
        let trimmed = text.trim();
        if (trimmed === "") return null;
        if (window.cnResourceNames.hasOwnProperty(text)) return window.cnResourceNames[text];
        if (window.cnResourceNames.hasOwnProperty(trimmed)) return window.cnResourceNames[trimmed];
        let normKey = normalizeForMatching(trimmed);
        if (_resourceNameIndex.hasOwnProperty(normKey)) return _resourceNameIndex[normKey];
        if (trimmed.endsWith('s')) {
            let singular = trimmed.slice(0, -1);
            if (singular.endsWith('e')) {
                let candidate = singular.slice(0, -1);
                if (_resourceNameIndex.hasOwnProperty(normalizeForMatching(candidate))) return _resourceNameIndex[normalizeForMatching(candidate)];
            }
            if (_resourceNameIndex.hasOwnProperty(normalizeForMatching(singular))) return _resourceNameIndex[normalizeForMatching(singular)];
        }
        return null;
    }

    function autoTranslateResourceName(text) {
        if (!window.cnResourceNames) return null;
        let match1 = text.match(/^([A-Za-z][A-Za-z\s]+):\s*(.+)$/i);
        if (match1) {
            let resource = match1[1].trim();
            let value = match1[2];
            if (_resourceNameIndex.hasOwnProperty(normalizeForMatching(resource))) {
                return _resourceNameIndex[normalizeForMatching(resource)] + '：' + value;
            }
        }
        let match2 = text.match(/^([\+\-]\d+(?:\.\d+)?)\s+([A-Za-z][A-Za-z\s]+)$/i);
        if (match2) {
            let num = match2[1];
            let resource = match2[2].trim();
            if (_resourceNameIndex.hasOwnProperty(normalizeForMatching(resource))) return num + ' ' + _resourceNameIndex[normalizeForMatching(resource)];
        }
        let match3 = text.match(/^(\d+(?:\.\d+)?)\s+([A-Za-z][A-Za-z\s]+)$/i);
        if (match3) {
            let num = match3[1];
            let resource = match3[2].trim();
            if (_resourceNameIndex.hasOwnProperty(normalizeForMatching(resource))) return num + ' ' + _resourceNameIndex[normalizeForMatching(resource)];
        }
        return null;
    }

    function cnItemByTag(text, itemgroup, node, textori) {
        for (let i in itemgroup) {
            if (i[0] == '.') {
                let current_node = node;
                while (current_node) {
                    if (current_node.classList && current_node.classList.contains(i.substr(1))) return itemgroup[i];
                    else if(current_node.parentElement && current_node.parentElement != document.documentElement) current_node = current_node.parentElement;
                    else break;
                }
            } else if (i[0] == '#') {
                let current_node = node;
                while (current_node) {
                    if (current_node.id == i.substr(1)) return itemgroup[i];
                    else if(current_node.parentElement && current_node.parentElement != document.documentElement) current_node = current_node.parentElement;
                    else break;
                }
            } else if (i[0] == '$') {
                if (document.querySelector(i.substr(1)) != null) return itemgroup[i];
            } else if (i[0] == '*') {
                if (textori.includes(i.substr(1))) return itemgroup[i];
            }
        }
        return null;
    }

    function cnItem(text, node) {
        if (typeof text !== "string") return text;
        if (_transCache.hasOwnProperty(text)) return _transCache[text];
        let textori = text;

        let text_prefix = "";
        for (let prefix in window.cnPrefix) {
            if (text.length >= prefix.length) {
                let head = text.substr(0, prefix.length);
                if (ignoreFirstLetterCaseEqual(head, prefix)) {
                    text_prefix += window.cnPrefix[prefix];
                    text = text.substr(prefix.length);
                }
            }
        }

        let text_postfix = "";
        for (let postfix in window.cnPostfix) {
            if (text.length >= postfix.length) {
                let tail = text.substr(-postfix.length);
                if (ignoreFirstLetterCaseEqual(tail, postfix)) {
                    text_postfix = window.cnPostfix[postfix] + text_postfix;
                    text = text.substr(0, text.length - postfix.length);
                    break;
                }
            }
        }

        let text_reg_exclude_postfix = "";
        for (let reg of window.cnExcludePostfix) {
            let ignoreCaseReg = addIgnoreCaseFlag(reg);
            let result = text.match(ignoreCaseReg);
            if (result) {
                text_reg_exclude_postfix = result[0] + text_reg_exclude_postfix;
                text = text.substr(0, text.length - result[0].length);
            }
        }

        for (let reg of window.cnExcludeWhole) {
            if (addIgnoreCaseFlag(reg).test(text)) {
                return _transCache[textori] = text_prefix + text + text_reg_exclude_postfix + text_postfix;
            }
        }

        let normText = normalizeForMatching(text);
        if (_staticIndex.hasOwnProperty(normText)) {
            return _transCache[textori] = text_prefix + _staticIndex[normText] + text_reg_exclude_postfix + text_postfix;
        }

        for (let [key, value] of window.cnRegReplace.entries()) {
            let ignoreCaseKey = addIgnoreCaseFlag(key);
            if (ignoreCaseKey.test(text)) {
                let replaced;
                if (typeof value === 'function') {
                    let match = text.match(ignoreCaseKey);
                    replaced = value(match, text, node);
                } else {
                    replaced = text.replace(ignoreCaseKey, value);
                    replaced = cnItem(replaced, node);
                }
                return _transCache[textori] = text_prefix + replaced + text_reg_exclude_postfix + text_postfix;
            }
        }

        for (let { srcTemplate, translation, regex, varNames } of _templateList) {
            let result = applyTemplateTranslation(text, srcTemplate, translation, node, regex, varNames);
            if (result !== null) {
                return _transCache[textori] = text_prefix + result + text_reg_exclude_postfix + text_postfix;
            }
        }

        for (let { key, val } of _tagTargets) {
            let result = cnItemByTag(key, val, node, textori);
            if (result != null) {
                return _transCache[textori] = text_prefix + result + text_reg_exclude_postfix + text_postfix;
            }
        }

        let nounResult = translateNoun(text);
        if (nounResult !== null) {
            return _transCache[textori] = text_prefix + nounResult + text_reg_exclude_postfix + text_postfix;
        }

        let autoResult = autoTranslateResourceName(text);
        if (autoResult !== null) {
            return _transCache[textori] = text_prefix + autoResult + text_reg_exclude_postfix + text_postfix;
        }

        // 记录未翻译词条
        if (!window.cnItems._OTHER_) window.cnItems._OTHER_ = [];
        let save_text = text;
        if (window.cnItems._OTHER_.indexOf(save_text) === -1 && window.cnItems._OTHER_.length < 10000) {
            window.cnItems._OTHER_.push(save_text);
            window.cnItems._OTHER_.sort();
            if (window.__viewerUpdate) window.__viewerUpdate();
        }
        return _transCache[textori] = text_prefix + text + text_reg_exclude_postfix + text_postfix;
    }

    // 工具挂载
    window.CN_Helper = {
        getUntranslatedList: () => window.cnItems._OTHER_ || [],
        exportUntranslated: function(filename = "untranslated.json") {
            let data = JSON.stringify(window.cnItems._OTHER_, null, 2);
            let blob = new Blob([data], {type: "application/json"});
            let url = URL.createObjectURL(blob);
            let a = document.createElement("a");
            a.href = url;
            a.download = filename;
            a.click();
            URL.revokeObjectURL(url);
        },
        addTranslations: function(translations) {
            for (let eng in translations) window.cnItems[eng] = translations[eng];
            rebuildIndices();
        },
        extendResourceNames: function(more) {
            if (!window.cnResourceNames) window.cnResourceNames = {};
            Object.assign(window.cnResourceNames, more);
            rebuildIndices();
        },
        getResourceNames: () => window.cnResourceNames || {},
        rebuildIndex: rebuildIndices,
        setConfig: function(newConfig) {
            Object.assign(cnConfig, newConfig);
            rebuildIndices();
        },
        getConfig: () => Object.assign({}, cnConfig),
        extendCategories: function(more) {
            if (!window.cnCategories) window.cnCategories = {};
            for (let catName in more) {
                if (!window.cnCategories[catName]) window.cnCategories[catName] = {};
                Object.assign(window.cnCategories[catName], more[catName]);
            }
            rebuildCategoryIndex();
        },
        getCategories: () => window.cnCategories || {}
    };

    // ============================================================
    // 悬浮窗查看器 (整合)
    // ============================================================
    function setupViewer() {
        if (document.querySelector('.cn-other-widget')) return;

        const style = document.createElement('style');
        style.textContent = `
.cn-other-widget{
    all:initial;
    font-family:"Microsoft YaHei","Consolas","PingFang SC",sans-serif;
    position:fixed;
    z-index:999999;
    right:20px;bottom:80px;
    width:420px;
    max-height:none;
    background:#fff;
    border:1px solid #e0e0e0;
    border-radius:12px;
    box-shadow:0 4px 24px rgba(0,0,0,0.1);
    color:#333;
    font-size:13px;
    overflow:hidden;
    display:flex;
    flex-direction:column;
    transition:box-shadow 0.2s;
    user-select:none
}
.cn-other-widget:hover{box-shadow:0 6px 32px rgba(0,0,0,0.15)}
.cn-other-widget.collapsed{display:none}
.cn-other-ball{
    all:initial;
    position:fixed;
    z-index:999999;
    right:20px;bottom:80px;
    width:48px;height:48px;
    border-radius:50%;
    background:#d4a017;
    box-shadow:0 2px 12px rgba(212,160,23,0.3);
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:16px;
    color:#fff;
    font-weight:bold;
    user-select:none;
    transition:transform 0.15s
}
.cn-other-ball:hover{transform:scale(1.1)}
.cn-other-ball .badge{
    position:absolute;
    top:-4px;right:-4px;
    background:#e74c3c;
    color:#fff;
    font-size:10px;
    min-width:18px;height:18px;
    border-radius:9px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:0 4px
}
.cn-other-widget .cn-head{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:8px 14px;
    background:#f8f8f8;
    border-bottom:1px solid #eee;
    cursor:move;
    flex-shrink:0
}
.cn-other-widget .cn-head .cn-title{
    color:#d4a017;
    font-weight:bold;
    font-size:14px;
    display:flex;
    align-items:center;
    gap:6px
}
.cn-other-widget .cn-head .cn-btns{display:flex;gap:4px}
.cn-other-widget .cn-head .cn-btns button{
    background:none;border:1px solid #ddd;
    color:#666;width:26px;height:26px;
    border-radius:6px;cursor:pointer;font-size:13px;
    padding:0;display:flex;align-items:center;justify-content:center;
    transition:all 0.15s;line-height:1
}
.cn-other-widget .cn-head .cn-btns button:hover{
    background:#f0f0f0;border-color:#ccc;color:#333
}
.cn-other-widget .cn-body{
    padding:10px 14px;
    flex:1;
    display:flex;
    flex-direction:column;
    min-height:0
}
.cn-other-widget .cn-info{
    color:#999;
    font-size:11px;
    margin-bottom:8px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-shrink:0
}
.cn-other-widget .cn-info .cn-copy-all{
    color:#d4a017;
    cursor:pointer;
    font-size:12px;
    padding:3px 10px;
    border:1px solid #e8d5a0;
    border-radius:4px;
    transition:all 0.15s
}
.cn-other-widget .cn-info .cn-copy-all:hover{
    background:#d4a017;
    color:#fff;
    border-color:#d4a017
}
.cn-other-widget .cn-body textarea{
    width:100%;
    flex:1;
    min-height:280px;
    background:#fafafa;
    border:1px solid #e8e8e8;
    border-radius:6px;
    color:#444;
    font-size:12px;
    font-family:"Consolas","Courier New",monospace;
    line-height:1.7;
    padding:10px;
    resize:vertical;
    outline:none;
    box-sizing:border-box;
    white-space:pre;
    tab-size:4
}
.cn-other-widget .cn-body textarea:focus{border-color:#d4a017}
.cn-other-widget .cn-body .cn-emp{
    color:#bbb;
    text-align:center;
    padding:40px 0;
    font-style:italic;
    font-size:13px
}
.cn-other-widget .cn-foot{
    padding:5px 14px 8px;
    text-align:center;
    font-size:10px;
    color:#ccc;
    border-top:1px solid #f0f0f0;
    flex-shrink:0;
    position:relative
}
.cn-other-widget .cn-resize{
    position:absolute;
    right:0;bottom:0;
    width:16px;height:16px;
    cursor:nwse-resize;
    opacity:0.4;
    background:linear-gradient(135deg,transparent 50%,#bbb 50%,#bbb 54%,transparent 54%),
               linear-gradient(135deg,transparent 50%,#ddd 50%,#ddd 54%,transparent 54%);
    background-size:100% 100%,8px 8px;
    background-position:0 0,4px 4px;
    background-repeat:no-repeat
}
.cn-other-widget .cn-resize:hover{opacity:1}
`;
        document.head.appendChild(style);

        const ball = document.createElement('div');
        ball.className = 'cn-other-ball';
        ball.innerHTML = '译<span class="badge">0</span>';
        document.body.appendChild(ball);

        const w = document.createElement('div');
        w.className = 'cn-other-widget';
        w.innerHTML = [
            '<div class="cn-head">',
            '  <span class="cn-title">📋 未翻译词条 <span class="cn-badge" style="font-size:11px;color:#999;font-weight:normal">(0)</span></span>',
            '  <span class="cn-btns">',
            '    <button class="cn-fold" title="折叠/展开">━</button>',
            '    <button class="cn-close" title="关闭">✕</button>',
            '  </span>',
            '</div>',
            '<div class="cn-body">',
            '  <div class="cn-info">',
            '    <span class="cn-count">等待数据...</span>',
            '    <span class="cn-copy-all">📋 复制全部</span>',
            '  </div>',
            '  <textarea id="cn-ta" readonly wrap="off"></textarea>',
            '</div>',
            '<div class="cn-foot">拖动右下角调整窗口大小 | By：人民当家做主<div class="cn-resize" title="拖动右下角可调整窗口大小"></div></div>'
        ].join('');
        document.body.appendChild(w);

        const ta = w.querySelector('#cn-ta');
        const countEl = w.querySelector('.cn-count');
        const copyAll = w.querySelector('.cn-copy-all');
        const foldBtn = w.querySelector('.cn-fold');
        const closeBtn = w.querySelector('.cn-close');
        const headEl = w.querySelector('.cn-head');
        const badgeEl = w.querySelector('.cn-badge');
        const ballBadge = ball.querySelector('.badge');

        let wPos = { x: 0, y: 0 };
        try {
            const saved = localStorage.getItem('cn_viewer_pos2');
            if (saved) {
                wPos = JSON.parse(saved);
                w.style.left = wPos.x + 'px';
                w.style.top = wPos.y + 'px';
                w.style.right = 'auto';
                w.style.bottom = 'auto';
            }
        } catch(e) {}

        let wDrag = false, wSX, wSY, wOX, wOY;
        headEl.addEventListener('mousedown', e => {
            if (e.target.closest('.cn-btns')) return;
            e.preventDefault();
            wDrag = false;
            wSX = e.clientX; wSY = e.clientY;
            const r = w.getBoundingClientRect();
            wOX = r.left; wOY = r.top;
            const onMove = ev => {
                wDrag = true;
                wPos.x = wOX + ev.clientX - wSX;
                wPos.y = wOY + ev.clientY - wSY;
                w.style.left = wPos.x + 'px';
                w.style.top = wPos.y + 'px';
                w.style.right = 'auto';
                w.style.bottom = 'auto';
            };
            const onUp = () => {
                document.removeEventListener('mousemove', onMove);
                document.removeEventListener('mouseup', onUp);
                localStorage.setItem('cn_viewer_pos2', JSON.stringify(wPos));
            };
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onUp);
        });

        const resizeEl = w.querySelector('.cn-resize');
        let resizeStart = false, rSX, rSY, rW, rH;
        resizeEl.addEventListener('mousedown', function(e) {
            e.preventDefault(); e.stopPropagation();
            rSX = e.clientX; rSY = e.clientY;
            rW = w.offsetWidth; rH = w.offsetHeight;
            resizeStart = true;
            document.addEventListener('mousemove', resizeMove);
            document.addEventListener('mouseup', resizeUp);
        });
        function resizeMove(ev) {
            if (!resizeStart) return;
            w.style.width = Math.max(300, rW + ev.clientX - rSX) + 'px';
            w.style.height = Math.max(200, rH + ev.clientY - rSY) + 'px';
            w.style.maxHeight = 'none';
        }
        function resizeUp() {
            resizeStart = false;
            document.removeEventListener('mousemove', resizeMove);
            document.removeEventListener('mouseup', resizeUp);
        }

        let bDrag = false, bSX, bSY, bOX, bOY;
        ball.addEventListener('mousedown', function(e) {
            bDrag = false;
            bSX = e.clientX; bSY = e.clientY;
            bOX = ball.offsetLeft; bOY = ball.offsetTop;
            function onMove(ev) {
                bDrag = true;
                ball.style.left = (bOX + ev.clientX - bSX) + 'px';
                ball.style.top = (bOY + ev.clientY - bSY) + 'px';
                ball.style.right = 'auto';
                ball.style.bottom = 'auto';
            }
            function onUp() {
                document.removeEventListener('mousemove', onMove);
                document.removeEventListener('mouseup', onUp);
                if (!bDrag) expandFromBall();
            }
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onUp);
        });

        function collapseToBall() {
            const wr = w.getBoundingClientRect();
            w.classList.add('collapsed');
            ball.style.left = wr.left + 'px';
            ball.style.top = wr.top + 'px';
            ball.style.right = 'auto';
            ball.style.bottom = 'auto';
            ball.style.display = 'flex';
        }
        function expandFromBall() {
            const br = ball.getBoundingClientRect();
            w.classList.remove('collapsed');
            w.style.left = br.left + 'px';
            w.style.top = br.top + 'px';
            w.style.right = 'auto';
            w.style.bottom = 'auto';
            wPos.x = br.left;
            wPos.y = br.top;
            ball.style.display = 'none';
        }
        foldBtn.addEventListener('click', collapseToBall);
        closeBtn.addEventListener('click', () => { w.style.display = 'none'; });

        copyAll.addEventListener('click', () => {
            if (!ta.value) return;
            navigator.clipboard.writeText(ta.value).then(() => {
                const orig = copyAll.textContent;
                copyAll.textContent = '✅ 已复制 ' + ta.value.split('\n').length + ' 条';
                copyAll.style.borderColor = '#4caf50';
                copyAll.style.color = '#4caf50';
                setTimeout(() => {
                    copyAll.textContent = orig;
                    copyAll.style.borderColor = '#e8d5a0';
                    copyAll.style.color = '#d4a017';
                }, 1500);
            }).catch(() => {
                ta.select();
                document.execCommand('copy');
            });
        });

        function updateViewer() {
            const items = window.cnItems && Array.isArray(window.cnItems._OTHER_) ? window.cnItems._OTHER_ : [];
            const filtered = items.filter(s => typeof s === 'string' && s.length > 0 && /[a-zA-Z]/.test(s) && s.indexOf('By：') === -1);
            badgeEl.textContent = '(' + filtered.length + ')';
            ballBadge.textContent = filtered.length > 99 ? '99+' : filtered.length;
            if (filtered.length === 0) {
                countEl.textContent = '暂无未翻译词条';
                ta.value = '';
                return;
            }
            countEl.textContent = '共 ' + filtered.length + ' 条（已去重）';
            ta.value = filtered.map(s => '"' + s + '",').join('\n');
        }

        window.__viewerUpdate = updateViewer;
        updateViewer();

        document.addEventListener('keydown', function(e) {
            if (e.key === 'F8') {
                e.preventDefault();
                if (w.classList.contains('collapsed') || w.style.display === 'none' || ball.style.display === 'flex') {
                    ball.style.display = 'none';
                    w.classList.remove('collapsed');
                    w.style.display = '';
                    if (wPos.x && wPos.y) {
                        w.style.left = wPos.x + 'px';
                        w.style.top = wPos.y + 'px';
                    } else {
                        w.style.left = (window.innerWidth - 440) + 'px';
                        w.style.top = '100px';
                    }
                    w.style.right = 'auto';
                    w.style.bottom = 'auto';
                    w.style.width = '420px';
                    w.style.height = 'auto';
                    w.style.maxHeight = 'none';
                    updateViewer();
                } else {
                    collapseToBall();
                }
            }
        });

        ball.style.left = (window.innerWidth - 68) + 'px';
        ball.style.top = (window.innerHeight - 128) + 'px';
        ball.style.right = 'auto';
        ball.style.bottom = 'auto';
        ball.style.display = 'flex';
        w.classList.add('collapsed');
    }

    // ============================================================
    // 页面汉化启动
    // ============================================================
    var transTaskMgr = {
        tasks: [],
        addTask: function(node, attr, text) { this.tasks.push({node, attr, text}); },
        doTask: function() { let task; while (task = this.tasks.pop()) task.node[task.attr] = task.text; }
    };

    function TransSubTextNode(node) {
        if (node.childNodes.length) {
            for (let subnode of node.childNodes) {
                if (subnode.nodeName === "#text") {
                    let text = subnode.textContent;
                    let cnText = cnItem(text, subnode);
                    cnText !== text && transTaskMgr.addTask(subnode, 'textContent', cnText);
                } else if (subnode.nodeName !== "SCRIPT" && subnode.nodeName !== "STYLE" && subnode.nodeName !== "TEXTAREA") {
                    if (!subnode.childNodes || !subnode.childNodes.length) {
                        let text = subnode.innerText;
                        let cnText = cnItem(text, subnode);
                        cnText !== text && transTaskMgr.addTask(subnode, 'innerText', cnText);
                    } else {
                        TransSubTextNode(subnode);
                    }
                }
            }
        }
    }

    function startHanhua() {
        if (!document.body) {
            setTimeout(startHanhua, 50);
            return;
        }
        rebuildIndices();
        setupViewer();
        console.log("锅巴汉化已启动 (V0.9.5) - 支持分类匹配、未翻译词条查看，内置示例翻译数据");
        TransSubTextNode(document.body);
        transTaskMgr.doTask();

        let observer_config = { attributes: false, characterData: true, childList: true, subtree: true };
        let targetNode = document.body;
        let observer = new MutationObserver(function(e) {
            observer.disconnect();
            for (let mutation of e) {
                if (mutation.target.nodeName === "SCRIPT" || mutation.target.nodeName === "STYLE" || mutation.target.nodeName === "TEXTAREA") continue;
                if (mutation.target.nodeName === "#text") {
                    mutation.target.textContent = cnItem(mutation.target.textContent, mutation.target);
                } else if (!mutation.target.childNodes || !mutation.target.childNodes.length) {
                    if (mutation.target.innerText) mutation.target.innerText = cnItem(mutation.target.innerText, mutation.target);
                } else if (mutation.addedNodes.length) {
                    for (let node of mutation.addedNodes) {
                        if (node.nodeName === "#text") {
                            node.textContent = cnItem(node.textContent, node);
                        } else if (node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE" && node.nodeName !== "TEXTAREA") {
                            if (!node.childNodes || !node.childNodes.length) {
                                if (node.innerText) node.innerText = cnItem(node.innerText, node);
                            } else {
                                TransSubTextNode(node);
                            }
                        }
                    }
                }
            }
            transTaskMgr.doTask();
            observer.observe(targetNode, observer_config);
        });
        observer.observe(targetNode, observer_config);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startHanhua);
    } else {
        startHanhua();
    }
})();