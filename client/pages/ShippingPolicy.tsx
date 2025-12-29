import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ShippingPolicy() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold">سياسة الشحن والاسترجاع</h1>
            <p className="text-primary-foreground/90 mt-4">
              تعرف على شروط شحننا وسياسة الاسترجاع
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 lg:px-8 py-12 md:py-20">
          {/* Shipping */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">سياسة الشحن</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">مناطق التوصيل</h3>
                <p className="text-foreground/70 mb-4">
                  نقوم بتوصيل الطلبات إلى جميع محافظات جمهورية مصر العربية:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70">
                  <li>جميع محافظات مصر (القاهرة، الإسكندرية، الجيزة، أسيوط، وغيرها)</li>
                  <li>التوصيل متاح للمناطق الداخلية والنائية</li>
                  <li>نتعاون مع أفضل شركات الشحن الموثوقة</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  مدة التوصيل والرسوم
                </h3>
                <div className="bg-secondary p-6 rounded-lg space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-foreground">القاهرة والجيزة</p>
                      <p className="text-sm text-foreground/70">1-2 يوم عمل</p>
                    </div>
                    <p className="font-bold text-accent">25 جنيه</p>
                  </div>
                  <hr className="border-border" />
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-foreground">المحافظات الأخرى</p>
                      <p className="text-sm text-foreground/70">3-5 أيام عمل</p>
                    </div>
                    <p className="font-bold text-accent">50 جنيه</p>
                  </div>
                  <hr className="border-border" />
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-foreground">المناطق النائية</p>
                      <p className="text-sm text-foreground/70">5-7 أيام عمل</p>
                    </div>
                    <p className="font-bold text-accent">75 جنيه</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">شحن مجاني</h3>
                <p className="text-foreground/70 bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200 dark:border-green-900">
                  🎁 جميع الطلبات التي تزيد قيمتها عن 500 جنيه تستمتع بشحن مجاني إلى جميع المحافظات
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">تتبع الطلب</h3>
                <p className="text-foreground/70 mb-4">
                  بعد تأكيد طلبك، ستتلقى رسالة WhatsApp تحتوي على:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70">
                  <li>رقم الطلب الخاص بك</li>
                  <li>رقم تتبع الشحنة من شركة الشحن</li>
                  <li>تحديثات مستمرة عن حالة الطلب</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Returns */}
          <div className="mb-12 pt-12 border-t border-border">
            <h2 className="text-3xl font-bold text-foreground mb-6">سياسة الاسترجاع والاستبدال</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">فترة الاسترجاع</h3>
                <p className="text-foreground/70 bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-900 mb-4">
                  ✓ لديك 7 أيام من استلام الطلب لاسترجاع أو استبدال المنتج
                </p>
                <p className="text-foreground/70">
                  الاسترجاع يجب أن يكون للمنتج في حالة جديدة غير مستخدمة مع الحفاظ على جميع الملصقات والعبوة الأصلية.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">شروط الاسترجاع</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/70">
                  <li>المنتج لم يتم استخدامه أو تلبيسه</li>
                  <li>المنتج في حالة جديدة تماماً</li>
                  <li>الملصقات والعبوة الأصلية موجودة</li>
                  <li>المنتج غير معطوب أو محروق بالأرجواني</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">رسوم الاسترجاع</h3>
                <div className="bg-secondary p-6 rounded-lg space-y-4">
                  <div>
                    <p className="font-bold text-foreground mb-2">في حالة الاستبدال أو المنتج معيب</p>
                    <p className="text-accent font-bold">❌ بدون رسوم إضافية</p>
                  </div>
                  <hr className="border-border" />
                  <div>
                    <p className="font-bold text-foreground mb-2">في حالة الاسترجاع النقدي</p>
                    <p className="text-accent font-bold">50 جنيه رسوم معالجة</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">خطوات الاسترجاع</h3>
                <ol className="list-decimal list-inside space-y-3 text-foreground/70">
                  <li>تواصل معنا عبر WhatsApp برقم الطلب والسبب</li>
                  <li>سنوافق على الاسترجاع ونرسل لك تعليمات الإرسال</li>
                  <li>أرسل المنتج إلينا في العبوة الأصلية</li>
                  <li>سنتحقق من المنتج ونعالج استبدالك أو استرجاعك</li>
                  <li>سيتم إرسال المنتج البديل أو استرجاع أموالك خلال 5 أيام</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">الاستثناءات</h3>
                <p className="text-foreground/70 mb-4">
                  لا يمكن استرجاع المنتجات في الحالات التالية:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70">
                  <li>المنتج تم استخدامه أو غسله</li>
                  <li>المنتج تجاوز مدة 7 أيام من الاستلام</li>
                  <li>الملصقات تمت إزالتها أو تشويهها</li>
                  <li>المنتج تم تعديله أو خياطته</li>
                  <li>المنتج وجد به عيب الاستخدام وليس عيب التصنيع</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-primary text-primary-foreground p-8 rounded-lg mt-12">
            <h3 className="text-2xl font-bold mb-4">هل لديك استفسارات؟</h3>
            <p className="mb-6">
              تواصل معنا عبر WhatsApp وسنكون سعداء بمساعدتك في أي استفسار حول سياسة الشحن والاسترجاع
            </p>
            <a
              href="https://wa.me/201204437575?text=أستفسر عن سياسة الشحن والاسترجاع"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
            >
              اتصل بنا عبر WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
