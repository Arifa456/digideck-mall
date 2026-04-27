export default function Luxury() {
  return (
    <section
      id="luxury"
      className="relative min-h-screen flex items-center px-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1607083206869-4c7672e72a8a)",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold mb-4">
          Luxury Redefined
        </h2>

        <p className="text-gray-300">
          A curated destination of the world’s most prestigious brands.
        </p>

      </div>
    </section>
  );
}