import { useState } from "react";
import { X, Play, ZoomIn } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ProductImageGalleryProps {
  images: string[];
  title: string;
  videoUrl?: string;
}

const ProductImageGallery = ({ images, title, videoUrl }: ProductImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const allMedia = [...images];
  if (videoUrl) {
    allMedia.push(videoUrl);
  }

  return (
    <>
      <div className="space-y-4">
        {/* Main Image/Video Display */}
        <div className="relative rounded-2xl overflow-hidden bg-soft-blue shadow-card group">
          {showVideo && videoUrl ? (
            <div className="aspect-square w-full bg-black flex items-center justify-center">
              <video
                src={videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <img
              src={images[selectedImage]}
              alt={`${title} - Image ${selectedImage + 1}`}
              className="w-full h-[500px] object-cover"
            />
          )}
          
          <Button
            variant="secondary"
            size="icon"
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => setIsFullscreen(true)}
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((image, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedImage(idx);
                setShowVideo(false);
              }}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                selectedImage === idx && !showVideo
                  ? "border-primary shadow-card scale-105"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
          
          {videoUrl && (
            <button
              onClick={() => setShowVideo(true)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all bg-primary-dark/10 flex items-center justify-center ${
                showVideo
                  ? "border-primary shadow-card scale-105"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <Play className="h-6 w-6 text-primary" />
            </button>
          )}
        </div>
      </div>

      {/* Fullscreen Dialog */}
      <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0">
          <div className="relative w-full h-full bg-black flex items-center justify-center">
            <img
              src={images[selectedImage]}
              alt={`${title} - Fullscreen`}
              className="max-w-full max-h-full object-contain"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={() => setIsFullscreen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductImageGallery;
