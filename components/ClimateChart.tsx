"use client"

import { useEffect, useRef, useState } from "react"
import type { ClimateMonth } from "@/data/climate"
import "./climate-chart.css"

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const MONTHS_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// Plot geometry in px: the viewBox follows the measured container width, so
// text stays at its real size on phones instead of scaling down
const DEFAULT_W = 720
const PAD = { top: 30, right: 40, bottom: 28, left: 44 }
const TICKS = 4

// Smallest "nice" step so that `count` steps cover `span`
function niceStep(span: number, count: number): number {
  const raw = span / count
  const pow = 10 ** Math.floor(Math.log10(raw || 1))
  return ([1, 2, 2.5, 5, 10].find((m) => m * pow >= raw) ?? 10) * pow
}

function tempScale(temps: number[]) {
  const min = Math.min(...temps)
  const max = Math.max(...temps)
  for (let step = niceStep(Math.max(max - min, 1), TICKS); ; step = niceStep(step * TICKS * 1.01, TICKS)) {
    const lo = Math.floor(min / step) * step
    if (lo + step * TICKS >= max) return { lo, step }
  }
}

type Props = {
  months: ClimateMonth[]
  bestMonths: number[]
  name: string
}

export default function ClimateChart({ months, bestMonths, name }: Props) {
  const [active, setActive] = useState<number | null>(null)
  const [W, setW] = useState(DEFAULT_W)
  const plotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = plotRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => setW(Math.round(entry.contentRect.width) || DEFAULT_W))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const H = W < 480 ? 240 : 280
  const PLOT_W = W - PAD.left - PAD.right
  const PLOT_H = H - PAD.top - PAD.bottom

  const rainStep = niceStep(Math.max(...months.map((m) => m.rainfallMm), 1), TICKS)
  const rainMax = rainStep * TICKS
  const { lo: tLo, step: tStep } = tempScale(months.map((m) => m.avgTempC))
  const tHi = tLo + tStep * TICKS

  const colW = PLOT_W / 12
  const barW = Math.min(colW * 0.56, 34)
  const x = (i: number) => PAD.left + colW * i + colW / 2
  const yRain = (mm: number) => PAD.top + PLOT_H * (1 - mm / rainMax)
  const yTemp = (c: number) => PAD.top + PLOT_H * (1 - (c - tLo) / (tHi - tLo))

  const linePath = months.map((m, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${yTemp(m.avgTempC).toFixed(1)}`).join("")
  // Bar with 4px rounded top, square at the baseline
  const barPath = (i: number, mm: number) => {
    const x0 = x(i) - barW / 2
    const y0 = yRain(mm)
    const base = PAD.top + PLOT_H
    const r = Math.min(4, (base - y0) / 2, barW / 2)
    return `M${x0},${base}V${y0 + r}Q${x0},${y0} ${x0 + r},${y0}H${x0 + barW - r}Q${x0 + barW},${y0} ${x0 + barW},${y0 + r}V${base}Z`
  }

  const current = active === null ? null : months[active]
  // Tooltip anchored to the hovered column, kept inside the chart box
  const tipLeft = active === null ? 0 : Math.min(Math.max(x(active), 80), W - 80)

  return (
    <div className="climate-chart">
      <ul className="cc-legend" aria-hidden="true">
        <li><span className="cc-swatch cc-swatch-best" />Rainfall, best months (mm)</li>
        <li><span className="cc-swatch cc-swatch-other" />Rainfall, other months (mm)</li>
        <li><span className="cc-swatch cc-swatch-line" />Avg temperature (°C)</li>
      </ul>

      <div className="cc-plot" ref={plotRef} onPointerLeave={(e) => e.pointerType === "mouse" && setActive(null)}>
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Monthly rainfall and average temperature in ${name}. Data table follows.`}>
          {/* Shared gridlines: both axes use the same number of ticks */}
          {Array.from({ length: TICKS + 1 }, (_, k) => {
            const y = PAD.top + (PLOT_H * k) / TICKS
            return (
              <g key={k}>
                <line className={k === TICKS ? "cc-baseline" : "cc-grid"} x1={PAD.left} x2={W - PAD.right} y1={y} y2={y} />
                <text className="cc-tick" x={PAD.left - 8} y={y} textAnchor="end" dominantBaseline="middle">
                  {rainMax - rainStep * k}
                </text>
                <text className="cc-tick" x={W - PAD.right + 8} y={y} textAnchor="start" dominantBaseline="middle">
                  {+(tHi - tStep * k).toFixed(1)}°
                </text>
              </g>
            )
          })}
          <text className="cc-unit" x={PAD.left - 8} y={PAD.top - 16} textAnchor="end">mm</text>
          <text className="cc-unit" x={W - PAD.right + 8} y={PAD.top - 16} textAnchor="start">°C</text>

          {months.map((m, i) => (
            <path
              key={m.month}
              d={barPath(i, m.rainfallMm)}
              className={`cc-bar${bestMonths.includes(m.month) ? " is-best" : ""}${active === i ? " is-active" : ""}`}
            />
          ))}

          <path className="cc-line" d={linePath} />
          {months.map((m, i) => (
            <circle key={m.month} className={`cc-dot${active === i ? " is-active" : ""}`} cx={x(i)} cy={yTemp(m.avgTempC)} r={active === i ? 5 : 3.5} />
          ))}

          {months.map((m, i) => (
            <text key={m.month} className={`cc-month${bestMonths.includes(m.month) ? " is-best" : ""}`} x={x(i)} y={H - 8} textAnchor="middle">
              {colW < 34 ? MONTHS[i][0] : MONTHS[i]}
            </text>
          ))}

          {/* Hit targets: the full column, larger than the marks */}
          {months.map((m, i) => (
            <rect
              key={m.month}
              className="cc-hit"
              x={PAD.left + colW * i}
              y={PAD.top}
              width={colW}
              height={PLOT_H + PAD.bottom}
              tabIndex={0}
              aria-label={`${MONTHS_LONG[i]}: ${m.avgTempC.toFixed(1)}°C, ${m.rainfallMm} mm rain, ${m.rainyDays.toFixed(1)} rainy days`}
              onPointerEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
            />
          ))}
        </svg>

        {current && active !== null && (
          <div className="cc-tip" style={{ left: tipLeft }} aria-hidden="true">
            <p className="cc-tip-title">
              {MONTHS_LONG[active]}
              {bestMonths.includes(current.month) && <span className="cc-tip-best">Best month</span>}
            </p>
            <dl>
              <div><dt>Avg temp</dt><dd>{current.avgTempC.toFixed(1)}°C</dd></div>
              <div><dt>Rainfall</dt><dd>{current.rainfallMm} mm</dd></div>
              <div><dt>Rainy days</dt><dd>{current.rainyDays.toFixed(1)}</dd></div>
            </dl>
          </div>
        )}
      </div>

      <table className="cc-sr-only">
        <caption>Monthly climate averages for {name}</caption>
        <thead>
          <tr><th scope="col">Month</th><th scope="col">Avg temp (°C)</th><th scope="col">Rainfall (mm)</th><th scope="col">Rainy days (≥1 mm)</th></tr>
        </thead>
        <tbody>
          {months.map((m, i) => (
            <tr key={m.month}>
              <th scope="row">{MONTHS_LONG[i]}</th>
              <td>{m.avgTempC.toFixed(1)}</td>
              <td>{m.rainfallMm}</td>
              <td>{m.rainyDays.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
