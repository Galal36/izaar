import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold">سياسة الخصوصية</h1>
            <p className="text-primary-foreground/90 mt-4">
              نلتزم بحماية خصوصيتك وبيانات شخصيتك
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 lg:px-8 py-12 md:py-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. مقدمة</h2>
              <p className="text-foreground/70 leading-relaxed">
                مرحباً بك في متجر إزار. نحن نقدر خصوصيتك ونلتزم بحماية بيانات شخصيتك. تشرح هذه السياسة كيف نجمع واستخدام ونحافظ على معلوماتك الشخصية.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. المعلومات التي نجمعها
              </h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                نجمع المعلومات التالية عند استخدامك لموقعنا:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70">
                <li>اسمك الكامل</li>
                <li>عنوان بريدك الإلكتروني</li>
                <li>رقم هاتفك المحمول</li>
                <li>عنوان التوصيل</li>
                <li>المنتجات التي تبحث عنها أو تشتريها</li>
                <li>معلومات الدفع (يتم معالجتها بشكل آمن)</li>
                <li>معلومات الأجهزة والمتصفح</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. كيفية استخدام معلوماتك
              </h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                نستخدم معلوماتك الشخصية للأغراض التالية:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70">
                <li>معالجة طلباتك وتوصيل المنتجات</li>
                <li>الاتصال بك حول حالة طلبك</li>
                <li>تحسين خدماتنا وتجربة المستخدم</li>
                <li>إرسال عروض وأخبار جديدة (إذا وافقت)</li>
                <li>حل النزاعات والتعامل مع الشكاوى</li>
                <li>الامتثال للقوانين والأنظمة المحلية</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. حماية معلوماتك
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                نتخذ تدابير أمنية قوية لحماية معلوماتك الشخصية:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70">
                <li>استخدام تشفير SSL لكل عمليات الدفع</li>
                <li>عدم تخزين بيانات بطاقات الائتمان على خادومنا</li>
                <li>الوصول المحدود للمعلومات الحساسة</li>
                <li>تحديث أنظمتنا الأمنية بشكل مستمر</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. مشاركة معلوماتك
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                نحن لا نشارك معلوماتك الشخصية مع أطراف ثالثة إلا في الحالات التالية:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 mt-4">
                <li>شركات الشحن - لتوصيل الطلبات</li>
                <li>شركات الدفع - لمعالجة العمليات المالية</li>
                <li>متطلبات قانونية - عند الحاجة للامتثال للقانون</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. ملفات تعريف الارتباط
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربتك. يمكنك تعطيل هذه الملفات من إعدادات متصفحك، لكن قد يؤثر ذلك على بعض ميزات الموقع.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. حقوقك
              </h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                لديك الحق في:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70">
                <li>الوصول إلى معلوماتك الشخصية</li>
                <li>تصحيح معلوماتك إذا كانت غير دقيقة</li>
                <li>طلب حذف معلوماتك</li>
                <li>الاعتراض على استخدام بياناتك</li>
                <li>سحب موافقتك في أي وقت</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                8. التواصل معنا
              </h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                إذا كان لديك أي أسئلة حول سياسة الخصوصية أو تريد ممارسة أحد حقوقك، يرجى التواصل معنا:
              </p>
              <div className="bg-secondary p-6 rounded-lg space-y-2">
                <p>
                  <span className="font-bold text-foreground">البريد الإلكتروني:</span>{" "}
                  <a
                    href="mailto:privacy@izaar.com"
                    className="text-primary hover:underline"
                  >
                    privacy@izaar.com
                  </a>
                </p>
                <p>
                  <span className="font-bold text-foreground">WhatsApp:</span>{" "}
                  <a
                    href="https://wa.me/201204437575"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    01204437575
                  </a>
                </p>
                <p>
                  <span className="font-bold text-foreground">العنوان:</span> أسيوط، مصر
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                9. التحديثات على السياسة
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم إخطارك بأي تغييرات مهمة عبر البريد الإلكتروني أو إشعار على الموقع.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 p-6 rounded-lg">
              <p className="text-foreground">
                <strong>✓ آخر تحديث:</strong> ديسمبر 2024
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
