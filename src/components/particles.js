// import React, { Component } from 'react';
// import { useRef, useEffect } from 'react';;

// class Particles extends Component {

//     constructor(x, y) {
//         super();
//         this.pos = new Vector(x, y);
//         this.vel = new Vector(Math.random() - 0.5, Math.random() - 0.5);
//         this.acc = new Vector(0, 0);
//         this.hue = Math.random()*30-15;
//         this.particleCount = 2000;
//         this.particleSize = 0.9;
//         this.fieldSize = 70;
//         this.fieldForce = 0.15;
//         this.noiseSpeed = 0.003;
//         this.sORp = true;
//         this.trailLength = 0.15;
//         this.hueBase = 10;
//         this.hueRange = 5;
//         this.maxSpeed = 2.5;
//       }
    
//       move(acc) {
//         if (acc) {
//           this.acc.addTo(acc);
//         }
//         this.vel.addTo(this.acc);
//         this.pos.addTo(this.vel);
//         if (this.vel.getLength() > maxSpeed) {
//           this.vel.setLength(maxSpeed);
//         }
//         this.acc.setLength(0);
//       }
    
//       wrap() {
//         if (this.pos.x > w) {
//           this.pos.x = 0;
//         } else if (this.pos.x < -this.fieldSize) {
//           this.pos.x = w - 1;
//         }
//         if (this.pos.y > h) {
//           this.pos.y = 0;
//         } else if (this.pos.y < -this.fieldSize) {
//           this.pos.y = h - 1;
//         }
//       }
//     }
      
//     /// put this in a react component class
//     function initParticles() {
//         particles = [];
//         let numberOfParticles = particleCount;
//         for (let i = 0; i < numberOfParticles; i++) {
//           let particle = new Particle(Math.random() * w, Math.random() * h);
//           particles.push(particle);
//         }
//       }
      
//       function initField() {
//         field = new Array(columns);
//         for (let x = 0; x < columns; x++) {
//           field[x] = new Array(rows);
//           for (let y = 0; y < rows; y++) {
//             let v = new Vector(0, 0);
//             field[x][y] = v;
//           }
//         }
//       }
      
//       function calcField() {
//         if (sORp) {
//           for (let x = 0; x < columns; x++) {
//             for (let y = 0; y < rows; y++) {
//               let angle = noise.simplex3(x / 20, y / 20, noiseZ) * Math.PI * 2;
//               let length = noise.simplex3(x / 40 + 40000, y / 40 + 40000, noiseZ) * fieldForce;
//               field[x][y].setLength(length);
//               field[x][y].setAngle(angle);
//             }
//           }
//         } else {
//           for (let x = 0; x < columns; x++) {
//             for (let y = 0; y < rows; y++) {
//               let angle = noise.perlin3(x / 20, y / 20, noiseZ) * Math.PI * 2;
//               let length = noise.perlin3(x / 40 + 40000, y / 40 + 40000, noiseZ) * fieldForce;
//               field[x][y].setLength(length);
//               field[x][y].setAngle(angle);
//             }
//           }
//         }
//       }
      
//       function reset() {
//         w = canvas.width = window.innerWidth;
//         h = canvas.height = window.innerHeight;
//         ctx.strokeStyle = fieldColor;
//         noise.seed(Math.random());
//         columns = Math.round(w / fieldSize) + 1;
//         rows = Math.round(h / fieldSize) + 1;
//         initParticles();
//         initField();
//       }
      
//       function draw() {
//         requestAnimationFrame(draw);
//         calcField();
//         noiseZ += noiseSpeed;
//         drawBackground();
//         drawParticles();
//       }
      
//       function drawBackground() {
//         ctx.fillStyle = "rgba(0,0,0,"+trailLength+")";
//         ctx.fillRect(0, 0, w, h);
//       }
      
//       function drawParticles() {
//         particles.forEach(p => {
//           var ps = p.fieldSize = Math.abs(p.vel.x + p.vel.y)*particleSize + 0.3;
//           ctx.fillStyle = "hsl("+(hueBase + p.hue + ((p.vel.x + p.vel.y)*hueRange))+", 100%, 50%)";
//           ctx.fillRect(p.pos.x, p.pos.y, ps, ps);
//           let pos = p.pos.div(fieldSize);
//           let v;
//           if (pos.x >= 0 && pos.x < columns && pos.y >= 0 && pos.y < rows) {
//             v = field[Math.floor(pos.x)][Math.floor(pos.y)];
//           }
//           p.move(v);
//           p.wrap();
//         });
//       }

//       let ref = useRef();

//       useEffect(() => {
//         let canvas = ref.current;
//         let context = canvas.getContext('2d');
//         context.draw()
//         });

//         // return (
//         //     //  <canvas id="canvas" ref="ref"> </canvas>
//         // )
      

//  export default Particles
