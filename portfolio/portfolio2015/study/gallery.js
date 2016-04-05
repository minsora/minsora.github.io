(function($){
  // 1.변수선언
  var gallery = document.getElementById('gallery'),
      $gallery = $('#gallery'),
      $img,
      $preloader = $('<img class="preloader" src="http://power4ce.cafe24.com/images/ajax-loader.gif">'),
      $loadMoreBtn = $('#loadMore'),
      $filter = $('#galleryFilter'),
      loadItemCount = 10,
      added = 0,
      allData = [],
      filteredData = [],
      popupImgLoad;

  // 2.initGallery 정의
  // 갤러리 초기화 - json 로드 완료시 실행됨.
  var initGallery = function(data){
    allData = data;
    filteredData = allData;
    allItems();
    $filter.on('change', 'input[type="radio"]', filterItems);
  },
  // 이미지 추가 - 최초 로딩시 / 더보기 클릭시 / 필터 적용시 실행
  addItems = function(filter){
    var elements = [],
        sliceData = filteredData.slice(added, added + loadItemCount),

        afterLoad = function(filter){
          added += sliceData.length;
          $loadMoreBtn.off('click').on('click', addItems);

          setTimeout(function(){
            if(added < filteredData.length) $loadMoreBtn.show();
            else $loadMoreBtn.hide();
            $preloader.detach();
            $gallery.find('li').removeClass('img-loading');
            $gallery.masonry('appended', elements);

            if(filter) $gallery.masonry();
          }, 300);
        },
        loadFailed = function(){
            console.log('load failed');
        };

        // 이미지리스트 동적 생성
        $preloader.appendTo('body');
        $.each(sliceData, function(i, item){
          var sizeType = Math.ceil(Math.random()*2);
          var itemHTML =
            '<li class="size-' + sizeType + '">' +
              '<a href="http://power4ce.cafe24.com/images/' + item.images.large + '">' +
                '<img class="img-loading" src="http://power4ce.cafe24.com/images/' + item.images.thumb + '" alt="' + item.title + '">' +
                '<span>' + item.title + '</span>' +
              '</a>' +
            '</li>';
        });
        $gallery.append(elements);

        if(imgLoad) imgLoad.off('done fail');

        $img = $gallery.find('img');
        imgLoad = imageLoaded($img[0]);
        imgLoad.on('done', function(){
          afterLoad(filter);
        })
        .on('fail', loadFailed);
  },
  // 필터링 기능 - 필터 적용시 실행
  filterItems = function(){

  },
  // 이미지 확대보기(팝업)
  lightBoxShow = function(e){
    var $t = $(this),
        href = $t.attr('href'),
        $popup = $('#popup'),
        $popupWrap = $('#popupWrap');
    e.preventDefault();

    $preloader.appendTo('body');
    $popup.hide().html('<img src=' + href + ' alt="">');
    $popupWrap.stop(true).fadeIn(300);
    if(popupImgLoad) popupImgLoad.off('done');
    popupImgLoad = imagesLoaded($popup.find('img')[0]);
    popupImgLoad.on('done', function(){
      $preloader.detach();
      $popup.fadeIn(300);
    }).on('fail', function(){
      $preloader.detach();
      $popupWrap.hide();
    });
  },
  lightBoxHide = function(){
    $(this).stop(true).fadeOut(300, function(){
      $('#popup').html('');
    });
  },
  // 마우스 이동방향을 얻어오는 함수. 0:top, 1:right, 2:bottom, 3:left
  getMouseDirection = function(e){

  },
  // 마우스 오버시 나타나는 박스의 이동방향을 결정하는 함수
  hoverDirection = function(e){

  }

  // 최초 실행 (초기화)
  $gallery.masonry({
    columnWidth:150,
    gutter:10,
    itemSelector: 'li'
  });

  // 3.getJASON 호출 -> 로딩 완료시 -> initGallery 실행 : 1.변수선언, 2.함수정의(afterLoad, onProgress, loadFailed)
  $.getJSON('imgdata.json', initGallery);
  // 콜백 등록
  $gallery.on('mouseover mouseleave', 'a', hoverDirection)
  .on('click', 'a',)

})(jQuery);