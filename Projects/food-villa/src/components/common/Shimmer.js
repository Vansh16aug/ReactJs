function Shimmer() {
  return (
    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-center mx-auto max-w-[1500px]">
      {Array(10)
        .fill()
        .map((e, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
}

export default Shimmer;
