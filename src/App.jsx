import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function App() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600",
      thumbnail: "https://picsum.photos/id/1018/250/150",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600",
      thumbnail: "https://picsum.photos/id/1015/250/150",
    },
    {
      original: "https://picsum.photos/id/1016/1000/600",
      thumbnail: "https://picsum.photos/id/1016/250/150",
    },
    {
      original: "https://picsum.photos/id/1014/1000/600",
      thumbnail: "https://picsum.photos/id/1014/250/150",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600",
      thumbnail: "https://picsum.photos/id/1019/250/150",
    },
  ];

  return (
    <div className="container" style={{ width: "80vw", margin: "auto" }}>
      <h2>Galeria de Imagenes</h2>
      <ImageGallery
        items={images}
        showBullets={true}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showNav={true}
        autoPlay={false}
      />
    </div>
  );
}

export default App;
