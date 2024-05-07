import React from "react";
import about from "../assets/about.webp";
import { useTranslation } from "react-i18next";

const About = () => {
  const { i18n } = useTranslation();

  return (
    <section>
      <div className="container mx-auto my-8">
        <h2 className="text-[32px] font-bold mb-6">Kompaniya haqida</h2>
        <img src={about} className="w-full rounded-2xl" alt="About image" />
        {i18n.language === "uz" ? (
          <article className="max-w-[818px] text-base text-[#252c32] mt-8">
            <p>
              Kompaniya 2005 yilning fevral oyida Toshkent shahrida tashkil
              etilgan. Hozirda kompaniyaning Toshkent shahrida 18 ta filiali
              mavjud. <br /> Taomnoma asosan klаb sendvichlari, hot-doglar,
              burgerlar, lavashlar va donarlardan iborat. Bizning ustuvor
              yo'nalishlarimiz - ingredientlarning yangiligi va sifati,
              qo'shimchalarning xilma-xilligi, arzon narxlar va mehmonlarning
              takliflariga e'tibor. <br />
              Har kuni turli xil odamlar MaxWay-dan buyurtma berishadi. Biz esa
              tashrif buyuruvchilar sonini ham, filiallar sonini ham oshirishga
              harakat qilmoqdamiz. Har bir tayyorlangan taom bilan biz o'ziga
              xos retseptlarning tafsilotlarini aniqlaymiz va sizning sevimli
              brendingiz bo'lishda davom etish uchun narx va sifatning mukammal
              muvozanatini qidiramiz. <br /> Agar siz kutilmaganda biz tomondan
              yomon xizmat yoki past sifatli pishirilgan taomga duch kelsangiz,
              bizga @maxwaymasterfood_bot manziliga murojaat qiling. Biz ijobiy
              va salbiy fikr-mulohazalarni mamnuniyat bilan qabul qilamiz.
              Mehmonning shikoyati - bu sovg'a, bu tufayli bizda o'sish uchun
              maqsad bo’ladi.
            </p>
          </article>
        ) : i18n.language === "ru" ? (
          <article className="max-w-[818px] text-base text-[#252c32] mt-8">
            <p>
              Компания была основана в феврале 2005 года в городе Ташкент. В
              настоящее время у компании 18 филиалов в Ташкенте. <br />
              Меню в основном состоит из клубных сэндвичей, хот-догов, бургеров,
              лаваша и шаурмы. Наши основные направления - свежесть и качество
              ингредиентов, разнообразие добавок, доступные цены и внимание к
              предложениям клиентов. <br />
              Каждый день люди разных культур заказывают у нас в MaxWay. Мы
              стремимся увеличить как число клиентов, так и филиалов. С каждым
              приготовленным блюдом мы выявляем детали уникальных рецептов и
              стремимся к идеальному балансу цены и качества, чтобы продолжать
              быть вашим любимым брендом. <br />
              Если вы столкнулись с плохим обслуживанием или плохо
              приготовленной едой, пожалуйста, свяжитесь с нами по адресу
              @maxwaymasterfood_bot. Мы приветствуем как положительные, так и
              отрицательные отзывы. Жалоба гостя - это возможность для улучшения
              и роста.
            </p>
          </article>
        ) : (
          <article className="max-w-[818px] text-base text-[#252c32] mt-8">
            <p>
              The company was established in February 2005 in the city of
              Tashkent. Currently, the company has 18 branches in Tashkent.{" "}
              <br />
              The menu mainly consists of club sandwiches, hot dogs, burgers,
              lavash, and doner kebabs. Our main directions are the freshness
              and quality of ingredients, the diversity of additions, affordable
              prices, and attention to customer suggestions. <br />
              Every day, people of various backgrounds order from MaxWay. We
              strive to increase both the number of customers and branches. With
              each prepared dish, we identify the details of unique recipes and
              aim for the perfect balance of price and quality to continue being
              your favorite brand. <br />
              If you encounter poor service or poorly cooked food, please
              contact us at @maxwaymasterfood_bot. We welcome both positive and
              negative feedback. A guest's complaint is an opportunity for
              improvement and growth.
            </p>
          </article>
        )}
      </div>
    </section>
  );
};

export default About;
