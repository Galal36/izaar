import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/lib/products-data";

export default function Categories() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center">جميع الفئات</h1>
            <p className="text-center text-primary-foreground/90 mt-4 max-w-2xl mx-auto">
              اختر من بين مجموعتنا الواسعة من الفئات وجد ما تبحث عنه بسهولة
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8 py-12 md:py-16">
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

        {/* Info Section */}
        <section className="bg-secondary py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">8+</h3>
                <p className="text-muted-foreground">فئات متنوعة</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">120+</h3>
                <p className="text-muted-foreground">منتج فاخر</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">100%</h3>
                <p className="text-muted-foreground">جودة مضمونة</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
