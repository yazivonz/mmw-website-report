const FloatingBubbles = () => {
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    left: Math.random() * 100,
    delay: Math.random() * 15,
    duration: Math.random() * 20 + 15,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble absolute rounded-full"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: '-100px',
            background: `radial-gradient(circle, hsl(195, 100%, 50%, 0.2), hsl(180, 100%, 50%, 0.1))`,
            border: '1px solid hsl(195, 100%, 50%, 0.3)',
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
            boxShadow: '0 0 20px hsl(195, 100%, 50%, 0.3)',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;
