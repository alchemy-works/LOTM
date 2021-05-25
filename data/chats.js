function randomColor() {
    return (Math.random() * 0xffffff << 0).toString(16)
}

export const chats = [
    { title: '塔罗会', },
    { title: '救赎蔷薇', },
    { title: '黄昏隐士会', },
    { title: '摩斯苦修会', },
    { title: '密修会', },
    { title: '命运的隐士', },
    { title: '灵知会', },
    { title: '灵教团', },
    { title: '生命学派', },
    { title: '玫瑰学派', },
    { title: '极光会', },
    { title: '心理炼金会', },
    { title: '要素黎明', },
    { title: '魔女教派', },
].map(it => {
    return {
        ...it,
        avatar: 'https://api.prodless.com/avatar.png?color=' + randomColor()
    }
})