const photos = [
  "/inspiration-1.jpg",
  "/inspiration-2.jpg",
  "/inspiration-3.jpg",
  "/inspiration-4.jpg",
  "/favorite-1.jpg",
  "/favorite-2.jpg",
  "/portfolio-1.png",
];

export const inspirationItems = Array.from({ length: 16 }, (_, index) => ({
  id: index,
  image: photos[index % photos.length],
}));
