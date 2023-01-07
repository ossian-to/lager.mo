$('input[type="text"],input[type="password"]').focus(function(){
    $(this).prev().animate({'opacity':'1'},200)
  });
  $('input[type="text"],input[type="password"]').blur(function(){
    $(this).prev().animate({'opacity':'.5'},200)
  });

  $(function () {
    var _showTab = 0;
    $('.news-list-container').each(function () {
        var $tab = $(this);
        var $defaultLi = $('ul.tabs li', $tab).eq(_showTab).addClass('active');
        $($defaultLi.find('a').attr('href')).addClass('active').siblings().hide();
        $('ul.tabs li', $tab).click(function () {
            var $this = $(this),
                _clickTab = $this.find('a').attr('href');
            $this.addClass('active').siblings('.active').removeClass('active');
            $(_clickTab).stop(false, true).show().addClass('active').siblings().hide().removeClass('active');;
            return false;
        }).find('a').focus(function () {
            this.blur();
        });
    });
});
