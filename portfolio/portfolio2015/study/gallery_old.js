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
    var elements = [];

    var
    // imagesLoaded Handlers
    afterLoad = function(){
      setTimeout(function(){
        $preloader.remove();
        $img.removeClass('img-loading');
        $gallery.masonry('appended', elements);
      }, 300);
    },
    onProgress = function(instance, image){
      var result = image.isLoaded ? 'loaded' : 'broken';
      console.log('image is' + result + 'for' + image.img.src);
    },
    loadFailed = function(){
      console.log('load failed');
    };

    // 이미지 리스트 동적 생성
    $.each(data, function(i, item){
      var sizeType = Math.ceil(Math.random()*2);
      var itemHTML =
        '<li class="size-' + sizeType + '">' +
          '<a href="http://power4ce.cafe24.com/images/' + item.images.large + '">' +
            '<img class="img-loading" src="http://power4ce.cafe24.com/images/' + item.images.thumb + '" alt="' + item.title + '">' +
            '<span>' + item.title + '</span>' +
          '</a>' +
        '</li>';
        elements.push($(itemHTML)[0]);
    });
    $gallery.append(elements);

    // 문서 삽입 이후에만 올바른 이미지 데이터 구성 가능.
    $img = $gallery.find('img');

    // imagesLoaded 적용.
    $img.imagesLoaded()
    .done(afterLoad)
    .progress(onProgress)
    .fail(loadFailed);
  };

  // 최초 실행 (초기화)
  $gallery.masonry({
    columnWidth:150,
    gutter:10,
    itemSelector: 'li'
  });

  // 3.getJASON 호출 -> 로딩 완료시 -> initGallery 실행 : 1.변수선언, 2.함수정의(afterLoad, onProgress, loadFailed)
  $.getJSON('imgdata.json', initGallery);
  // 4.preloader 등장
  $preloader.appendTo('body');

})(jQuery);