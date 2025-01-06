import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const news = [
  {
    id: 1,
    text: "في #المنتدى_السعودي_للإعلام 2025، سيكون لديك فرصة للمشاركة في ورش عمل ملهمة تغطي مواضيع متنوعة في مجال الإعلام، مع التركيز على تطوير مهارات المشاركين وتقديم رؤى جديدة في صناعة الإعلام العالمية.",
    date: "20 يناير 2025",
    time: "5:00",
    likes: 12,
    hashtags: ["#الإعلام_في_عالم_يتشكل"],
    link: "pic.x.com/0l9kr7nhfV"
  },
  {
    id: 2,
    text: "في #المنتدى_السعودي_للإعلام 2025، نقدم انطلاقة جديدة لتعزيز قوة الإعلام في عالم يتغير باستمرار، من خلال تطوير المهارات الإعلامية.",
    date: "20 يناير 2025",
    time: "6:59",
    likes: 29,
    hashtags: ["#الإعلام_في_عالم_يتشكل", "#هيئة_الإذاعة_والتلفزيون"],
    link: "pic.x.com/mHYNwn5p7Z"
  },
  {
    id: 3,
    text: "إذا كنت تمتلك الكثير من الأفكار المبدعة في مجال الإعلام والتقنيات الحديثة، انضم إلى #SAUDI_MIB واستفد من فرصة تطوير أفكارك مع أفضل الخبراء في هذا المجال. انطلق في مسار جديد نحو الابتكار الإعلامي",
    date: "20 يناير 2025",
    time: "8:00",
    likes: 6,
    hashtags: ["#المنتدى_السعودي_للإعلام", "#الإعلام_في_عالم_يتشكل"],
    link: "pic.x.com/xyz123"
  }
];

export default function NewsSlider() {
  return (
    <div className="relative bg-[#44aea2] py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">أهم الأخبار</h2>
          <div className="flex gap-2">
            <button className="prev-button bg-[#006e5f] hover:bg-[#005c4f] p-2 rounded-lg transition-colors">
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
            <button className="next-button bg-[#006e5f] hover:bg-[#005c4f] p-2 rounded-lg transition-colors">
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: ".prev-button",
            nextEl: ".next-button",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          dir="rtl"
        >
          {news.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-2xl p-4 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#006e5f] rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-sm"></div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-black">المنتدى السعودي للإعلام</span>
                      <span className="text-[#1d9bf0]">✓</span>
                    </div>
                    <div className="text-gray-500">@saudi_mf · متابعة</div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <p className="text-black mb-3 leading-relaxed">{item.text}</p>
                  {item.hashtags.map((hashtag, index) => (
                    <a key={index} href="#" className="text-[#1d9bf0] hover:underline block mb-1">
                      {hashtag}
                    </a>
                  ))}
                  <a href="#" className="text-[#1d9bf0] hover:underline block mb-4">
                    {item.link}
                  </a>
                </div>

                {/* Footer */}
                <div className="text-sm text-gray-500 border-t pt-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span>{item.time}</span>
                      <span>·</span>
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1 hover:text-[#1d9bf0]">
                        <span>💬</span>
                        <span>رد</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-[#f91880]">
                        <span>❤️</span>
                        <span>{item.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}