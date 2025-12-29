import { useParams, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/products-data";

export default function CategoryProducts() {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  const category = categories.find((c) => c.id === categoryId);
  const categoryProducts = products.filter((p) => p.categoryId === categoryId);

  if (!category) {
    return (
      <div className="w-full min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-primary mb-4">الفئة غير موجودة</h1>
            <p className="text-muted-foreground mb-6">
              نعتذر، الفئة التي تبحث عنها غير متاحة
            </p>
            <Link
              to="/categories"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
            >
              العودة للفئات
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="bg-secondary py-4">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">
                الرئيسية
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/categories" className="hover:text-primary transition-colors">
                الفئات
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground font-medium">{category.name}</span>
            </div>
          </div>
        </section>

        {/* Category Header */}
        <section className="bg-primary text-primary-foreground py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{category.name}</h1>
            <p className="text-primary-foreground/90 text-lg">
              {categoryProducts.length} منتج متاح
            </p>
          </div>
        </section>

        {/* Filters and Products */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8 py-12 md:py-16">
          {/* Products Grid */}
          {categoryProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {categoryProducts.map((product) => (
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
                    inStock={product.inStock}
                  />
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center">
                <button className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">
                  عرض المزيد من المنتجات
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                لا توجد منتجات في هذه الفئة
              </h2>
              <p className="text-muted-foreground mb-8">
                نعتذر، لا توجد منتجات متاحة حالياً في هذه الفئة. يرجى محاولة فئة أخرى.
              </p>
              <Link
                to="/categories"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
              >
                استكشف فئات أخرى
              </Link>
            </div>
          )}
        </section>

        {/* Related Categories */}
        <section className="bg-secondary py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-10">فئات ذات صلة</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories
                .filter((c) => c.id !== categoryId)
                .slice(0, 4)
                .map((relatedCategory) => (
                  <Link
                    key={relatedCategory.id}
                    to={`/category/${relatedCategory.id}`}
                    className="group relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={relatedCategory.image}
                      alt={relatedCategory.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/0" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white font-bold text-center px-4">
                        {relatedCategory.name}
                      </h3>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
