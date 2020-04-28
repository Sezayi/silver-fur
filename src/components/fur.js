// require('./noise')


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
  constructor(x, y, w, h) {
    this.maxSpeed = 1;
    this.w = w;
    this.h = h;
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
    if (this.vel.getLength() > this.maxSpeed) {
      this.vel.setLength(this.maxSpeed)
    }
    this.acc.setLength(0)
  }

  wrap() {
    if (this.pos.x > this.w) {
      this.pos.x = 0
    } else if (this.pos.x < -this.fieldSize) {
      this.pos.x = this.w - 1
    }
    if (this.pos.y > this.h) {
      this.pos.y = 0
    } else if (this.pos.y < -this.fieldSize) {
      this.pos.y = this.h - 1
    }
  }
}


class Fur {
  constructor() {
    this.particles = [];
    this.rows = [];
    this.columns = [];
    this.particleSize = 1;
    this.trailLength = 0.2;
    this.noiseSpeed = 0.010;
    this.fieldForce = 0.05;
    this.sORp = true;
    this.noiseZ = 0;
    this.field = undefined;
    this.particleCount = 25000;
    this.fieldSize = 90;
    this.initParticles = this.initParticles.bind(this);
    this.draw = this.draw.bind(this);
    this.reset = this.reset.bind(this);
  }

  initParticles() {
    this.particles = []
    for (let i = 0; i < this.particleCount; i++) {
      let particle = new Particle(Math.random() * this.w, Math.random() * this.h, this.w, this.h);
      this.particles.push(particle);
    }
  }

  initField() {
    this.field = new Array(this.columns)
    for (let x = 0; x < this.columns; x++) {
      this.field[x] = new Array(this.rows)
      for (let y = 0; y < this.rows; y++) {
        let v = new Vector(0, 0)
        this.field[x][y] = v
      }
    }
  }

  calcField() {
    if (this.sORp) {
      for (let x = 0; x < this.columns; x++) {
        for (let y = 0; y < this.rows; y++) {
          let angle = window.noise.simplex3(x / 20, y / 20, this.noiseZ) * Math.PI * 2
          let length =
            window.noise.simplex3(x / 40 + 40000, y / 40 + 40000, this.noiseZ) *
            this.fieldForce
          this.field[x][y].setLength(length)
          this.field[x][y].setAngle(angle)
        }
      }
    } else {
      for (let x = 0; x < this.columns; x++) {
        for (let y = 0; y < this.rows; y++) {
          let angle = window.noise.perlin3(x / 20, y / 20, this.noiseZ) * Math.PI * 2
          let length =
            window.noise.perlin3(x / 40 + 40000, y / 40 + 40000, this.noiseZ) *
            this.fieldForce
          this.field[x][y].setLength(length)
          this.field[x][y].setAngle(angle)
        }
      }
    }
  }

  reset() {
    this.canvas = document.querySelector("#canvas")
    this.canvas.style.display = "inherit";
    this.ctx = this.canvas.getContext("2d")
    this.w = this.canvas.width = window.innerWidth
    this.h = this.canvas.height = window.innerHeight
    //ctx.strokeStyle = fieldColor;
    window.noise.seed(Math.random())
    this.columns = Math.round(this.w / this.fieldSize) + 1
    this.rows = Math.round(this.h / this.fieldSize) + 1
    this.initParticles()
    this.initField()
  }

  clear() {
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.canvas.style.display = "none";
    }
  }

  draw() {
    if (this.canvas.style.display === "none") {
      this.canvas.style.display = "inherit";
      return;
    }
    requestAnimationFrame(this.draw)
    this.calcField()
    this.noiseZ += this.noiseSpeed
    this.drawBackground()
    this.drawParticles()
  }

  drawBackground() {
    this.ctx.fillStyle = "rgba(255,255,255," + this.trailLength + ")"
    this.ctx.fillRect(0, 0, this.w, this.h)
  }

  drawParticles() {
    this.particles.forEach(p => {
      var ps = (p.fieldSize = Math.abs(p.vel.x + p.vel.y) * this.particleSize + 0.3);
      this.ctx.fillStyle = "rgb(192, 192, 192)";
      this.ctx.fillRect(p.pos.x, p.pos.y, ps, ps);
      let pos = p.pos.div(this.fieldSize);
      let v;
      if (pos.x >= 0 && pos.x < this.columns && pos.y >= 0 && pos.y < this.rows) {
        v = this.field[Math.floor(pos.x)][Math.floor(pos.y)]
      }
      p.move(v);
      p.wrap();
    })
  }
}

export default Fur;
