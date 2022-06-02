$(document).ready(function () {
    $('.item.search.hamb').click(function (){
        $('.pusher').toggleClass('wsoffcanvasopener');
    });
    $(document).on("click", ".sixteen.wide.tablet.three.wide.computer.column.institucional", function (){
        $('.sixteen.wide.tablet.three.wide.computer.column.institucional .list.link').toggleClass('open');
    });
    $('._header .aside-box .searchMobile > .icon').click(function(){
        $((this)).toggleClass('cancel');
        $('.ui.searchMobile.mobilyHide').toggleClass('active')
    });
    $('._header .logo-box .searchNoMobile .icon').click(function(){
        $((this)).toggleClass('cancel');
        $('.ui.searchMobile.mobilyHide').toggleClass('active')
    });
    $('.ui.searchMobile.mobilyHide .blocoBusca > .blocoBuscaContainer i.cancel.icon').click(function(){
        $('.ui.searchMobile.mobilyHide').toggleClass('active')
    });
    $(document).on("click", ".descricaoProduto .title ", function () {
        $(this).toggleClass("active");
    });
    $(document).on("click", ".close-aval", function () {
        $('#avaliacoes').removeClass('active');    
    });
    $('button#btn-avaliacao').click(function() {
        $('#avaliacoes').addClass('active')
    });

    

    var getWidth = screen.width
    if (getWidth > 1055 ) {
        console.log('sim')
        $('.wsmenu-list>li:gt(2)').addClass('more');
        $('.wsmenu-list>li:first-child()').before('<li class="seeMore"><i class="allCategory"></i>Categorias<ul></ul></li>');
        $('.wsmenu-list > li').clone().appendTo('li.seeMore ul');
    } else {
       console.log('nao')
    };

     // paginas institucionais
        $('.container.institucional .content-institucional-mobile li.li-abouts.active').click(function () {
            $(this).toggleClass('invert');
        });
        $('li.li-abouts').hide();
        $(document).on("click", "li.li-abouts.active", function (){
            $('li.li-abouts').toggle();
            $('li.li-abouts').toggleClass('invert');
        });
    
  
    $(window).scroll(function(){
        if($(this).scrollTop()>1){
            $('.topbar').addClass("sticky");
              $('._header').addClass("sticky")
        }else{
            $('._header').removeClass("sticky");
        $('.topbar').removeClass("sticky")}
        }
    );
    $('.ui.mobile.only.titleMenu').click(function () {
        $('.pusher').toggleClass('wsoffcanvasopener');
    });
    if($(window).width() < 767) {
        $('a.section.active.nomeProduto').each(function () {
            $(this).text($(this).text().substring(0, 23) + "...");
        });
    };
  
    $('.backTop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    // var getWidth = screen.width
    // if (getWidth > 1055) {
    //     console.log('sim')
    //     $('.wsmenu-list>li:gt(3)').addClass('more');
    //     $('.wsmenu-list>li:first-child()').before('<li class="seeMore"><i class="allCategory"></i>Comprar por Categoría<ul></ul></li>');
    //     $('.wsmenu-list > li').clone().appendTo('li.seeMore ul');
    // } else {
    //     console.log('nao')
    // };
    var getWidth = screen.width
    if (getWidth <= 1185) {
        console.log('sim')
        $('.slideInfo').addClass('mobile');
    } else {
        console.log('nao')
    };
    $('.slideshowCategory').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 2,
        prevArrow: '<a class="slick-prev  slick-arrow"><i><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_dd_25_1629)"><rect x="8" y="4" width="40" height="40" rx="20" fill="white"/><path d="M33 14L23 24L33 34" stroke="#DEADCE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><filter id="filter0_dd_25_1629" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="4"/><feColorMatrix type="matrix" values="0 0 0 0 0.3375 0 0 0 0 0.4125 0 0 0 0 0.45 0 0 0 0.15 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_1629"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="0.5"/><feColorMatrix type="matrix" values="0 0 0 0 0.337255 0 0 0 0 0.413072 0 0 0 0 0.45098 0 0 0 0.15 0"/><feBlend mode="normal" in2="effect1_dropShadow_25_1629" result="effect2_dropShadow_25_1629"/><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_25_1629" result="shape"/></filter></defs></svg></i></a>',
        nextArrow: '<a class="slick-next  slick-arrow"><i><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_dd_25_1627)"><rect x="48" y="44" width="40" height="40" rx="20" transform="rotate(-180 48 44)" fill="white"/><path d="M23 34L33 24L23 14" stroke="#DEADCE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><filter id="filter0_dd_25_1627" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="4"/><feColorMatrix type="matrix" values="0 0 0 0 0.3375 0 0 0 0 0.4125 0 0 0 0 0.45 0 0 0 0.15 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_1627"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="0.5"/><feColorMatrix type="matrix" values="0 0 0 0 0.337255 0 0 0 0 0.413072 0 0 0 0 0.45098 0 0 0 0.15 0"/><feBlend mode="normal" in2="effect1_dropShadow_25_1627" result="effect2_dropShadow_25_1627"/><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_25_1627" result="shape"/></filter></defs></svg></i></a>',
        responsive: [         
            {
                breakpoint: 991,
                settings: {
                slidesToShow: 4,
                dots: true,
                arrows: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 4,
                dots: true,
                arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 3,
                dots: true,
                arrows: false,
                }
            }
          ]
    });
    $('button#viewgrid').click(function (){
        $('.newBread .column.right.aligned.right.floated').removeClass('cardlist');
    });
    $('button#viewlist').click(function (){
        $('.newBread .column.right.aligned.right.floated').addClass('cardlist');
    });
    $('.slideInfo.mobile').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    autoplay: true,
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 3,
                    autoplay: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    autoplay: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    autoplay: true,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                }
            }
          ]
    });
    $('.slideTopbar').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    autoplay: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    autoplay: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                }
            }
          ]
    });
    $('._header .menuheader .ui.menu li > .item').hover(
        function(){ $('.car-banners').addClass('hover') },
        function(){ $('.car-banners').removeClass('hover') }
    );
    $('.wsmenu-list li > .megamenu').hover(
        function(){ $('.car-banners').addClass('hover') },
        function(){ $('.car-banners').removeClass('hover') }
    );
   
    $('.slideCategoria').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        responsive: [            
            {
                breakpoint: 1055,
                settings: {
                slidesToShow: 4,
                autoplay: true,
                dots: true,
                }
            },   
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 3,
                autoplay: true,
                dots: true,
                }
            },         
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    autoplay: true,
                    dots: true,
                }
            }
          ]
    });

    $('.slideMarcas').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 7,
        responsive: [            
            {
                breakpoint: 1055,
                settings: {
                slidesToShow: 5,
                autoplay: false,
                dots: false,
                }
            },   
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 3,
                autoplay: false,
                dots: false,
                }
            },         
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    autoplay: false,
                    dots: false,
                }
            }
          ]
    });
    
    $('.slideshowCentral').slick({
        dots: false,
        arrows: true,
        centerMode: true,
        infinite: true,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<a class="slick-prev  slick-arrow"><i><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_dd_25_1629)"><rect x="8" y="4" width="40" height="40" rx="20" fill="white"/><path d="M33 14L23 24L33 34" stroke="#DEADCE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><filter id="filter0_dd_25_1629" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="4"/><feColorMatrix type="matrix" values="0 0 0 0 0.3375 0 0 0 0 0.4125 0 0 0 0 0.45 0 0 0 0.15 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_1629"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="0.5"/><feColorMatrix type="matrix" values="0 0 0 0 0.337255 0 0 0 0 0.413072 0 0 0 0 0.45098 0 0 0 0.15 0"/><feBlend mode="normal" in2="effect1_dropShadow_25_1629" result="effect2_dropShadow_25_1629"/><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_25_1629" result="shape"/></filter></defs></svg></i></a>',
        nextArrow: '<a class="slick-next  slick-arrow"><i><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_dd_25_1627)"><rect x="48" y="44" width="40" height="40" rx="20" transform="rotate(-180 48 44)" fill="white"/><path d="M23 34L33 24L23 14" stroke="#DEADCE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><filter id="filter0_dd_25_1627" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="4"/><feColorMatrix type="matrix" values="0 0 0 0 0.3375 0 0 0 0 0.4125 0 0 0 0 0.45 0 0 0 0.15 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_1627"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="0.5"/><feColorMatrix type="matrix" values="0 0 0 0 0.337255 0 0 0 0 0.413072 0 0 0 0 0.45098 0 0 0 0.15 0"/><feBlend mode="normal" in2="effect1_dropShadow_25_1627" result="effect2_dropShadow_25_1627"/><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_25_1627" result="shape"/></filter></defs></svg></i></a>',
        responsive: [         
            {
                breakpoint: 1300,
                settings: {
                slidesToShow: 3,
                dots: false,
                arrows: true,
                centerMode: false,
                }
            },
            {
                breakpoint: 1299,
                settings: {
                slidesToShow: 2,
                dots: false,
                arrows: true,
                centerMode: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 1,
                dots: false,
                arrows: true,
                centerMode: false,
                }
            }
          ]
    });


    //botao

// let myButtonGrid = document.querySelectorAll('.columnn.btn > button#viewgrid > i');


// myButtonGrid.forEach(function(key){
//     key.addEventListener('click', function(){
//         removeStylesGrid();
//         this.setAttribute('class', 'buttonClickedGrid');
//     });
// })




// function removeStylesGrid(){
//     for(let i = 0;i < myButtonGrid.length;i++){
//         document.querySelectorAll('.columnn.btn > button#viewgrid')[i].removeAttribute('class');
//     }
// }

});

