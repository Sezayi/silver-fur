// require('./noise')

let canvas, ctx, field, w, h, fieldSize, columns, rows, noiseZ, particles, hue
noiseZ = 0
let particleCount = 25000
let particleSize = 1
fieldSize = 90
let fieldForce = 0.05
let noiseSpeed = 0.010
let sORp = true
let trailLength = 0.2
let hueBase = 60
let hueRange = 0
let maxSpeed = 1

class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  add(v) {
    return new Vector(this.x + v.x, this.y + v.y)
  }

  addTo(v) {
    this.x += v.x
    this.y += v.y
  }

  sub(v) {
    return new Vector(this.x - v.x, this.y - v.y)
  }

  subFrom(v) {
    this.x -= v.x
    this.y -= v.y
  }

  mult(n) {
    return new Vector(this.x * n, this.y * n)
  }

  multTo(n) {
    this.x *= n
    this.y *= n
  }

  div(n) {
    return new Vector(this.x / n, this.y / n)
  }

  setAngle(angle) {
    var length = this.getLength()
    this.x = Math.cos(angle) * length
    this.y = Math.sin(angle) * length
  }

  setLength(length) {
    var angle = this.getAngle()
    this.x = Math.cos(angle) * length
    this.y = Math.sin(angle) * length
  }

  getAngle() {
    return Math.atan2(this.y, this.x)
  }

  getLength() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  getLengthSq() {
    return this.x * this.x + this.y * this.y
  }

  distanceTo(v) {
    return this.sub(v).getLength()
  }

  copy() {
    return new Vector(this.x, this.y)
  }
}

class Particle {
  constructor(x, y) {
    this.pos = new Vector(x, y)
    this.vel = new Vector(Math.random() - 0.5, Math.random() - 0.5)
    this.acc = new Vector(0, 0)
    this.hue = Math.random() * 30 - 15
  }

  move(acc) {
    if (acc) {
      this.acc.addTo(acc)
    }
    this.vel.addTo(this.acc)
    this.pos.addTo(this.vel)
    if (this.vel.getLength() > maxSpeed) {
      this.vel.setLength(maxSpeed)
    }
    this.acc.setLength(0)
  }

  wrap() {
    if (this.pos.x > w) {
      this.pos.x = 0
    } else if (this.pos.x < -this.fieldSize) {
      this.pos.x = w - 1
    }
    if (this.pos.y > h) {
      this.pos.y = 0
    } else if (this.pos.y < -this.fieldSize) {
      this.pos.y = h - 1
    }
  }
}

canvas = document.querySelector("#canvas")
ctx = canvas.getContext("2d")
reset()
window.addEventListener("resize", reset)

function initParticles() {
  particles = []
  let numberOfParticles = particleCount
  for (let i = 0; i < numberOfParticles; i++) {
    let particle = new Particle(Math.random() * w, Math.random() * h)
    particles.push(particle)
  }
}

function initField() {
  field = new Array(columns)
  for (let x = 0; x < columns; x++) {
    field[x] = new Array(rows)
    for (let y = 0; y < rows; y++) {
      let v = new Vector(0, 0)
      field[x][y] = v
    }
  }
}

function calcField() {
  if (sORp) {
    for (let x = 0; x < columns; x++) {
      for (let y = 0; y < rows; y++) {
        let angle = window.noise.simplex3(x / 20, y / 20, noiseZ) * Math.PI * 2
        let length =
          window.noise.simplex3(x / 40 + 40000, y / 40 + 40000, noiseZ) *
          fieldForce
        field[x][y].setLength(length)
        field[x][y].setAngle(angle)
      }
    }
  } else {
    for (let x = 0; x < columns; x++) {
      for (let y = 0; y < rows; y++) {
        let angle = window.noise.perlin3(x / 20, y / 20, noiseZ) * Math.PI * 2
        let length =
          window.noise.perlin3(x / 40 + 40000, y / 40 + 40000, noiseZ) *
          fieldForce
        field[x][y].setLength(length)
        field[x][y].setAngle(angle)
      }
    }
  }
}

function reset() {
  w = canvas.width = window.innerWidth
  h = canvas.height = window.innerHeight
  //ctx.strokeStyle = fieldColor;
  window.noise.seed(Math.random())
  columns = Math.round(w / fieldSize) + 1
  rows = Math.round(h / fieldSize) + 1
  initParticles()
  initField()
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.style.display = "none";
}

function draw() {
  if (canvas.style.display == "none") {
    canvas.style.display = "inherit"
    return
  }
  requestAnimationFrame(draw)
  calcField()
  noiseZ += noiseSpeed
  drawBackground()
  drawParticles()
}

function drawBackground() {
  ctx.fillStyle = "rgba(255,255,255," + trailLength + ")"
  ctx.fillRect(0, 0, w, h)
}

function drawParticles() {
  particles.forEach(p => {
    var ps = (p.fieldSize = Math.abs(p.vel.x + p.vel.y) * particleSize + 0.3)
    // ctx.fillStyle =
    //   "hsl(" +
    //   (hueBase + p.hue + (p.vel.x + p.vel.y) * hueRange) +
    //   ", 100%, 50%)"
    ctx.fillStyle =
        "rgb(192, 192, 192)"
    ctx.fillRect(p.pos.x, p.pos.y, ps, ps)
    let pos = p.pos.div(fieldSize)
    let v
    if (pos.x >= 0 && pos.x < columns && pos.y >= 0 && pos.y < rows) {
      v = field[Math.floor(pos.x)][Math.floor(pos.y)]
    }
    p.move(v)
    p.wrap()
  })
}

export default { draw, clear }
