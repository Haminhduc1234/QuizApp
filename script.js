const questions = [
  {
    question: "Những kiến thức về địa lí Việt Nam?",
    optionA: "địa lí tự nhiên và địa lí kinh tế xã hội",
    optionB: "địa lí tự nhiên và địa lí dân cư",
    optionC: "địa lí dân cư và địa lí kinh tế",
    optionD: "địa lí kinh tế và địa lí tự nhiên",
    correctOption: "optionA",
  },

  {
    question:
      "Đặc điểm nào dưới đây không phải là của vị trí địa lí tự nhiên nước ta ?",
    optionA: "Vị trí cầu nối giữa Đông Nam Á đất liền và Đông Nam Á hải đảo",
    optionB: "Vị trí nội chí tuyến",
    optionC: "Vị trí gần trung tâm khu vực Đông Nam Á",
    optionD: "Vị trí nằm ở bán cầu Tây",
    correctOption: "optionD",
  },

  {
    question: "Việt Nam có biên giới đất liền với?",
    optionA: `Trung Quốc, Lào, Thái Lan`,
    optionB: "Trung Quốc, Lào, Cam-pu-chia",
    optionC: "Lào, Cam-pu-chia, Thái Lan",
    optionD: " Cam-pu-chia, Thái Lan, Trung Quốc",
    correctOption: "optionB",
  },

  {
    question: "Phần lớn khoáng sản của nước ta có trữ lượng ?",
    optionA: "lớn và vừa",
    optionB: "vừa và nhỏ",
    optionC: "vừa và rất nhỏ",
    optionD: "rất lớn và lớn",
    correctOption: "optionB",
  },

  {
    question:
      "Địa hình đồi núi chiếm 3/4 diện tích lãnh thổ nước ta, nhưng chủ yếu là",
    optionA: "đồi núi cao",
    optionB: "đồi núi trung bình",
    optionC: "đối núi thấp",
    optionD: "đối núi đá vôi",
    correctOption: "optionC",
  },

  {
    question: "Địa hình nào sau đây không phải là địa hình nhân tạo?",
    optionA: "Hầm mỏ",
    optionB: " Đồng bằng phù sa mới",
    optionC: "Đê đập",
    optionD: "Kênh rạch",
    correctOption: "optionB",
  },
  {
    question: "Đặc điểm nào sau đây không đúng với vùng núi Đông Bắc nước ta?",
    optionA: "Vùng đồi núi thấp",
    optionB: "Các dãy núi chạy theo hướng tây bắc - đông nam",
    optionC: "Địa hình thấp dần từ tây bắc xuống đông nam",
    optionD: "Địa hình các-xtơ phổ biến",
    correctOption: "optionB",
  },

  {
    question: "Đồng bằng có diện tích lớn nhất nước ta là ?",
    optionA: "đồng bằng sông Hồng",
    optionB: "đồng bằng duyên hải Bắc Trung Bộ",
    optionC: "đồng bằng duyên hải miền Trung",
    optionD: "đồng bằng sông Cửu Long",
    correctOption: "optionD",
  },

  {
    question: "Đồng bằng sông Hồng có đặc điểm nào sau đây?",
    optionA: "Hệ thống kênh rạch chằng chịt",
    optionB: "Về mưa lũ, nhiều vùng trũng bị ngập sâu",
    optionC: `Hệ thống đê sông chống lũ`,
    optionD: "Về mùa khô, nước mặn xâm nhập trên diện rộng",
    correctOption: "optionC",
  },

  {
    question: `Căn cứ vào Atlat Địa lí Việt Nam trang 9 ,
      hãy cho biết khu vực nào ở nước ta chịu tác động của bão với tần suất lớn nhất ?`,
    optionA: "Ven biển Bắc Bộ",
    optionB: "Ven biển các tỉnh Thanh Hóa , Nghệ An",
    optionC: "Ven biển các tỉnh Hà Tĩnh , Quảng Bình",
    optionD: "Ven biển Nam Trung Bộ",
    correctOption: "optionC",
  },
  {
    question: "Nhiệt độ không khí ở nước ta tăng dần:",
    optionA: "từ bắc vào nam",
    optionB: "từ tây sang đông",
    optionC: "từ thấp lên cao",
    optionD: "từ miền biển vào miền núi",
    correctOption: "optionA",
  },

  {
    question: "Loại gió về mùa hạ ở nước ta chủ yếu có hướng:",
    optionA: "tây bắc",
    optionB: "đông bắc",
    optionC: "đông nam",
    optionD: "tây nam",
    correctOption: "optionD",
  },

  {
    question: "Lượng mưa trung bình năm ở nước ta là:",
    optionA: "1.200 - 2.000mm",
    optionB: "1.300 - 2.000mm",
    optionC: "1.400 - 2.000mm",
    optionD: "1.500 - 2.000mm",
    correctOption: "optionD",
  },

  {
    question: "Gió mùa đông bắc ít ảnh hưởng đến phần lãnh thổ:",
    optionA: "Trung du và miền núi Bắc Bộ",
    optionB: "Đông Trường Sơn",
    optionC: "Nam Bộ và Tây Nguyên",
    optionD: "Đồng bằng Bắc Bộ",
    correctOption: "optionC",
  },

  {
    question: `Trong số các con sông của nước ta, sông có hàm lượng 
      phù sa trung bình lớn nhất là:`,
    optionA: "sông Hồng",
    optionB: "sông Cửu Long",
    optionC: "sông Cả",
    optionD: "sông Đồng Nai",
    correctOption: "optionA",
  },

  {
    question: "Đặc điểm chung nổi bật của các sông ở Trung Bộ nước ta là:",
    optionA: "ngắn, thoải",
    optionB: "ngắn, dốc",
    optionC: "dài, thoải",
    optionD: "dài, dốc",
    correctOption: "optionB",
  },

  {
    question:
      "Sông ngòi ở vùng nào sau đây có giá trị thủy điện lớn nhất nước ta?",
    optionA: "Tây Bắc",
    optionB: "Đông Bắc",
    optionC: "Tây Nguyên",
    optionD: "Trung Bộ",
    correctOption: "optionA",
  },

  {
    question: "Điểm nào sau đây không đúng với nhóm đất feralit?",
    optionA: "Đất chua, nghèo mùn",
    optionB: "Hình thành tại các miền đồi núi thấp",
    optionC: "Đất có màu đỏ, vàng",
    optionD: "Thường dùng đẻ trồng lúa.",
    correctOption: "optionD",
  },

  {
    question:
      "Đất đỏ badan tập trung nhiều nhất ở các vùng nào sau đây của nước ta?",
    optionA: "Tây Nguyên, Đông Nam Bộ, Nam Bộ",
    optionB: "Tây Nguyên, Đông Nam Bộ, Bắc Trung Bộ",
    optionC: "Tây Nguyên, Bắc Bộ, Bắc Trung Bộ",
    optionD: "Tây Nguyên, Bắc Trung Bộ, Đồng bằng sông Hồng.",
    correctOption: "optionB",
  },

  {
    question: `Căn cứ vào Attlat Địa lí Việt Nam trang 9, 
      loại đất chiếm diện tích lớn nhất đồng bằng sông Hồng là:`,
    optionA: "đất cát biển",
    optionB: "đất phù sa sông",
    optionC: "đất phèn",
    optionD: "đất mặn",
    correctOption: "optionB",
  },

  {
    question: "Sinh vật Việt Nam có đặc điểm:",
    optionA: "phong phú và đa dạng",
    optionB: "có nhiều loài ôn đới",
    optionC: "đa dạng về gen, đơn điệu về mặt sinh thái",
    optionD: "rất ít về số lượng và chủng loại",
    correctOption: "optionA",
  },

  {
    question:
      "Hệ sinh thái rừng ngập mặn ở nước ta tập trung nhiều nhất ở ven biển:",
    optionA: "Bắc Bộ",
    optionB: "Nam Trung Bộ",
    optionC: "Bắc Trung Bộ",
    optionD: "Nam Bộ",
    correctOption: "optionD",
  },

  {
    question: "Hệ sinh thái nào sau đây là hệ sinh thái tự nhiên?",
    optionA: "Đầm phá",
    optionB: "Rừng trồng cây công nghiệp",
    optionC: "Đồng ruộng",
    optionD: "Rừng trồng cây lấy gỗ",
    correctOption: "optionA",
  },

  {
    question:
      "Nguyên nhân chủ yếu làm suy giảm nguồn lợi hải sản nước ta hiện nay là do:",
    optionA: "đánh bắt bằng công cụ thô sơ",
    optionB: "đánh bắt bằng công cụ hiện đại",
    optionC: "đánh bắt bằng các phương tiện có tính hủy diệt",
    optionD: "đánh bắt quy mô ngày càng lớn",
    correctOption: "optionC",
  },

  {
    question: "Sự phong phú của loài sinh vật biển ở nước ta là do:",
    optionA: "vùng biển nước ta có nhiều ngư trường",
    optionB: "thềm lục địa ấm và nóng, có nhiều dòng hải lưu ven biển",
    optionC: "nước biển ấm, độ mặn cao",
    optionD: "nhiều cửa sông đổ ra biển",
    correctOption: "optionB",
  },

  {
    question: `Căn cứ vào Atlat Địa lí Việt Nam trang 12, vườn quốc gia nào sau đây 
      thuộc phân khu địa lí động vật Đông Bắc?`,
    optionA: "Hoàng Liên Sơn",
    optionB: "Xuân Sơn",
    optionC: "Bái Tử Long",
    optionD: "Pù Mát",
    correctOption: "optionC",
  },

  {
    question:
      "Hệ sinh thái phát triển mạnh ở vùng đất bãi triều cửa sông, ven biển nước ta là:",
    optionA: "rừng ngập nước",
    optionB: "tràng cỏ, cây bụi",
    optionC: "rừng ngập mặn",
    optionD: "thảm cỏ ngập nước",
    correctOption: "optionC",
  },
  {
    question:
      "Trên lãnh thổ nước ta, số lượng dân tộc anh em cùng chung sống là:",
    optionA: "45 dân tộc",
    optionB: "54 dân tộc",
    optionC: "34 dân tộc",
    optionD: "64 dân tộc",
    correctOption: "optionB",
  },

  {
    question:
      "Hiện tượng “bùng nổ dân số” ở nước ta diễn ra vào thời gian nào?",
    optionA: "Cuối thế kỳ XIX",
    optionB: "Đầu thế kỳ XX",
    optionC: "Cuối những năm 50 của thể kỷ XX đến cuối thế kỷ XX",
    optionD: "Đầu thế kỷ XXI",
    correctOption: "optionC",
  },

  {
    question: "Cơ cấu dân số của nước ta có sự thay đổi theo hướng:",
    optionA:
      "tỉ lệ trẻ em giảm, tỉ lệ người trong độ tuổi lao động và trên độ tuổi lao động tăng",
    optionB:
      "tỉ lệ trẻ em, tỉ lệ người trong độ tuổi lao động và trên độ tuổi lao động tăng.",
    optionC:
      "tỉ lệ trẻ em, tỉ lệ người trong độ tuổi lao động và trên độ tuổi lao động giảm.",
    optionD:
      "tỉ lệ trẻ em tăng, tỉ lệ người trong độ tuổi lao động và trên độ tuổi lao động giảm.",
    correctOption: "optionA",
  },

  {
    question: "Tỉ lệ gia tăng dân số ở nước ta có xu hướng giảm là do:",
    optionA: "quy mô dân số nước ta giảm dần",
    optionB: "dân số nước ta có xu hướng già hóa",
    optionC: "chất lượng cuộc sống chưa được nâng cao",
    optionD: "thực hiện tốt chính sách dân số và kế hoạch hóa gia đình",
    correctOption: "optionD",
  },

  {
    question:
      "Đặc điểm nào sau đây không đúng với sự phân bổ dân cư ở nước ta?",
    optionA: "Tập trung đông đúc ở đồng bằng, ven biển và các đô thị",
    optionB: "Miền núi dân cư thưa thớt",
    optionC: "Dân số phân bổ hợp lý giữa các vùng",
    optionD: "Phần lớn dân cư tập trung ở vùng nông thôn",
    correctOption: "optionC",
  },

  {
    question: `Năm 2019, dân số nước ta là 96,48 triệu người; trong đó dân số thành thị là 33,8.. triệu người. 
      Vậy tỉ lệ dân thành thị của nước ta năm 2019 là:`,
    optionA: "33,0%",
    optionB: "34,0%",
    optionC: "35,0%",
    optionD: "36,0%",
    correctOption: "optionC",
  },

  {
    question:
      "Trong những năm gần đây, trung bình mỗi năm dân số nước ta tăng thêm:",
    optionA: "khoảng 1 tỉ người",
    optionB: "khoảng 10 triệu người",
    optionC: "khoảng 1 nghìn người",
    optionD: " khoảng 1 triệu người ",
    correctOption: "optionD",
  },
  {
    question: `Căn cứ vào Atlat Địa lí Việt Nam trang 15, khu vực kinh tế nước ta chiếm tỉ lệ 
      lao động đang làm việc phân theo khu vực kinh tế cao nhất là:`,
    optionA: "nông, lâm, thủy sản",
    optionB: "công nghiệp và xây dựng",
    optionC: "dịch vụ",
    optionD: "công nghiệp",
    correctOption: "optionA",
  },

  {
    question:
      "Tình trạng thiếu việc làm là nét đặc trưng của khu vực nông thôn do:",
    optionA: "hoạt động kinh tế nông thôn chưa được đa dạng hóa",
    optionB: "hoạt động sản xuất có tính mùa vụ",
    optionC: "trình độ lao động nông thôn còn thấp",
    optionD:
      "đặc điểm mùa vụ của sản xuấtnoong nghiệp và các hoạt động kinh tế ở nông thôn chưa được đa dạng hóa.",
    correctOption: "optionD",
  },

  {
    question:
      "Kinh tế nông thôn ngày càng phát triển thì tỉ lệ người làm nông nghiệp:",
    optionA: "ngày càng giảm",
    optionB: "ngày càng tăng",
    optionC: "vẫn không thay đổi",
    optionD: "thay đổi không đáng kể",
    correctOption: "optionA",
  },

  {
    question:
      "Cơ cấu lao động phân theo ngành của nước ta đang có sự chuyển dịch theo hướng:",
    optionA:
      "khu vực nông, lâm, ngư nghiệp giảm; khu vực công nghiệp - xây dựng và dịch vụ tăng.",
    optionB:
      "khu vực nông, lâm, ngư nghiệp tăng; khu vực công nghiệp - xây dựng và dịch vụ giảm.",
    optionC:
      "khu vực nông, lâm, ngư nghiệp không thay đổi; khu vực công nghiệp - xây dựng giảm, khu vực dịch vụ tăng.",
    optionD:
      "khu vực nông, lâm, ngư nghiệp giảm; khu vực công nghiệp - xây dựng không thay đổi, khu vực dịch vụ tăng.",
    correctOption: "optionA",
  },

  {
    question: `Căn cứ vào Atlat Địa lí Việt Nam trang 16, Trung du và miền núi Bắc Bộ 
      là địa bàn cư trú chủ yếu của các dân tộc:`,
    optionA: "Gia-rai, Ê-đê, Chăm, Ra-giai, Chu-ru.",
    optionB: "Khơ-me, Ba-na, Cơ-tu, Xơ-đăng, Ra-giai.",
    optionC: "Tày, Thái, Nùng, Mường, Dao, Mông.",
    optionD: "Ơ-đu, Rơ-năm, Cơ-ho, Gia-rai.",
    correctOption: "optionC",
  },

  {
    question:
      "Mặc dù tốc độ gia tăng dân số tự nhiên đã giảm, nhưng dân số nước ta vẫn tăng nhanh là do:",
    optionA: "nước ta có nhiều dân tộc",
    optionB: "phân bổ dân cư không đồng đều.",
    optionC: "nước ta có quy mô dân số lớn.",
    optionD: "tốc độ gia tăng dân số ở nông thôn, miền núi cao.",
    correctOption: "optionC",
  },

  {
    question:
      "Một trong những nguyên nhân ảnh hưởng đến tỉ số giới tính ở nước ta là:",
    optionA: "hiện tượng bùng nổ dân số",
    optionB: "hiện tượng thừa lao động",
    optionC: "sự phân bổ dân cư không đồng đều",
    optionD: "hiện tượng sinh đẻ khong có kế hoạch",
    correctOption: "optionD",
  },

  {
    question: `Căn cứ vào Atlat Địa lí Việt Nam trang 15, phần lớn diện tích có mật độ dân 
      số từ 1.001 nguời/km2 trở lên tập trung ở vùng:`,
    optionA: "Đồng bằng sông Hồng",
    optionB: "Đông Nam Bộ",
    optionC: "Đồng bằng sông Cửu Long",
    optionD: "Bắc Trung Bộ",
    correctOption: "optionA",
  },

  {
    question:
      " Căn cứ vào Atlat Địa lí Việt Nam trang 15, đô thi đặc biệt của nước ta là:",
    optionA: "Hà Nội, Hải Phòng",
    optionB: "Hà Nội, Đà Nẵng",
    optionC: "Hà Nội, TP. Hồ Chí Minh",
    optionD: "Cần Thơ, TP. Hồ Chí Minh",
    correctOption: "optionC",
  },
  {
    question: "Công cuộc đổi mới toàn diện nền kinh tế nước ta bắt đầu từ năm:",
    optionA: "1976",
    optionB: "1980",
    optionC: "1986",
    optionD: "1990",
    correctOption: "optionC",
  },

  {
    question:
      "Công cuộc đổi mới của nước ta không diễn ra theo xu thế nào sau đây?",
    optionA: "Phát triển nền kinh tế thị trường tư bản chủ nghĩa.",
    optionB: "Dân chủ hóa đời sống kinh tế - xã hội",
    optionC:
      "Phát triển nền kinh tế hàng hóa nhiều thành phần theo định hướng xã hội chủ nghĩa.",
    optionD: "Tăng cường giao lưu và hợp tác với các nước trên thế giới.",
    correctOption: "optionA",
  },

  {
    question:
      "Nước ta đẩy mạnh quá trình công nghiệp hóa, hiện đại hóa vào năm:",
    optionA: "1980",
    optionB: "1986",
    optionC: "1990",
    optionD: "1996",
    correctOption: "optionD",
  },

  {
    question:
      "Đặc điểm nào sau đây không đúng về thành tựu của nền kinh tế nước ta trong thời kỳ đổi mới?",
    optionA: "Kinh tế chuyển dịch theo hướng công nghiệp hóa, hiện đại hóa",
    optionB: "Kinh tế tăng trưởng tướng đối vững chắc",
    optionC: "Nước ta ngày càng hội nhập vào nền kinh tế khu vực và toàn cầu",
    optionD:
      "Nhiều tài nguyên đang bị khai thác quá mức, nước ta khuyến khích phát triển.",
    correctOption: "optionD",
  },
  {
    question:
      "Trong công cuộc Đổi mới kinh tế, nước ta khuyến khích phát triển:",
    optionA: "kinh tế tư nhân",
    optionB: "kinh tế nhà nước",
    optionC: "kinh tế nhiều thành phần",
    optionD: "kinh tế có vốn đầu tư nước ngoài",
    correctOption: "optionC",
  },

  {
    question:
      "Chuyển dịch cơ cấu kinh tế nước ta được thể hiện ở ba mặt chủ yếu là:",
    optionA: "ngành, vùng và tỉnh",
    optionB: "ngành, lãnh thổ và thành phần kinh tế",
    optionC: "ngành, vùng kinh tế và trung tâm công nghiệp",
    optionD: "công nghiệp, nông nghiệp và dịch vụ",
    correctOption: "optionB",
  },

  {
    question:
      "Thành tựu quan trọng nhất mà công cuộc Đổi mới ở nước ta mang lại là:",
    optionA:
      "đưa nền kinh tế nước ta thoát khỏi khủng hoảng, từng bước ổn định và phát triển",
    optionB: "sản lượng gạo xuất khẩu được xếp vào nhóm nước dẫn đầu thế giới",
    optionC: "tạo ra nhiều việc làm, nâng cao mức sống cho nhân dân",
    optionD: "mở rộng mối quan hệ giao lưu, hợp tác với nước ngoài.",
    correctOption: "optionA",
  },

  {
    question: "Hai nhóm đất chiếm diện tích lớn nhất nước ta là:",
    optionA: "đất phù sa và đất feralit",
    optionB: "đất phù sa và đất badan",
    optionC: "đất feralit và đất xám",
    optionD: "đất phù sa và đất xám",
    correctOption: "optionA",
  },

  {
    question:
      "Nhân tố tự nhiên nào sau đây quy định nền nông nghiệp nước ta là nền nông nghiệp nhiệt đới?",
    optionA: "Khí hậu nhiệt đới ẩm gió mùa",
    optionB: "Đất phù sa màu mỡ",
    optionC: "Nguồn nước dồi dào",
    optionD: "Sinh vật nhiệt đới",
    correctOption: "optionA",
  },

  {
    question:
      "Các nhân tố tự nhiên ảnh hưởng đến sự phát triển và phân bổ nông nghiệp là:",
    optionA: "đất, khí hậu, nguồn nước, sinh vật",
    optionB: "đất, rừng, biển, khí hậu",
    optionC: "dất, khoáng sản, khí hậu, sinh vật",
    optionD: "đất, khí hậu, nguồn nước, sinh vật",
    correctOption: "optionD",
  },

  {
    question: "Cơ sở vật chất – kỹ thuật trong nông nghiệp bao gồm:",
    optionA:
      "hệ thống thủy lợi; dịch vụ trồng trọt, chăn nuôi và các cơ sở vật chất – kĩ thuật khác.",
    optionB:
      "hệ thống thủy lợi, các cánh đồng trồng lúa, trồng cây công nghiệp và cơ sở chăn nuôi.",
    optionC: "Hệ thống thủy lợi, đất đai và chuồng trại chăn nuôi",
    optionD:
      "Hệ thống thủy lợi, đê điều và các trạm trại giống cây trồng, vật nuôi.",
    correctOption: "optionA",
  },

  {
    question:
      "Biện pháp quan trọng hàng đầu trong thâm canh nông nghiệp ở nước ta là:",
    optionA: "đa dạng hóa sản xuất nông nghiệp",
    optionB: "tạo ra giống cây trồng mới",
    optionC: "phát triển thủy lợi",
    optionD: "mở rộng thị trường",
    correctOption: "optionC",
  },

  {
    question: `Nguyên nhân chủ yếu thúc đẩy quá trình chuyên môn hóa sản xuất 
      và thâm canh nông nghiệp ở nước ta là:`,
    optionA: `các điều kiện kinh tế - xã hội ngày càng hoàn thiện, 
      đặc biệt là sự mở rộng thị trường trong nước và thị trường xuất khẩu`,
    optionB: "điều kiện tự nhiên thuận lợi",
    optionC: "những chính sách đổi mới của Đảng và Nhà nước",
    optionD: "nguồn lao động dồi dào, có kinh nghiệm trong sản xuất.",
    correctOption: "optionA",
  },

  {
    question: `Từ năm 1990 đến nay, nhóm cây có tỷ trọng tăng nhiều nhất 
      trong cơ cấu giá trị sản xuất ngành trồng trọt nước ta là:`,
    optionA: "cây lương thực",
    optionB: "cây rau đậu",
    optionC: "cây ăn quả",
    optionD: "cây công nghiệp",
    correctOption: "optionD",
  },

  {
    question:
      "Nguyên nhân chủ yếu làm cho sản lượng lương thực nước ta tăng nhanh là:",
    optionA: "khai hoang, mở rộng diện tích",
    optionB: "đẩy mạnh thâm canh, tăng vụ, tăng năng suất",
    optionC: "áp dụng tiến bộ khoa học kĩ thuật",
    optionD: "nhu cầu trong nước về lương thực tăng",
    correctOption: "optionB",
  },

  {
    question: "Vùng trọng điểm lúa số 1 nước ta là:",
    optionA: "Đồng bằng sông Hồng",
    optionB: "Đồng bằng duyên hải miền Trung",
    optionC: "Đồng bằng sông Cửu Long",
    optionD: "Tây Nguyên",
    correctOption: "optionC",
  },

  {
    question: "Vùng có năng suất lúa cao nhất nước ta là:",
    optionA: "Đồng bằng sông Hồng",
    optionB: "Đồng bằng duyên hải miền Trung",
    optionC: "Đồng bằng sông Cửu Long",
    optionD: "Tây Nguyên",
    correctOption: "optionA",
  },

  {
    question: "Cây công nghiệp có nguồn gốc cận nhiệt đới nước ta là:",
    optionA: "cà phê",
    optionB: "hồ tiêu",
    optionC: "điều",
    optionD: "chè",
    correctOption: "optionD",
  },

  {
    question: "Cây cà phê được trồng nhiều nhất ở vùng nào sau đây?",
    optionA: "Trung du và miền núi Bắc Bộ",
    optionB: "Bắc Trung Bộ",
    optionC: "Đông Nam Bộ",
    optionD: "Tây Nguyên",
    correctOption: "optionD",
  },
  {
    question: "Lợn được nuôi nhiều nhất ở vùng nào nước ta?",
    optionA: "Trung du và miền núi Bắc Bộ",
    optionB: "Đồng bằng sông Hồng",
    optionC: "Đông Nam Bộ",
    optionD: "Đồng bằng sông Cửu Long",
    correctOption: "optionB",
  },

  {
    question: "Vùng cahnw nuôi bò với số lượng nhiều nhất nước ta hiện nay là:",
    optionA: "Trung du và miền búi Bắc Bộ ",
    optionB: "Bắc Trung Bộ",
    optionC: "Đồng bằng sông Hồng",
    optionD: "Duyên hải Nam Trung Bộ",
    correctOption: "optionD",
  },

  {
    question: "Gỗ chỉ được khai thác ở khu vực nào sau đây?",
    optionA: "Rừng phòng hộ",
    optionB: "Rừng đặc dụng",
    optionC: "Rừng sản xuất",
    optionD: "Rừng sản xuất và rừng đặc dụng",
    correctOption: "optionC",
  },
  {
    question:
      "Các vườn quốc gia và khu dự trữ thiên nhiên ở nước ta thuộc loại:",
    optionA: "rừng sản xuất",
    optionB: "rừng phòng hộ",
    optionC: "rừng đặc dụng",
    optionD: "rừng ngập mặn",
    correctOption: "optionC",
  },
  {
    question: "Cây trồng nào sau đây không phải là cây công nghiệp lâu năm?",
    optionA: "dâu tằm",
    optionB: "chè",
    optionC: "điều",
    optionD: "cà phê",
    correctOption: "optionA",
  },

  {
    question: `năm 2019, diện tích trồng lúa của nước ta là 7.469,5 nghìn ha, sản lượng lúa cả 
      năm đạt 43.495,4 nghìn tấn, vậy năng suất (tạ/ha) cả năm là:`,
    optionA: "52,7 tạ/ha",
    optionB: "57,2 tạ/ha",
    optionC: "58,2 tạ./ha",
    optionD: "58,6 tạ/ha",
    correctOption: "optionC",
  },
  {
    question:
      "Căn cứ vào Atlat Địa lí Việt Nam trang 19, hai tỉnh có diện tích trồng lúa (năm 2007) lớn nhất nước ta là:",
    optionA: "An Giang và Kiên Giang",
    optionB: "An Giang và Long An",
    optionC: "Kiên Giang và Đồng Tháp",
    optionD: "Kiên Giang và Long An",
    correctOption: "optionA",
  },
  {
    question: `Căn cứ vào Atlat Địa lí Việt Nam trang  19, vùng có diện tích gieo trồng lúa so với diện 
      tích trồng cây lương thực lớn nhất (trên 90% - năm 2007) ở nước ta là:`,
    optionA: "Đồng bằng sông Hồng",
    optionB: "Đồng bằng sông Cửu Long",
    optionC: "Duyên hải Nam Trung Bộ",
    optionD: "Bắc Trung Bộ",
    correctOption: "optionB",
  },

  {
    question: `Căn cứ vào Atlat Địa lí Việt Nam trang 19, tỉnh, thành phố có số lượng đàn 
      gia cầm lớn nhất của vùng Đồng bằng Sông Hồng là:`,
    optionA: "Nam Định",
    optionB: "Hà Nội",
    optionC: "Hải Dương",
    optionD: "Hải Phòng",
    correctOption: "optionB",
  },

  {
    question: `Căn cứ vào Atlat Địa lí Việt Nam trang 19, hãy cho biết trong giai đoạn 2000 - 2007 
      tỉ trọng giá trị sản xuất ngành chăn nuôi trong tổng gái trị sản xuất nông nghiệp tăng:`,
    optionA: "4,3%",
    optionB: "3,3%",
    optionC: "5,1%",
    optionD: "5,4%",
    correctOption: "optionC",
  },

  {
    question:
      "Nhận định nào dưới đây không đúng về vai trò của tài nguyên rừng?",
    optionA: "Cung cấp gỗ, nguyên liệu cho một số ngành công nghiệp",
    optionB: "Giữ đất, bảo vệ môi trường sinh thái",
    optionC:
      "Là nơi cư trú của các loài động vật, lưu giữ các nguồn gen quý của thực vật",
    optionD: "Khai thác góp phần mở rộng diện tích cây công nghiệp.",
    correctOption: "optionD",
  },

  {
    question:
      "Khoáng sản nhiên liệu (than, dầu, khí) là cơ sở chủ yếu để phát triển ngành:",
    optionA: "công nghiệp năng lượng, hóa chất",
    optionB: "công nghiệp luyện kim",
    optionC: "công nghiệp vật liệu xây dựng",
    optionD: "công nghiệp chế biến",
    correctOption: "optionA",
  },

  {
    question:
      "Loại tài nguyên nào sau đây ảnh hưởng trực tiếp đến sự phát triển và phân bổ công nghiệp nước ta?",
    optionA: "Nước và khí hậu",
    optionB: "Sinh vật và khoáng sản",
    optionC: "Khoáng sản và thủy năng",
    optionD: "Biển và đất đai",
    correctOption: "optionC",
  },

  {
    question:
      "Nhân tố chủ yếu làm cho cơ cấu ngành công nghiệp của nước ta trở nên đa dạng và linh hoạt hơn là:",
    optionA: "dân cư và lao động",
    optionB: "cơ sở vật chất – kĩ thuật trong công nghiệp",
    optionC: "chính sách phát triển công nghiệp",
    optionD: "sức ép của thị trường",
    correctOption: "optionD",
  },

  {
    question:
      "Đối với công nghiệp nước ta, thị trường trong nước ngày càng có vai trò quan trọng do nước ta có:",
    optionA: "dân số đông, sức mua đang tăng",
    optionB: "nguồn lao động dồi dào, có trình độ",
    optionC: "cơ cấu dân số trẻ, gia tăng dân số còn nhanh",
    optionD: "nhiều dân tộc cùng chung sống gắn bó với nhau",
    correctOption: "optionA",
  },

  {
    question: "Công nghiệp khai thác than phân bổ chủ yếu ở vùng than:",
    optionA: "Thái Nguyên",
    optionB: "Đồng bằng sông Hồng",
    optionC: "Quảng Ninh",
    optionD: "Đồng bằng sông Cửu Long",
    correctOption: "optionC",
  },

  {
    question: "Công nghiệp dệt may được xếp vào nhóm ngành công nghiệp:",
    optionA: "chế biến lương thực, thực phẩm",
    optionB: "chế biến nông, lâm, thủy sản",
    optionC: "sản xuất vật liệu xây dựng",
    optionD: "sản xuất hàng tiêu dùng",
    correctOption: "optionD",
  },
  {
    question:
      "Nhận định nào sau đây không đúng về ngành công nghiệp trọng điểm:",
    optionA: "Chiếm tỉ trọng cao trong giá trị sản lượng công nghiệp",
    optionB:
      "Được phát triển dựa trên những thế mạnh về tài nguyên thiên nhiên, nguồn lao động",
    optionC:
      "Tạo ra nguồn hàng xuất khẩu chủ lực, thúc đẩy sự tăng trưởng và chuyển dịch cơ cấu kinh tế.",
    optionD: `Hệ thống công nghiệp đa dạng gồm có các cơ sở Nhà nước, ngoài Nhà nước và 
      các cơ sở có vốn đầu tư nước ngoài.`,
    correctOption: "optionD",
  },

  {
    question: `Công nghiệp chế biến nông, lâm, thủy sản nước ta trở thành ngành công 
      nghiệp trọng điểm do có những thế mạnh đặc biệt là:`,
    optionA: "nguồn khoáng sản phong phú và đa dạng",
    optionB: "nguồn nguyên liệu phong phú từ nông, lâm, thủy sản.",
    optionC: "nguồn thủy năng lớn của sông ngòi",
    optionD: "tài nguyên đất và nguồn lợi sinh vật biển dồi dào",
    correctOption: "optionB",
  },

  {
    question:
      "Khu vực có mức độ tập trung công nghiệp vào loại cao nhất cả nước là:",
    optionA: "Đồng bằng sông Hồng và vùng phụ cận",
    optionB: "Tây Nguyên",
    optionC: "Duyên hải miền Trung",
    optionD: "Đồng bằng sông Cửu Long",
    correctOption: "optionA",
  },

  {
    question: "Tổ hợp nhiệt điện chạy bằng khí lớn nhất ở nước ta hiện nay là:",
    optionA: "Phả Lại",
    optionB: "Phú Mỹ",
    optionC: "Cà Mau",
    optionD: "Uông Bí",
    correctOption: "optionB",
  },

  {
    question: "Than, dầu và khí thuộc nhóm khoáng sản:",
    optionA: "kim loại",
    optionB: "nhiên liệu",
    optionC: "phi kim loại",
    optionD: "vật liệu xây dựng",
    correctOption: "optionB",
  },
  {
    question: `Căn cứ vào Atlat Địa lí Việt Nam trang 21, các trung tâm công nghiệp ở nước ta (năm 2007) 
      có quy mô từ trên 40 đến 120 nghìn tỉ đồng là:`,
    optionA: "Hà Nội, TP. Hồ Chí Minh, Biên Hòa, Vũng Tàu",
    optionB: "Huế, Đà Nẵng, Hạ Long, Vinh",
    optionC: "Hải Phòng, Biên Hòa, Thủ Dầu Một, Vũng Tàu",
    optionD: "Biên Hòa, Thủ Đầu Một, Vũng Tàu, Cần Thơ",
    correctOption: "optionC",
  },

  {
    question: `Căn cứ vào Atlat Địa lí Việt Nam trang 22, các mỏ khí tự nhiên được khai 
      thác ở nước ta (năm 2007) là:`,
    optionA: "Lan Tây, Lan Đỏ, Rồng",
    optionB: "Lan Tây, Lan Đỏ, Tiền Hải",
    optionC: "Tiền Hải, Lan Đỏ, Đại Hùng",
    optionD: "Hồng Ngọc, Rồng, Tiền Hải",
    correctOption: "optionB",
  },

  {
    question: "Trung tâm công nghiệp lớn nhất nước ta là:",
    optionA: "HÀ Nội, TP. Hồ Chí Minh",
    optionB: "Hà Nội, Đà Nẵng",
    optionC: "Đà Nẵng, TP. Hồ Chí Minh",
    optionD: "Hà Nội, Hải Phòng",
    correctOption: "optionA",
  },

  {
    question: "Vùng nào sau đây có tiềm năng thủy điện lớn nhất nước ta?",
    optionA: "Tây Bắc",
    optionB: "Đông Bắc",
    optionC: "Tây Nguyên",
    optionD: "Đông Nam Bộ",
    correctOption: "optionA",
  },

  {
    question: `Năm 2018, tổng giá trị sản phẩm trong nước phân theo khu vực kinh tế là 5.535,3 nghìn tỉ đồng, 
      trong đó dịch vụ là 2.278,9 nghìn tỉ đồng. Vậy tỷ trọng của ngành dịch vụ trong cơ cấu gái trị sản phẩm trong nước là:`,
    optionA: "41,15%",
    optionB: "41,17%",
    optionC: "42,17%",
    optionD: "42,20%",
    correctOption: "optionB",
  },

  {
    question: "Ngành dịch vụ phát triển mạnh ở những vùng:",
    optionA: "thưa dân",
    optionB: "đông dân, kinh tế kém phát triển",
    optionC: "kinh tế phát triển mạnh",
    optionD: "đông dân, kinh tế phát triển mạnh",
    correctOption: "optionD",
  },

  {
    question: "Vai trò của dịch vụ đối với sản xuất được thể hiện ở chỗ nào?",
    optionA: `cung cấp nguyên liệu, vật tư và tạo ra mối liên hệ giữa các ngành, 
      các vùng trong nước và quốc tế.`,
    optionB:
      "hình thành các vùng công nghiệp, trung tâm công nghiệp và công nghiệp trọng điểm",
    optionC: "tạo nên các vùng nông nghiệp, các vùng chueyen canh",
    optionD: "giải uyết việc làm, nâng cao đời sống nhân dân",
    correctOption: "optionA",
  },

  {
    question:
      "Các hoạt động khoa học công nghệ, giáo dục, y tế, văn hóa, thể thao thuộc:",
    optionA: "các dịch vụ tiêu dùng",
    optionB: "các dịch vụ công cộng",
    optionC: "các dịch vụ sản xuất",
    optionD: "dịch vụ tổng hợp",
    correctOption: "optionB",
  },

  {
    question: "Các trung tâm dịch vụ lớn nhất và đa dạng nhất nước ta là:",
    optionA: "Hà Nội, Hải Phòng",
    optionB: "Huế, Đà Nẵng",
    optionC: "Hà Nội, TP. Hồ Chí Minh",
    optionD: "Vũng Tàu, Cần Thơ",
    correctOption: "optionC",
  },

  {
    question: "Hai Di sản thiên nhiên thế giới ở việt Nam là:",
    optionA: "Vườn quốc gia Cúc Phương, đảo Cát Bà",
    optionB: "Vịnh Hạ Long, Vườn quốc gia Phong Nha – Kẻ Bàng",
    optionC: "Phố cổ Hội An, Thánh địa Mỹ Sơn",
    optionD: "Bãi đá cổ Sa Pa, Thành nhà Hồ",
    correctOption: "optionB",
  },

  {
    question: "Nhận định nào sau đây không phải là vai trò của ngành dịch vụ?",
    optionA:
      "Các ngành dịch vụ thu hút ngày càng nhiều lao động, tạo nhiều việc làm",
    optionB: "Góp phần quan trọng nâng cao đời sống nhân dân",
    optionC: "Đem lại nguồn thu nhập lớn cho nền kinh tế ",
    optionD: "Lao động trong ngành dịch vụ còn chiếm tỉ trọng thấp",
    correctOption: "optionD",
  },

  {
    question:
      "Loại hình vận tải chuyên chở được nhiều hành khách và hàng hóa nhất nước ta là:",
    optionA: "đường sắt",
    optionB: "đường bộ",
    optionC: "đường biển",
    optionD: "đường sông",
    correctOption: "optionB",
  },

  {
    question:
      "Tuyến giao thông vận tải biển nội địa quan trọng nhất nước ta là:",
    optionA: "Hải Phòng – Đà Nẵng",
    optionB: "Đà Nẵng – Vũng Tàu",
    optionC: "Hải Phòng – TP. Hồ Chí Minh",
    optionD: "Đà nẵng – Quy Nhơn",
    correctOption: "optionC",
  },

  {
    question: "Ba cảng biển lớn nhất nước ta hiện nay là:",
    optionA: "Đà Nẵng, Nha Trang, Vùng Tàu",
    optionB: "hải Phòng, Đà Nẵng, Sài Gòn",
    optionC: "Quy Nhơn, Vũng Tàu, Cam Ranh",
    optionD: "Sài Gòn, Vũng Tàu, Hải Phòng",
    correctOption: "optionB",
  },

  {
    question: `Căn cứ vào Atlat Địa lí Việt Nam trang 23, hãy cho biết hai cửa khẩu quốc 
    tế nào nằm trên đường biên giới giữa Việt Nam và Trung Quốc?`,
    optionA: "Lào Cai, Hữu Nghị",
    optionB: "Lào Cai, Na Mèo",
    optionC: "Móng Cái, Tây Trang",
    optionD: "Hữu Nghị, Na Mèo",
    correctOption: "optionA",
  },

  {
    question: `Căn cứ vào Atlat Địa lí Việt Nam trang  23, hãy cho biết tuyến đường ô tô nào sau đây 
      dài nhất và quan trọng nhất, nối liền hầu hết các vùng kinh tế ở nước ta?`,
    optionA: "Đường số 20",
    optionB: "Đường số 1",
    optionC: "Đường số 32",
    optionD: "Đường Hồ Chí Minh",
    correctOption: "optionB",
  },

  {
    question:
      "Vùng có tổng mức bán lẻ hàng hóa và doanh thu dịch vụ tiêu dùng lớn nhất nước ta hiện nay là:",
    optionA: "Đồng bằng sông Hồng",
    optionB: "Đông Nam Bộ",
    optionC: "Đồng bằng sông Cửu Long",
    optionD: "Trung du và miền núi Bắc Bộ",
    correctOption: "optionB",
  },

  {
    question: "Hoạt động nội thương tập trung nhiều nhất ở vùng nào nước ta?",
    optionA: "Đồng bằng sông Hồng",
    optionB: "Đồng bằng duyên hải miền Trung",
    optionC: "Đông Nam Bộ",
    optionD: "Đồng bằng sông Cửu Long",
    correctOption: "optionC",
  },

  {
    question: `Căn cứ vào Atlat Địa lí Việt Nam trang 26, hãy cho biết khu kinh tế ven 
      biển nào thuộc Trung du và miền núi Bắc Bộ?`,
    optionA: "Vân Đồn",
    optionB: "Đình Vũ – Cát Hải",
    optionC: "Nghi Sơn",
    optionD: "Vũng Áng",
    correctOption: "optionA",
  },

  {
    question: "Hiện nay, nước ta buôn bán nhiều nhất với thị trường:",
    optionA: "châu Á – Thái Bình Dương",
    optionB: "châu Âu",
    optionC: "Đông Nam Á",
    optionD: "châu Phi",
    correctOption: "optionA",
  },

  {
    question: "Ngành thương mại ở nước ta bao gồm:",
    optionA: "nhập khẩu và xuất khẩu",
    optionB: "nội thương và ngoại thương",
    optionC: "bán buôn và bán lẻ",
    optionD: "xuất khẩu và nội thương",
    correctOption: "optionB",
  },

  {
    question:
      "Nguyên nhân chính làm cho nội thương nước ta có những thay đổi rõ rệt là:",
    optionA: "những thành tựu to lớn của công cuộc đổi mới",
    optionB: "thị trường trong nước và thế giới ổn định",
    optionC: "nước ta gia nhập ASEAN",
    optionD: "Mỹ xóa bỏ cấm vận đối với nước ta",
    correctOption: "optionA",
  },
  {
    question: `Căn cứ vào Atlat Địa lí Việt Nam trang 24, hãy cho biết trong cơ cấu giá trị xuất khẩu 
      của nước ta năm 2007, mặt hàng chiếm tỷ trọng cao nhất là:`,
    optionA: "hàng công nghiệp nặng và khoáng sản",
    optionB: "hàng nông, lâm, thủy sản",
    optionC: "hàng công nghiệp nhẹ và tiểu thủ công nghiệp",
    optionD: "nguyên, nhiên, vật liệu",
    correctOption: "optionC",
  },

  {
    question: "Tài nguyên nào sau đây là tài nguyên du lịch tự nhiên?",
    optionA: "Công trình kiến trúc, di tích lịch sử",
    optionB: "Phong cảnh, bãi tắm đẹp, vườn quốc gia",
    optionC: "Lễ hội truyền thống, ẩm thực, vịnh Hạ Long",
    optionD: "Các làng nghề, văn hóa dân gian",
    correctOption: "optionB",
  },

  {
    question: `Trong các địa điểm du lịch sau đây của nước ta, địa điểm nào 
      được tạo nên bởi tài nguyên du lịch nhân văn?`,
    optionA: "Vịnh Hạ Long",
    optionB: "Hồ Ba Bể",
    optionC: "Phố cổ Hội An",
    optionD: "Vườn quốc gia Phong Nha – Kẻ Bàng",
    correctOption: "optionC",
  },
];
let lengthQuestion = questions.length;
let shuffledQuestions = []; //empty array to hold shuffled selected questions out of all available questions
console.log(lengthQuestion);
function handleQuestions() {
  //function to shuffle and push 10 questions to shuffledQuestions array
  //app would be dealing with 10questions per session
  while (shuffledQuestions.length < lengthQuestion) {
    const random = questions[Math.floor(Math.random() * lengthQuestion)];
    if (!shuffledQuestions.includes(random)) {
      shuffledQuestions.push(random);
    }
  }
}

