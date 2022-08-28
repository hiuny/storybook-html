import { previewTemplate } from "storybook-addon-preview";
import { withRenderCallback } from "../.storybook/callback-addon/decorators";
import './boot_app.css'
import './appshell.css'
import './index.css'
import './baito.css';
import { createButton } from './Button'

export default {
  title: 'Line Collection/Baito',
}

const html = `
<!-- [AU] 컬렉션들을 감싸는 영역에 data-search-contents 추가 -->
<div class="search-contents" data-search-contents>
      <div class="search-main">
          <section>
              <!-- [AU] data-collection-type="컬렉션 명칭" -->
              <div class="section_wrap sp_baito" data-collection-type="baito">
                  <div class="api_card_wrap">
                      <h2 class="collection-title">
                          <strong class="api_title">Baito</strong>
                          <div class="api_more_group">
                              <!-- [AU] 링크로 이동할 경로를 data-link-url 에 적용, 값은 버튼 클릭시 이동할 url a 태그의 경우 href 는 삭제 -->
                              <!-- [AU] data-more-btn TAG영역 선택 변경 시 주소 변경 되어야 하는 버튼 -->
                              <a class="api_btn_more" data-link-url="#" data-more-btn>
                                  <i class="spcmn api_ico_more_title">See more</i>
                              </a>
                          </div>
                      </h2>
                      <div class="card_group">
                          <!-- [AU] data-swipe-wrap swipe영역을 감싸는 wrapper -->
                          <div class="card_wrap" data-swipe-wrap>                            
                              <!-- [D] 마크업 확인용 스타일 개발시 제거 -->
                              <!-- [AU] data-swiper-container swiper 기능을 감싸는 node 에 적용. swiper 기능이 필요한 부분에 적용합니다. data-flicking-log 플리킹 로그 데이터를 입력합니다.  -->
                                                          <div class="swiper-container" data-swiper-container data-flicking-log="JSON DATA">
                                  <div class="swiper-wrapper card_list">
                                      <div class="swiper-slide">
                                          <!-- [D] 제일 높은 카드의 height 값으로 고정 -->
                                          <!-- [AU] data-card-item 카드 아이템 -->
                                          <div class="card_item" style="height: 298px;" data-card-item>
                                              <a class="info_group" data-link-url="#">
                                                  <div class="job_area">
                                                      <div class="thumb_box">
                                                          <!-- [AU] data-image-url 로드 할 이미지 주소, class 디폴트 이미지 클래스, src=data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 src에 빈 이미지 -->
                                                          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" class="thumb bg_nimg2" alt="" width="108" height="81" data-image-url="http://dev.ui.naver.com/tmp/?108x81_woman">
                                                      </div>
                                                      <div class="title_box">
                                                          <div class="job_info">
                                                              <span class="tag type_red">NEW</span><span class="tag">ア</span> WWWWWWWWWWWWWWWWWWWWWWWW
                                                          </div>
                                                          <div class="title">
                                                              Cleaning of Common Are as at The Business Hotel in Ginza Cleaning of Common Are as at The Business Hotel in Ginza
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="info_area">
                                                      <div class="info_box">
                                                          <strong class="info_title">
                                                              所在地
                                                          </strong>
                                                          <div class="info_inner">
                                                              <div class="info">(1)Place of work</div>
                                                              <div class="info">(2)Place of work Place of work Place of work Place of work</div>
                                                              <div class="info">(3)Place of work Place of work Place of work Place of work</div>
                                                          </div>
                                                      </div>
                                                      <div class="info_box">
                                                          <strong class="info_title">
                                                              アクセス
                                                          </strong>
                                                          <div class="info_inner elss">
                                                              <span class="info">(1)Location</span><span class="info">(2)Location Location Location Location Location </span><span class="info">(3)Location</span>
                                                          </div>
                                                      </div>
                                                      <div class="info_box">
                                                          <strong class="info_title">
                                                              給与
                                                          </strong>
                                                          <div class="info_inner elss">
                                                              <span class="info">¥1,200 per hour ¥1,200 per hour ¥1,200 per hour</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </a>
                                              <!-- [D] 1. 태그 2줄까지 노출
                                                      2. 3줄 이상인 경우: 2줄 초과되는 태그들 숨김처리 + +개수 노출 -->
                                              <!-- [AU] data-tag-container 태그 컨테이너 -->
                                              <div class="option_group" data-tag-container>
                                                  <!-- [D] 1. 선택된 태그에 aria-pressed="true" 적용
                                                          2. 태그명 10글자 이상 말줄임 --->
                                                  <!-- [AU] data-tag-item 태그 아이콘 -->
                                                  <span class="option" data-tag-item>ABCDEFGH</span><span class="option" data-tag-item>ABCDEFGH</span><span class="option" data-tag-item>ABCDEFGH</span><span class="option" data-tag-item>ABCDEFGHAB...</span><span class="option" data-tag-item>ABCDEFGHAB...</span><span class="option btn_more" role="button" data-tag-more>+8</span><span class="option" data-tag-item>ABCDEFGHAB...</span><span class="option" data-tag-item>ABCDEFGHAB...</span><span class="option" data-tag-item>ABCDEFGHAB...</span><span class="option" data-tag-item>ABCDEFGHAB...</span>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="swiper-slide">
                                          <div class="card_item" style="height: 298px;" data-card-item>
                                              <a class="info_group" data-link-url="#">
                                                  <div class="job_area">
                                                      <div class="thumb_box">
                                                          <!-- 이미지 준비중 -->
                                                          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="108" height="81" alt="" class="thumb bg_nimg2" data-image-url="http://dev.ui.naver.com/tmp/?108x81_woman">
                                                      </div>
                                                      <div class="title_box">
                                                          <div class="job_info">
                                                              <span class="tag type_red">NEW</span><span class="tag type_red">締切0周前</span><span class="tag type_red">締切00日前</span><span class="tag type_red">今日締切</span>
                                                          </div>
                                                          <div class="title">
                                                              Cleaning of Common Are as at The Business Hotel in Ginza Cleaning of Common Are as at The Business Hotel in Ginza
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="info_area">
                                                      <div class="info_box">
                                                          <strong class="info_title">
                                                              所在地
                                                          </strong>
                                                          <div class="info_inner">
                                                              <div class="info">(1)Place of work</div>
                                                              <div class="info">(2)Place of work Place of work Place of work Place of work</div>
                                                              <div class="info">(3)Place of work Place of work Place of work Place of work</div>
                                                          </div>
                                                      </div>
                                                      <div class="info_box">
                                                          <strong class="info_title">
                                                              アクセス
                                                          </strong>
                                                          <div class="info_inner elss">
                                                              <span class="info">(1)Location</span><span class="info">(2)Location Location Location Location Location </span><span class="info">(3)Location</span>
                                                          </div>
                                                      </div>
                                                      <div class="info_box">
                                                          <strong class="info_title">
                                                              給与
                                                          </strong>
                                                          <div class="info_inner elss">
                                                              <span class="info">¥1,200 per hour ¥1,200 per hour ¥1,200 per hour</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </a>
                                              <div class="option_group" data-tag-container>
                                                  <span class="option" data-tag-item>ABCDEFGHAB...</span><span class="option" data-tag-item>ABCDEFGHAB...</span><span class="option" data-tag-item>ABCDEFGHAB...</span><span class="option" data-tag-item>ABCDEFGHAB...</span>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="swiper-slide">
                                          <div class="card_item" style="height: 298px;" data-card-item>
                                              <a class="info_group" data-link-url="#">
                                                  <div class="job_area">
                                                      <!-- 이미지 없는 케이스 -->
                                                      <div class="title_box">
                                                          <div class="job_info">
                                                              <span class="tag">ア</span><span class="tag">正</span><span class="tag">契</span><span class="tag">派</span><span class="tag">紹</span><span class="tag">職</span><span class="tag">委</span>
                                                          </div>
                                                          <div class="title">
                                                              Cleaning of Common Are as at The Business Hotel in Ginza Cleaning of Common Are as at The Business Hotel in Ginza
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="info_area">
                                                      <div class="info_box">
                                                          <strong class="info_title">
                                                              所在地
                                                          </strong>
                                                          <div class="info_inner">
                                                              <div class="info">(1)Place of work</div>
                                                              <div class="info">(2)Place of work Place of work Place of work Place of work</div>
                                                              <div class="info">(3)Place of work Place of work Place of work Place of work</div>
                                                          </div>
                                                      </div>
                                                      <div class="info_box">
                                                          <strong class="info_title">
                                                              アクセス
                                                          </strong>
                                                          <div class="info_inner elss">
                                                              <span class="info">(1)Location</span><span class="info">(2)Location Location Location Location Location </span><span class="info">(3)Location</span>
                                                          </div>
                                                      </div>
                                                      <div class="info_box">
                                                          <strong class="info_title">
                                                              給与
                                                          </strong>
                                                          <div class="info_inner elss">
                                                              <span class="info">¥1,200 per hour ¥1,200 per hour ¥1,200 per hour</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </a>
                                              <div class="option_group" data-tag-container>
                                                  <span class="option" data-tag-item>ABCDEFGHAB...</span><span class="option" data-tag-item>ABCDEFGHAB...</span><span class="option" data-tag-item>ABCDEFGHAB...</span><span class="option" data-tag-item>ABCDEFGHAB...</span><span class="option" data-tag-item>+8</span><span class="option" data-tag-item>ABCDEFGHAB...</span><span class="option" data-tag-item>+8</span><span class="option" data-tag-item>ABCDEFGHAB...</span><span class="option" data-tag-item>ABCDEFGHAB...</span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <!-- [AU] data-swiper-page 페이지 표시 컨테이너 -->
                                                          <div class="pagination_wrap" data-swiper-page>
                                  <!-- [D] 다음 카드로 플리킹 시, translateX(-9px씩 감소)
                                  이전 카드로 플리킹 시, translateX(+9px씩 증가)-->
                                  <!-- [AU] data-page-container bullet을 감싸는 container, data-small-class=small small 클래스, data-active-attr=aria-current 활성화 시 제어 할 어트리뷰트 명 -->
                                  <div class="pagination_area" style="transform: translateX(0);" data-page-container data-small-class="small" data-active-attr="aria-current">
                                      <!-- [D] 활성화 시 aria-current="true" 추가
                                      작은 크기일 경우, .small 클래스 추가 -->
                                      <!-- [AU] data-page-bullet 각 bullet에 입력 -->
                                      <span class="page_bullet small" aria-current="false" data-page-bullet>1</span><span class="page_bullet" aria-current="false" data-page-bullet>2</span><span class="page_bullet" aria-current="false" data-page-bullet>3</span><span class="page_bullet" aria-current="true" data-page-bullet>4</span><span class="page_bullet small" aria-current="false" data-page-bullet>5</span><span class="page_bullet" aria-current="false" data-page-bullet>6</span><span class="page_bullet" aria-current="false" data-page-bullet>7</span><span class="page_bullet" aria-current="false" data-page-bullet>8</span>
                                  </div>
                              </div>
                          </div>
                          <!-- 에러 -->
                          <!-- [AU] data-error-container 에러 컨테이너 -->
                          <div class="error_wrap" style="display: none;" data-error-container>
                              <div class="api_error_wrap">
                                  <p class="text">Temporary error.<br>Please try again later.</p>
                                  <!-- [AU] data-retry-btn 에러 시 retry 버튼 -->
                                  <a role="button" class="btn_retry" data-retry-btn><i class="spcmn api_ico_retry"></i>Retry</a>
                              </div>
                          </div>
                          <!-- 로딩 -->
                          <div class="loading_wrap" style="display: none;" data-loading-container>
                              <div class="v-center">
                                  <div class="loading"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  </div>
`

const Template = () => {
  return html
}

export const Baito = Template.bind({})
Baito.parameters = {
  preview: [
    {
      tab: 'HTML',
      template: html,
      language: 'html',
      copy: true,
    },
    {
      tab: 'JS',
      template: createButton.toString(),
      language: 'js',
      copy: true
    }
  ],
};
Baito.decorators = [
  withRenderCallback('#root span.tag.type_red', (element, context) => {
      console.log(element, context)
    }),
];