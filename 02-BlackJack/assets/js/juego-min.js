const Juego = (() => {
  "use strict";
  let e = [],
    t = [],
    n = "",
    r = 0,
    o = 0,
    a = 0;
  const s = ["D", "S", "H", "C"],
    c = ["A", "J", "Q", "K"],
    d = document.querySelectorAll("small"),
    u = document.querySelector("#jugador-cartas"),
    l = document.querySelector("#computadora-cartas"),
    i = document.querySelector("#btnPedir"),
    f = document.querySelector("#btnDetener"),
    m =
      (document.querySelector("#btnNuevo"),
      () => {
        for (let t = 2; t <= 10; t++) for (let n of s) e.push(t + n);
        for (let t of s) for (let n of c) e.push(n + t);
        return (e = _.shuffle(e)), (t = e), e;
      }),
    b = (e) => {
      const t = e.substring(0, e.length - 1);
      return isNaN(t) ? ("A" === t ? 11 : 10) : (o = 1 * t);
    };
  function g(e) {
    const t = p();
    return (
      e
        ? ((r += b(t)), (d[0].innerText = r))
        : ((a += b(t)), (d[1].innerText = a)),
      y(e),
      S(e)
    );
  }
  const p = () => {
    if (t <= 0) throw "no hay mas cartas";
    return (n = _.sample(t)), (t = t.filter((e) => e != n)), n;
  };
  function h() {
    setTimeout(g, 2e3, !1);
  }
  function y(e) {
    const t = document.createElement("img");
    return (
      (t.src = `assets/cartas/${n}.png`),
      t.classList.add("carta"),
      e ? (u.append(t), u) : (l.append(t), l)
    );
  }
  function S(e) {
    return r > 21 || 21 === a
      ? (alert("Haz Perdido."), (i.disabled = !0), (f.disabled = !0), !1)
      : !(21 === r || a > 21) ||
          (alert("El Jugador ha ganado!! Felicidades!!"),
          (i.disabled = !0),
          (f.disabled = !0),
          !1);
  }
  return (
    m(),
    i.addEventListener("click", () => {
      (f.disabled = !1), g(!0) && h();
    }),
    f.addEventListener("click", () => {
      h(), S();
    }),
    {
      nuevoJuego: () => {
        (f.disabled = !0),
          (i.disabled = !1),
          (r = 0),
          (a = 0),
          (d[1].innerText = "0"),
          (d[0].innerText = "0"),
          (e = []),
          (t = []),
          m(),
          (u.innerHTML = ""),
          (l.innerHTML = "");
      },
    }
  );
})();
