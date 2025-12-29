import { Heart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  discount?: number;
  inStock?: boolean;
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  discount,
  inStock = true,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discountPercentage = discount || (originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0);

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative w-full aspect-square bg-secondary overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-2 left-2 bg-accent text-accent-foreground px-2 py-1 rounded-md text-xs font-bold">
            خصم {discountPercentage}%
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"
            }`}
          />
        </button>

        {/* Quick View Button (Desktop only) */}
        <Link
          to={`/product/${id}`}
          className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
        >
          <button className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition-colors">
            <Eye className="w-5 h-5" />
          </button>
        </Link>

        {/* Stock Badge */}
        {!inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white text-black px-3 py-1 rounded-lg font-bold">غير متوفر</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="font-medium text-sm md:text-base text-foreground line-clamp-2 mb-2">
          <Link
            to={`/product/${id}`}
            className="hover:text-primary transition-colors"
          >
            {name}
          </Link>
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3 text-xs">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-muted-foreground">({reviewCount})</span>
        </div>

        {/* Price */}
        <div className="mb-4">
          {originalPrice ? (
            <div className="flex items-center gap-2">
              <span className="text-lg md:text-xl font-bold text-accent">
                {price.toLocaleString("ar-EG")} جنيه
              </span>
              <span className="text-xs md:text-sm text-muted-foreground line-through">
                {originalPrice.toLocaleString("ar-EG")} جنيه
              </span>
            </div>
          ) : (
            <span className="text-lg md:text-xl font-bold text-foreground">
              {price.toLocaleString("ar-EG")} جنيه
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          disabled={!inStock}
          className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          أضف للسلة
        </button>
      </div>
    </div>
  );
}
