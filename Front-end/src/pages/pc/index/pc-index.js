if (process.env.NODE_ENV === 'production') {
  console.log = function () { };
  // 可选：禁用其他 console 方法
  // console.debug = function() {};
  // console.info = function() {};
}

import '@/common/utils/pc/index/pc-index-bannerAnimate'
import '@/common/utils/pc/pc-common/flexible.js'
import '@/common/utils/pc/index/pc-index-videoCardsRender.js'
import '@/common/utils/pc/index/pc-index-lazyLoading.js'
import '@/common/utils/pc/index/pc-index-swiper.js'
import '@/common/utils/pc/index/pc-index-iconJump.js'
import '@/common/utils/pc/index/pc-index-fixedHeader.js'
import '@/common/utils/pc/index/pc-index-moveToTop.js'
import '@/common/utils/pc/pc-common/pc-loginPop.js'
import '@/common/utils/pc/pc-common/pc-loginPage.js'
import '@/common/utils/pc/pc-common/pc-loginUpload.js'
import '@/common/utils/pc/pc-common/pc-loginAuto.js'




import './pc-index-header.less'
import './pc-index-videoCards.less'

