<template>
  <div class="containter" style="font-family: 'Open Sans'; width: 80%; margin: auto">
    <h2>Tin tức ẩm thực</h2>
    <div id="articles" v-for="article in articles" :key="article">
      <div class="article row" style="text-align: left;display: flex;align-items: center; margin-top: 15px; width: 100%">
        <div class="img col-3">
          <img :src="article.imgSrc" alt="img" style="width: 80% !important; border-radius: 10%">
        </div>
        
        <div class="title-description col-9" style="">
          <a :href="article.link" class="title">{{ article.title }}</a>
          <div class="description">{{ article.description }}</div>
        </div>
      </div>
    </div>
    
  </div>
  
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  font-family: 'Open Sans';
}

</style>
<script>
export default {
  data() { 
    return {
      articles: [
        {
          'imgSrc': 'https://i1-dulich.vnecdn.net/2022/04/27/thuanbuomxuoigio-1651050861-16-3491-4425-1651050980.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=fVmVQS-brnUgU6KRr6Na1Q',
          'link': 'https://vnexpress.net/mon-sashimi-thuan-buom-xuoi-gio-4456147.html',
          'title': "Món sashimi 'thuận buồm xuôi gió'",
          'description': 'Sashimi cá bơn vàng thường được ăn vào dịp khai trương hoặc khởi động dự án do có nhiều ý nghĩa về sự thịnh vượng và khởi đầu thuận lợi.'
        },
        {
          "imgSrc": "https://i1-dulich.vnecdn.net/2022/03/04/banh-hanh-4911-1646302384-1646-7229-6621-1646370345.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=cZprSfBH1SlBjgJMl-5RSg",
          "link": "https://vnexpress.net/10-loai-banh-kep-ngon-nhat-the-gioi-4434289.html",
          "title": "10 loại bánh kếp ngon nhất thế giới",
          "description": "Hottokeki Nhật Bản, bánh xèo nhân hành Trung Quốc... được đưa vào danh sách những loại bánh kếp ngon nhất thế giới."
        },
        {
          "imgSrc": "https://i1-dulich.vnecdn.net/2022/02/09/1-1644382152-1644382162-8107-1644382223.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=RHRd1-UerCSUFD65TMCDwg",
          "link": "https://vnexpress.net/16-dieu-nen-tranh-khi-den-nha-hang-4425408.html",
          "title": "16 điều nên tránh khi đến nhà hàng",
          "description": "Bắt nạt bồi bàn, đặt bàn 3 nhưng lại dẫn 6 người tới nhà hàng... là những điều chuyên gia ẩm thực Matt Preston lưu ý."
        },
        {
          "imgSrc": "https://i1-vnexpress.vnecdn.net/2022/02/07/w33151851199987548234605215798-4845-8803-1644201755.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=xXlcAbs3ntiojAIAmqDSmg",
          "link": "https://vnexpress.net/biet-banh-chung-e-nhung-tet-van-goi-4424636.html",
          "title": "Biết bánh chưng 'ế' nhưng Tết vẫn gói",
          "description": "Mâm cỗ ngày Tết của gia đình tôi, giữa ê chề thịt heo, gà vịt, hải sản là chiếc bánh chưng."
        },
        {
          "imgSrc": "https://i1-dulich.vnecdn.net/2022/02/06/ho-chi-minh-city-best-food-tou-3976-3121-1644120031.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=XMVr2Wzqdcxg_SknNlFbjQ",
          "link": "https://vnexpress.net/tour-am-thuc-tp-hcm-bang-xe-may-lot-top-trai-nghiem-the-gioi-4424317.html",
          "title": "Tour ẩm thực TP HCM bằng xe máy lọt top trải nghiệm thế giới",
          "description": "Khám phá ẩm thực đường phố TP HCM trên xe máy là một trong 15 trải nghiệm ăn uống được yêu thích nhất thế giới."
        },
        {
          "imgSrc": "https://i1-giadinh.vnecdn.net/2022/01/28/26-1-202253-7736-1643191455-16-8874-3537-1643352795.png?w=500&h=300&q=100&dpr=1&fit=crop&s=mtBTCsAqSFfvX7jV7fU9lA",
          "link": "https://vnexpress.net/tai-hien-mam-com-truyen-thong-trong-bo-tranh-ngay-tet-4421300.html",
          "title": "Tái hiện mâm cơm truyền thống trong bộ tranh ngày Tết",
          "description": "Sứ Long Phương đã kết hợp cùng họa sĩ tạo ra bộ tranh khắc họa những món ăn truyền thống trong dịp Tết, nhằm mang lại nét đặc trưng và gần gũi, gắn bó ấm áp của gia đình."
        },
        {
          "imgSrc": "https://i1-dulich.vnecdn.net/2022/01/18/4-4210-1642346524-1642477779-4008-1642477855.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=xYzKFhJOc6KE56sNxUXUDA",
          "link": "https://vnexpress.net/su-sang-tao-khong-noi-nen-loi-cua-cac-nha-hang-4417069.html",
          "title": "Sự sáng tạo không nói nên lời của các nhà hàng",
          "description": "Nhiều thực khách chỉ mong đầu bếp bày đồ ăn lên một chiếc đĩa đơn giản, thay vì sáng tạo theo phong cách khó hiểu."
        },
        {
          "imgSrc": "https://i1-dulich.vnecdn.net/2022/01/14/8-9021-1641992339-1642177139-6142-1642177311.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=tWi8AjRPREiCvXy_T2dJFg",
          "link": "https://vnexpress.net/nhung-nha-hang-lang-man-o-maldives-4415376.html",
          "title": "Những nhà hàng lãng mạn ở Maldives",
          "description": "Một bữa ăn giữa không gian của vùng biển thiên đường Ấn Độ Dương sẽ đem đến những trải nghiệm khó quên."
        },
        {
          "imgSrc": "https://i1-dulich.vnecdn.net/2022/01/14/nh1-1642176180-1642176191-9189-1642176293.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=j1uwtQtwN8AZ82-cz32mfQ",
          "link": "https://vnexpress.net/am-thuc-tet-nham-dan-2022-tai-flc-hotels-amp-resorts-4416515.html",
          "title": "Ẩm thực Tết Nhâm Dần 2022 tại FLC Hotels & Resorts",
          "description": "Du xuân Nhâm Dần đón năm mới 2022, FLC Hotels & Resorts mang tới cho thực khách trải nghiệm “đón Tết xa vui như Tết nhà” với các món ăn quen thuộc được nâng tầm."
        },
        {
          "imgSrc": "https://i1-dulich.vnecdn.net/2022/01/13/a2-1642063907-1642063915-3555-1642064059.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=2ITxaTrlYqkmdozEC14XgQ",
          "link": "https://vnexpress.net/vinpearl-dong-hanh-cung-cac-nghe-nhan-giu-gin-tinh-hoa-am-thuc-viet-4415933.html",
          "title": "Vinpearl đồng hành cùng các nghệ nhân giữ gìn tinh hoa ẩm thực Việt",
          "description": "Vinpearl phối hợp cùng Hiệp hội Văn hóa Ẩm thực Việt Nam tổ chức sự kiện “Tinh hoa ẩm thực Việt” tại Phú Quốc United Center với sự đồng hành của 20 nghệ nhân."
        },
      ]
    }
  }
}
</script>