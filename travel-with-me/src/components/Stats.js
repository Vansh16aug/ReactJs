export default function Stats({ items }) {
  const item = items.length;
  const packed = items.filter((item) => item.packed).length;
  const itemPercent = Math.round((packed / item) * 100) || 0;

  if (item === 0) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }

  return (
    <footer className="stats">
      <em>
        {itemPercent === 100
          ? "You got everything! Ready to go ✈️"
          : `👜 You have ${item} items on your list, and you already packed ${packed} (
          ${itemPercent}%) 🎒`}
      </em>
    </footer>
  );
}
