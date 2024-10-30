export default function Component(
  { info, menu } = {
    info: {
      areaName: "Sample Area",
      avgRating: 4.2,
      imageUrl: "/placeholder.svg?height=200&width=300",
      isOpen: true,
      deliveryTime: "30",
      name: "Restaurant Name",
      veg: true,
    },
  }
) {
  const { areaName, avgRating, imageUrl, isOpen, deliveryTime, name, veg } =
    info;

  return (
    <div
      className={`group relative w-72 overflow-hidden rounded-2xl border bg-card transition-all hover:scale-[0.98] ${
        isOpen ? "cursor-pointer" : "cursor-not-allowed opacity-75"
      }`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {!isOpen && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-xl font-semibold text-white">
            Closed
          </div>
        )}
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-foreground">{name}</h3>
          <div className="flex items-center gap-1 rounded bg-[#60B246] px-1.5 py-0.5 text-sm text-white">
            {avgRating}
            <span className="text-xs">★</span>
          </div>
        </div>

        <div className="mt-1 line-clamp-1 text-sm text-muted-foreground">
          {areaName}
        </div>

        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <div
            className={`flex items-center gap-1 rounded-full px-2 py-0.5 ${
              veg ? "bg-green-500 text-white" : "bg-red-500 text-white"
            }`}
          >
            {veg ? "Veg" : "Non-Veg"}
          </div>
          <span className="h-1 w-1 rounded-full bg-muted-foreground"></span>
          <span>{deliveryTime} min</span>
        </div>
      </div>
    </div>
  );
}
