const shapes = {
  apple: <><path d="M12 8c-1-5 2-7 5-7"/><path d="M12 8C7 5 3 8 3 13c0 5 4 9 9 9s9-4 9-9c0-5-4-8-9-5Z"/><path d="M12 8c1-3 4-4 6-3"/></>,
  snow: <><path d="M12 2v20M3.34 7l17.32 10M3.34 17 20.66 7M12 2l-2 2m2-2 2 2m-2 18-2-2m2 2 2-2M3.34 7l3 .3M3.34 7l.9 2.8m16.42 7.2-3-.3m3 .3-.9-2.8M3.34 17l3-.3m-3 .3.9-2.8m16.42-7.2-3 .3m3-.3-.9 2.8"/></>,
  wheat: <><path d="M12 22V7m0 6C7 13 5 10 5 7c4 0 7 2 7 6Zm0-3c5 0 7-3 7-6-4 0-7 2-7 6Zm0 8c-4 0-6-2-6-5 4 0 6 2 6 5Zm0-4c4 0 6-2 6-5-4 0-6 2-6 5Z"/></>,
  jar: <><path d="M8 3h8m-7 0v3m6-3v3M6 7h12v2l-1 1v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V10L6 9V7Z"/><path d="M9 14c2-2 4-2 6 0"/></>,
  glass: <><path d="M5 3h14l-2 18H7L5 3Z"/><path d="M6 7h12M8 13c2-2 6-2 8 0"/></>,
  oil: <><path d="M9 3h6v3l2 2v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8l2-2V3Z"/><path d="M9 3h6m-8 7h10M10 15c1-2 3-3 5-3-1 3-3 5-5 5"/></>,
  tomato: <><path d="M12 7c-5-4-10 0-9 6 1 5 4 8 9 8s8-3 9-8c1-6-4-10-9-6Z"/><path d="m12 7 1-4 3 2 3-1-1 4m-6-1L9 4 7 6 4 5l1 4"/></>,
  sprout: <><path d="M12 21v-9m0 3c-6 0-9-3-9-8 5 0 9 2 9 8Zm0-4c0-5 3-8 9-8 0 5-3 8-9 8Z"/></>,
  mug: <><path d="M4 8h13v9a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Zm13 2h2a2 2 0 1 1 0 4h-2M7 4c-1 1 1 2 0 3m5-3c-1 1 1 2 0 3"/></>,
  plate: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M3 4v7m-2-7v4a2 2 0 0 0 4 0V4m-2 7v10m18-17v17m0-17c-3 2-3 6 0 7"/></>,
  citrus: <><circle cx="12" cy="13" r="8"/><path d="M12 5c0-2 2-3 4-3m-4 11 5-4m-5 4v-6m0 6-5-4m5 4-2 6m2-6 6 2"/></>
}

export default function FoodIcon({ name, className = '' }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[name] || shapes.apple}</svg>
}
