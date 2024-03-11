// --------------------------------------------

s0.initVideo("/Users/mayalee/Desktop/Spring\ 2024/Live\ Coding/classPerformance/composition/runningVideo.mp4")

src(s0)
  .out(o0)
render(o0)

src(s0)
  .add(
    osc(200,1,0.9)
      .saturate(()=>cc[0])
      .modulate(noise(()=>Math.sin(cc[1] / 100 * time) * 2 + 1))
      .add(shape(30).scale(()=>cc[2]*20).rotate(2))
  )
  .out(o0)
render(o0)

osc(200,1,0.9)
  .rotate(1, 0.1)
  .saturate (()=>cc[0]*5)
  .modulate(noise(()=>Math.sin(0.01 * time) * 2 + 1))
  .add(shape(30).scale(2.5).rotate(2))
  .out(o0)
osc(0.001, 900, 0.8)
  .diff(o0)
  .scale(()=>cc[1] /3000 - 100)
  .modulate(o1, 0.1)
  .out(o2)
render(o2)

osc()
  .shift(0.1,0.9,0.3)
  .out(o2)
render(o2)

osc(200,1,0.9)
  .rotate(1, 0.1)
  .saturate (1)
  .modulate(noise(()=>Math.sin(0.001 * time) * 2 + 1))
  .add(shape(30).scale(2.5).rotate(2))
  .out(o2)
osc(0.001, 900, 0.8)
  .diff(o2)
  .rotate(()=>Math.sin(0.1 * time) * 2 + 1, ()=>cc[3] / 10)
  .scale(0.3)
  .modulate(o1, 0.1)
  .out(o1)
render(o1)

hush()
// ------------------------------------------------
































osc(200,1,0.9)
  .rotate(1, 0.1)
  .saturate (1)
  .modulate(noise(()=>Math.sin(0.001 * time) * 2 + 1)) //0.01
  .add(shape(30).scale(2.5).rotate(2)) //scale 2.5
  .out(o0)

osc(0.001, 900, 0.8)
  .diff(o0)
  .rotate(()=>Math.sin(0.01 * time) * 2 + 1)
  .scale(0.3)
  .modulate(o1, 0.1)
  .out(o1)

render(o1)

hush()