let questionNumber = 1; //holds the current question number
let playerScore = 0; //holds the player score
let wrongAttempt = 0; //amount of wrong answers picked by player
let indexNumber = 0; //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
  handleQuestions();
  const currentQuestion = shuffledQuestions[index];
  document.getElementById("question-number").innerHTML = index + 1;
  document.getElementById("player-score").innerHTML = playerScore;
  document.getElementById("display-question").innerHTML =
    currentQuestion.question;
  document.getElementById("option-one-label").innerHTML =
    currentQuestion.optionA;
  document.getElementById("option-two-label").innerHTML =
    currentQuestion.optionB;
  document.getElementById("option-three-label").innerHTML =
    currentQuestion.optionC;
  document.getElementById("option-four-label").innerHTML =
    currentQuestion.optionD;
}

function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber]; //gets current Question
  const currentQuestionAnswer = currentQuestion.correctOption; //gets current Question's answer
  const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
  let correctOption = null;

  options.forEach((option) => {
    if (option.value === currentQuestionAnswer) {
      //get's correct's radio input with correct answer
      correctOption = option.labels[0].id;
    }
  });

  //checking to make sure a radio input has been checked or an option being chosen
  if (
    options[0].checked === false &&
    options[1].checked === false &&
    options[2].checked === false &&
    options[3].checked == false
  ) {
    document.getElementById("option-modal").style.display = "flex";
  }

  //checking if checked radio button is same as answer
  options.forEach((option) => {
    if (option.checked === true && option.value === currentQuestionAnswer) {
      document.getElementById(correctOption).style.backgroundColor = "green";
      playerScore++; //adding to player's score
      indexNumber++; //adding 1 to index so has to display next question..
      //set to delay question number till when next question loads
      setTimeout(() => {
        questionNumber++;
      }, 1000);
    } else if (option.checked && option.value !== currentQuestionAnswer) {
      const wrongLabelId = option.labels[0].id;
      document.getElementById(wrongLabelId).style.backgroundColor = "red";
      document.getElementById(correctOption).style.backgroundColor = "green";
      wrongAttempt++; //adds 1 to wrong attempts
      indexNumber++;
      //set to delay question number till when next question loads
      setTimeout(() => {
        questionNumber++;
      }, 2000);
    }
  });
}

