let handler = function (m) {
  this.sendContact(m.chat, '557191467119', 'Paulohenriyy', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
