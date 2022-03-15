var colors = [
  '#DDB6F2',
  '#F5C2E7',
  '#E8A2AF',
  '#F28FAD',
  '#F8BD96',
  '#FAE3B0',
  '#ABE9B3',
  '#B5E8E0',
  '#96CDFB',
  '#89DCEB',
]
var distroList = [
  [
    'Pop!_OS',
    'assets/popos.png',
    'https://pop.system76.com/',
  ],
  [
    'Kali Linux',
    'assets/kali.png',
    'https://www.kali.org/',
  ],
  [
    'Arch Linux',
    'assets/arch.png',
    'https://archlinux.org/',
  ],
  [
    'Raspberry Pi OS',
    'assets/raspios.png',
    'https://www.raspberrypi.com/software/',
  ],
  [
    'Debian',
    'assets/debian.png',
    'https://www.debian.org/',
  ],
  [
    'Fedora',
    'assets/fedora.png',
    'https://getfedora.org/',
  ],
  [
    'Manjaro',
    'assets/manjaro.png',
    'https://manjaro.org/',
  ],
  [
    'Linux Mint',
    'assets/mint.png',
    'https://linuxmint.com/',
  ],
  [
    'Ubuntu',
    'assets/ubuntu.png',
    'https://ubuntu.com/download',
  ],
  [
    'Zorin OS',
    'assets/zorin.png',
    'https://zorin.com/os/',
  ],
  [
    'Gentoo',
    'assets/gentoo.png',
    'https://www.gentoo.org/',
  ],
  [
    'Elementary OS',
    'assets/elementary.png',
    'https://elementary.io/',
  ],
  [
    'openSUSE',
    'assets/opensuse.png',
    'https://www.opensuse.org/',
  ],
  [
    'KISS Linux',
    'assets/kiss.png',
    'https://kisslinux.org/',
  ],
  [
    'Void Linux',
    'assets/void.png',
    'https://voidlinux.org/',
  ],
  [
    'Artix Linux',
    'assets/artix.png',
    'https://artixlinux.org/',
  ],
  [
    'EndeavourOS',
    'assets/endeavour.png',
    'https://endeavouros.com/',
  ],
  [
    'OpenBSD',
    'assets/openbsd.png',
    'http://www.openbsd.org/',
  ],
  [
    'FreeBSD',
    'assets/freebsd.png',
    'https://www.freebsd.org/',
  ],
  [
    'Puppy Linux',
    'assets/puppy.png',
    'https://puppylinux.com/',
  ],
  [
    'SteamOS',
    'assets/steamos.png',
    'https://store.steampowered.com/steamos/',
  ],
  [
    'Garuda Linux',
    'assets/garuda.png',
    'https://garudalinux.org/',
  ],
  [
    'Parrot OS',
    'assets/parrot.png',
    'https://parrotsec.org/',
  ],
  [
    'Deepin',
    'assets/deepin.png',
    'https://www.deepin.org/en/',
  ],
  [
    'NixOS',
    'assets/nixos.png',
    'https://nixos.org/',
  ],
  [
    'CentOS',
    'assets/centos.png',
    'https://www.centos.org/',
  ],
  [
    'Lubuntu',
    'assets/lubuntu.png',
    'https://lubuntu.me/',
  ],
  [
    'Kubuntu',
    'assets/kubuntu.png',
    'https://kubuntu.org/',
  ],
  [
    'ArcoLinux',
    'assets/arco.png',
    'https://arcolinux.com/',
  ],
  [
    'Peppermint OS',
    'assets/peppermint.png',
    'https://peppermintos.com/',
  ],
  [
    'KDE neon',
    'assets/kdeneon.png',
    'https://neon.kde.org/',
  ],
  [
    'Tails',
    'assets/tails.png',
    'https://tails.boum.org/',
  ],
  [
    'Qubes OS',
    'assets/qubes.png',
    'https://www.qubes-os.org/',
  ],
  [
    'Clear Linux',
    'assets/clear.png',
    'https://clearlinux.org/',
  ],
]

var amountOfBoxes = 200

function init() {
  let roulette = document.getElementById('rouletteElements')
  roulette.innerHTML = ''

  for (var i = 0; i < amountOfBoxes; i++) {
    var node = document.createElement('div')
    var h3 = document.createElement('h3')
    h3.innerHTML = distroList[i % distroList.length][0]
    h3.style.backgroundColor = colors[i % colors.length]
    node.appendChild(h3)
    roulette.appendChild(node)
  }
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

var width = 80

function play() {
  document.getElementById('chosen').innerHTML = ''
  document.getElementById('confetti-wrapper').innerHTML = ''
  var offset = rand(0, amountOfBoxes * 140 - 180) + 180
  document.getElementById('rouletteElements').style.left =
    -(offset - 180) + 'px'

  let chosenDistro = document.createElement('div' % distroList.length)

  var index = parseInt(offset / 140)
  // chosenDistro.style.backgroundColor = colors[index % colors.length]
  var distro = distroList[index % distroList.length]
  console.log(distro)
  chosenDistro.innerHTML = `<a href="${distro[2]}"><img src="${distro[1]}"/><br/>${distro[0]}</a>`

  setTimeout(function () {
    document.getElementById('chosen').appendChild(chosenDistro)
    document.getElementById('rouletteElements').style.transitionDuration = '0s'

    setTimeout(function () {
      document.getElementById('rouletteElements').style.transitionDuration =
        '5s'
      startConfetti()
    }, 50)
  }, 5500)

  function startConfetti() {
    document.getElementById('confetti-wrapper').innerHTML = ''
    for (i = 0; i < 100; i++) {
      // Random rotation
      var randomRotation = Math.floor(Math.random() * 360)
      // Random Scale
      var randomScale = Math.random() * 1
      // Random width & height between 0 and viewport
      var randomWidth = Math.floor(
        Math.random() *
          Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
      )
      var randomHeight = Math.floor(
        Math.random() *
          Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 500
          )
      )

      var randomAnimationDelay = Math.floor(Math.random() * 15)

      var colors = [
        '#0CD977',
        '#FF1C1C',
        '#FF93DE',
        '#5767ED',
        '#FFC61C',
        '#8497B0',
      ]
      var randomColor = colors[Math.floor(Math.random() * colors.length)]

      var confetti = document.createElement('div')
      confetti.className = 'confetti'
      if (confetti.style.top < window.innerHeight) {
        confetti.style.top = (randomHeight % window.innerHeight) + 'px'
      }
      if (confetti.style.right < window.innerWidth) {
        confetti.style.right = (randomWidth % window.innerWidth) + 'px'
      }
      confetti.style.backgroundColor = randomColor
      confetti.style.obacity = randomScale
      confetti.style.transform = 'skew(15deg) rotate(' + randomRotation + 'deg)'
      confetti.style.animationDelay = randomAnimationDelay + 's'
      document.getElementById('confetti-wrapper').appendChild(confetti)
    }
  }
}
