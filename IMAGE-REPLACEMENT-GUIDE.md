# 📸 دليل تبديل صور Völkerschlachtdenkmal Modal

## 📁 مواقع الملفات

### الصور موجودة في:
```
frontend/public/germany/leipzig/
```

### الصور الموجودة حالياً:
1. **voelkerschlachtdenkmal-aussen.jpg** - المنظر الخارجي
2. **voelkerschlacht-innenraum.jpg** - القاعات الداخلية
3. **leipzig-museum.jpg** - المتحف
4. **leipzig-panorama.jpg** - بانوراما المدينة
5. **volkerschlacht-banner03.jpg** - الصورة الرئيسية في تبويب "Übersicht"

---

## 🔄 كيفية تبديل الصور

### الطريقة 1: استبدال الصور مباشرة
ببساطة، استبدل الصورة القديمة بصورة جديدة **بنفس الاسم**:

```bash
# مثال: استبدال صورة المنظر الخارجي
cp /path/to/your/new/image.jpg frontend/public/germany/leipzig/voelkerschlachtdenkmal-aussen.jpg
```

**ملاحظة:** احتفظ بنفس اسم الملف لتجنب تعديل الكود!

---

### الطريقة 2: إضافة صور جديدة وتعديل الكود

إذا أردت استخدام أسماء مختلفة:

#### 1. أضف الصور الجديدة:
```bash
cp your-new-image.jpg frontend/public/germany/leipzig/my-new-image.jpg
```

#### 2. عدّل ملف المودال:
افتح الملف:
```
frontend/src/components/VolkerschlachtdenkmalModal.tsx
```

#### 3. ابحث عن السطور 14-27:
```typescript
const images = {
    exterior: [
        '/germany/leipzig/voelkerschlachtdenkmal-aussen.jpg',  // غيّر هذا
        '/germany/leipzig/leipzig-panorama.jpg'
    ],
    interior: [
        '/germany/leipzig/voelkerschlacht-innenraum.jpg',      // غيّر هذا
        '/germany/leipzig/leipzig-panorama.jpg'
    ],
    museum: [
        '/germany/leipzig/leipzig-museum.jpg',                  // غيّر هذا
        '/germany/leipzig/voelkerschlachtdenkmal-aussen.jpg'
    ]
};
```

#### 4. غيّر المسارات:
```typescript
const images = {
    exterior: [
        '/germany/leipzig/my-new-exterior.jpg',  // الاسم الجديد
        '/germany/leipzig/leipzig-panorama.jpg'
    ],
    // ... إلخ
};
```

---

### الطريقة 3: تغيير الصورة الرئيسية (في تبويب Übersicht)

ابحث عن السطر 65 في نفس الملف:
```typescript
<img 
    src="/germany/leipzig/volkerschlacht-banner03.jpg"  // غيّر هذا
    alt="Völkerschlachtdenkmal" 
    // ...
/>
```

---

## 📋 خريطة الصور في المودال

| التبويب | الصور المستخدمة |
|---------|------------------|
| **📋 Übersicht** | `volkerschlacht-banner03.jpg` (السطر 65) |
| **🏛️ Außen** | `voelkerschlachtdenkmal-aussen.jpg`, `leipzig-panorama.jpg` (السطور 15-18) |
| **🎭 Innen** | `voelkerschlacht-innenraum.jpg`, `leipzig-panorama.jpg` (السطور 19-22) |
| **🎨 Museum** | `leipzig-museum.jpg`, `voelkerschlachtdenkmal-aussen.jpg` (السطور 23-26) |
| **💰 Preise** | لا توجد صور |

---

## 🎨 مواصفات الصور الموصى بها

### الحجم:
- **العرض**: 800-1200 بكسل
- **الارتفاع**: 600-800 بكسل
- **النسبة**: 4:3 أو 16:9

### التنسيق:
- **JPG** (موصى به للصور الفوتوغرافية)
- **PNG** (للصور ذات الخلفية الشفافة)
- **WebP** (للأداء الأفضل)

### حجم الملف:
- أقل من **1 MB** لكل صورة
- استخدم أدوات ضغط الصور للحصول على أفضل أداء

---

## 🔧 نصائح إضافية

### 1. استخدام Fallback Images
الكود يحتوي على صور احتياطية من Unsplash إذا فشل تحميل الصورة المحلية.

### 2. التحقق من الصور
بعد تبديل الصور:
```bash
# تحقق من وجود الصور
ls -lh frontend/public/germany/leipzig/

# افتح المتصفح وحدّث الصفحة
# Ctrl+Shift+R (تحديث قوي)
```

### 3. رفع التغييرات إلى Git
```bash
git add frontend/public/germany/leipzig/
git commit -m "Update Völkerschlachtdenkmal images"
git push
```

---

## 📝 مثال عملي كامل

```bash
# 1. انتقل إلى مجلد الصور
cd frontend/public/germany/leipzig/

# 2. احتفظ بنسخة احتياطية من الصورة القديمة
cp voelkerschlachtdenkmal-aussen.jpg voelkerschlachtdenkmal-aussen-old.jpg

# 3. انسخ الصورة الجديدة
cp ~/Downloads/my-new-photo.jpg voelkerschlachtdenkmal-aussen.jpg

# 4. تحقق من التغيير
ls -lh

# 5. ارفع إلى Git
cd ../../../..  # ارجع إلى المجلد الرئيسي
git add frontend/public/germany/leipzig/
git commit -m "Update exterior image"
git push
```

---

## ✅ الخلاصة

- **الصور في**: `frontend/public/germany/leipzig/`
- **الكود في**: `frontend/src/components/VolkerschlachtdenkmalModal.tsx`
- **لتبديل صورة**: استبدلها بنفس الاسم أو عدّل الكود
- **بعد التبديل**: حدّث المتصفح بقوة (Ctrl+Shift+R)
