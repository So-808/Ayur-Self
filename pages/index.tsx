// pages/index.tsx
import herbs from '../data/herbs.json';

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>🌿 アダプトゲン一覧</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {herbs.map((herb, index) => (
          <li key={index} style={{ border: "1px solid #ccc", borderRadius: 8, padding: "1rem", marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "1.2rem" }}>{herb.name}</h2>
            <p><i>{herb.latin}</i></p>
            <p>効果：{herb.usedFor.join(" / ")}</p>
            <p>ドーシャ：{herb.dosha.join(", ")}</p>
            <a href={herb.link} target="_blank" rel="noopener noreferrer" style={{ color: "#2a8" }}>
              👉 iHerbで見る
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
