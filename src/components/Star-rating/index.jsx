import { useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hovering, setHovering] = useState(0);

  const numberOfStars = 7;

  // ساخت یک رشته از اعداد به طول تعداد ستاره ها و بخش دوم مقدار هر خانه رو برابر با اندیش ای قرار میده
  // راه حل اول
  const starArray = Array.from({ length: numberOfStars }, (_, i) => i + 1);
  // راه حل دوم
  // const starArray1 = [...Array(numberOfStars)].map((_, i) => i);

  // console.log(starArray);

  const makeStarRating = (star) => {
    // console.log(star);
    setRating(star);
  };

  const makeStarHovering = (star) => {
    // debugger;
    console.log(star);
    setHovering(star);
  };

  const handleMouseLeave = () => {
    setHovering(rating);
  };

  return (
    <div className="flex  justify-center my-5 text-3xl">
      {starArray &&
        starArray.map(
          (star) => {
            // راه حل کوتاه شده پایین
            // اگر هاور فعال بود الویت اون باشه در غیر این صورت بر اساس ریتنگ داده شده باشه

            const isActive = star <= (hovering || rating);
            console.log(isActive);
            return (
              <div
                key={star}
                style={{ color: isActive ? "yellow" : "inherit" }}
                onClick={() => makeStarRating(star)}
                onMouseEnter={() => makeStarHovering(star)}
                onMouseLeave={() => handleMouseLeave()}
              >
                {isActive ? <IoIosStar /> : <IoIosStarOutline />}
              </div>
            );
          }
          // اگر هاور فعال بود الویت اون باشه در غیر این صورت بر اساس ریتنگ داده شده باشه
          // star <= (hovering || rating) ? (
          //   <div
          //     key={star}
          //     style={{ color: "yellow" }}
          //     onClick={() => makeStarRating(star)}
          //     onMouseEnter={() => makeStarHovering(star)}
          //     onMouseLeave={() => handleMouseLeave()}
          //   >
          //     {/* ستاره تو پر */}
          //     <IoIosStar />
          //   </div>
          // ) : (
          //   <div
          //     key={star}
          //     onClick={() => makeStarRating(star)}
          //     onMouseEnter={() => makeStarHovering(star)}
          //     onMouseLeave={() => handleMouseLeave()}
          //   >
          //     {/* ستاره تو خالی */}
          //     <IoIosStarOutline />
          //   </div>
          // )
        )}
    </div>
  );
};

export default StarRating;
