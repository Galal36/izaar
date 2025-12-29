import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Hero slides
  const heroSlides = [
    {
      id: 1,
      title: "أحدث موديلات الملابس الرجالية",
      subtitle: "جودة عالية وأسعار منافسة",
      cta: "تسوق الآن",
      image:
        "https://images.unsplash.com/photo-1556821552-5d6b62cd2cd5?w=1200&h=400&fit=crop&auto=format",
      discount: "خصم 30%",
    },
    {
      id: 2,
      title: "مجموعة الصيف الجديدة",
      subtitle: "أحدث التصاميم بأفضل الأسعار",
      cta: "اكتشف المزيد",
      image:
        "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=1200&h=400&fit=crop&auto=format",
      discount: "على كل شيء",
    },
    {
      id: 3,
      title: "الماركات العالمية الموثوقة",
      subtitle: "Nike، Adidas، وأكثر",
      cta: "تسوق الآن",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&h=400&fit=crop&auto=format",
      discount: "خصم حتى 50%",
    },
  ];

  // Categories
  const categories = [
    {
      id: "sportswear",
      name: "ملابس رياضية رجالي",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop&auto=format",
    },
    {
      id: "casual",
      name: "ملابس كاجوال",
      image:
        "https://images.unsplash.com/photo-1516762689617-e1cffff0ba04?w=300&h=300&fit=crop&auto=format",
    },
    {
      id: "homewear",
      name: "ملابس بيتي",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop&auto=format",
    },
    {
      id: "underwear",
      name: "ترنكات شبابي",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop&auto=format",
    },
    {
      id: "pants",
      name: "بنطلونات رياضية",
      image:
        "https://images.unsplash.com/photo-1541752528503-2bfb9fbc6c1c?w=300&h=300&fit=crop&auto=format",
    },
    {
      id: "socks",
      name: "شرابات رياضية",
      image:
        "https://images.unsplash.com/photo-1548022328-c9467d128873?w=300&h=300&fit=crop&auto=format",
    },
    {
      id: "shoes-outdoor",
      name: "احذية خروج",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop&auto=format",
    },
    {
      id: "shoes-sports",
      name: "احذية رياضية",
      image:
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=300&h=300&fit=crop&auto=format",
    },
  ];

  // Featured products
  const featuredProducts = [
    {
      id: "1",
      name: "قميص رياضي رجالي عالي الجودة",
      price: 199,
      originalPrice: 299,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&auto=format",
      rating: 4.5,
      reviewCount: 45,
      discount: 33,
    },
    {
      id: "2",
      name: "بنطال رياضي مريح وعملي",
      price: 349,
      originalPrice: 499,
      image:
        "https://images.unsplash.com/photo-1541752528503-2bfb9fbc6c1c?w=400&h=400&fit=crop&auto=format",
      rating: 4.8,
      reviewCount: 67,
      discount: 30,
    },
    {
      id: "3",
      name: "جاكيت رياضي فاخر",
      price: 599,
      originalPrice: 899,
      image:
        "https://images.unsplash.com/photo-1556821552-5d6b62cd2cd5?w=400&h=400&fit=crop&auto=format",
      rating: 4.7,
      reviewCount: 52,
      discount: 33,
    },
    {
      id: "4",
      name: "حذاء رياضي عصري",
      price: 449,
      originalPrice: 649,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&auto=format",
      rating: 4.6,
      reviewCount: 38,
      discount: 30,
    },
    {
      id: "5",
      name: "شورت رياضي جودة ممتازة",
      price: 179,
      originalPrice: 249,
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop&auto=format",
      rating: 4.4,
      reviewCount: 29,
      discount: 28,
    },
    {
      id: "6",
      name: "تي شيرت كاجوال مريح",
      price: 99,
      originalPrice: 149,
      image:
        "https://images.unsplash.com/photo-1516762689617-e1cffff0ba04?w=400&h=400&fit=crop&auto=format",
      rating: 4.3,
      reviewCount: 41,
      discount: 33,
    },
    {
      id: "7",
      name: "حقيبة رياضية متعددة الاستخدامات",
      price: 249,
      originalPrice: 349,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&auto=format",
      rating: 4.5,
      reviewCount: 56,
      discount: 28,
    },
    {
      id: "8",
      name: "شرابات رياضية متعددة الألوان",
      price: 69,
      originalPrice: 99,
      image:
        "https://images.unsplash.com/photo-1548022328-c9467d128873?w=400&h=400&fit=crop&auto=format",
      rating: 4.6,
      reviewCount: 33,
      discount: 30,
    },
  ];

  // Auto-play hero slides
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, heroSlides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setAutoPlay(false);
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />

              {/* Hero Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-6 opacity-90">
                  {slide.subtitle}
                </p>
                <div className="flex gap-4 flex-col sm:flex-row">
                  <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">
                    {slide.cta}
                  </button>
                  <span className="bg-white/20 text-white px-6 py-3 rounded-lg font-bold">
                    {slide.discount}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-white transition-colors hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-white transition-colors hidden md:flex"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-accent w-8"
                    : "bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8 py-12 md:py-16">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
              تصفح حسب الفئة
            </h2>
            <p className="text-center text-muted-foreground mt-2">
              استكشف مجموعتنا الواسعة من الفئات
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                image={category.image}
              />
            ))}
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="bg-secondary py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
                عروض خاصة
              </h2>
              <p className="text-center text-muted-foreground mt-2">
                اكتشف أفضل العروض والخصومات على المنتجات المختارة
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  discount={product.discount}
                />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                to="/products"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
              >
                عرض كل المنتجات
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8 py-12 md:py-16">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              هل لديك أسئلة أو تحتاج مساعدة؟
            </h2>
            <p className="text-lg mb-6 opacity-90">
              نحن هنا للمساعدة. تواصل معنا عبر WhatsApp أو أي وسيلة اتصال أخرى
            </p>
            <a
              href="https://wa.me/201204437575?text=مرحباً، أرغب في الاستفسار عن..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-5 h-5" />
              تواصل معنا عبر WhatsApp
            </a>
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-secondary py-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">شحن سريع</h3>
                <p className="text-muted-foreground">التوصيل خلال 3-5 أيام عمل</p>
              </div>
              <div>
                <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">أسعار منافسة</h3>
                <p className="text-muted-foreground">أفضل الأسعار في السوق</p>
              </div>
              <div>
                <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.172l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">ضمان الجودة</h3>
                <p className="text-muted-foreground">منتجات أصلية وموثوقة</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/201204437575?text=مرحباً، أرغب في الاستفسار عن..."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
        title="تواصل معنا عبر WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-accent-foreground" />
      </a>
    </div>
  );
}