//called when the next button is called
function handleNextQuestion() {
  checkForAnswer(); //check if player picked right or wrong option
  unCheckRadioButtons();
  //delays next question displaying for a second just for some effects so questions don't rush in on player
  setTimeout(() => {
    if (indexNumber <= lengthQuestion - 1) {
      //displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
      NextQuestion(indexNumber);
    } else {
      handleEndGame(); //ends game if index number greater than 9 meaning we're already at the 10th question
    }
    resetOptionBackground();
  }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
  const options = document.getElementsByName("option");
  options.forEach((option) => {
    document.getElementById(option.labels[0].id).style.backgroundColor = "";
  });
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
    options[i].checked = false;
  }
}

// function for when all questions being answered
function handleEndGame() {
  let remark = null;
  let remarkColor = null;

  // condition check for player remark and remark color
  if (playerScore <= lengthQuestion / 3) {
    remark = "Bad Grades, Keep Practicing.";
    remarkColor = "red";
  } else if (
    playerScore >= lengthQuestion / 3 &&
    playerScore < lengthQuestion - 3
  ) {
    remark = "Average Grades, You can do better.";
    remarkColor = "orange";
  } else if (playerScore >= lengthQuestion - 3) {
    remark = "Excellent, Keep the good work going.";
    remarkColor = "green";
  }
  const playerGrade = (playerScore / lengthQuestion) * 100;

  //data to display to score board
  document.getElementById("remarks").innerHTML = remark;
  document.getElementById("remarks").style.color = remarkColor;
  document.getElementById("grade-percentage").innerHTML = playerGrade;
  document.getElementById("wrong-answers").innerHTML = wrongAttempt;
  document.getElementById("right-answers").innerHTML = playerScore;
  document.getElementById("score-modal").style.display = "flex";
}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
  questionNumber = 1;
  playerScore = 0;
  wrongAttempt = 0;
  indexNumber = 0;
  shuffledQuestions = [];
  NextQuestion(indexNumber);
  document.getElementById("score-modal").style.display = "none";
}

//function to close warning modal
function closeOptionModal() {
  document.getElementById("option-modal").style.display = "none";
}
