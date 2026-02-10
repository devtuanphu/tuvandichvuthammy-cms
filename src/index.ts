export default {
  register(/* { strapi } */) {},

  async bootstrap({ strapi }) {
    // --- SEED: Global ---
    const existingGlobal = await strapi.documents('api::global.global').findFirst();
    if (!existingGlobal) {
      await strapi.documents('api::global.global').create({
        data: {
          siteName: 'Tư Vấn Dịch Vụ Thẩm Mỹ Hà Nội',
          address: 'Số 10 Trần Điền, Định Công, Hoàng Mai, Hà Nội',
          phone: '0901 234 567',
          email: 'contact@thammyhanoi.vn',
          defaultSeo: {
            metaTitle: 'Tư Vấn Dịch Vụ Thẩm Mỹ Tại Số 10 Trần Điền – Hà Nội',
            metaDescription: 'Cơ sở tư vấn dịch vụ thẩm mỹ uy tín tại Số 10 Trần Điền, Hà Nội. Đội ngũ chuyên gia hàng đầu, công nghệ hiện đại, cam kết an toàn.',
            keywords: '10 Trần Điền, Số 10 Trần Điền, thẩm mỹ Hà Nội, tư vấn thẩm mỹ',
            metaRobots: 'index, follow',
          },
        },
      });
    }

    // --- SEED: Home Page ---
    const existingHome = await strapi.documents('api::home-page.home-page').findFirst();
    if (!existingHome) {
      await strapi.documents('api::home-page.home-page').create({
        data: {
          heroSection: {
            title: 'Tư Vấn Dịch Vụ Thẩm Mỹ Chuyên Nghiệp Tại Số 10 Trần Điền',
            subtitle: 'Đội ngũ chuyên gia thẩm mỹ hàng đầu Hà Nội – Công nghệ hiện đại – An toàn tuyệt đối. Hãy để chúng tôi giúp bạn tỏa sáng!',
            ctaText: 'Đặt lịch tư vấn miễn phí',
            ctaUrl: '/contact',
          },
          introSection: {
            title: 'Về Cơ Sở Tư Vấn Thẩm Mỹ 10 Trần Điền',
            description: '<p>Cơ sở tư vấn dịch vụ thẩm mỹ tại <strong>Số 10 Trần Điền, Hà Nội</strong> là địa chỉ uy tín hàng đầu trong lĩnh vực làm đẹp. Với hơn 10 năm kinh nghiệm, chúng tôi tự hào mang đến cho khách hàng những dịch vụ tư vấn thẩm mỹ chất lượng cao, an toàn và hiệu quả.</p><p>Khách hàng đến tư vấn trực tiếp tại <strong>10 Trần Điền</strong> sẽ được đội ngũ chuyên gia tận tâm lắng nghe, phân tích và đưa ra phương án phù hợp nhất.</p>',
          },
          featuredServices: {
            title: 'Dịch Vụ Nổi Bật Tại 10 Trần Điền',
            subtitle: 'Khám phá các dịch vụ thẩm mỹ được yêu thích nhất tại cơ sở Số 10 Trần Điền, Hà Nội',
          },
          whyChooseUs: {
            title: 'Vì Sao Chọn Cơ Sở 10 Trần Điền?',
            items: [
              { icon: '🏥', title: 'Cơ Sở Vật Chất Hiện Đại', description: 'Trang thiết bị y tế đạt chuẩn quốc tế, không gian sạch sẽ, tiệt trùng chuyên nghiệp tại Số 10 Trần Điền.' },
              { icon: '👨‍⚕️', title: 'Đội Ngũ Chuyên Gia', description: 'Bác sĩ có trình độ chuyên môn cao, nhiều năm kinh nghiệm trong lĩnh vực thẩm mỹ.' },
              { icon: '🛡️', title: 'An Toàn Tuyệt Đối', description: 'Quy trình tư vấn và thực hiện nghiêm ngặt, đảm bảo an toàn cho mọi khách hàng.' },
              { icon: '💎', title: 'Kết Quả Tự Nhiên', description: 'Cam kết mang đến vẻ đẹp tự nhiên, hài hòa, phù hợp với gương mặt và cơ thể từng người.' },
            ],
          },
          processSection: {
            title: 'Quy Trình Tư Vấn Tại 10 Trần Điền',
            steps: [
              { stepNumber: 1, title: 'Đặt Lịch Hẹn', description: 'Liên hệ hotline hoặc đặt lịch trực tuyến để được tư vấn tại Số 10 Trần Điền.' },
              { stepNumber: 2, title: 'Thăm Khám & Tư Vấn', description: 'Chuyên gia thẩm mỹ sẽ thăm khám, phân tích và tư vấn phương án phù hợp nhất.' },
              { stepNumber: 3, title: 'Lập Phương Án', description: 'Xây dựng kế hoạch chi tiết, báo giá minh bạch, giải đáp mọi thắc mắc.' },
              { stepNumber: 4, title: 'Thực Hiện & Chăm Sóc', description: 'Tiến hành dịch vụ với công nghệ hiện đại và chăm sóc hậu phẫu tận tâm.' },
            ],
          },
          testimonials: {
            title: 'Khách Hàng Nói Gì Về 10 Trần Điền?',
            items: [
              { content: 'Tôi rất hài lòng với dịch vụ tư vấn tại Số 10 Trần Điền. Đội ngũ bác sĩ rất chuyên nghiệp và tận tâm. Kết quả vượt ngoài mong đợi!', author: 'Chị Nguyễn Thu Hà', role: 'Khách hàng' },
              { content: 'Cơ sở vật chất tại 10 Trần Điền rất hiện đại và sạch sẽ. Tôi cảm thấy yên tâm khi sử dụng dịch vụ tại đây. Sẽ giới thiệu cho bạn bè!', author: 'Chị Trần Minh Châu', role: 'Khách hàng' },
              { content: 'Sau khi tư vấn tại 10 Trần Điền, tôi đã có quyết định đúng đắn cho mình. Cảm ơn đội ngũ đã giúp tôi tự tin hơn rất nhiều!', author: 'Chị Lê Thị Mai', role: 'Khách hàng' },
            ],
          },
          ctaSection: {
            title: 'Đặt Lịch Tư Vấn Miễn Phí',
            description: 'Hãy đến Số 10 Trần Điền, Hà Nội để được tư vấn trực tiếp bởi đội ngũ chuyên gia thẩm mỹ hàng đầu. Hoàn toàn miễn phí!',
            buttonText: 'Đặt lịch ngay',
            buttonUrl: '/contact',
            phone: '0901 234 567',
          },
          seo: {
            metaTitle: 'Tư Vấn Dịch Vụ Thẩm Mỹ Tại Số 10 Trần Điền – Hà Nội',
            metaDescription: 'Cơ sở tư vấn dịch vụ thẩm mỹ uy tín tại Số 10 Trần Điền, Hà Nội. Nâng mũi, cắt mí, tiêm filler, trẻ hóa da. Đội ngũ chuyên gia hàng đầu.',
            keywords: '10 Trần Điền, thẩm mỹ Hà Nội, tư vấn thẩm mỹ, nâng mũi, cắt mí',
            metaRobots: 'index, follow',
          },
        },
      });
    }

    // --- SEED: About Page ---
    const existingAbout = await strapi.documents('api::about-page.about-page').findFirst();
    if (!existingAbout) {
      await strapi.documents('api::about-page.about-page').create({
        data: {
          introSection: {
            title: 'Về Cơ Sở Thẩm Mỹ 10 Trần Điền',
            description: '<p>Được thành lập từ năm 2015, cơ sở tư vấn dịch vụ thẩm mỹ tại <strong>Số 10 Trần Điền, Hà Nội</strong> đã trở thành địa chỉ tin cậy của hàng nghìn khách hàng. Chúng tôi không ngừng đầu tư vào đội ngũ chuyên gia, trang thiết bị và công nghệ để mang đến dịch vụ tốt nhất.</p>',
          },
          missionVision: {
            missionTitle: 'Sứ Mệnh',
            missionContent: '<p>Mang đến cho khách hàng những giải pháp thẩm mỹ an toàn, hiệu quả và tự nhiên nhất. Tại <strong>10 Trần Điền</strong>, chúng tôi đặt sự hài lòng và an toàn của khách hàng lên hàng đầu.</p>',
            visionTitle: 'Tầm Nhìn',
            visionContent: '<p>Trở thành trung tâm tư vấn dịch vụ thẩm mỹ hàng đầu Hà Nội, được khách hàng tin tưởng lựa chọn nhờ chất lượng dịch vụ vượt trội và đội ngũ chuyên gia uy tín tại <strong>Số 10 Trần Điền</strong>.</p>',
          },
          teamSection: {
            title: 'Đội Ngũ Chuyên Gia Tại 10 Trần Điền',
            members: [
              { name: 'BS. Nguyễn Văn An', role: 'Giám đốc chuyên môn', bio: 'Hơn 15 năm kinh nghiệm trong lĩnh vực thẩm mỹ, tốt nghiệp Đại học Y Hà Nội.' },
              { name: 'BS. Trần Thị Bình', role: 'Chuyên gia da liễu', bio: 'Chuyên gia hàng đầu về trẻ hóa da và điều trị các vấn đề da liễu thẩm mỹ.' },
              { name: 'BS. Lê Hoàng Minh', role: 'Phẫu thuật viên', bio: 'Bác sĩ chuyên khoa phẫu thuật tạo hình, được đào tạo tại Hàn Quốc.' },
            ],
          },
          facilitySection: {
            title: 'Cơ Sở Vật Chất Tại 10 Trần Điền',
            description: '<p>Cơ sở tại <strong>Số 10 Trần Điền, Định Công, Hoàng Mai, Hà Nội</strong> được đầu tư xây dựng theo tiêu chuẩn quốc tế với phòng tư vấn riêng biệt, phòng thực hiện tiệt trùng, và khu vực chăm sóc hậu phẫu đầy đủ tiện nghi.</p>',
            address: 'Số 10 Trần Điền, Định Công, Hoàng Mai, Hà Nội',
          },
          ctaSection: {
            title: 'Sẵn Sàng Cho Sự Thay Đổi?',
            description: 'Đặt lịch tư vấn miễn phí tại Số 10 Trần Điền ngay hôm nay!',
            buttonText: 'Liên hệ ngay',
            buttonUrl: '/contact',
            phone: '0901 234 567',
          },
          seo: {
            metaTitle: 'Về Chúng Tôi – Cơ Sở Thẩm Mỹ 10 Trần Điền, Hà Nội',
            metaDescription: 'Tìm hiểu về cơ sở tư vấn thẩm mỹ uy tín tại Số 10 Trần Điền, Hà Nội. Đội ngũ chuyên gia giàu kinh nghiệm, cơ sở vật chất hiện đại.',
            keywords: 'về chúng tôi, 10 Trần Điền, thẩm mỹ Hà Nội, đội ngũ bác sĩ',
            metaRobots: 'index, follow',
          },
        },
      });
    }

    // --- SEED: Contact Page ---
    const existingContact = await strapi.documents('api::contact-page.contact-page').findFirst();
    if (!existingContact) {
      await strapi.documents('api::contact-page.contact-page').create({
        data: {
          contactInfo: {
            address: 'Số 10 Trần Điền, Định Công, Hoàng Mai, Hà Nội',
            phone: '0901 234 567',
            email: 'contact@thammyhanoi.vn',
            workingHours: 'Thứ 2 – Thứ 7: 8:00 – 18:00 | Chủ nhật: 8:00 – 12:00',
          },
          mapSection: {
            title: 'Bản Đồ Đến Số 10 Trần Điền',
            embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.1!2d105.84!3d20.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU4JzQ4LjAiTiAxMDXCsDUwJzI0LjAiRQ!5e0!3m2!1svi!2svn!4v1600000000000',
          },
          contactFormSection: {
            title: 'Gửi Yêu Cầu Tư Vấn',
            description: 'Để lại thông tin, chuyên gia tại Số 10 Trần Điền sẽ liên hệ tư vấn miễn phí cho bạn trong vòng 24 giờ.',
          },
          seo: {
            metaTitle: 'Liên Hệ Tư Vấn Thẩm Mỹ Tại Số 10 Trần Điền – Hà Nội',
            metaDescription: 'Liên hệ cơ sở tư vấn dịch vụ thẩm mỹ tại Số 10 Trần Điền, Hà Nội. Đặt lịch tư vấn miễn phí, gọi ngay 0901 234 567.',
            keywords: 'liên hệ, 10 Trần Điền, đặt lịch thẩm mỹ, tư vấn miễn phí',
            metaRobots: 'index, follow',
          },
        },
      });
    }

    // --- SEED: Services ---
    const existingServices = await strapi.documents('api::service.service').findMany();
    if (existingServices.length === 0) {
      const services = [
        {
          title: 'Nâng Mũi',
          slug: 'nang-mui',
          description: 'Dịch vụ tư vấn nâng mũi tại Số 10 Trần Điền – Hà Nội. Công nghệ hiện đại, kết quả tự nhiên.',
          content: '<h2>Dịch Vụ Nâng Mũi Tại 10 Trần Điền</h2><p>Nâng mũi là một trong những dịch vụ thẩm mỹ được yêu thích nhất tại cơ sở <strong>Số 10 Trần Điền, Hà Nội</strong>. Với công nghệ nâng mũi cấu trúc hiện đại, chúng tôi cam kết mang đến cho bạn chiếc mũi cao thanh tú, tự nhiên và hài hòa với gương mặt.</p><h3>Các phương pháp nâng mũi</h3><p>Tại 10 Trần Điền, chúng tôi cung cấp đa dạng phương pháp nâng mũi phù hợp với từng nhu cầu: nâng mũi cấu trúc, nâng mũi bọc sụn, nâng mũi S-line.</p>',
          benefits: JSON.stringify(['Mũi cao thanh tú, tự nhiên', 'Không đau, hồi phục nhanh', 'Bác sĩ chuyên khoa thực hiện', 'Bảo hành lâu dài']),
          process: JSON.stringify([{ step: 1, title: 'Tư vấn', desc: 'Bác sĩ thăm khám và tư vấn phương pháp phù hợp' }, { step: 2, title: 'Thiết kế', desc: 'Thiết kế dáng mũi trên máy tính 3D' }, { step: 3, title: 'Thực hiện', desc: 'Tiến hành nâng mũi với công nghệ hiện đại' }, { step: 4, title: 'Chăm sóc', desc: 'Hướng dẫn chăm sóc và tái khám' }]),
          priceFrom: 'Từ 15.000.000 VNĐ',
          faqs: JSON.stringify([{ q: 'Nâng mũi có đau không?', a: 'Tại Số 10 Trần Điền, chúng tôi áp dụng gây tê cục bộ nên bạn gần như không cảm thấy đau trong quá trình thực hiện.' }, { q: 'Sau bao lâu thì đẹp tự nhiên?', a: 'Sau 2-4 tuần mũi sẽ ổn định và đạt kết quả tự nhiên nhất.' }]),
          seo: { metaTitle: 'Nâng Mũi Tại 10 Trần Điền – Hà Nội | Công Nghệ Hiện Đại', metaDescription: 'Dịch vụ tư vấn nâng mũi cấu trúc tại Số 10 Trần Điền, Hà Nội. Kết quả tự nhiên, an toàn, bảo hành lâu dài.', keywords: 'nâng mũi, 10 Trần Điền, nâng mũi Hà Nội', metaRobots: 'index, follow' },
        },
        {
          title: 'Cắt Mí Mắt',
          slug: 'cat-mi-mat',
          description: 'Dịch vụ tư vấn cắt mí mắt tại Số 10 Trần Điền – Hà Nội. Đôi mắt to tròn, cuốn hút tự nhiên.',
          content: '<h2>Dịch Vụ Cắt Mí Mắt Tại 10 Trần Điền</h2><p>Cắt mí mắt tại <strong>Số 10 Trần Điền</strong> giúp bạn có đôi mắt đẹp tự nhiên với nếp mí rõ ràng, trẻ trung. Bác sĩ tại cơ sở 10 Trần Điền có trình độ chuyên môn cao và nhiều năm kinh nghiệm trong phẫu thuật tạo hình mắt.</p>',
          benefits: JSON.stringify(['Mắt to tròn cuốn hút', 'Không để lại sẹo', 'Hồi phục nhanh chóng', 'Kết quả bền vững']),
          process: JSON.stringify([{ step: 1, title: 'Tư vấn', desc: 'Khám và tư vấn kiểu mí phù hợp' }, { step: 2, title: 'Thiết kế', desc: 'Đo đạc và thiết kế nếp mí' }, { step: 3, title: 'Thực hiện', desc: 'Tiến hành cắt mí bằng công nghệ vi phẫu' }, { step: 4, title: 'Chăm sóc', desc: 'Chăm sóc hậu phẫu tận tâm' }]),
          priceFrom: 'Từ 8.000.000 VNĐ',
          faqs: JSON.stringify([{ q: 'Cắt mí có sẹo không?', a: 'Tại 10 Trần Điền, chúng tôi sử dụng kỹ thuật vi phẫu nên sẹo rất mờ và gần như không nhìn thấy sau 1 tháng.' }, { q: 'Sau bao lâu thì mắt đẹp tự nhiên?', a: 'Khoảng 1-2 tuần mắt sẽ hết sưng và đẹp tự nhiên.' }]),
          seo: { metaTitle: 'Cắt Mí Mắt Tại 10 Trần Điền – Hà Nội', metaDescription: 'Dịch vụ cắt mí mắt tại Số 10 Trần Điền, Hà Nội. Đôi mắt to tròn tự nhiên, hồi phục nhanh.', keywords: 'cắt mí mắt, 10 Trần Điền, cắt mí Hà Nội', metaRobots: 'index, follow' },
        },
        {
          title: 'Tiêm Filler',
          slug: 'tiem-filler',
          description: 'Dịch vụ tiêm filler tại Số 10 Trần Điền – Hà Nội. Làm đầy, trẻ hóa gương mặt không phẫu thuật.',
          content: '<h2>Dịch Vụ Tiêm Filler Tại 10 Trần Điền</h2><p>Tiêm filler là phương pháp làm đẹp không xâm lấn, giúp làm đầy và trẻ hóa gương mặt nhanh chóng. Tại <strong>Số 10 Trần Điền</strong>, chúng tôi chỉ sử dụng filler chính hãng, đảm bảo an toàn cho khách hàng.</p>',
          benefits: JSON.stringify(['Không phẫu thuật, không thời gian nghỉ dưỡng', 'Kết quả tức thì', 'Filler chính hãng 100%', 'An toàn, tự tiêu sinh học']),
          process: JSON.stringify([{ step: 1, title: 'Tư vấn', desc: 'Bác sĩ tư vấn vùng cần tiêm và liều lượng phù hợp' }, { step: 2, title: 'Chuẩn bị', desc: 'Sát khuẩn và gây tê vùng tiêm' }, { step: 3, title: 'Tiêm filler', desc: 'Bác sĩ tiêm filler theo kỹ thuật chuyên nghiệp' }, { step: 4, title: 'Hoàn thiện', desc: 'Kiểm tra kết quả và hướng dẫn chăm sóc' }]),
          priceFrom: 'Từ 5.000.000 VNĐ',
          faqs: JSON.stringify([{ q: 'Tiêm filler có an toàn không?', a: 'Tại 10 Trần Điền, chúng tôi chỉ sử dụng filler chính hãng và được thực hiện bởi bác sĩ chuyên khoa, đảm bảo an toàn tuyệt đối.' }, { q: 'Filler duy trì được bao lâu?', a: 'Tùy loại filler, kết quả có thể duy trì từ 12-18 tháng.' }]),
          seo: { metaTitle: 'Tiêm Filler Tại 10 Trần Điền – Hà Nội', metaDescription: 'Dịch vụ tiêm filler chính hãng tại Số 10 Trần Điền, Hà Nội. Làm đầy, trẻ hóa gương mặt an toàn.', keywords: 'tiêm filler, 10 Trần Điền, filler Hà Nội', metaRobots: 'index, follow' },
        },
        {
          title: 'Trẻ Hóa Da',
          slug: 'tre-hoa-da',
          description: 'Dịch vụ trẻ hóa da tại Số 10 Trần Điền – Hà Nội. Công nghệ laser và mesotherapy hiện đại.',
          content: '<h2>Dịch Vụ Trẻ Hóa Da Tại 10 Trần Điền</h2><p>Trẻ hóa da tại <strong>10 Trần Điền</strong> sử dụng các công nghệ tiên tiến nhất như Thermage, HIFU, và mesotherapy để giúp làn da bạn căng mịn, sáng khỏe và trẻ trung hơn.</p>',
          benefits: JSON.stringify(['Da căng mịn, sáng khỏe', 'Giảm nếp nhăn hiệu quả', 'Kích thích collagen tự nhiên', 'Không xâm lấn']),
          process: JSON.stringify([{ step: 1, title: 'Phân tích da', desc: 'Soi da và phân tích tình trạng lão hóa' }, { step: 2, title: 'Tư vấn liệu trình', desc: 'Đề xuất công nghệ và liệu trình phù hợp' }, { step: 3, title: 'Thực hiện', desc: 'Tiến hành trẻ hóa da với công nghệ hiện đại' }, { step: 4, title: 'Chăm sóc', desc: 'Hướng dẫn chăm sóc da sau liệu trình' }]),
          priceFrom: 'Từ 3.000.000 VNĐ / liệu trình',
          faqs: JSON.stringify([{ q: 'Trẻ hóa da bao lâu thấy hiệu quả?', a: 'Tại 10 Trần Điền, sau 1-2 buổi bạn sẽ thấy da sáng mịn hơn. Kết quả rõ rệt sau liệu trình 4-6 buổi.' }, { q: 'Có cần kiêng gì sau trẻ hóa da?', a: 'Bạn nên tránh ánh nắng trực tiếp và sử dụng kem chống nắng đều đặn.' }]),
          seo: { metaTitle: 'Trẻ Hóa Da Tại 10 Trần Điền – Hà Nội', metaDescription: 'Dịch vụ trẻ hóa da bằng công nghệ cao tại Số 10 Trần Điền, Hà Nội. Thermage, HIFU, mesotherapy.', keywords: 'trẻ hóa da, 10 Trần Điền, chống lão hóa Hà Nội', metaRobots: 'index, follow' },
        },
        {
          title: 'Hút Mỡ',
          slug: 'hut-mo',
          description: 'Dịch vụ tư vấn hút mỡ tại Số 10 Trần Điền – Hà Nội. Lấy lại vóc dáng thon gọn, tự tin.',
          content: '<h2>Dịch Vụ Hút Mỡ Tại 10 Trần Điền</h2><p>Hút mỡ tại <strong>Số 10 Trần Điền</strong> giúp loại bỏ mỡ thừa ở các vùng khó giảm như bụng, đùi, bắp tay. Sử dụng công nghệ Vaser Lipo tiên tiến, hạn chế tối đa đau đớn và thời gian hồi phục.</p>',
          benefits: JSON.stringify(['Loại bỏ mỡ thừa nhanh chóng', 'Vóc dáng thon gọn', 'Công nghệ Vaser Lipo', 'Hồi phục nhanh']),
          process: JSON.stringify([{ step: 1, title: 'Tư vấn', desc: 'Đánh giá tình trạng mỡ thừa và tư vấn' }, { step: 2, title: 'Lập kế hoạch', desc: 'Xác định vùng hút mỡ và phương pháp' }, { step: 3, title: 'Thực hiện', desc: 'Tiến hành hút mỡ bằng công nghệ Vaser Lipo' }, { step: 4, title: 'Phục hồi', desc: 'Theo dõi và chăm sóc sau hút mỡ' }]),
          priceFrom: 'Từ 20.000.000 VNĐ',
          faqs: JSON.stringify([{ q: 'Hút mỡ có đau không?', a: 'Tại 10 Trần Điền, chúng tôi sử dụng công nghệ Vaser Lipo nên giảm thiểu đau đớn tối đa.' }, { q: 'Sau hút mỡ có bị tái phát không?', a: 'Nếu duy trì lối sống lành mạnh, kết quả hút mỡ rất bền vững.' }]),
          seo: { metaTitle: 'Hút Mỡ Tại 10 Trần Điền – Hà Nội', metaDescription: 'Dịch vụ hút mỡ công nghệ Vaser Lipo tại Số 10 Trần Điền, Hà Nội. Vóc dáng thon gọn nhanh chóng.', keywords: 'hút mỡ, 10 Trần Điền, giảm mỡ Hà Nội', metaRobots: 'index, follow' },
        },
        {
          title: 'Nâng Ngực',
          slug: 'nang-nguc',
          description: 'Dịch vụ tư vấn nâng ngực tại Số 10 Trần Điền – Hà Nội. Vòng 1 căng tròn, tự nhiên, an toàn.',
          content: '<h2>Dịch Vụ Nâng Ngực Tại 10 Trần Điền</h2><p>Nâng ngực tại <strong>Số 10 Trần Điền</strong> giúp phái đẹp có vòng 1 căng tròn, tự nhiên. Chúng tôi sử dụng túi ngực chính hãng Mentor, Sebbin và kỹ thuật nâng ngực nội soi, đường mổ giấu kín.</p>',
          benefits: JSON.stringify(['Vòng 1 căng tròn tự nhiên', 'Túi ngực chính hãng', 'Đường mổ giấu kín', 'Bảo hành trọn đời']),
          process: JSON.stringify([{ step: 1, title: 'Tư vấn', desc: 'Tư vấn kích cỡ và loại túi ngực phù hợp' }, { step: 2, title: 'Thiết kế', desc: 'Mô phỏng kết quả trên phần mềm 3D' }, { step: 3, title: 'Phẫu thuật', desc: 'Thực hiện nâng ngực nội soi' }, { step: 4, title: 'Hậu phẫu', desc: 'Chăm sóc hậu phẫu và tái khám' }]),
          priceFrom: 'Từ 50.000.000 VNĐ',
          faqs: JSON.stringify([{ q: 'Nâng ngực có an toàn không?', a: 'Tại 10 Trần Điền, nâng ngực được thực hiện bởi bác sĩ chuyên khoa với túi ngực chính hãng, đảm bảo an toàn tuyệt đối.' }, { q: 'Sau bao lâu thì ngực mềm tự nhiên?', a: 'Sau 3-6 tháng ngực sẽ mềm và tự nhiên hoàn toàn.' }]),
          seo: { metaTitle: 'Nâng Ngực Tại 10 Trần Điền – Hà Nội', metaDescription: 'Dịch vụ nâng ngực nội soi tại Số 10 Trần Điền, Hà Nội. Túi ngực chính hãng, bảo hành trọn đời.', keywords: 'nâng ngực, 10 Trần Điền, nâng ngực Hà Nội', metaRobots: 'index, follow' },
        },
      ];

      for (const service of services) {
        await strapi.documents('api::service.service').create({ data: service });
      }
    }

    // --- SEED: News ---
    const existingNews = await strapi.documents('api::news.news').findMany();
    if (existingNews.length === 0) {
      const news = [
        {
          title: 'Xu Hướng Thẩm Mỹ 2024 Tại 10 Trần Điền',
          slug: 'xu-huong-tham-my-2024',
          excerpt: 'Cập nhật các xu hướng thẩm mỹ mới nhất năm 2024 tại cơ sở Số 10 Trần Điền, Hà Nội.',
          content: '<h2>Xu Hướng Thẩm Mỹ 2024</h2><p>Năm 2024, xu hướng thẩm mỹ hướng đến vẻ đẹp tự nhiên, hài hòa. Tại <strong>10 Trần Điền</strong>, chúng tôi cập nhật những công nghệ và kỹ thuật mới nhất để mang đến cho khách hàng kết quả hoàn hảo nhất.</p><p>Các xu hướng nổi bật: nâng mũi cấu trúc tự nhiên, cắt mí Hàn Quốc, tiêm filler theo đường nét gương mặt.</p>',
          publishDate: '2024-01-15',
          seo: { metaTitle: 'Xu Hướng Thẩm Mỹ 2024 – 10 Trần Điền', metaDescription: 'Cập nhật xu hướng thẩm mỹ 2024 tại 10 Trần Điền, Hà Nội.', keywords: 'xu hướng thẩm mỹ 2024, 10 Trần Điền', metaRobots: 'index, follow' },
        },
        {
          title: '5 Điều Cần Biết Trước Khi Nâng Mũi',
          slug: '5-dieu-can-biet-truoc-khi-nang-mui',
          excerpt: 'Những điều quan trọng cần biết trước khi quyết định nâng mũi tại Số 10 Trần Điền.',
          content: '<h2>5 Điều Cần Biết Trước Khi Nâng Mũi</h2><p>Nâng mũi là quyết định quan trọng. Trước khi đến <strong>Số 10 Trần Điền</strong> để tư vấn, hãy tìm hiểu 5 điều sau đây.</p><ol><li>Chọn bác sĩ có chuyên môn cao</li><li>Tìm hiểu về phương pháp phù hợp</li><li>Chuẩn bị tâm lý trước phẫu thuật</li><li>Hiểu rõ quy trình hồi phục</li><li>Chăm sóc đúng cách sau nâng mũi</li></ol>',
          publishDate: '2024-02-10',
          seo: { metaTitle: '5 Điều Cần Biết Trước Khi Nâng Mũi – 10 Trần Điền', metaDescription: '5 điều cần biết trước khi nâng mũi tại Số 10 Trần Điền, Hà Nội.', keywords: 'nâng mũi, lưu ý nâng mũi, 10 Trần Điền', metaRobots: 'index, follow' },
        },
        {
          title: 'Chăm Sóc Da Sau Tiêm Filler Đúng Cách',
          slug: 'cham-soc-da-sau-tiem-filler',
          excerpt: 'Hướng dẫn chăm sóc da đúng cách sau khi tiêm filler tại 10 Trần Điền.',
          content: '<h2>Chăm Sóc Da Sau Tiêm Filler</h2><p>Sau khi tiêm filler tại <strong>10 Trần Điền</strong>, việc chăm sóc da đúng cách giúp kết quả bền đẹp và hạn chế tác dụng phụ. Dưới đây là những lưu ý quan trọng từ chuyên gia tại Số 10 Trần Điền.</p>',
          publishDate: '2024-03-05',
          seo: { metaTitle: 'Chăm Sóc Da Sau Tiêm Filler – 10 Trần Điền', metaDescription: 'Hướng dẫn chăm sóc da sau tiêm filler tại 10 Trần Điền, Hà Nội.', keywords: 'chăm sóc sau filler, 10 Trần Điền', metaRobots: 'index, follow' },
        },
        {
          title: 'So Sánh Các Phương Pháp Cắt Mí Phổ Biến',
          slug: 'so-sanh-phuong-phap-cat-mi',
          excerpt: 'So sánh ưu nhược điểm các phương pháp cắt mí: bấm mí, cắt mí, cắt mí vi phẫu tại 10 Trần Điền.',
          content: '<h2>So Sánh Các Phương Pháp Cắt Mí</h2><p>Hiện nay có nhiều phương pháp cắt mí khác nhau. Tại <strong>10 Trần Điền</strong>, chúng tôi sẽ giúp bạn hiểu rõ ưu nhược điểm của từng phương pháp để chọn lựa phù hợp nhất.</p>',
          publishDate: '2024-04-20',
          seo: { metaTitle: 'So Sánh Phương Pháp Cắt Mí – 10 Trần Điền', metaDescription: 'So sánh các phương pháp cắt mí phổ biến tại 10 Trần Điền, Hà Nội.', keywords: 'cắt mí, so sánh cắt mí, 10 Trần Điền', metaRobots: 'index, follow' },
        },
        {
          title: 'Lý Do Số 10 Trần Điền Là Địa Chỉ Thẩm Mỹ Tin Cậy',
          slug: 'ly-do-10-tran-dien-dia-chi-tin-cay',
          excerpt: 'Tìm hiểu vì sao Số 10 Trần Điền là địa chỉ thẩm mỹ được khách hàng tin tưởng lựa chọn.',
          content: '<h2>Số 10 Trần Điền – Địa Chỉ Thẩm Mỹ Tin Cậy</h2><p><strong>Số 10 Trần Điền, Hà Nội</strong> đã xây dựng uy tín suốt nhiều năm qua nhờ đội ngũ chuyên gia giỏi, trang thiết bị hiện đại và dịch vụ chăm sóc khách hàng tận tâm.</p>',
          publishDate: '2024-05-12',
          seo: { metaTitle: 'Số 10 Trần Điền – Địa Chỉ Thẩm Mỹ Tin Cậy Hà Nội', metaDescription: 'Vì sao Số 10 Trần Điền là địa chỉ thẩm mỹ tin cậy tại Hà Nội.', keywords: 'Số 10 Trần Điền, thẩm mỹ tin cậy, Hà Nội', metaRobots: 'index, follow' },
        },
        {
          title: 'Trẻ Hóa Da Không Phẫu Thuật: Giải Pháp Cho Phụ Nữ Hiện Đại',
          slug: 'tre-hoa-da-khong-phau-thuat',
          excerpt: 'Khám phá các phương pháp trẻ hóa da không xâm lấn tại Số 10 Trần Điền, Hà Nội.',
          content: '<h2>Trẻ Hóa Da Không Phẫu Thuật</h2><p>Phụ nữ hiện đại ngày nay ưu tiên các phương pháp trẻ hóa da không xâm lấn. Tại <strong>10 Trần Điền</strong>, chúng tôi cung cấp đa dạng liệu trình trẻ hóa da không phẫu thuật với công nghệ Thermage, HIFU và mesotherapy.</p>',
          publishDate: '2024-06-18',
          seo: { metaTitle: 'Trẻ Hóa Da Không Phẫu Thuật – 10 Trần Điền', metaDescription: 'Giải pháp trẻ hóa da không phẫu thuật tại 10 Trần Điền, Hà Nội.', keywords: 'trẻ hóa da, không phẫu thuật, 10 Trần Điền', metaRobots: 'index, follow' },
        },
      ];

      for (const article of news) {
        await strapi.documents('api::news.news').create({ data: article });
      }
    }

    console.log('✅ Seed data completed!');
  },
};
